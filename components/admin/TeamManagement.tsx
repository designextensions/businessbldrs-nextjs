"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Users, Plus, Edit, Trash2, Eye, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { TeamMember, InsertTeamMember } from "@/lib/db/schema";
import { ImageManager } from "@/components/ImageManager";

interface TeamManagementProps {
  teamMembers: TeamMember[];
  teamLoading: boolean;
  teamError: any;
}

export default function TeamManagement({
  teamMembers,
  teamLoading,
  teamError
}: TeamManagementProps) {
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [memberForm, setMemberForm] = useState<Partial<InsertTeamMember>>({
    name: '',
    title: '',
    email: '',
    description: '',
    fullBio: '',
    image: '',
    slug: '',
    displayOrder: 0,
    isActive: true
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const typedTeamMembers = teamMembers as TeamMember[];

  const addMemberMutation = useMutation({
    mutationFn: async (data: Partial<InsertTeamMember>) => {
      return await apiRequest('POST', '/api/team', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/team"] });
      setIsAddingMember(false);
      setMemberForm({
        name: '',
        title: '',
        email: '',
        description: '',
        fullBio: '',
        image: '',
        slug: '',
        displayOrder: 0,
        isActive: true
      });
      toast({
        title: "Success",
        description: "Team member added successfully",
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

  const updateMemberMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<InsertTeamMember> }) => {
      const response = await apiRequest('PUT', `/api/team/${id}`, data);
      return response;
    },
    onSuccess: async (response) => {
      // Invalidate all team-related queries and wait for fresh data
      await queryClient.invalidateQueries({ queryKey: ["/api/team"] });
      await queryClient.refetchQueries({ queryKey: ["/api/team"] }); // Force immediate refetch

      // Update the editing member with fresh data from the response
      if (response && response.member) {
        setEditingMember(response.member);
        setMemberForm({
          name: response.member.name,
          title: response.member.title || '',
          email: response.member.email || '',
          description: response.member.description || '',
          fullBio: response.member.fullBio || '',
          image: response.member.image || '',
          quote: response.member.quote || '',
          quoteAuthor: response.member.quoteAuthor || '',
          outsideWork: response.member.outsideWork || '',
          additionalPhotos: response.member.additionalPhotos || [],
          funTitle: response.member.funTitle || '',
          slug: response.member.slug,
          displayOrder: response.member.displayOrder || 0,
          isActive: response.member.isActive ?? true
        });
      }

      toast({
        title: "Success",
        description: "Team member updated successfully",
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

  const deleteMemberMutation = useMutation({
    mutationFn: async (id: number) => {
      return await apiRequest('DELETE', `/api/team/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/team"] });
      toast({
        title: "Success",
        description: "Team member deleted successfully",
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
    console.log("[FORM SUBMIT] Form submission started");
    console.log("[FORM SUBMIT] Current memberForm data:", JSON.stringify(memberForm, null, 2));
    console.log("[FORM SUBMIT] Editing member:", editingMember ? `ID ${editingMember.id}` : "None (creating new)");

    // Validate required fields
    if (!memberForm.name?.trim()) {
      toast({
        title: "Validation Error",
        description: "Name is required",
        variant: "destructive",
      });
      return;
    }

    if (!memberForm.slug?.trim()) {
      toast({
        title: "Validation Error",
        description: "Slug is required",
        variant: "destructive",
      });
      return;
    }

    if (editingMember) {
      console.log("[FORM SUBMIT] Updating existing member with ID:", editingMember.id);
      console.log("[FORM SUBMIT] Update data being sent:", JSON.stringify(memberForm, null, 2));
      updateMemberMutation.mutate({
        id: editingMember.id,
        data: memberForm
      });
    } else {
      console.log("[FORM SUBMIT] Creating new member");
      addMemberMutation.mutate(memberForm);
    }
  };

  const handleEdit = (member: TeamMember) => {
    setEditingMember(member);
    setMemberForm({
      name: member.name,
      title: member.title || '',
      email: member.email || '',
      description: member.description || '',
      fullBio: member.fullBio || '',
      image: member.image || '',
      quote: member.quote || '',
      quoteAuthor: member.quoteAuthor || '',
      outsideWork: member.outsideWork || '',
      additionalPhotos: member.additionalPhotos || [],
      funTitle: member.funTitle || '',
      slug: member.slug,
      displayOrder: member.displayOrder || 0,
      isActive: member.isActive ?? true
    });
    setIsAddingMember(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this team member?')) {
      deleteMemberMutation.mutate(id);
    }
  };

  if (teamLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Loading team members...</p>
      </div>
    );
  }

  if (teamError) {
    return (
      <div className="text-center py-8">
        <p className="text-red-400">Error loading team members</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="w-5 h-5" />
                Team Members
              </CardTitle>
              <CardDescription className="text-gray-400">
                Manage your team members and their profiles
              </CardDescription>
            </div>
            <Button
              onClick={() => {
                setIsAddingMember(true);
                setEditingMember(null);
                setMemberForm({
                  name: '',
                  title: '',
                  email: '',
                  description: '',
                  fullBio: '',
                  image: '',
                  slug: '',
                  displayOrder: 0,
                  isActive: true
                });
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-black"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Member
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {isAddingMember && (
            <div className="mb-6 p-6 bg-gray-800 rounded-lg border border-gray-600">
              <h3 className="text-lg font-semibold text-white mb-4">
                {editingMember ? 'Edit Team Member' : 'Add New Team Member'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Name *
                    </label>
                    <Input
                      value={memberForm.name}
                      onChange={(e) => setMemberForm(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter name"
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Title
                    </label>
                    <Input
                      value={memberForm.title}
                      onChange={(e) => setMemberForm(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter title"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      URL Slug *
                    </label>
                    <Input
                      value={memberForm.slug}
                      onChange={(e) => setMemberForm(prev => ({ ...prev, slug: e.target.value }))}
                      placeholder="e.g., john-doe"
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Display Order
                    </label>
                    <Input
                      type="number"
                      value={memberForm.displayOrder || 0}
                      onChange={(e) => setMemberForm(prev => ({ ...prev, displayOrder: parseInt(e.target.value) || 0 }))}
                      placeholder="Display order"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={memberForm.email}
                    onChange={(e) => setMemberForm(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter email address"
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>

                {/* Image Management Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Team Member Image
                  </label>
                  <ImageManager
                    currentImageUrl={memberForm.image || ''}
                    onImageChange={(imageUrl) => setMemberForm(prev => ({ ...prev, image: imageUrl }))}
                    placeholder="Enter team member image URL or upload a new image"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Short Description
                  </label>
                  <Textarea
                    value={memberForm.description}
                    onChange={(e) => setMemberForm(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Enter short description"
                    className="bg-gray-700 border-gray-600 text-white min-h-[80px]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Full Bio
                  </label>
                  <Textarea
                    value={memberForm.fullBio || ''}
                    onChange={(e) => setMemberForm(prev => ({ ...prev, fullBio: e.target.value }))}
                    placeholder="Enter full bio"
                    className="bg-gray-700 border-gray-600 text-white min-h-[120px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Quote
                    </label>
                    <Textarea
                      value={memberForm.quote || ''}
                      onChange={(e) => setMemberForm(prev => ({ ...prev, quote: e.target.value }))}
                      placeholder="Enter personal quote"
                      className="bg-gray-700 border-gray-600 text-white min-h-[80px]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Quote Author
                    </label>
                    <Input
                      value={memberForm.quoteAuthor || ''}
                      onChange={(e) => setMemberForm(prev => ({ ...prev, quoteAuthor: e.target.value }))}
                      placeholder="Author of the quote"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Outside Work
                  </label>
                  <Textarea
                    value={memberForm.outsideWork || ''}
                    onChange={(e) => setMemberForm(prev => ({ ...prev, outsideWork: e.target.value }))}
                    placeholder="What they do outside of work"
                    className="bg-gray-700 border-gray-600 text-white min-h-[80px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Fun Title
                    </label>
                    <Input
                      value={memberForm.funTitle || ''}
                      onChange={(e) => setMemberForm(prev => ({ ...prev, funTitle: e.target.value }))}
                      placeholder="Fun title (e.g., Director of Fun & Deal Making)"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Display Order
                    </label>
                    <Input
                      type="number"
                      value={memberForm.displayOrder || 0}
                      onChange={(e) => setMemberForm(prev => ({ ...prev, displayOrder: parseInt(e.target.value) || 0 }))}
                      placeholder="Display order"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black"
                    disabled={addMemberMutation.isPending || updateMemberMutation.isPending}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {editingMember ? 'Update' : 'Add'} Member
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      setIsAddingMember(false);
                      setEditingMember(null);
                    }}
                    className="bg-gray-600 hover:bg-gray-700 text-white"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}

          {typedTeamMembers.length === 0 ? (
            <div className="text-center py-8">
              <Users className="w-12 h-12 mx-auto mb-4 text-gray-600" />
              <p className="text-gray-400">No team members yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">Name</TableHead>
                    <TableHead className="text-gray-300">Title</TableHead>
                    <TableHead className="text-gray-300">Slug</TableHead>
                    <TableHead className="text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {typedTeamMembers.map((member) => (
                    <TableRow key={member.id} className="border-gray-700">
                      <TableCell className="text-white font-medium">
                        {member.name}
                      </TableCell>
                      <TableCell className="text-gray-300">
                        {member.title || '-'}
                      </TableCell>
                      <TableCell className="text-gray-300">
                        {member.slug}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEdit(member)}
                            className="text-blue-400 hover:text-blue-300"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            asChild
                            className="text-green-400 hover:text-green-300"
                          >
                            <Link href={`/team/${member.slug}`}>
                              <Eye className="w-4 h-4" />
                            </Link>
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(member.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
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
    </div>
  );
}
