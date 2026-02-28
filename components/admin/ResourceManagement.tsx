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
import { Download, Plus, Edit, Trash2, BarChart, Star, Mail } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import type { DownloadableResource } from "@/lib/db/schema";
import { useToast } from "@/hooks/use-toast";

interface ResourceManagementProps {
  downloadableResources: DownloadableResource[];
  resourcesLoading: boolean;
  resourcesError: any;
  queryClient: ReturnType<typeof useQueryClient>;
  toast: ReturnType<typeof useToast>["toast"];
}

export default function ResourceManagement({
  downloadableResources,
  resourcesLoading,
  resourcesError,
  queryClient,
  toast,
}: ResourceManagementProps) {
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

  const typedDownloadableResources = downloadableResources as DownloadableResource[];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingResource) {
      updateResourceMutation.mutate({
        id: editingResource.id,
        data: resourceForm
      });
    } else {
      createResourceMutation.mutate(resourceForm);
    }
  };

  return (
    <div className="space-y-8">
      {/* Add New Resource Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Download className="w-5 h-5" />
              Add New Resource
            </CardTitle>
            <CardDescription className="text-gray-400">
              Add PDFs, DOCx files, or links to Google Docs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => {
                setIsAddingResource(true);
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
              }}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Resource
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart className="w-5 h-5" />
              Resource Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{typedDownloadableResources.length}</p>
                <p className="text-sm text-gray-400">Total Resources</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-400">
                  {typedDownloadableResources.filter(r => r.featured).length}
                </p>
                <p className="text-sm text-gray-400">Featured</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resource Form Modal */}
      {(isAddingResource || editingResource) && (
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">
              {editingResource ? 'Edit Resource' : 'Add New Resource'}
            </CardTitle>
            <CardDescription className="text-gray-400">
              {editingResource ? 'Update resource information' : 'Enter the details for the new resource'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-white">Title</label>
                  <Input
                    type="text"
                    value={resourceForm.title}
                    onChange={(e) => setResourceForm({ ...resourceForm, title: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Resource title"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white">Type</label>
                  <Input
                    type="text"
                    value={resourceForm.type}
                    onChange={(e) => setResourceForm({ ...resourceForm, type: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Template, Guide, Checklist, etc."
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-white">Description</label>
                <Textarea
                  value={resourceForm.description}
                  onChange={(e) => setResourceForm({ ...resourceForm, description: e.target.value })}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="Brief description of the resource"
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-white">Size</label>
                  <Input
                    type="text"
                    value={resourceForm.size}
                    onChange={(e) => setResourceForm({ ...resourceForm, size: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="2.1 MB"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white">Category</label>
                  <Input
                    type="text"
                    value={resourceForm.category}
                    onChange={(e) => setResourceForm({ ...resourceForm, category: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Marketing, SEO, etc."
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white">Icon</label>
                  <Input
                    type="text"
                    value={resourceForm.icon}
                    onChange={(e) => setResourceForm({ ...resourceForm, icon: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="FileText, CheckCircle, etc."
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-white">Download URL</label>
                  <Input
                    type="url"
                    value={resourceForm.downloadUrl}
                    onChange={(e) => setResourceForm({ ...resourceForm, downloadUrl: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="https://example.com/file.pdf"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white">File URL</label>
                  <Input
                    type="url"
                    value={resourceForm.fileUrl}
                    onChange={(e) => setResourceForm({ ...resourceForm, fileUrl: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="https://example.com/file.pdf"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-white">File Type</label>
                <Select
                  value={resourceForm.fileType}
                  onValueChange={(value: 'pdf' | 'docx' | 'link') =>
                    setResourceForm({ ...resourceForm, fileType: value })
                  }
                >
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Select file type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="docx">DOCx / Excel</SelectItem>
                    <SelectItem value="link">Google Docs Link</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="featured"
                    checked={resourceForm.featured}
                    onCheckedChange={(checked) =>
                      setResourceForm({ ...resourceForm, featured: checked as boolean })
                    }
                  />
                  <label htmlFor="featured" className="text-sm text-white">Featured Resource</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="requiresEmail"
                    checked={resourceForm.requiresEmail}
                    onCheckedChange={(checked) =>
                      setResourceForm({ ...resourceForm, requiresEmail: checked as boolean })
                    }
                  />
                  <label htmlFor="requiresEmail" className="text-sm text-white">Requires Email</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isActive"
                    checked={resourceForm.isActive}
                    onCheckedChange={(checked) =>
                      setResourceForm({ ...resourceForm, isActive: checked as boolean })
                    }
                  />
                  <label htmlFor="isActive" className="text-sm text-white">Active</label>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsAddingResource(false);
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
                  }}
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!resourceForm.title || !resourceForm.fileUrl || createResourceMutation.isPending || updateResourceMutation.isPending}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                >
                  {editingResource ? 'Update Resource' : 'Add Resource'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Resources List */}
      <Card className="bg-gray-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Downloadable Resources</CardTitle>
          <CardDescription className="text-gray-400">
            Manage your downloadable resources and templates
          </CardDescription>
        </CardHeader>
        <CardContent>
          {resourcesLoading ? (
            <div className="text-center py-8">
              <p className="text-gray-400">Loading resources...</p>
            </div>
          ) : resourcesError ? (
            <div className="text-center py-8">
              <p className="text-red-400">Error loading resources. Please try again.</p>
            </div>
          ) : typedDownloadableResources.length === 0 ? (
            <div className="text-center py-8">
              <Download className="w-12 h-12 mx-auto mb-4 text-gray-600" />
              <p className="text-gray-400 mb-4">No downloadable resources yet</p>
              <Button
                onClick={() => setIsAddingResource(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add First Resource
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {typedDownloadableResources.map((resource) => (
                <div key={resource.id} className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-white">{resource.title}</h3>
                        {resource.featured && (
                          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        <Badge
                          className={
                            resource.fileType === 'pdf' ? 'bg-red-500/20 text-red-400' :
                            resource.fileType === 'docx' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-green-500/20 text-green-400'
                          }
                        >
                          {(resource.fileType || 'FILE').toUpperCase()}
                        </Badge>
                        {resource.requiresEmail && (
                          <span className="text-xs text-orange-400">Email Required</span>
                        )}
                      </div>

                      {resource.description && (
                        <p className="text-sm text-gray-300 mb-2 line-clamp-2">{resource.description}</p>
                      )}

                      {resource.fileUrl && (
                        <a
                          href={resource.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:text-blue-300 break-all"
                        >
                          {resource.fileUrl}
                        </a>
                      )}
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingResource(resource);
                          setResourceForm({
                            title: resource.title,
                            description: resource.description || '',
                            type: resource.type || '',
                            size: resource.size || '',
                            category: resource.category || '',
                            downloadUrl: resource.downloadUrl || '',
                            icon: resource.icon || '',
                            fileUrl: resource.fileUrl || '',
                            fileType: (resource.fileType as 'pdf' | 'docx' | 'link') || 'pdf',
                            featured: resource.featured || false,
                            requiresEmail: resource.requiresEmail || false,
                            isActive: resource.isActive ?? true
                          });
                        }}
                        className="border-gray-600 text-gray-300 hover:bg-gray-800"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          if (confirm(`Are you sure you want to delete "${resource.title}"? This action cannot be undone.`)) {
                            deleteResourceMutation.mutate(resource.id);
                          }
                        }}
                        className="border-red-600 text-red-400 hover:bg-red-900/20"
                        disabled={deleteResourceMutation.isPending}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
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
