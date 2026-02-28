"use client";
import SEOHead from "@/components/ui/seo-head";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useAuth } from "@/hooks/useAuth";
import { isUnauthorizedError } from "@/lib/authUtils";
import { AdminAuth } from "@/components/admin/AdminAuth";
import { Menu } from "lucide-react";
import {
  Upload, FileText, AlertCircle, CheckCircle, Trash2,
  Users, Video, Download, FolderOpen, Mail, Settings,
  Plus, Edit, Eye, ExternalLink, LogIn, Shield, Play,
  Calendar, MapPin, Clock, Star, BarChart, ArrowUpDown,
  ChevronUp, ChevronDown, Save, X, Check, XCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import Navigation from "@/components/ui/navigation";
import type { 
  BlogArticle, 
  Contact, 
  MarketingVideo, 
  DownloadableResource, 
  PortfolioItem,
  TeamMember,
  Event,
  InsertEvent,
  AccessTool,
  InsertAccessTool
} from "@/lib/db/schema";
import AdminLayout from '@/components/admin/AdminLayout';
import ResourceManagement from '@/components/admin/ResourceManagement';
import EventsManagement from '@/components/admin/EventsManagement';
import LoadingState from '@/components/admin/LoadingState';
import ErrorState from '@/components/admin/ErrorState';
import EmptyState from '@/components/admin/EmptyState';
import FormsManagement from '@/components/admin/FormsManagement';
import ArticlesTable from '@/components/admin/ArticlesTable';
import ArticlesImport from '@/components/admin/ArticlesImport';
import TeamManagement from '@/components/admin/TeamManagement';
import PortfolioManagement from '@/components/admin/PortfolioManagement';
import MediaManagement from '@/components/admin/MediaManagement';

// HubSpot Test Section Component
function HubSpotTestSection({ queryClient, toast }: { queryClient: any; toast: any }) {
  const [testResults, setTestResults] = useState<any>(null);
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [isTestingContact, setIsTestingContact] = useState(false);

  // Test HubSpot connection
  const testConnection = async () => {
    setIsTestingConnection(true);
    try {
      const response = await apiRequest('GET', '/api/admin/hubspot/test');
      setTestResults({ ...testResults, connection: response });
      toast({
        title: response.connected ? "Success" : "Warning",
        description: response.message,
        variant: response.connected ? "default" : "destructive"
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: `Connection test failed: ${error.message}`,
        variant: "destructive"
      });
    } finally {
      setIsTestingConnection(false);
    }
  };

  // Test contact creation
  const testContactCreation = async () => {
    setIsTestingContact(true);
    try {
      const response = await apiRequest('POST', '/api/admin/hubspot/test-contact');
      setTestResults({ ...testResults, contact: response });
      toast({
        title: "Success",
        description: response.message || "Test contact created successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: `Contact test failed: ${error.message}`,
        variant: "destructive"
      });
    } finally {
      setIsTestingContact(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Connection Status */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Connection Test</h3>
          <p className="text-stone-400 text-sm">
            Verify that HubSpot API credentials are working correctly
          </p>
          <Button 
            onClick={testConnection}
            disabled={isTestingConnection}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isTestingConnection ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2 animate-spin" />
                Testing Connection...
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Test Connection
              </>
            )}
          </Button>
          
          {testResults?.connection && (
            <div className={`p-4 rounded-lg border ${
              testResults.connection.connected 
                ? 'bg-green-900/30 border-green-500/50' 
                : 'bg-red-900/30 border-red-500/50'
            }`}>
              <div className="flex items-center gap-2">
                {testResults.connection.connected ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
                <span className={testResults.connection.connected ? 'text-green-400' : 'text-red-400'}>
                  {testResults.connection.message}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact Creation Test</h3>
          <p className="text-stone-400 text-sm">
            Test creating a contact in your HubSpot portal
          </p>
          <Button 
            onClick={testContactCreation}
            disabled={isTestingContact}
            className="bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            {isTestingContact ? (
              <>
                <Users className="w-4 h-4 mr-2 animate-spin" />
                Creating Test Contact...
              </>
            ) : (
              <>
                <Users className="w-4 h-4 mr-2" />
                Create Test Contact
              </>
            )}
          </Button>

          {testResults?.contact && (
            <div className="p-4 rounded-lg border bg-green-900/30 border-green-500/50">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">Test Contact Created</span>
              </div>
              {testResults.contact.hubspotResult?.id && (
                <p className="text-stone-300 text-sm">
                  HubSpot Contact ID: {testResults.contact.hubspotResult.id}
                </p>
              )}
              <p className="text-stone-400 text-xs mt-1">
                Email: {testResults.contact.testContact?.email}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Integration Status */}
      <div className="border-t border-charcoal-700 pt-6">
        <h3 className="text-lg font-semibold text-white mb-4">Integration Status</h3>
        <div className="grid gap-4">
          <div className="flex items-center justify-between p-4 bg-charcoal-800 rounded-lg">
            <div>
              <p className="font-medium text-white">Quote Request Form</p>
              <p className="text-stone-400 text-sm">
                Form submissions are automatically sent to HubSpot
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-400">Active</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-charcoal-800 rounded-lg">
            <div>
              <p className="font-medium text-white">Contact Management</p>
              <p className="text-stone-400 text-sm">
                New contacts create leads, existing contacts are updated
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-400">Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="border-t border-charcoal-700 pt-6">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
        <p className="text-stone-400 text-sm mb-4">
          Check your HubSpot contacts dashboard to see form submissions appearing as new leads.
        </p>
        <Button 
          className="bg-orange-600 hover:bg-orange-700 text-white"
          onClick={() => window.open('https://app.hubspot.com/contacts/', '_blank')}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Open HubSpot Contacts
        </Button>
      </div>
    </div>
  );
}

// Events Management Component
interface EventsManagementSectionProps {
  events: Event[];
  eventsLoading: boolean;
  eventsError: any;
  queryClient: any;
  toast: any;
}

function EventsManagementSection({ 
  events, 
  eventsLoading, 
  eventsError, 
  queryClient, 
  toast 
}: EventsManagementSectionProps) {
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [isAddingResource, setIsAddingResource] = useState(false);
  const [editingResource, setEditingResource] = useState<any>(null);
  const [resourceForm, setResourceForm] = useState({
    title: '',
    description: '',
    type: '',
    size: '',
    category: '',
    downloadUrl: '',
    icon: '',
    fileUrl: '',
    fileType: 'pdf' as 'pdf' | 'docx' | 'link',
    featured: false,
    requiresEmail: false,
    isActive: true
  });
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

  // Add event mutation
  const addEventMutation = useMutation({
    mutationFn: async (eventData: any) => {
      return await apiRequest('POST', '/api/events', eventData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/events"] });
      setIsAddingEvent(false);
      resetForm();
      toast({
        title: "Success",
        description: "Event added successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Update event mutation
  const updateEventMutation = useMutation({
    mutationFn: async (eventData: any) => {
      return await apiRequest('PUT', `/api/events/${editingEvent?.id}`, eventData);
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
        description: error.message,
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
    onSuccess: (data, eventId) => {
      queryClient.invalidateQueries({ queryKey: ["/api/events"] });
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

  // Downloadable Resources mutations
  const createResourceMutation = useMutation({
    mutationFn: async (resourceData: typeof resourceForm) => {
      return await apiRequest('POST', '/api/downloadable-resources', resourceData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/downloadable-resources"] });
      setIsAddingResource(false);
      setResourceForm({
        title: '',
        description: '',
        type: '',
        size: '',
        category: '',
        downloadUrl: '',
        icon: '',
        fileUrl: '',
        fileType: 'pdf',
        featured: false,
        requiresEmail: false,
        isActive: true
      });
      toast({
        title: "Success",
        description: "Downloadable resource added successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updateResourceMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: typeof resourceForm }) => {
      return await apiRequest('PUT', `/api/downloadable-resources/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/downloadable-resources"] });
      setEditingResource(null);
      setResourceForm({
        title: '',
        description: '',
        type: '',
        size: '',
        category: '',
        downloadUrl: '',
        icon: '',
        fileUrl: '',
        fileType: 'pdf',
        featured: false,
        requiresEmail: false,
        isActive: true
      });
      toast({
        title: "Success",
        description: "Downloadable resource updated successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });



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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const eventData = {
      ...eventForm,
      startDate: eventForm.startDate ? new Date(eventForm.startDate) : null,
      endDate: eventForm.endDate ? new Date(eventForm.endDate) : null,
      maxAttendees: eventForm.maxAttendees ? parseInt(eventForm.maxAttendees) : null,
      tags: eventForm.tags.length > 0 ? eventForm.tags : null
    };

    if (editingEvent) {
      updateEventMutation.mutate(eventData);
    } else {
      addEventMutation.mutate(eventData);
    }
  };

  const formatEventDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Add Event Button */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-white">Events Management</h3>
        <Button
          onClick={() => setIsAddingEvent(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-black"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      {/* Add/Edit Event Form */}
      {(isAddingEvent || editingEvent) && (
        <Card className="bg-charcoal-900 border-charcoal-700">
          <CardHeader>
            <CardTitle className="text-white">
              {editingEvent ? 'Edit Event' : 'Add New Event'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">
                    Event Title *
                  </label>
                  <Input
                    value={eventForm.title}
                    onChange={(e) => setEventForm(prev => ({ ...prev, title: e.target.value }))}
                    className="bg-charcoal-800 border-charcoal-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">
                    Event Type *
                  </label>
                  <select
                    value={eventForm.eventType}
                    onChange={(e) => setEventForm(prev => ({ ...prev, eventType: e.target.value as any }))}
                    className="w-full px-3 py-2 bg-charcoal-800 border border-charcoal-700 text-white rounded-md"
                    required
                  >
                    <option value="virtual">Virtual</option>
                    <option value="in-person">In-Person</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">
                  Short Description
                </label>
                <Input
                  value={eventForm.shortDescription}
                  onChange={(e) => setEventForm(prev => ({ ...prev, shortDescription: e.target.value }))}
                  className="bg-charcoal-800 border-charcoal-700 text-white"
                  placeholder="Brief description for event cards"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">
                    Start Date *
                  </label>
                  <Input
                    type="date"
                    value={eventForm.startDate}
                    onChange={(e) => setEventForm(prev => ({ ...prev, startDate: e.target.value }))}
                    className="bg-charcoal-800 border-charcoal-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">
                    End Date
                  </label>
                  <Input
                    type="date"
                    value={eventForm.endDate}
                    onChange={(e) => setEventForm(prev => ({ ...prev, endDate: e.target.value }))}
                    className="bg-charcoal-800 border-charcoal-700 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">
                    Start Time
                  </label>
                  <Input
                    value={eventForm.startTime}
                    onChange={(e) => setEventForm(prev => ({ ...prev, startTime: e.target.value }))}
                    className="bg-charcoal-800 border-charcoal-700 text-white"
                    placeholder="9:00 AM"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">
                    End Time
                  </label>
                  <Input
                    value={eventForm.endTime}
                    onChange={(e) => setEventForm(prev => ({ ...prev, endTime: e.target.value }))}
                    className="bg-charcoal-800 border-charcoal-700 text-white"
                    placeholder="5:00 PM"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">
                    Timezone
                  </label>
                  <Input
                    value={eventForm.timezone}
                    onChange={(e) => setEventForm(prev => ({ ...prev, timezone: e.target.value }))}
                    className="bg-charcoal-800 border-charcoal-700 text-white"
                    placeholder="EST"
                  />
                </div>
              </div>

              {eventForm.eventType !== 'virtual' && (
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">
                    Location
                  </label>
                  <Input
                    value={eventForm.location}
                    onChange={(e) => setEventForm(prev => ({ ...prev, location: e.target.value }))}
                    className="bg-charcoal-800 border-charcoal-700 text-white"
                    placeholder="123 Main St, City, State"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">
                    Registration URL
                  </label>
                  <Input
                    value={eventForm.registrationUrl}
                    onChange={(e) => setEventForm(prev => ({ ...prev, registrationUrl: e.target.value }))}
                    className="bg-charcoal-800 border-charcoal-700 text-white"
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">
                    Price
                  </label>
                  <Input
                    value={eventForm.price}
                    onChange={(e) => setEventForm(prev => ({ ...prev, price: e.target.value }))}
                    className="bg-charcoal-800 border-charcoal-700 text-white"
                    placeholder="Free or $99"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">
                  Event Image URL
                </label>
                <Input
                  value={eventForm.image}
                  onChange={(e) => setEventForm(prev => ({ ...prev, image: e.target.value }))}
                  className="bg-charcoal-800 border-charcoal-700 text-white"
                  placeholder="https://..."
                />
              </div>

              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={eventForm.featured}
                    onChange={(e) => setEventForm(prev => ({ ...prev, featured: e.target.checked }))}
                    className="rounded"
                  />
                  <span className="text-sm text-stone-300">Featured Event</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={eventForm.isActive}
                    onChange={(e) => setEventForm(prev => ({ ...prev, isActive: e.target.checked }))}
                    className="rounded"
                  />
                  <span className="text-sm text-stone-300">Active</span>
                </label>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black"
                  disabled={addEventMutation.isPending || updateEventMutation.isPending}
                >
                  {editingEvent ? 'Update Event' : 'Add Event'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsAddingEvent(false);
                    setEditingEvent(null);
                    resetForm();
                  }}
                  className="border-charcoal-600 text-white hover:bg-charcoal-700 hover:border-charcoal-600"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Events List */}
      {eventsLoading ? (
        <div className="grid gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-charcoal-900 border border-charcoal-700 rounded-lg p-6 animate-pulse">
              <div className="h-6 bg-charcoal-700 rounded mb-4 w-3/4"></div>
              <div className="h-4 bg-charcoal-700 rounded mb-2 w-1/2"></div>
              <div className="h-4 bg-charcoal-700 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-4">
          {events.map((event) => (
            <Card key={event.id} className="bg-charcoal-900 border-charcoal-700">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-semibold text-white">{event.title}</h4>
                      {event.featured && (
                        <span className="flex items-center gap-1 bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">
                          <Star className="w-3 h-3 fill-current" />
                          Featured
                        </span>
                      )}
                      {!event.isActive && (
                        <span className="bg-charcoal-600 text-stone-300 px-2 py-1 rounded text-xs">
                          Inactive
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-2 text-sm text-stone-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {formatEventDate(event.startDate.toString())} 
                          {event.endDate && ` - ${formatEventDate(event.endDate.toString())}`}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {event.eventType === 'virtual' ? (
                          <Video className="w-4 h-4" />
                        ) : (
                          <MapPin className="w-4 h-4" />
                        )}
                        <span className="capitalize">
                          {event.eventType === 'virtual' 
                            ? 'Virtual Event' 
                            : event.location || event.eventType
                          }
                        </span>
                      </div>
                      
                      {event.startTime && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>
                            {event.startTime}
                            {event.endTime && ` - ${event.endTime}`}
                            {event.timezone && ` ${event.timezone}`}
                          </span>
                        </div>
                      )}
                      
                      {event.price && (
                        <div className="text-yellow-400 font-semibold">
                          {event.price}
                        </div>
                      )}
                    </div>

                    {event.shortDescription && (
                      <p className="text-stone-400 mt-3 text-sm">{event.shortDescription}</p>
                    )}
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <Button
                      size="sm"
                      onClick={() => handleEdit(event)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-500 hover:border-yellow-600"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete "${event.title}"? This action cannot be undone.`)) {

                          deleteEventMutation.mutate(event.id);
                        }
                      }}
                      className="bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700"
                      disabled={deleteEventMutation.isPending}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {events.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-stone-600" />
              <h3 className="text-xl font-semibold text-stone-400 mb-2">No Events</h3>
              <p className="text-stone-500 mb-4">Start by adding your first event</p>
              <Button
                onClick={() => setIsAddingEvent(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Event
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Video Management Component
interface VideoManagementSectionProps {
  marketingVideos: MarketingVideo[];
  videosLoading: boolean;
  videosError: any;
  queryClient: any;
  toast: any;
}

function VideoManagementSection({ 
  marketingVideos, 
  videosLoading, 
  videosError, 
  queryClient, 
  toast 
}: VideoManagementSectionProps) {
  const [isAddingVideo, setIsAddingVideo] = useState(false);
  const [editingVideo, setEditingVideo] = useState<MarketingVideo | null>(null);
  const [videoForm, setVideoForm] = useState({
    title: '',
    description: '',
    videoUrl: '',
    category: '',
    duration: '',
    thumbnail: ''
  });

  // Extract video ID and platform from URL
  const extractVideoInfo = (url: string) => {
    const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const vimeoRegex = /(?:vimeo\.com\/)([0-9]+)/;
    
    const youtubeMatch = url.match(youtubeRegex);
    const vimeoMatch = url.match(vimeoRegex);
    
    if (youtubeMatch) {
      const videoId = youtubeMatch[1];
      return {
        platform: 'youtube',
        videoId,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      };
    } else if (vimeoMatch) {
      const videoId = vimeoMatch[1];
      return {
        platform: 'vimeo',
        videoId,
        embedUrl: `https://player.vimeo.com/video/${videoId}`,
        thumbnail: `https://vumbnail.com/${videoId}.jpg`
      };
    }
    return null;
  };

  // Auto-fill thumbnail when URL changes
  const handleUrlChange = (url: string) => {
    setVideoForm(prev => ({ ...prev, videoUrl: url }));
    const videoInfo = extractVideoInfo(url);
    if (videoInfo) {
      setVideoForm(prev => ({ 
        ...prev, 
        thumbnail: videoInfo.thumbnail,
        videoUrl: videoInfo.embedUrl
      }));
    }
  };

  // Add video mutation
  const addVideoMutation = useMutation({
    mutationFn: async (videoData: any) => {
      return await apiRequest('POST', '/api/marketing-videos', videoData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/marketing-videos"] });
      setIsAddingVideo(false);
      setVideoForm({
        title: '',
        description: '',
        videoUrl: '',
        category: '',
        duration: '',
        thumbnail: ''
      });
      toast({
        title: "Success",
        description: "Video added successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Delete video mutation
  const deleteVideoMutation = useMutation({
    mutationFn: async (videoId: number) => {
      return await apiRequest('DELETE', `/api/marketing-videos/${videoId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/marketing-videos"] });
      toast({
        title: "Success",
        description: "Video deleted successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoForm.title || !videoForm.videoUrl) {
      toast({
        title: "Error",
        description: "Title and video URL are required",
        variant: "destructive",
      });
      return;
    }
    addVideoMutation.mutate(videoForm);
  };

  const handleDelete = (videoId: number) => {
    if (confirm('Are you sure you want to delete this video?')) {
      deleteVideoMutation.mutate(videoId);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-charcoal-900 border-charcoal-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center gap-2">
                <Video className="w-5 h-5" />
                Marketing Videos
              </CardTitle>
              <CardDescription className="text-stone-400">
                Manage videos that appear on the resources page
              </CardDescription>
            </div>
            <Button
              onClick={() => setIsAddingVideo(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Video
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Add Video Form */}
          {isAddingVideo && (
            <div className="mb-6 p-6 bg-charcoal-800 rounded-lg border border-charcoal-700">
              <h3 className="text-lg font-semibold text-white mb-4">Add New Video</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-1">
                      Title *
                    </label>
                    <Input
                      value={videoForm.title}
                      onChange={(e) => setVideoForm(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter video title"
                      className="bg-charcoal-700 border-charcoal-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-1">
                      Category
                    </label>
                    <Input
                      value={videoForm.category}
                      onChange={(e) => setVideoForm(prev => ({ ...prev, category: e.target.value }))}
                      placeholder="e.g., Marketing Strategy, SEO, Branding"
                      className="bg-charcoal-700 border-charcoal-700 text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1">
                    YouTube or Vimeo URL *
                  </label>
                  <Input
                    value={videoForm.videoUrl === videoForm.thumbnail ? '' : videoForm.videoUrl}
                    onChange={(e) => handleUrlChange(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=... or https://vimeo.com/..."
                    className="bg-charcoal-700 border-charcoal-700 text-white"
                    required
                  />
                  <p className="text-xs text-stone-400 mt-1">
                    Paste a YouTube or Vimeo URL and we'll automatically extract the embed URL and thumbnail
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-1">
                      Duration
                    </label>
                    <Input
                      value={videoForm.duration}
                      onChange={(e) => setVideoForm(prev => ({ ...prev, duration: e.target.value }))}
                      placeholder="e.g., 5:30"
                      className="bg-charcoal-700 border-charcoal-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-1">
                      Thumbnail URL
                    </label>
                    <Input
                      value={videoForm.thumbnail}
                      onChange={(e) => setVideoForm(prev => ({ ...prev, thumbnail: e.target.value }))}
                      placeholder="Auto-filled from video URL"
                      className="bg-charcoal-700 border-charcoal-700 text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1">
                    Description
                  </label>
                  <textarea
                    value={videoForm.description}
                    onChange={(e) => setVideoForm(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Brief description of the video content"
                    className="w-full bg-charcoal-700 border-charcoal-700 text-white rounded-md px-3 py-2 min-h-[80px]"
                    rows={3}
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    type="submit"
                    disabled={addVideoMutation.isPending}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black"
                  >
                    {addVideoMutation.isPending ? 'Adding...' : 'Add Video'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsAddingVideo(false)}
                    className="border-charcoal-600 text-white hover:bg-charcoal-700 hover:border-charcoal-600"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Videos List */}
          {videosLoading ? (
            <div className="text-center py-8">
              <p className="text-stone-400">Loading videos...</p>
            </div>
          ) : videosError ? (
            <Alert className="border-red-500/50 bg-red-500/10">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-red-400">
                Error loading videos: {videosError.message}
              </AlertDescription>
            </Alert>
          ) : marketingVideos.length === 0 ? (
            <div className="text-center py-8">
              <Video className="w-12 h-12 mx-auto mb-4 text-stone-600" />
              <p className="text-stone-400">No videos found</p>
              <p className="text-stone-500 text-sm">Add your first video to get started</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {marketingVideos.map((video) => (
                <div key={video.id} className="p-6 bg-charcoal-800 rounded-lg border border-charcoal-700">
                  <div className="flex gap-6">
                    {/* Video thumbnail */}
                    <div className="flex-shrink-0">
                      <div className="relative w-40 h-24 bg-charcoal-700 rounded-lg overflow-hidden">
                        {video.thumbnail ? (
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Video className="w-8 h-8 text-stone-500" />
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        {video.duration && (
                          <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Video details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1">{video.title}</h3>
                          {video.category && (
                            <span className="inline-block bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded mb-2">
                              {video.category}
                            </span>
                          )}
                          <p className="text-stone-300 text-sm mb-3 line-clamp-2">{video.description}</p>
                          <div className="flex items-center gap-4 text-xs text-stone-400">
                            <span>Added: {new Date(video.createdAt || '').toLocaleDateString()}</span>
                            {video.isActive ? (
                              <span className="text-green-400">Active</span>
                            ) : (
                              <span className="text-red-400">Inactive</span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex gap-2 ml-4">
                          {video.videoUrl && (
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
                              onClick={() => video.videoUrl && window.open(video.videoUrl, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              View
                            </Button>
                          )}
                          <Button
                            size="sm"
                            className="bg-yellow-500 hover:bg-yellow-600 text-black"
                            onClick={() => setEditingVideo(video)}
                          >
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(video.id)}
                            disabled={deleteVideoMutation.isPending}
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Access Tools Management Component
function AccessToolsManagementSection({ 
  accessTools, 
  toolsLoading, 
  toolsError, 
  queryClient, 
  toast 
}: {
  accessTools: AccessTool[];
  toolsLoading: boolean;
  toolsError: any;
  queryClient: any;
  toast: any;
}) {
  const [isAddingTool, setIsAddingTool] = useState(false);
  const [editingTool, setEditingTool] = useState<AccessTool | null>(null);
  const [toolForm, setToolForm] = useState({
    title: '',
    link: '',
    category: '',
    description: '',
    image: ''
  });

  // Reset form when adding new tool
  const resetForm = () => {
    setToolForm({
      title: '',
      link: '',
      category: '',
      description: '',
      image: ''
    });
    setIsAddingTool(false);
    setEditingTool(null);
  };

  // Set form when editing tool
  const handleEdit = (tool: AccessTool) => {
    setToolForm({
      title: tool.title,
      link: tool.link,
      category: tool.category || '',
      description: tool.description || '',
      image: tool.image || ''
    });
    setEditingTool(tool);
    setIsAddingTool(true);
  };

  // Add tool mutation
  const addToolMutation = useMutation({
    mutationFn: async (toolData: any) => {
      return await apiRequest('POST', '/api/access-tools', toolData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/access-tools"] });
      resetForm();
      toast({
        title: "Success",
        description: "Access tool added successfully",
      });
    },
    onError: (error: Error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Update tool mutation
  const updateToolMutation = useMutation({
    mutationFn: async (toolData: any) => {
      return await apiRequest('PUT', `/api/access-tools/${editingTool?.id}`, toolData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/access-tools"] });
      resetForm();
      toast({
        title: "Success",
        description: "Access tool updated successfully",
      });
    },
    onError: (error: Error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Delete tool mutation
  const deleteToolMutation = useMutation({
    mutationFn: async (toolId: number) => {
      return await apiRequest('DELETE', `/api/access-tools/${toolId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/access-tools"] });
      toast({
        title: "Success",
        description: "Access tool deleted successfully",
      });
    },
    onError: (error: Error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!toolForm.title || !toolForm.link) {
      toast({
        title: "Error",
        description: "Title and link are required",
        variant: "destructive",
      });
      return;
    }
    
    if (editingTool) {
      updateToolMutation.mutate(toolForm);
    } else {
      addToolMutation.mutate(toolForm);
    }
  };

  const handleDelete = (toolId: number) => {
    if (confirm('Are you sure you want to delete this access tool?')) {
      deleteToolMutation.mutate(toolId);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-charcoal-900 border-charcoal-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Tools
              </CardTitle>
              <CardDescription className="text-stone-400">
                Manage recommended tools and software that appear on the resources page
              </CardDescription>
            </div>
            <Button
              onClick={() => setIsAddingTool(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Tool
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Add/Edit Tool Form */}
          {isAddingTool && (
            <div className="mb-6 p-6 bg-charcoal-800 rounded-lg border border-charcoal-700">
              <h3 className="text-lg font-semibold text-white mb-4">
                {editingTool ? 'Edit Tool' : 'Add New Tool'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-1">
                      Tool Name *
                    </label>
                    <Input
                      value={toolForm.title}
                      onChange={(e) => setToolForm(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="e.g., Slack, Figma, Google Analytics"
                      className="bg-charcoal-700 border-charcoal-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-1">
                      Category
                    </label>
                    <Input
                      value={toolForm.category}
                      onChange={(e) => setToolForm(prev => ({ ...prev, category: e.target.value }))}
                      placeholder="e.g., Communication, Design, Analytics"
                      className="bg-charcoal-700 border-charcoal-700 text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1">
                    Tool URL *
                  </label>
                  <Input
                    value={toolForm.link}
                    onChange={(e) => setToolForm(prev => ({ ...prev, link: e.target.value }))}
                    placeholder="https://..."
                    className="bg-charcoal-700 border-charcoal-700 text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1">
                    Tool Image
                  </label>
                  <div className="space-y-3">
                    <Input
                      value={toolForm.image}
                      onChange={(e) => setToolForm(prev => ({ ...prev, image: e.target.value }))}
                      placeholder="Enter image URL or leave blank for default icon"
                      className="bg-charcoal-700 border-charcoal-700 text-white"
                    />
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-charcoal-600 rounded-lg flex items-center justify-center overflow-hidden">
                        {toolForm.image ? (
                          <img 
                            src={toolForm.image} 
                            alt="Tool preview" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                              const nextSibling = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                              if (nextSibling) {
                                nextSibling.style.display = 'flex';
                              }
                            }}
                          />
                        ) : null}
                        <div className={`w-full h-full flex items-center justify-center ${toolForm.image ? 'hidden' : 'flex'}`}>
                          <Settings className="w-8 h-8 text-stone-400" />
                        </div>
                      </div>
                      <div className="text-xs text-stone-400">
                        <p>Preview of tool image</p>
                        <p>Leave blank to use default tool icon</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1">
                    Description
                  </label>
                  <textarea
                    value={toolForm.description}
                    onChange={(e) => setToolForm(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Brief description of what this tool does..."
                    className="w-full bg-charcoal-700 border-charcoal-700 text-white rounded-md px-3 py-2 min-h-[80px]"
                    rows={3}
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    type="submit"
                    disabled={addToolMutation.isPending || updateToolMutation.isPending}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black"
                  >
                    {(addToolMutation.isPending || updateToolMutation.isPending) 
                      ? (editingTool ? 'Updating...' : 'Adding...') 
                      : (editingTool ? 'Update Tool' : 'Add Tool')
                    }
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetForm}
                    className="border-charcoal-600 text-white hover:bg-charcoal-700 hover:border-charcoal-600"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Error State */}
          {toolsError && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
              <p className="text-red-400">Error loading access tools: {toolsError.message}</p>
            </div>
          )}

          {/* Access Tools List */}
          {toolsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="p-4 bg-charcoal-800 rounded-lg animate-pulse">
                  <div className="w-12 h-12 bg-charcoal-700 rounded mb-3"></div>
                  <div className="h-5 bg-charcoal-700 rounded mb-2"></div>
                  <div className="h-4 bg-charcoal-700 rounded mb-2"></div>
                  <div className="h-4 bg-charcoal-700 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : accessTools.length === 0 ? (
            <div className="text-center py-12">
              <Settings className="w-16 h-16 mx-auto mb-4 text-stone-600" />
              <h3 className="text-xl font-semibold text-stone-400 mb-2">No Tools</h3>
              <p className="text-stone-500 mb-4">Start building your recommended tools collection</p>
              <Button
                onClick={() => setIsAddingTool(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Tool
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {accessTools.map((tool) => (
                <div key={tool.id} className="p-4 bg-charcoal-800 rounded-lg border border-charcoal-700">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 mr-3 rounded overflow-hidden bg-charcoal-700 flex-shrink-0 flex items-center justify-center">
                      {tool.image ? (
                        <img 
                          src={tool.image} 
                          alt={tool.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            if (target.nextElementSibling) {
                              (target.nextElementSibling as HTMLElement).style.display = 'flex';
                            }
                          }}
                        />
                      ) : null}
                      <div className={`w-full h-full flex items-center justify-center ${tool.image ? 'hidden' : 'flex'}`}>
                        <Settings className="w-6 h-6 text-stone-400" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white truncate">{tool.title}</h3>
                      {tool.category && (
                        <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded mt-1">
                          {tool.category}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-1 ml-2">
                      <Button
                        size="sm"
                        onClick={() => handleEdit(tool)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-500 hover:border-yellow-600"
                      >
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleDelete(tool.id)}
                        disabled={deleteToolMutation.isPending}
                        className="bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  
                  {tool.description && (
                    <p className="text-stone-300 text-sm mb-3 line-clamp-2">
                      {tool.description}
                    </p>
                  )}
                  
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-semibold"
                  >
                    Visit Tool
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function AdminPageContent() {
  const router = useRouter();
  const setLocation = (path: string) => router.push(path);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [importStatus, setImportStatus] = useState<string>("");
  
  // Portfolio import state
  const [selectedPortfolioFile, setSelectedPortfolioFile] = useState<File | null>(null);
  const [portfolioUploadProgress, setPortfolioUploadProgress] = useState(0);
  const [portfolioImportStatus, setPortfolioImportStatus] = useState<string>("");
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { user, isLoading, isAuthenticated } = useAuth();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "You need to log in to access the admin area. Redirecting...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 1000);
      return;
    }
  }, [isAuthenticated, isLoading, toast]);

  // Fetch all content types with error handling
  const { data: articles = [], isLoading: articlesLoading, error: articlesError } = useQuery({
    queryKey: ["/api/admin/articles"],
    retry: false,
    enabled: isAuthenticated,
    staleTime: 0, gcTime: 0, refetchOnMount: 'always',
  });

  const { data: contacts = [], isLoading: contactsLoading, error: contactsError } = useQuery({
    queryKey: ["/api/contacts"],
    retry: false,
    enabled: isAuthenticated,
    staleTime: 0, gcTime: 0, refetchOnMount: 'always',
  });

  const { data: portfolioItems = [], isLoading: portfolioLoading, error: portfolioError } = useQuery({
    queryKey: ["/api/portfolio"],
    retry: false,
    enabled: isAuthenticated,
    staleTime: 0, gcTime: 0, refetchOnMount: 'always',
  });

  // Portfolio state
  const [isAddingPortfolioItem, setIsAddingPortfolioItem] = useState(false);
  const [editingPortfolioItem, setEditingPortfolioItem] = useState<PortfolioItem | null>(null);
  const [portfolioForm, setPortfolioForm] = useState({
    title: '',
    description: '',
    image: '',
    url: '',
    categories: [] as string[],
    serviceType: '',
    clientName: '',
    featured: false,
    orderIndex: 0,
    isActive: true
  });

  // Downloadable Resources state
  const [isAddingResource, setIsAddingResource] = useState(false);
  const [editingResource, setEditingResource] = useState<DownloadableResource | null>(null);
  const [resourceForm, setResourceForm] = useState({
    title: '',
    description: '',
    type: '',
    size: '',
    category: '',
    downloadUrl: '',
    icon: '',
    fileUrl: '',
    fileType: 'pdf' as 'pdf' | 'docx' | 'link',
    featured: false,
    requiresEmail: false,
    isActive: true
  });

  const { data: marketingVideos = [], isLoading: videosLoading, error: videosError } = useQuery({
    queryKey: ["/api/marketing-videos"],
    retry: false,
    enabled: isAuthenticated,
    staleTime: 0, gcTime: 0, refetchOnMount: 'always',
  });

  const { data: downloadableResources = [], isLoading: resourcesLoading, error: resourcesError } = useQuery({
    queryKey: ["/api/downloadable-resources"],
    retry: false,
    enabled: isAuthenticated,
    staleTime: 0, gcTime: 0, refetchOnMount: 'always',
  });

  const { data: teamMembers = [], isLoading: teamLoading, error: teamError } = useQuery({
    queryKey: ["/api/team"],
    retry: false,
    enabled: isAuthenticated,
    staleTime: 0, gcTime: 0, refetchOnMount: 'always',
  });

  const { data: events = [], isLoading: eventsLoading, error: eventsError } = useQuery<Event[]>({
    queryKey: ["/api/events"],
    retry: false,
    enabled: isAuthenticated,
    staleTime: 0, // Always fetch fresh data
    gcTime: 0, // Don't cache the data
    refetchOnMount: 'always', // Always refetch when component mounts
  });

  const { data: accessTools = [], isLoading: toolsLoading, error: toolsError } = useQuery<AccessTool[]>({
    queryKey: ["/api/access-tools"],
    retry: false,
    enabled: isAuthenticated,
    staleTime: 0, gcTime: 0, refetchOnMount: 'always',
  });

  // Articles table state
  const [selectedArticles, setSelectedArticles] = useState<number[]>([]);
  const [sortConfig, setSortConfig] = useState<{field: keyof BlogArticle; direction: 'asc' | 'desc'}>({
    field: 'date',
    direction: 'desc'
  });
  const [editingCell, setEditingCell] = useState<{articleId: number; field: string} | null>(null);
  const [editingValue, setEditingValue] = useState('');
  const [bulkEditMode, setBulkEditMode] = useState(false);

  // Type the data arrays
  const typedArticles = articles as BlogArticle[];
  const typedContacts = contacts as Contact[];
  const portfolioData = portfolioItems as PortfolioItem[];
  const typedMarketingVideos = marketingVideos as MarketingVideo[];
  const typedDownloadableResources = downloadableResources as DownloadableResource[];
  const typedTeamMembers = teamMembers as TeamMember[];

  // Downloadable Resources mutations
  const createResourceMutation = useMutation({
    mutationFn: async (resourceData: typeof resourceForm) => {
      return await apiRequest('POST', '/api/downloadable-resources', resourceData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/downloadable-resources"] });
      setIsAddingResource(false);
      setResourceForm({
        title: '',
        description: '',
        type: '',
        size: '',
        category: '',
        downloadUrl: '',
        icon: '',
        fileUrl: '',
        fileType: 'pdf',
        featured: false,
        requiresEmail: false,
        isActive: true
      });
      toast({
        title: "Success",
        description: "Downloadable resource added successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updateResourceMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: typeof resourceForm }) => {
      return await apiRequest('PUT', `/api/downloadable-resources/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/downloadable-resources"] });
      setEditingResource(null);
      setResourceForm({
        title: '',
        description: '',
        type: '',
        size: '',
        category: '',
        downloadUrl: '',
        icon: '',
        fileUrl: '',
        fileType: 'pdf',
        featured: false,
        requiresEmail: false,
        isActive: true
      });
      toast({
        title: "Success",
        description: "Downloadable resource updated successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteResourceMutation = useMutation({
    mutationFn: async (resourceId: number) => {
      return await apiRequest('DELETE', `/api/downloadable-resources/${resourceId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/downloadable-resources"] });
      toast({
        title: "Success",
        description: "Downloadable resource deleted successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // WordPress XML import mutation
  const importMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('xmlFile', file);
      return await apiRequest('POST', '/api/admin/import-wordpress', formData);
    },
    onSuccess: (result: any) => {
      setUploadProgress(100);
      setImportStatus(`Successfully imported ${result.imported} articles!`);
      queryClient.invalidateQueries({ queryKey: ["/api/admin/articles"] });
      setSelectedFile(null);
      toast({
        title: "Import Successful",
        description: `Imported ${result.imported} articles successfully`,
      });
    },
    onError: (error: Error) => {
      setUploadProgress(0);
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      setImportStatus(`Import failed: ${error.message}`);
      toast({
        title: "Import Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Portfolio WordPress XML import mutation
  const portfolioImportMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('xmlFile', file);
      return await apiRequest('POST', '/api/admin/import-portfolio', formData);
    },
    onSuccess: (result: any) => {
      setPortfolioUploadProgress(100);
      setPortfolioImportStatus(`Successfully imported ${result.imported} portfolio items!`);
      queryClient.invalidateQueries({ queryKey: ["/api/portfolio"] });
      setSelectedPortfolioFile(null);
      toast({
        title: "Portfolio Import Successful",
        description: `Imported ${result.imported} portfolio items successfully`,
      });
    },
    onError: (error: Error) => {
      setPortfolioUploadProgress(0);
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      setPortfolioImportStatus(`Portfolio import failed: ${error.message}`);
      toast({
        title: "Portfolio Import Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Portfolio CRUD mutations
  const addPortfolioMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest('POST', '/api/portfolio', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/portfolio"] });
      setIsAddingPortfolioItem(false);
      setPortfolioForm({
        title: '',
        description: '',
        image: '',
        url: '',
        categories: [],
        serviceType: '',
        clientName: '',
        featured: false,
        orderIndex: 0,
        isActive: true
      });
      toast({
        title: "Success",
        description: "Portfolio item added successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updatePortfolioMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: any }) => {
      return await apiRequest('PUT', `/api/portfolio/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/portfolio"] });
      setEditingPortfolioItem(null);
      setPortfolioForm({
        title: '',
        description: '',
        image: '',
        url: '',
        categories: [],
        serviceType: '',
        clientName: '',
        featured: false,
        orderIndex: 0,
        isActive: true
      });
      toast({
        title: "Success",
        description: "Portfolio item updated successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deletePortfolioMutation = useMutation({
    mutationFn: async (id: number) => {
      return await apiRequest('DELETE', `/api/portfolio/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/portfolio"] });
      toast({
        title: "Success",
        description: "Portfolio item deleted successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.name.endsWith('.xml')) {
        toast({
          title: "Invalid File Type",
          description: "Please select a valid WordPress XML export file",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
      setImportStatus("");
    }
  };

  const handleImport = () => {
    if (!selectedFile) return;
    
    setUploadProgress(0);
    setImportStatus("Starting import...");
    
    // Simulate progress during upload
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    importMutation.mutate(selectedFile);
  };

  const handlePortfolioImport = () => {
    if (!selectedPortfolioFile) return;
    
    setPortfolioUploadProgress(0);
    setPortfolioImportStatus("Starting portfolio import...");
    
    // Simulate progress during upload
    const progressInterval = setInterval(() => {
      setPortfolioUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    portfolioImportMutation.mutate(selectedPortfolioFile);
  };

  const formatDate = (dateString: string | Date | null) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Articles table functionality
  const handleSort = (field: keyof BlogArticle) => {
    setSortConfig(current => ({
      field,
      direction: current?.field === field && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const sortedArticles = React.useMemo(() => {
    
    return [...typedArticles].sort((a, b) => {
      const aValue = a[sortConfig.field];
      const bValue = b[sortConfig.field];
      
      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortConfig.direction === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [typedArticles, sortConfig]);

  const handleSelectAll = (checked: boolean) => {
    setSelectedArticles(checked ? sortedArticles.map(a => a.id) : []);
  };

  const handleSelectArticle = (articleId: number, checked: boolean) => {
    setSelectedArticles(current => 
      checked 
        ? [...current, articleId]
        : current.filter(id => id !== articleId)
    );
  };

  const handleCellEdit = (articleId: number, field: string, currentValue: any) => {
    setEditingCell({ articleId, field });
    setEditingValue(String(currentValue || ''));
  };

  const handleCellSave = async () => {
    if (!editingCell) return;
    
    try {
      const updateData: any = {};
      
      if (editingCell.field === 'isPublished') {
        updateData[editingCell.field] = editingValue === 'true';
      } else if (editingCell.field === 'isFeatured') {
        updateData[editingCell.field] = editingValue === 'true';
      } else {
        updateData[editingCell.field] = editingValue;
      }

      await apiRequest('PUT', `/api/admin/articles/${editingCell.articleId}`, updateData);
      queryClient.invalidateQueries({ queryKey: ["/api/admin/articles"] });
      
      toast({
        title: "Success",
        description: "Article updated successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setEditingCell(null);
      setEditingValue('');
    }
  };

  const handleCellCancel = () => {
    setEditingCell(null);
    setEditingValue('');
  };

  const handleBulkDelete = async () => {
    if (selectedArticles.length === 0) return;
    
    if (!confirm(`Are you sure you want to delete ${selectedArticles.length} article(s)? This action cannot be undone.`)) {
      return;
    }

    try {
      await Promise.all(
        selectedArticles.map(id => 
          apiRequest('DELETE', `/api/admin/articles/${id}`)
        )
      );
      
      queryClient.invalidateQueries({ queryKey: ["/api/admin/articles"] });
      setSelectedArticles([]);
      
      toast({
        title: "Success",
        description: `${selectedArticles.length} article(s) deleted successfully`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleBulkPublish = async (published: boolean) => {
    if (selectedArticles.length === 0) return;

    try {
      await Promise.all(
        selectedArticles.map(id => 
          apiRequest('PUT', `/api/admin/articles/${id}`, { isPublished: published })
        )
      );
      
      queryClient.invalidateQueries({ queryKey: ["/api/admin/articles"] });
      setSelectedArticles([]);
      
      toast({
        title: "Success",
        description: `${selectedArticles.length} article(s) ${published ? 'published' : 'unpublished'} successfully`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-yellow-500 animate-pulse" />
          <h2 className="text-2xl font-bold mb-2">Checking Authentication</h2>
          <p className="text-stone-400">Please wait while we verify your access...</p>
        </div>
      </div>
    );
  }

  // Show login prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen band-dark text-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <LogIn className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
          <h2 className="headline-lg font-display uppercase mb-2">Admin Access Required</h2>
          <p className="text-stone-400 mb-6">You need to log in to access the admin dashboard.</p>
          <Button 
            onClick={() => window.location.href = "/api/login?returnTo=/admin"}
            className="bg-yellow-400 hover:bg-yellow-500 text-charcoal-900 font-semibold border-2 border-charcoal-800"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Log in with Replit
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen band-dark text-white">
      <SEOHead
        title="Admin - Content Management | Business Builders"
        description="Admin interface for managing blog articles and importing WordPress content"
        canonicalUrl="https://businessbldrs.com/admin"
      />
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="headline-xl font-display uppercase mb-4">
                  Admin <span className="text-yellow-400">Dashboard</span>
                </h1>
                <p className="text-xl text-stone-400">
                  Manage all website content and settings
                </p>
              </div>
              <div className="flex items-center gap-4">
                {isAuthenticated && (
                  <div className="text-right">
                    <p className="text-sm text-stone-400">Welcome back</p>
                    <p className="font-semibold text-white">
                      {(() => {
                        const typedUser = user as { firstName?: string; email?: string } | null;
                        return typedUser?.firstName || typedUser?.email || 'Admin';
                      })()}
                    </p>
                  </div>
                )}
                <Button
                  onClick={() => window.location.href = "/api/logout"}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <LogIn className="w-4 h-4 mr-2 rotate-180" />
                  Logout
                </Button>
              </div>
            </div>
          </div>

          {/* Content Management Tabs */}
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-11 bg-charcoal-800 border-2 border-charcoal-700 mb-8">
              <TabsTrigger value="articles" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Articles
              </TabsTrigger>
              <TabsTrigger value="portfolio" className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4" />
                Portfolio
              </TabsTrigger>
              <TabsTrigger value="team" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Team
              </TabsTrigger>
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Events
              </TabsTrigger>
              <TabsTrigger value="media" className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Media
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Resources
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Tools
              </TabsTrigger>
              <TabsTrigger value="forms" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Forms
              </TabsTrigger>
              <TabsTrigger value="hubspot" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                HubSpot
              </TabsTrigger>
              <TabsTrigger value="navigation" className="flex items-center gap-2">
                <Menu className="w-4 h-4" />
                Navigation
              </TabsTrigger>

            </TabsList>

            {/* Articles Tab */}
            <TabsContent value="articles" className="space-y-8">
              {/* WordPress Import Section */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <ArticlesImport 
                  onImportSuccess={() => queryClient.invalidateQueries({ queryKey: ["/api/blog-articles"] })}
                />

                <Card className="bg-charcoal-900 border-charcoal-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Article Management
                    </CardTitle>
                    <CardDescription className="text-stone-400">
                      Create and manage your blog articles
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button
                        onClick={() => setLocation('/admin/create-article')}
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Create New Article
                      </Button>
                      
                      <div className="text-center pt-4">
                        <p className="text-2xl font-bold text-white">{typedArticles.length}</p>
                        <p className="text-sm text-stone-400">Total Articles</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Articles Table */}
              <ArticlesTable 
                articles={typedArticles}
                articlesLoading={articlesLoading}
                articlesError={articlesError}
              />
            </TabsContent>

            {/* Team Tab */}
            <TabsContent value="team">
              <TeamManagement 
                teamMembers={typedTeamMembers}
                teamLoading={teamLoading}
                teamError={teamError}
              />
            </TabsContent>

            {/* Portfolio Tab */}
            <TabsContent value="portfolio">
              <PortfolioManagement 
                portfolioItems={portfolioData}
                portfolioLoading={portfolioLoading}
                portfolioError={portfolioError}
              />
            </TabsContent>

            {/* Old portfolio code starts here - will be removed */}
            <TabsContent value="portfolio-old" className="hidden">
              <Card className="bg-charcoal-900 border-charcoal-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">All Articles</CardTitle>
                      <CardDescription className="text-stone-400">
                        Sortable table with inline editing and bulk operations
                      </CardDescription>
                    </div>
                    {selectedArticles.length > 0 && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleBulkPublish(true)}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          <Check className="w-4 h-4 mr-1" />
                          Publish ({selectedArticles.length})
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleBulkPublish(false)}
                          className="bg-charcoal-600 hover:bg-charcoal-700 text-white"
                        >
                          <X className="w-4 h-4 mr-1" />
                          Unpublish ({selectedArticles.length})
                        </Button>
                        <Button
                          size="sm"
                          onClick={handleBulkDelete}
                          className="bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Delete ({selectedArticles.length})
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {articlesLoading ? (
                    <div className="text-center py-8">
                      <p className="text-stone-400">Loading articles...</p>
                    </div>
                  ) : articlesError ? (
                    <Alert className="border-red-500 bg-red-500/10">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription className="text-white">
                        Failed to load articles: {(articlesError as Error).message}
                      </AlertDescription>
                    </Alert>
                  ) : typedArticles.length === 0 ? (
                    <div className="text-center py-8">
                      <FileText className="w-12 h-12 mx-auto mb-4 text-stone-600" />
                      <p className="text-stone-400 mb-2">No articles found</p>
                      <p className="text-sm text-stone-500">Import from WordPress or create your first article</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="border-charcoal-700 hover:bg-charcoal-800/50">
                            <TableHead className="w-12">
                              <Checkbox
                                checked={selectedArticles.length === sortedArticles.length && sortedArticles.length > 0}
                                onCheckedChange={handleSelectAll}
                                className="border-charcoal-600"
                              />
                            </TableHead>
                            <TableHead className="text-stone-300">
                              <Button
                                variant="ghost"
                                onClick={() => handleSort('title')}
                                className="h-auto p-0 text-left text-stone-300 hover:text-white"
                              >
                                Title
                                {sortConfig?.field === 'title' ? (
                                  sortConfig.direction === 'desc' ? (
                                    <ChevronDown className="ml-1 h-3 w-3" />
                                  ) : (
                                    <ChevronUp className="ml-1 h-3 w-3" />
                                  )
                                ) : (
                                  <ArrowUpDown className="ml-1 h-3 w-3" />
                                )}
                              </Button>
                            </TableHead>
                            <TableHead className="text-stone-300">
                              <Button
                                variant="ghost"
                                onClick={() => handleSort('author')}
                                className="h-auto p-0 text-left text-stone-300 hover:text-white"
                              >
                                Author
                                {sortConfig?.field === 'author' ? (
                                  sortConfig.direction === 'desc' ? (
                                    <ChevronDown className="ml-1 h-3 w-3" />
                                  ) : (
                                    <ChevronUp className="ml-1 h-3 w-3" />
                                  )
                                ) : (
                                  <ArrowUpDown className="ml-1 h-3 w-3" />
                                )}
                              </Button>
                            </TableHead>
                            <TableHead className="text-stone-300">
                              <Button
                                variant="ghost"
                                onClick={() => handleSort('category')}
                                className="h-auto p-0 text-left text-stone-300 hover:text-white"
                              >
                                Category
                                {sortConfig?.field === 'category' ? (
                                  sortConfig.direction === 'desc' ? (
                                    <ChevronDown className="ml-1 h-3 w-3" />
                                  ) : (
                                    <ChevronUp className="ml-1 h-3 w-3" />
                                  )
                                ) : (
                                  <ArrowUpDown className="ml-1 h-3 w-3" />
                                )}
                              </Button>
                            </TableHead>
                            <TableHead className="text-stone-300">
                              <Button
                                variant="ghost"
                                onClick={() => handleSort('date')}
                                className="h-auto p-0 text-left text-stone-300 hover:text-white"
                              >
                                Date
                                {sortConfig?.field === 'date' ? (
                                  sortConfig.direction === 'desc' ? (
                                    <ChevronDown className="ml-1 h-3 w-3" />
                                  ) : (
                                    <ChevronUp className="ml-1 h-3 w-3" />
                                  )
                                ) : (
                                  <ArrowUpDown className="ml-1 h-3 w-3" />
                                )}
                              </Button>
                            </TableHead>
                            <TableHead className="text-stone-300">Status</TableHead>
                            <TableHead className="text-stone-300">Featured</TableHead>
                            <TableHead className="text-stone-300 w-24">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {sortedArticles.map((article) => (
                            <TableRow key={article.id} className="border-charcoal-700 hover:bg-charcoal-800/50">
                              <TableCell>
                                <Checkbox
                                  checked={selectedArticles.includes(article.id)}
                                  onCheckedChange={(checked) => handleSelectArticle(article.id, checked as boolean)}
                                  className="border-charcoal-600"
                                />
                              </TableCell>
                              <TableCell className="font-medium text-white max-w-xs">
                                {editingCell?.articleId === article.id && editingCell?.field === 'title' ? (
                                  <div className="flex items-center gap-2">
                                    <Input
                                      value={editingValue}
                                      onChange={(e) => setEditingValue(e.target.value)}
                                      className="bg-charcoal-800 border-charcoal-700 text-white text-sm"
                                      autoFocus
                                    />
                                    <Button
                                      size="sm"
                                      onClick={handleCellSave}
                                      className="bg-green-600 hover:bg-green-700 text-white p-1 h-7 min-w-7"
                                    >
                                      <Save className="w-3 h-3" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      onClick={handleCellCancel}
                                      className="bg-red-600 hover:bg-red-700 text-white p-1 h-7 min-w-7"
                                    >
                                      <X className="w-3 h-3" />
                                    </Button>
                                  </div>
                                ) : (
                                  <div 
                                    className="cursor-pointer hover:bg-charcoal-700 p-1 rounded truncate"
                                    onClick={() => handleCellEdit(article.id, 'title', article.title)}
                                    title={article.title}
                                  >
                                    {article.title}
                                  </div>
                                )}
                              </TableCell>
                              <TableCell className="text-stone-300">
                                {editingCell?.articleId === article.id && editingCell?.field === 'author' ? (
                                  <div className="flex items-center gap-2">
                                    <Input
                                      value={editingValue}
                                      onChange={(e) => setEditingValue(e.target.value)}
                                      className="bg-charcoal-800 border-charcoal-700 text-white text-sm"
                                      autoFocus
                                    />
                                    <Button
                                      size="sm"
                                      onClick={handleCellSave}
                                      className="bg-green-600 hover:bg-green-700 text-white p-1 h-7 min-w-7"
                                    >
                                      <Save className="w-3 h-3" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      onClick={handleCellCancel}
                                      className="bg-red-600 hover:bg-red-700 text-white p-1 h-7 min-w-7"
                                    >
                                      <X className="w-3 h-3" />
                                    </Button>
                                  </div>
                                ) : (
                                  <div 
                                    className="cursor-pointer hover:bg-charcoal-700 p-1 rounded"
                                    onClick={() => handleCellEdit(article.id, 'author', article.author)}
                                  >
                                    {article.author}
                                  </div>
                                )}
                              </TableCell>
                              <TableCell className="text-stone-300">
                                {editingCell?.articleId === article.id && editingCell?.field === 'category' ? (
                                  <div className="flex items-center gap-2">
                                    <Input
                                      value={editingValue}
                                      onChange={(e) => setEditingValue(e.target.value)}
                                      className="bg-charcoal-800 border-charcoal-700 text-white text-sm"
                                      autoFocus
                                    />
                                    <Button
                                      size="sm"
                                      onClick={handleCellSave}
                                      className="bg-green-600 hover:bg-green-700 text-white p-1 h-7 min-w-7"
                                    >
                                      <Save className="w-3 h-3" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      onClick={handleCellCancel}
                                      className="bg-red-600 hover:bg-red-700 text-white p-1 h-7 min-w-7"
                                    >
                                      <X className="w-3 h-3" />
                                    </Button>
                                  </div>
                                ) : (
                                  <div 
                                    className="cursor-pointer hover:bg-charcoal-700 p-1 rounded"
                                    onClick={() => handleCellEdit(article.id, 'category', article.category)}
                                  >
                                    {article.category}
                                  </div>
                                )}
                              </TableCell>
                              <TableCell className="text-stone-300">
                                {formatDate(article.date)}
                              </TableCell>
                              <TableCell>
                                {editingCell?.articleId === article.id && editingCell?.field === 'isPublished' ? (
                                  <div className="flex items-center gap-2">
                                    <select
                                      value={editingValue}
                                      onChange={(e) => setEditingValue(e.target.value)}
                                      className="bg-charcoal-800 border border-charcoal-700 text-white text-sm rounded px-2 py-1"
                                      autoFocus
                                    >
                                      <option value="true">Published</option>
                                      <option value="false">Draft</option>
                                    </select>
                                    <Button
                                      size="sm"
                                      onClick={handleCellSave}
                                      className="bg-green-600 hover:bg-green-700 text-white p-1 h-7 min-w-7"
                                    >
                                      <Save className="w-3 h-3" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      onClick={handleCellCancel}
                                      className="bg-red-600 hover:bg-red-700 text-white p-1 h-7 min-w-7"
                                    >
                                      <X className="w-3 h-3" />
                                    </Button>
                                  </div>
                                ) : (
                                  <Badge 
                                    className={`cursor-pointer ${article.isPublished 
                                      ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                                      : 'bg-charcoal-600/20 text-stone-400 hover:bg-charcoal-600/30'
                                    }`}
                                    onClick={() => handleCellEdit(article.id, 'isPublished', article.isPublished)}
                                  >
                                    {article.isPublished ? 'Published' : 'Draft'}
                                  </Badge>
                                )}
                              </TableCell>
                              <TableCell>
                                {editingCell?.articleId === article.id && editingCell?.field === 'isFeatured' ? (
                                  <div className="flex items-center gap-2">
                                    <select
                                      value={editingValue}
                                      onChange={(e) => setEditingValue(e.target.value)}
                                      className="bg-charcoal-800 border border-charcoal-700 text-white text-sm rounded px-2 py-1"
                                      autoFocus
                                    >
                                      <option value="true">Yes</option>
                                      <option value="false">No</option>
                                    </select>
                                    <Button
                                      size="sm"
                                      onClick={handleCellSave}
                                      className="bg-green-600 hover:bg-green-700 text-white p-1 h-7 min-w-7"
                                    >
                                      <Save className="w-3 h-3" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      onClick={handleCellCancel}
                                      className="bg-red-600 hover:bg-red-700 text-white p-1 h-7 min-w-7"
                                    >
                                      <X className="w-3 h-3" />
                                    </Button>
                                  </div>
                                ) : (
                                  <Badge 
                                    className={`cursor-pointer ${article.isFeatured 
                                      ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30' 
                                      : 'bg-charcoal-600/20 text-stone-400 hover:bg-charcoal-600/30'
                                    }`}
                                    onClick={() => handleCellEdit(article.id, 'isFeatured', article.isFeatured)}
                                  >
                                    {article.isFeatured ? 'Yes' : 'No'}
                                  </Badge>
                                )}
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-1">
                                  <Button
                                    size="sm"
                                    onClick={() => setLocation(`/admin/edit-article/${article.id}`)}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-black border-0 p-2 h-8 min-w-8"
                                    title="Edit Article"
                                  >
                                    <Edit className="w-3 h-3" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    onClick={() => window.open(`/resources/articles/${article.slug}`, '_blank')}
                                    className="bg-blue-500 hover:bg-blue-600 text-white border-0 p-2 h-8 min-w-8"
                                    title="View Article"
                                  >
                                    <Eye className="w-3 h-3" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Portfolio Tab */}
            <TabsContent value="portfolio" className="space-y-8">
              {/* Portfolio WordPress Import Section */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Card className="bg-charcoal-900 border-charcoal-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Upload className="w-5 h-5" />
                      Portfolio WordPress Import
                    </CardTitle>
                    <CardDescription className="text-stone-400">
                      Import your WordPress portfolio items from an XML export file
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Input
                          type="file"
                          accept=".xml"
                          onChange={(e) => setSelectedPortfolioFile(e.target.files?.[0] || null)}
                          className="bg-charcoal-800 border-charcoal-700 text-white file:bg-yellow-500 file:text-black file:border-0 file:rounded-md"
                        />
                      </div>
                      
                      {selectedPortfolioFile && (
                        <div className="p-4 bg-charcoal-800 rounded-lg">
                          <p className="text-sm text-stone-300 mb-2">
                            Selected file: <span className="text-white font-medium">{selectedPortfolioFile.name}</span>
                          </p>
                          <p className="text-xs text-stone-400">
                            Size: {(selectedPortfolioFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      )}

                      {portfolioUploadProgress > 0 && (
                        <div className="space-y-2">
                          <Progress value={portfolioUploadProgress} className="w-full" />
                          <p className="text-sm text-stone-400">Import progress: {portfolioUploadProgress}%</p>
                        </div>
                      )}

                      {portfolioImportStatus && (
                        <Alert className={portfolioImportStatus.includes('Success') ? "border-green-500 bg-green-500/10" : portfolioImportStatus.includes('failed') ? "border-red-500 bg-red-500/10" : "border-blue-500 bg-blue-500/10"}>
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription className="text-white">
                            {portfolioImportStatus}
                          </AlertDescription>
                        </Alert>
                      )}

                      <Button
                        onClick={handlePortfolioImport}
                        disabled={!selectedPortfolioFile || portfolioImportMutation.isPending}
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                      >
                        {portfolioImportMutation.isPending ? 'Importing...' : 'Import Portfolio Items'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Portfolio Stats */}
                <Card className="bg-charcoal-900 border-charcoal-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <BarChart className="w-5 h-5" />
                      Portfolio Statistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-stone-400">Total Items:</span>
                        <span className="text-white font-semibold">{portfolioData?.length || 0}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-stone-400">Active Items:</span>
                        <span className="text-white font-semibold">{portfolioData?.filter(p => p.isActive).length || 0}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-stone-400">Featured Items:</span>
                        <span className="text-white font-semibold">{portfolioData?.filter(p => p.featured).length || 0}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Portfolio Management */}
              <Card className="bg-charcoal-900 border-charcoal-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Portfolio Items</CardTitle>
                      <CardDescription className="text-stone-400">
                        Manage your portfolio items manually or import from WordPress
                      </CardDescription>
                    </div>
                    <Button
                      onClick={() => setIsAddingPortfolioItem(true)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-black"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Portfolio Item
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Add/Edit Portfolio Form */}
                  {(isAddingPortfolioItem || editingPortfolioItem) && (
                    <div className="mb-8 p-6 bg-charcoal-800 rounded-lg border border-charcoal-700">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        {editingPortfolioItem ? 'Edit Portfolio Item' : 'Add New Portfolio Item'}
                      </h3>
                      <form 
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (editingPortfolioItem) {
                            updatePortfolioMutation.mutate({
                              id: editingPortfolioItem.id,
                              data: portfolioForm
                            });
                          } else {
                            addPortfolioMutation.mutate(portfolioForm);
                          }
                        }}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-stone-300 mb-1">
                              Title *
                            </label>
                            <Input
                              value={portfolioForm.title}
                              onChange={(e) => setPortfolioForm(prev => ({ ...prev, title: e.target.value }))}
                              placeholder="Project title"
                              required
                              className="bg-charcoal-700 border-charcoal-700 text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-stone-300 mb-1">
                              Client Name
                            </label>
                            <Input
                              value={portfolioForm.clientName}
                              onChange={(e) => setPortfolioForm(prev => ({ ...prev, clientName: e.target.value }))}
                              placeholder="Client or project name"
                              className="bg-charcoal-700 border-charcoal-700 text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-stone-300 mb-1">
                            Description
                          </label>
                          <textarea
                            value={portfolioForm.description}
                            onChange={(e) => setPortfolioForm(prev => ({ ...prev, description: e.target.value }))}
                            placeholder="Project description"
                            className="w-full bg-charcoal-700 border-charcoal-700 text-white rounded-md px-3 py-2 min-h-[80px]"
                            rows={3}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-stone-300 mb-1">
                              Project URL
                            </label>
                            <Input
                              value={portfolioForm.url}
                              onChange={(e) => setPortfolioForm(prev => ({ ...prev, url: e.target.value }))}
                              placeholder="https://example.com"
                              className="bg-charcoal-700 border-charcoal-700 text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-stone-300 mb-1">
                              Image URL
                            </label>
                            <Input
                              value={portfolioForm.image}
                              onChange={(e) => setPortfolioForm(prev => ({ ...prev, image: e.target.value }))}
                              placeholder="Image URL or path"
                              className="bg-charcoal-700 border-charcoal-700 text-white"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-stone-300 mb-1">
                              Service Type
                            </label>
                            <Input
                              value={portfolioForm.serviceType}
                              onChange={(e) => setPortfolioForm(prev => ({ ...prev, serviceType: e.target.value }))}
                              placeholder="web, branding, marketing, etc."
                              className="bg-charcoal-700 border-charcoal-700 text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-stone-300 mb-1">
                              Categories (comma separated)
                            </label>
                            <Input
                              value={portfolioForm.categories.join(', ')}
                              onChange={(e) => setPortfolioForm(prev => ({ 
                                ...prev, 
                                categories: e.target.value.split(',').map(cat => cat.trim()).filter(Boolean)
                              }))}
                              placeholder="Web, Branding, Marketing"
                              className="bg-charcoal-700 border-charcoal-700 text-white"
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={portfolioForm.featured}
                              onChange={(e) => setPortfolioForm(prev => ({ ...prev, featured: e.target.checked }))}
                              className="rounded border-charcoal-700 bg-charcoal-700 text-yellow-500"
                            />
                            <span className="text-sm text-stone-300">Featured Project</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={portfolioForm.isActive}
                              onChange={(e) => setPortfolioForm(prev => ({ ...prev, isActive: e.target.checked }))}
                              className="rounded border-charcoal-700 bg-charcoal-700 text-yellow-500"
                            />
                            <span className="text-sm text-stone-300">Active</span>
                          </label>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            type="submit"
                            disabled={addPortfolioMutation.isPending || updatePortfolioMutation.isPending}
                            className="bg-yellow-500 hover:bg-yellow-600 text-black"
                          >
                            {(addPortfolioMutation.isPending || updatePortfolioMutation.isPending) 
                              ? 'Saving...' 
                              : (editingPortfolioItem ? 'Update Item' : 'Add Item')
                            }
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setIsAddingPortfolioItem(false);
                              setEditingPortfolioItem(null);
                              setPortfolioForm({
                                title: '',
                                description: '',
                                image: '',
                                url: '',
                                categories: [],
                                serviceType: '',
                                clientName: '',
                                featured: false,
                                orderIndex: 0,
                                isActive: true
                              });
                            }}
                            className="border-charcoal-600 text-white hover:bg-charcoal-700 hover:border-charcoal-600"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Portfolio Items List */}
                  {portfolioLoading ? (
                    <div className="text-center py-8">
                      <p className="text-stone-400">Loading portfolio items...</p>
                    </div>
                  ) : portfolioError ? (
                    <Alert className="border-red-500/50 bg-red-500/10">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription className="text-red-400">
                        Error loading portfolio: {portfolioError.message}
                      </AlertDescription>
                    </Alert>
                  ) : portfolioData.length === 0 ? (
                    <div className="text-center py-8">
                      <FolderOpen className="w-12 h-12 mx-auto mb-4 text-stone-600" />
                      <p className="text-stone-400">No portfolio items found</p>
                      <p className="text-stone-500 text-sm">Add your first portfolio item or import from WordPress</p>
                    </div>
                  ) : (
                    <div className="grid gap-6">
                      {portfolioData.map((item) => (
                        <div key={item.id} className="p-6 bg-charcoal-800 rounded-lg border border-charcoal-700">
                          <div className="flex gap-6">
                            {/* Portfolio image */}
                            <div className="flex-shrink-0">
                              <div className="relative w-40 h-24 bg-charcoal-700 rounded-lg overflow-hidden">
                                {item.image ? (
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.src = '/images/portfolio-placeholder.jpg';
                                    }}
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">
                                    <FolderOpen className="w-8 h-8 text-stone-500" />
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            {/* Portfolio details */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                                  {item.clientName && item.clientName !== item.title && (
                                    <p className="text-sm text-stone-400 mb-2">Client: {item.clientName}</p>
                                  )}
                                  {item.categories && item.categories.length > 0 && (
                                    <div className="flex gap-2 mb-2">
                                      {item.categories.map((category) => (
                                        <span key={category} className="inline-block bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded">
                                          {category}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                  <p className="text-stone-300 text-sm mb-3 line-clamp-2">{item.description}</p>
                                  <div className="flex items-center gap-4 text-xs text-stone-400">
                                    {item.featured && (
                                      <span className="flex items-center gap-1 text-yellow-400">
                                        <Star className="w-3 h-3 fill-current" />
                                        Featured
                                      </span>
                                    )}
                                    {item.isActive ? (
                                      <span className="text-green-400">Active</span>
                                    ) : (
                                      <span className="text-red-400">Inactive</span>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="flex gap-2 ml-4">
                                  {item.url && (
                                    <Button
                                      size="sm"
                                      className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
                                      onClick={() => item.url && window.open(item.url, '_blank')}
                                    >
                                      <ExternalLink className="w-4 h-4 mr-1" />
                                      View
                                    </Button>
                                  )}
                                  <Button
                                    size="sm"
                                    className="bg-yellow-500 hover:bg-yellow-600 text-black"
                                    onClick={() => {
                                      setEditingPortfolioItem(item);
                                      setPortfolioForm({
                                        title: item.title,
                                        description: item.description || '',
                                        image: item.image || '',
                                        url: item.url || '',
                                        categories: item.categories || [],
                                        serviceType: item.serviceType || '',
                                        clientName: item.clientName || '',
                                        featured: item.featured || false,
                                        orderIndex: item.orderIndex || 0,
                                        isActive: item.isActive ?? true
                                      });
                                    }}
                                  >
                                    <Edit className="w-4 h-4 mr-1" />
                                    Edit
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() => {
                                      if (confirm('Are you sure you want to delete this portfolio item?')) {
                                        deletePortfolioMutation.mutate(item.id);
                                      }
                                    }}
                                    disabled={deletePortfolioMutation.isPending}
                                  >
                                    <Trash2 className="w-4 h-4 mr-1" />
                                    Delete
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Videos Management Tab */}
            <TabsContent value="videos">
              <VideoManagementSection 
                marketingVideos={typedMarketingVideos}
                videosLoading={videosLoading}
                videosError={videosError}
                queryClient={queryClient}
                toast={toast}
              />
            </TabsContent>

            {/* Team Management Tab */}
            <TabsContent value="team">
              <Card className="bg-charcoal-900 border-charcoal-700">
                <CardHeader>
                  <CardTitle className="text-white">Team Members</CardTitle>
                  <CardDescription className="text-stone-400">
                    Manage team member profiles and information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {teamLoading ? (
                    <div className="text-center py-8">
                      <p className="text-stone-400">Loading team members...</p>
                    </div>
                  ) : typedTeamMembers.length === 0 ? (
                    <div className="text-center py-8">
                      <Users className="w-12 h-12 mx-auto mb-4 text-stone-600" />
                      <p className="text-stone-400">No team members found</p>
                    </div>
                  ) : (
                    <div className="grid gap-6">
                      {typedTeamMembers.map((member) => (
                        <div key={member.id} className="p-6 bg-charcoal-800 rounded-lg border border-charcoal-700">
                          <div className="flex items-start gap-6">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-20 h-20 rounded-lg object-cover border border-charcoal-700"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                  <p className="text-yellow-400 font-medium">{member.title}</p>
                                  {member.funTitle && (
                                    <p className="text-stone-400 italic">"{member.funTitle}"</p>
                                  )}
                                  <p className="text-stone-500 text-sm">{member.email}</p>
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
                                    onClick={() => window.open(`/team/${member.slug}`, '_blank')}
                                  >
                                    <Eye className="w-4 h-4 mr-1" />
                                    View
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="bg-yellow-500 hover:bg-yellow-600 text-black"
                                  >
                                    <Edit className="w-4 h-4 mr-1" />
                                    Edit
                                  </Button>
                                </div>
                              </div>
                              <div className="mt-3 text-stone-300 text-sm">
                                <p className="line-clamp-3">{member.description}</p>
                              </div>
                              {member.quote && (
                                <div className="mt-3 p-3 bg-charcoal-700 rounded border-l-4 border-yellow-500">
                                  <p className="text-stone-300 italic text-sm">"{member.quote}"</p>
                                  {member.quoteAuthor && (
                                    <p className="text-stone-400 text-xs mt-1">— {member.quoteAuthor}</p>
                                  )}
                                </div>
                              )}
                              {member.outsideWork && (
                                <div className="mt-3">
                                  <p className="text-stone-400 text-sm">
                                    <span className="font-medium">Outside the office:</span> {member.outsideWork}
                                  </p>
                                </div>
                              )}
                              {member.additionalPhotos && member.additionalPhotos.length > 0 && (
                                <div className="mt-3">
                                  <p className="text-stone-400 text-sm mb-2">Additional Photos:</p>
                                  <div className="flex gap-2">
                                    {member.additionalPhotos.slice(0, 3).map((photo, index) => (
                                      <img
                                        key={index}
                                        src={photo}
                                        alt={`${member.name} - Photo ${index + 1}`}
                                        className="w-12 h-12 rounded object-cover border border-charcoal-700"
                                      />
                                    ))}
                                    {member.additionalPhotos.length > 3 && (
                                      <div className="w-12 h-12 rounded bg-charcoal-700 border border-charcoal-700 flex items-center justify-center text-xs text-stone-400">
                                        +{member.additionalPhotos.length - 3}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Events Management Tab */}
            <TabsContent value="events">
              <EventsManagementSection 
                events={events}
                eventsLoading={eventsLoading}
                eventsError={eventsError}
                queryClient={queryClient}
                toast={toast}
              />
            </TabsContent>

            {/* Media Management Tab */}
            <TabsContent value="media">
              <MediaManagement />
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources">
              <ResourceManagement
                downloadableResources={typedDownloadableResources}
                resourcesLoading={resourcesLoading}
                resourcesError={resourcesError}
                queryClient={queryClient}
                toast={toast}
              />
            </TabsContent>

            {/* Access Tools Tab */}
            <TabsContent value="tools">
              <AccessToolsManagementSection 
                accessTools={accessTools}
                toolsLoading={toolsLoading}
                toolsError={toolsError}
                queryClient={queryClient}
                toast={toast}
              />
            </TabsContent>

            {/* Contacts Tab */}
            <TabsContent value="forms">
              <FormsManagement />
            </TabsContent>

            {/* HubSpot Integration Tab */}
            <TabsContent value="hubspot">
              <div className="space-y-8">
                <Card className="bg-charcoal-900 border-charcoal-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <ExternalLink className="w-5 h-5" />
                      HubSpot Integration
                    </CardTitle>
                    <CardDescription className="text-stone-400">
                      Test and verify your HubSpot integration for contact form submissions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <HubSpotTestSection 
                      queryClient={queryClient}
                      toast={toast}
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Navigation Management Tab */}
            <TabsContent value="navigation">
              <Card className="bg-charcoal-900 border-charcoal-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Menu className="w-5 h-5" />
                    Navigation Management
                  </CardTitle>
                  <CardDescription className="text-stone-400">
                    Manage website navigation menu items, order, and visibility
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button
                      onClick={() => setLocation('/admin/navigation')}
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Manage Navigation Items
                    </Button>
                    <p className="text-stone-400">
                      Configure the main navigation menu, dropdown items, and display order.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Check authentication status on mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/api/admin/auth/status');
        const authStatus = await response.json();
        
        if (authStatus.authenticated && authStatus.isAdmin) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-lg font-medium text-white">Loading admin panel...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminAuth onAuthSuccess={handleAuthSuccess} />;
  }

  return <AdminPageContent />;
}
