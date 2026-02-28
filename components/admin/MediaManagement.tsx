"use client";

import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Image as ImageIcon,
  Edit,
  Trash2,
  Eye,
  Save,
  X,
  RefreshCw,
  Search,
  Filter
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { MediaAsset, InsertMediaAsset } from "@/lib/db/schema";

export default function MediaManagement() {
  const [isEditingAsset, setIsEditingAsset] = useState<MediaAsset | null>(null);
  const [assetForm, setAssetForm] = useState<Partial<InsertMediaAsset>>({
    title: '',
    slug: '',
    altText: '',
    description: '',
    category: 'general',
    tags: []
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch media assets
  const { data: mediaAssets = [], isLoading, error } = useQuery({
    queryKey: ["/api/media-assets"],
    staleTime: 0, gcTime: 0, refetchOnMount: 'always',
    queryFn: async () => {
      const response = await fetch("/api/media-assets");
      if (!response.ok) throw new Error("Failed to fetch media assets");
      return response.json();
    }
  });

  // Sync media assets from filesystem
  const syncAssetsMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest('POST', '/api/media-assets/sync', {});
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["/api/media-assets"] });
      toast({
        title: "Success",
        description: `Synced ${data.syncedCount} media assets from filesystem`,
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

  // Update media asset
  const updateAssetMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<InsertMediaAsset> }) => {
      return await apiRequest('PUT', `/api/media-assets/${id}`, data);
    },
    onSuccess: (updatedAsset: any, variables) => {
      queryClient.invalidateQueries({ queryKey: ["/api/media-assets"] });
      setIsEditingAsset(null);

      // Check if slug was auto-modified
      if (variables.data.slug && updatedAsset.slug !== variables.data.slug) {
        toast({
          title: "Success",
          description: `Media asset updated successfully. Slug was automatically changed to "${updatedAsset.slug}" to avoid conflicts.`,
        });
      } else {
        toast({
          title: "Success",
          description: "Media asset updated successfully",
        });
      }
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Delete media asset
  const deleteAssetMutation = useMutation({
    mutationFn: async (id: number) => {
      return await apiRequest('DELETE', `/api/media-assets/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/media-assets"] });
      toast({
        title: "Success",
        description: "Media asset deleted successfully",
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

  const handleEdit = (asset: MediaAsset) => {
    setIsEditingAsset(asset);
    setAssetForm({
      title: asset.title || '',
      slug: asset.slug || '',
      altText: asset.altText || '',
      description: asset.description || '',
      category: asset.category || 'general',
      tags: asset.tags || []
    });
  };

  const handleSave = () => {
    if (!isEditingAsset) return;

    updateAssetMutation.mutate({
      id: isEditingAsset.id,
      data: {
        ...assetForm,
        tags: typeof assetForm.tags === 'string'
          ? (assetForm.tags as string).split(',').map(tag => tag.trim()).filter(Boolean)
          : assetForm.tags
      }
    });
  };

  const handleDelete = (id: number, filename: string) => {
    if (confirm(`Are you sure you want to delete "${filename}"? This will only remove it from the database, not the file system.`)) {
      deleteAssetMutation.mutate(id);
    }
  };

  const handleTagsChange = (value: string) => {
    setAssetForm(prev => ({ ...prev, tags: value as any }));
  };

  // Filter assets based on search term and category
  const filteredAssets = mediaAssets.filter((asset: MediaAsset) => {
    const matchesSearch = !searchTerm ||
      asset.filename.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (asset.title && asset.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = categoryFilter === 'all' || asset.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = [...new Set(mediaAssets.map((asset: MediaAsset) => asset.category))].filter(Boolean);

  const formatFileSize = (bytes: number | null) => {
    if (!bytes) return 'Unknown';
    const kb = bytes / 1024;
    if (kb < 1024) return `${kb.toFixed(1)} KB`;
    const mb = kb / 1024;
    return `${mb.toFixed(1)} MB`;
  };

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Loading media assets...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-400">Error loading media assets</p>
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
                <ImageIcon className="w-5 h-5" />
                Media Management
              </CardTitle>
              <CardDescription className="text-gray-400">
                Manage titles, slugs, and metadata for all locally stored images
              </CardDescription>
            </div>
            <Button
              onClick={() => syncAssetsMutation.mutate()}
              disabled={syncAssetsMutation.isPending}
              className="bg-blue-500 hover:bg-blue-600 text-white"
              data-testid="button-sync-media"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Sync Assets
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="mb-6 flex gap-4 items-center">
            <div className="flex-1">
              <Input
                placeholder="Search by filename or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                data-testid="input-search-media"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48 bg-gray-700 border-gray-600 text-white" data-testid="select-category-filter">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={String(category)} value={String(category)}>
                    {String(category).charAt(0).toUpperCase() + String(category).slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Stats */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-2xl font-bold text-white">{mediaAssets.length}</p>
              <p className="text-gray-400 text-sm">Total Assets</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-2xl font-bold text-white">{categories.length}</p>
              <p className="text-gray-400 text-sm">Categories</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-2xl font-bold text-white">{filteredAssets.length}</p>
              <p className="text-gray-400 text-sm">Filtered Results</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-2xl font-bold text-white">
                {formatFileSize(mediaAssets.reduce((sum: number, asset: MediaAsset) => sum + (asset.fileSize || 0), 0))}
              </p>
              <p className="text-gray-400 text-sm">Total Size</p>
            </div>
          </div>

          {filteredAssets.length === 0 ? (
            <div className="text-center py-8">
              <ImageIcon className="w-12 h-12 mx-auto mb-4 text-gray-600" />
              <p className="text-gray-400">
                {searchTerm || categoryFilter !== 'all' ? 'No assets match your filters' : 'No media assets found'}
              </p>
              {!searchTerm && categoryFilter === 'all' && (
                <p className="text-gray-500 text-sm mt-2">
                  Click "Sync Assets" to scan your attached_assets folder
                </p>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">Preview</TableHead>
                    <TableHead className="text-gray-300">Filename</TableHead>
                    <TableHead className="text-gray-300">Title</TableHead>
                    <TableHead className="text-gray-300">Slug</TableHead>
                    <TableHead className="text-gray-300">Category</TableHead>
                    <TableHead className="text-gray-300">Size</TableHead>
                    <TableHead className="text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAssets.map((asset: MediaAsset) => (
                    <TableRow key={asset.id} className="border-gray-700">
                      <TableCell>
                        <div className="w-16 h-16 bg-gray-800 rounded flex items-center justify-center overflow-hidden">
                          <img
                            src={`/attached_assets/${asset.filename}`}
                            alt={asset.altText || asset.title || asset.filename}
                            className="max-w-full max-h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                          <ImageIcon className="w-6 h-6 text-gray-500 hidden" />
                        </div>
                      </TableCell>
                      <TableCell className="text-white font-medium" data-testid={`text-filename-${asset.id}`}>
                        {asset.filename}
                      </TableCell>
                      <TableCell className="text-gray-300" data-testid={`text-title-${asset.id}`}>
                        {asset.title || '-'}
                      </TableCell>
                      <TableCell className="text-gray-300" data-testid={`text-slug-${asset.id}`}>
                        {asset.slug ? (
                          <code className="bg-gray-800 px-2 py-1 rounded text-xs">
                            {asset.slug}
                          </code>
                        ) : '-'}
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                          {asset.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-300">
                        {formatFileSize(asset.fileSize)}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="text-green-400 hover:text-green-300"
                                data-testid={`button-preview-${asset.id}`}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl bg-gray-900 border-gray-700">
                              <DialogHeader>
                                <DialogTitle className="text-white">
                                  {asset.title || asset.filename}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="text-center">
                                <img
                                  src={`/attached_assets/${asset.filename}`}
                                  alt={asset.altText || asset.title || asset.filename}
                                  className="max-w-full max-h-[70vh] object-contain mx-auto"
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEdit(asset)}
                            className="text-blue-400 hover:text-blue-300"
                            data-testid={`button-edit-${asset.id}`}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(asset.id, asset.filename)}
                            className="text-red-400 hover:text-red-300"
                            data-testid={`button-delete-${asset.id}`}
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

      {/* Edit Dialog */}
      {isEditingAsset && (
        <Dialog open={!!isEditingAsset} onOpenChange={() => setIsEditingAsset(null)}>
          <DialogContent
            className="max-w-2xl bg-gray-900 border-gray-700"
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 9999
            }}
          >
            <DialogHeader>
              <DialogTitle className="text-white">
                Edit Media Asset: {isEditingAsset.filename}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Title
                  </label>
                  <Input
                    value={assetForm.title || ''}
                    onChange={(e) => setAssetForm(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter title"
                    className="bg-gray-700 border-gray-600 text-white"
                    data-testid="input-edit-title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    URL Slug
                  </label>
                  <Input
                    value={assetForm.slug || ''}
                    onChange={(e) => setAssetForm(prev => ({ ...prev, slug: e.target.value }))}
                    placeholder="e.g., hero-image"
                    className="bg-gray-700 border-gray-600 text-white"
                    data-testid="input-edit-slug"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Category
                  </label>
                  <Select
                    value={assetForm.category ?? undefined}
                    onValueChange={(value) => setAssetForm(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white" data-testid="select-edit-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="portfolio">Portfolio</SelectItem>
                      <SelectItem value="team">Team</SelectItem>
                      <SelectItem value="branding">Branding</SelectItem>
                      <SelectItem value="screenshots">Screenshots</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Tags (comma-separated)
                  </label>
                  <Input
                    value={Array.isArray(assetForm.tags) ? assetForm.tags.join(', ') : assetForm.tags || ''}
                    onChange={(e) => handleTagsChange(e.target.value)}
                    placeholder="e.g., hero, homepage, marketing"
                    className="bg-gray-700 border-gray-600 text-white"
                    data-testid="input-edit-tags"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Alt Text
                </label>
                <Input
                  value={assetForm.altText || ''}
                  onChange={(e) => setAssetForm(prev => ({ ...prev, altText: e.target.value }))}
                  placeholder="Describe the image for accessibility"
                  className="bg-gray-700 border-gray-600 text-white"
                  data-testid="input-edit-alt"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Description
                </label>
                <Textarea
                  value={assetForm.description || ''}
                  onChange={(e) => setAssetForm(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Enter description"
                  className="bg-gray-700 border-gray-600 text-white min-h-[80px]"
                  data-testid="textarea-edit-description"
                />
              </div>

              <div className="flex gap-4 justify-end">
                <Button
                  onClick={() => setIsEditingAsset(null)}
                  className="bg-gray-600 hover:bg-gray-700 text-white"
                  data-testid="button-cancel-edit"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={updateAssetMutation.isPending}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black"
                  data-testid="button-save-edit"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
