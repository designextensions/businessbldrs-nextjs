"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Plus, Edit, Trash2, MapPin, Users, Clock, DollarSign, Link as LinkIcon, Upload } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import type { Event } from "@/lib/db/schema";
import { useToast } from "@/hooks/use-toast";
import { LocalUploader } from "@/components/LocalUploader";

interface EventsManagementProps {
  events: Event[];
  eventsLoading: boolean;
  eventsError: any;
  queryClient: ReturnType<typeof useQueryClient>;
  toast: ReturnType<typeof useToast>["toast"];
}

export default function EventsManagement({
  events,
  eventsLoading,
  eventsError,
  queryClient,
  toast,
}: EventsManagementProps) {
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [eventForm, setEventForm] = useState({
    title: '',
    description: '',
    shortDescription: '',
    eventType: 'virtual' as 'virtual' | 'in-person' | 'hybrid',
    location: '',
    virtualLink: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    timezone: 'EST',
    image: '',
    featured: false,
    isActive: true,
    registrationUrl: '',
    price: '',
    tags: [] as string[],
    maxAttendees: '',
    organizer: ''
  });

  const typedEvents = events as Event[];

  // Create event mutation
  const createEventMutation = useMutation({
    mutationFn: async (data: any) => {
      const result = await apiRequest('POST', `/api/events`, data);
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/events"] });
      setIsAddingEvent(false);
      resetForm();
      toast({
        title: "Success",
        description: "Event created successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `Failed to create event: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  // Update event mutation
  const updateEventMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: any }) => {
      const result = await apiRequest('PUT', `/api/events/${id}`, data);
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/events"] });
      setEditingEvent(null);
      resetForm();
      toast({
        title: "Success",
        description: "Event updated successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `Failed to update event: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  // Delete event mutation
  const deleteEventMutation = useMutation({
    mutationFn: async (eventId: number) => {
      const result = await apiRequest('DELETE', `/api/events/${eventId}`);
      return result;
    },
    onSuccess: async (data, eventId) => {
      // Clear server cache first
      try {
        await apiRequest('POST', '/api/cache/clear');
      } catch (error) {
        console.warn('Failed to clear server cache:', error);
      }

      // Add a small delay to ensure server cache is cleared
      await new Promise(resolve => setTimeout(resolve, 100));

      // Clear all client-side cache and refetch
      queryClient.clear(); // Clear all cache
      await queryClient.invalidateQueries({ queryKey: ["/api/events"] });
      await queryClient.refetchQueries({ queryKey: ["/api/events"] });

      toast({
        title: "Success",
        description: "Event deleted successfully",
      });
    },
    onError: (error: Error, eventId) => {
      toast({
        title: "Error",
        description: `Failed to delete event: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  const formatDate = (dateString: string | Date | null | undefined): string => {
    if (!dateString) return 'N/A';
    try {
      const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
      return date.toLocaleDateString();
    } catch {
      return 'Invalid Date';
    }
  };

  const resetForm = () => {
    setEventForm({
      title: '',
      description: '',
      shortDescription: '',
      eventType: 'virtual',
      location: '',
      virtualLink: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      timezone: 'EST',
      image: '',
      featured: false,
      isActive: true,
      registrationUrl: '',
      price: '',
      tags: [],
      maxAttendees: '',
      organizer: ''
    });
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setEventForm({
      title: event.title,
      description: event.description || '',
      shortDescription: event.shortDescription || '',
      eventType: event.eventType as 'virtual' | 'in-person' | 'hybrid',
      location: event.location || '',
      virtualLink: event.virtualLink || '',
      startDate: event.startDate ? new Date(event.startDate).toISOString().split('T')[0] : '',
      endDate: event.endDate ? new Date(event.endDate).toISOString().split('T')[0] : '',
      startTime: event.startTime || '',
      endTime: event.endTime || '',
      timezone: event.timezone || 'EST',
      image: event.image || '',
      featured: event.featured || false,
      isActive: event.isActive !== false,
      registrationUrl: event.registrationUrl || '',
      price: event.price || '',
      tags: event.tags || [],
      maxAttendees: event.maxAttendees?.toString() || '',
      organizer: event.organizer || ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      ...eventForm,
      maxAttendees: eventForm.maxAttendees ? parseInt(eventForm.maxAttendees) : null,
      tags: Array.isArray(eventForm.tags) ? eventForm.tags : [],
      // Convert date strings to Date objects (Drizzle expects Date objects, not ISO strings)
      startDate: eventForm.startDate ? new Date(eventForm.startDate) : null,
      endDate: eventForm.endDate ? new Date(eventForm.endDate) : null,
    };

    console.log('Submitting event data:', formData);

    if (editingEvent) {
      updateEventMutation.mutate({ id: editingEvent.id, data: formData });
    } else {
      createEventMutation.mutate(formData);
    }
  };

  const handleCancel = () => {
    setIsAddingEvent(false);
    setEditingEvent(null);
    resetForm();
  };

  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Events Management
        </CardTitle>
        <CardDescription className="text-gray-400">
          Manage upcoming events, workshops, and webinars
        </CardDescription>
      </CardHeader>
      <CardContent>
        {eventsLoading ? (
          <div className="text-center py-8">
            <p className="text-gray-400">Loading events...</p>
          </div>
        ) : eventsError ? (
          <div className="text-center py-8">
            <p className="text-red-400">Error loading events. Please try again.</p>
          </div>
        ) : typedEvents.length === 0 ? (
          <div className="text-center py-8">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-600" />
            <p className="text-gray-400 mb-4">No events scheduled yet</p>
            <Button
              onClick={() => setIsAddingEvent(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add First Event
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">
                {typedEvents.length} Event{typedEvents.length !== 1 ? 's' : ''}
              </h3>
              <Button
                onClick={() => {
                  setIsAddingEvent(true);
                  resetForm();
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Event
              </Button>
            </div>

            {typedEvents.map((event) => (
              <div key={event.id} className="p-4 bg-gray-800 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-white">{event.title}</h3>
                      {event.featured && (
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                          Featured
                        </Badge>
                      )}
                      <Badge
                        className={
                          event.eventType === 'virtual' ? 'bg-blue-500/20 text-blue-400' :
                          event.eventType === 'in-person' ? 'bg-green-500/20 text-green-400' :
                          'bg-purple-500/20 text-purple-400'
                        }
                      >
                        {event.eventType}
                      </Badge>
                      {!event.isActive && (
                        <Badge className="bg-gray-500/20 text-gray-400">
                          Inactive
                        </Badge>
                      )}
                    </div>

                    {event.shortDescription && (
                      <p className="text-sm text-gray-300 mb-3">{event.shortDescription}</p>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.startDate)}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.startTime} - {event.endTime}</span>
                      </div>

                      {event.eventType !== 'virtual' && event.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      )}

                      {event.eventType !== 'in-person' && event.virtualLink && (
                        <div className="flex items-center gap-2">
                          <LinkIcon className="w-4 h-4" />
                          <a
                            href={event.virtualLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 truncate"
                          >
                            Virtual Link
                          </a>
                        </div>
                      )}

                      {event.price && (
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <span>{event.price}</span>
                        </div>
                      )}

                      {event.maxAttendees && (
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{event.currentAttendees || 0}/{event.maxAttendees}</span>
                        </div>
                      )}
                    </div>

                    {event.tags && event.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {event.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-gray-600 text-gray-300"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(event)}
                      className="border-gray-600 text-gray-300 hover:bg-gray-800"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete "${event.title}"? This action cannot be undone.`)) {
                          deleteEventMutation.mutate(event.id);
                        }
                      }}
                      className="border-red-600 text-red-400 hover:bg-red-900/20"
                      disabled={deleteEventMutation.isPending}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Event Form Modal */}
        {(isAddingEvent || editingEvent) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-lg border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <form onSubmit={handleSubmit}>
                <div className="p-6 border-b border-gray-700">
                  <h2 className="text-xl font-semibold text-white">
                    {editingEvent ? 'Edit Event' : 'Add New Event'}
                  </h2>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Event Title *
                      </label>
                      <Input
                        value={eventForm.title}
                        onChange={(e) => setEventForm(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Enter event title"
                        className="bg-gray-800 border-gray-600 text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Event Type
                      </label>
                      <Select
                        value={eventForm.eventType}
                        onValueChange={(value) => setEventForm(prev => ({ ...prev, eventType: value as 'virtual' | 'in-person' | 'hybrid' }))}
                      >
                        <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="virtual">Virtual</SelectItem>
                          <SelectItem value="in-person">In-Person</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Short Description
                    </label>
                    <Input
                      value={eventForm.shortDescription}
                      onChange={(e) => setEventForm(prev => ({ ...prev, shortDescription: e.target.value }))}
                      placeholder="Brief description for listings"
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Description
                    </label>
                    <Textarea
                      value={eventForm.description}
                      onChange={(e) => setEventForm(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Detailed event description"
                      rows={4}
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Start Date
                      </label>
                      <Input
                        type="date"
                        value={eventForm.startDate}
                        onChange={(e) => setEventForm(prev => ({ ...prev, startDate: e.target.value }))}
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        End Date
                      </label>
                      <Input
                        type="date"
                        value={eventForm.endDate}
                        onChange={(e) => setEventForm(prev => ({ ...prev, endDate: e.target.value }))}
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Start Time
                      </label>
                      <Input
                        type="time"
                        value={eventForm.startTime}
                        onChange={(e) => setEventForm(prev => ({ ...prev, startTime: e.target.value }))}
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        End Time
                      </label>
                      <Input
                        type="time"
                        value={eventForm.endTime}
                        onChange={(e) => setEventForm(prev => ({ ...prev, endTime: e.target.value }))}
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Timezone
                      </label>
                      <Select
                        value={eventForm.timezone}
                        onValueChange={(value) => setEventForm(prev => ({ ...prev, timezone: value }))}
                      >
                        <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="EST">EST</SelectItem>
                          <SelectItem value="CST">CST</SelectItem>
                          <SelectItem value="MST">MST</SelectItem>
                          <SelectItem value="PST">PST</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Location
                      </label>
                      <Input
                        value={eventForm.location}
                        onChange={(e) => setEventForm(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="Physical location (if applicable)"
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Virtual Link
                      </label>
                      <Input
                        value={eventForm.virtualLink}
                        onChange={(e) => setEventForm(prev => ({ ...prev, virtualLink: e.target.value }))}
                        placeholder="Zoom/meeting link"
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Registration URL
                      </label>
                      <Input
                        value={eventForm.registrationUrl}
                        onChange={(e) => setEventForm(prev => ({ ...prev, registrationUrl: e.target.value }))}
                        placeholder="Registration/ticket link"
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Price
                      </label>
                      <Input
                        value={eventForm.price}
                        onChange={(e) => setEventForm(prev => ({ ...prev, price: e.target.value }))}
                        placeholder="Free, $50, etc."
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Max Attendees
                      </label>
                      <Input
                        type="number"
                        value={eventForm.maxAttendees}
                        onChange={(e) => setEventForm(prev => ({ ...prev, maxAttendees: e.target.value }))}
                        placeholder="Maximum capacity"
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Organizer
                      </label>
                      <Input
                        value={eventForm.organizer}
                        onChange={(e) => setEventForm(prev => ({ ...prev, organizer: e.target.value }))}
                        placeholder="Event organizer name"
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Event Image
                    </label>
                    <div className="space-y-2">
                      {eventForm.image && (
                        <div className="relative">
                          <img
                            src={eventForm.image}
                            alt="Event preview"
                            className="w-full max-w-xs h-32 object-cover rounded border border-gray-600"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => setEventForm(prev => ({ ...prev, image: '' }))}
                            className="absolute top-1 right-1"
                          >
                            Remove
                          </Button>
                        </div>
                      )}
                      <LocalUploader
                        maxSize={5242880}
                        onUploadComplete={(filePath) => {
                          setEventForm(prev => ({ ...prev, image: filePath }));
                          toast({
                            title: "Success",
                            description: "Image uploaded successfully",
                          });
                        }}
                        onError={(error) => {
                          toast({
                            title: "Error",
                            description: error,
                            variant: "destructive",
                          });
                        }}
                        buttonClassName="w-full bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
                      >
                        {eventForm.image ? 'Change Image' : 'Upload Image'}
                      </LocalUploader>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 text-sm text-gray-300">
                      <Checkbox
                        checked={eventForm.featured}
                        onCheckedChange={(checked) => setEventForm(prev => ({ ...prev, featured: !!checked }))}
                      />
                      Featured Event
                    </label>

                    <label className="flex items-center gap-2 text-sm text-gray-300">
                      <Checkbox
                        checked={eventForm.isActive}
                        onCheckedChange={(checked) => setEventForm(prev => ({ ...prev, isActive: !!checked }))}
                      />
                      Active
                    </label>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-700 flex justify-end gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancel}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={createEventMutation.isPending || updateEventMutation.isPending}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  >
                    {editingEvent ? 'Update Event' : 'Create Event'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
