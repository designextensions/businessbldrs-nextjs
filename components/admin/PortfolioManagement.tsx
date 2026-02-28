"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { FolderOpen, Plus, Edit, Trash2, Eye, Save, X, Star, Upload, Image } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { lazy, Suspense } from "react";
import type { PortfolioItem, InsertPortfolioItem } from "@/lib/db/schema";


// Lazy load ImageManager to reduce main bundle size
const ImageManager = lazy(() => import("@/components/ImageManager").then(module => ({ default: module.ImageManager })));

interface PortfolioManagementProps {
  portfolioItems: PortfolioItem[];
  portfolioLoading: boolean;
  portfolioError: any;
}

export default function PortfolioManagement({
  portfolioItems,
  portfolioLoading,
  portfolioError
}: PortfolioManagementProps) {
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [portfolioForm, setPortfolioForm] = useState<Partial<InsertPortfolioItem>>({
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

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const typedPortfolioItems = portfolioItems as PortfolioItem[];

  // Function to force refresh portfolio data
  const forceRefreshPortfolio = async () => {
    console.log('[PORTFOLIO REFRESH] Forcing complete portfolio data refresh');

    // Clear all cached portfolio data completely
    queryClient.removeQueries({ queryKey: ["/api/portfolio"] });

    // Force a fresh fetch
    await queryClient.refetchQueries({
      queryKey: ["/api/portfolio"],
      type: 'active'
    });

    toast({
      title: "Refreshed",
      description: "Portfolio data has been refreshed",
    });
  };

  // Automatic cleanup function for stale cache entries
  React.useEffect(() => {
    // Clear any stale cache entries on component mount
    console.log('[PORTFOLIO CLEANUP] Running automatic cache cleanup');
    const cleanupStaleCache = () => {
      queryClient.removeQueries({
        queryKey: ["/api/portfolio"],
        exact: true
      });
    };
    cleanupStaleCache();
  }, [queryClient]);

  const addPortfolioMutation = useMutation({
    mutationFn: async (data: Partial<InsertPortfolioItem>) => {
      return await apiRequest('POST', '/api/portfolio', data);
    },
    onSuccess: async () => {
      queryClient.removeQueries({ queryKey: ["/api/portfolio"] });
      await queryClient.refetchQueries({
        queryKey: ["/api/portfolio"],
        type: 'active'
      });
      setIsAddingItem(false);
      resetForm();
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
    mutationFn: async ({ id, data }: { id: number; data: Partial<InsertPortfolioItem> }) => {
      const response = await apiRequest('PUT', `/api/portfolio/${id}`, data);
      return await response.json();
    },
    onSuccess: async (response) => {
      console.log('[PORTFOLIO FORM UPDATE] Update successful, refreshing cache');

      // Force complete cache refresh after update
      queryClient.removeQueries({ queryKey: ["/api/portfolio"] });
      await queryClient.refetchQueries({
        queryKey: ["/api/portfolio"],
        type: 'active'
      });

      setIsAddingItem(false);
      setEditingItem(null);
      resetForm();

      toast({
        title: "Success",
        description: "Portfolio item updated successfully",
      });
    },
    onError: (error: Error) => {
      console.error('[PORTFOLIO FORM UPDATE] Update failed:', error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deletePortfolioMutation = useMutation({
    mutationFn: async (id: number) => {
      console.log(`[PORTFOLIO DELETE] Initiating deletion for ID: ${id}`);
      const response = await apiRequest('DELETE', `/api/portfolio/${id}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Delete failed');
      }
      return await response.json();
    },
    onSuccess: async (response, id) => {
      console.log(`[PORTFOLIO DELETE] Successfully deleted portfolio item ID: ${id}`);

      // Step 1: Completely clear the cache
      queryClient.removeQueries({ queryKey: ["/api/portfolio"] });

      // Step 2: Force a fresh fetch from the server
      await queryClient.refetchQueries({
        queryKey: ["/api/portfolio"],
        type: 'active'
      });

      toast({
        title: "Success",
        description: "Portfolio item deleted successfully",
      });
    },
    onError: async (error: Error, id) => {
      console.error(`[PORTFOLIO DELETE] Failed to delete portfolio item ID: ${id}`, error);

      // Always force a refresh when there's an error to sync state
      queryClient.removeQueries({ queryKey: ["/api/portfolio"] });
      await queryClient.refetchQueries({ queryKey: ["/api/portfolio"] });

      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[PORTFOLIO SUBMIT] Form submission started");
    console.log("[PORTFOLIO SUBMIT] Current portfolioForm data:", JSON.stringify(portfolioForm, null, 2));
    console.log("[PORTFOLIO SUBMIT] Editing item:", editingItem ? `ID ${editingItem.id}` : "None (creating new)");

    // Validate required fields
    if (!portfolioForm.title?.trim()) {
      toast({
        title: "Validation Error",
        description: "Title is required",
        variant: "destructive",
      });
      return;
    }

    if (editingItem) {
      console.log("[PORTFOLIO SUBMIT] Updating existing portfolio item with ID:", editingItem.id);
      console.log("[PORTFOLIO SUBMIT] Update data being sent:", JSON.stringify(portfolioForm, null, 2));
      updatePortfolioMutation.mutate({
        id: editingItem.id,
        data: portfolioForm
      });
    } else {
      console.log("[PORTFOLIO SUBMIT] Creating new portfolio item");
      addPortfolioMutation.mutate(portfolioForm);
    }
  };

  const handleEdit = (item: PortfolioItem) => {
    setEditingItem(item);
    setPortfolioForm({
      title: item.title,
      description: item.description || '',
      image: item.image || '',
      url: item.url || '',
      categories: item.categories || [],
      serviceType: item.serviceType || '',
      clientName: item.clientName || '',
      featured: item.featured ?? false,
      orderIndex: item.orderIndex || 0,
      isActive: item.isActive ?? true
    });
    setIsAddingItem(true);
  };

  const handleDelete = (id: number) => {
    // Prevent multiple deletion attempts
    if (deletePortfolioMutation.isPending) {
      console.log(`[PORTFOLIO DELETE] Delete already in progress for ID: ${id}, ignoring duplicate request`);
      return;
    }

    if (confirm('Are you sure you want to delete this portfolio item?')) {
      console.log(`[PORTFOLIO DELETE] User confirmed deletion for ID: ${id}`);
      deletePortfolioMutation.mutate(id);
    }
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    setPortfolioForm(prev => ({
      ...prev,
      categories: checked
        ? [...(prev.categories || []), category]
        : (prev.categories || []).filter(c => c !== category)
    }));
  };

  if (portfolioLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Loading portfolio items...</p>
      </div>
    );
  }

  if (portfolioError) {
    return (
      <div className="text-center py-8">
        <p className="text-red-400">Error loading portfolio items</p>
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
                <FolderOpen className="w-5 h-5" />
                Portfolio Items
              </CardTitle>
              <CardDescription className="text-gray-400">
                Manage your portfolio showcase items
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={forceRefreshPortfolio}
                variant="outline"
                className="border-blue-600 text-blue-300 hover:bg-blue-900"
                data-testid="button-sync-portfolio"
              >
                Sync DB
              </Button>
              <Button
                onClick={forceRefreshPortfolio}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
                data-testid="button-refresh-portfolio"
              >
                Refresh
              </Button>
              <Button
                onClick={() => {
                  setIsAddingItem(true);
                  setEditingItem(null);
                  resetForm();
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
                data-testid="button-add-portfolio"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {(isAddingItem || editingItem) && (
            <div className="space-y-6 mb-8 p-6 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white">
                {editingItem ? 'Edit Portfolio Item' : 'Add New Portfolio Item'}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Title *
                    </label>
                    <Input
                      value={portfolioForm.title}
                      onChange={(e) => setPortfolioForm(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter project title"
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                      data-testid="input-title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Client Name
                    </label>
                    <Input
                      value={portfolioForm.clientName || ''}
                      onChange={(e) => setPortfolioForm(prev => ({ ...prev, clientName: e.target.value }))}
                      placeholder="Enter client name"
                      className="bg-gray-700 border-gray-600 text-white"
                      data-testid="input-client-name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Description
                  </label>
                  <Textarea
                    value={portfolioForm.description || ''}
                    onChange={(e) => setPortfolioForm(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Enter project description"
                    className="bg-gray-700 border-gray-600 text-white min-h-[80px]"
                    data-testid="textarea-description"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Project URL
                    </label>
                    <Input
                      value={portfolioForm.url || ''}
                      onChange={(e) => setPortfolioForm(prev => ({ ...prev, url: e.target.value }))}
                      placeholder="https://example.com"
                      className="bg-gray-700 border-gray-600 text-white"
                      data-testid="input-url"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Portfolio Item Image
                    </label>
                    <Suspense fallback={<div className="animate-pulse bg-gray-700 h-20 rounded"></div>}>
                      <ImageManager
                        currentImageUrl={portfolioForm.image || ''}
                        onImageChange={(url) => setPortfolioForm(prev => ({ ...prev, image: url }))}
                        placeholder="Upload or enter portfolio image URL"
                      />
                    </Suspense>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Service Type
                    </label>
                    <Input
                      value={portfolioForm.serviceType}
                      onChange={(e) => setPortfolioForm(prev => ({ ...prev, serviceType: e.target.value }))}
                      placeholder="e.g., web, branding, marketing"
                      className="bg-gray-700 border-gray-600 text-white"
                      data-testid="input-service-type"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Categories (comma separated)
                    </label>
                    <Input
                      value={portfolioForm.categories?.join(', ') || ''}
                      onChange={(e) => setPortfolioForm(prev => ({
                        ...prev,
                        categories: e.target.value.split(',').map(c => c.trim()).filter(c => c.length > 0)
                      }))}
                      placeholder="Web, Design, Marketing"
                      className="bg-gray-700 border-gray-600 text-white"
                      data-testid="input-categories"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Order Index
                    </label>
                    <Input
                      type="number"
                      value={portfolioForm.orderIndex || 0}
                      onChange={(e) => setPortfolioForm(prev => ({ ...prev, orderIndex: parseInt(e.target.value) || 0 }))}
                      placeholder="0"
                      className="bg-gray-700 border-gray-600 text-white"
                      data-testid="input-order"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="featured"
                      checked={portfolioForm.featured || false}
                      onCheckedChange={(checked) => setPortfolioForm(prev => ({ ...prev, featured: !!checked }))}
                      data-testid="checkbox-featured"
                    />
                    <label htmlFor="featured" className="text-sm font-medium text-gray-300 cursor-pointer">
                      Featured Project
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="active"
                      checked={portfolioForm.isActive || false}
                      onCheckedChange={(checked) => setPortfolioForm(prev => ({ ...prev, isActive: !!checked }))}
                      data-testid="checkbox-active"
                    />
                    <label htmlFor="active" className="text-sm font-medium text-gray-300 cursor-pointer">
                      Active
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black"
                    disabled={addPortfolioMutation.isPending || updatePortfolioMutation.isPending}
                    data-testid="button-save"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {editingItem ? 'Update' : 'Add'} Item
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      setIsAddingItem(false);
                      setEditingItem(null);
                      resetForm();
                    }}
                    className="bg-gray-600 hover:bg-gray-700 text-white"
                    data-testid="button-cancel"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}

          {typedPortfolioItems.length === 0 ? (
            <div className="text-center py-8">
              <FolderOpen className="w-12 h-12 mx-auto mb-4 text-gray-600" />
              <p className="text-gray-400">No portfolio items yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">Title</TableHead>
                    <TableHead className="text-gray-300">Client</TableHead>
                    <TableHead className="text-gray-300">Service</TableHead>
                    <TableHead className="text-gray-300">Featured</TableHead>
                    <TableHead className="text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {typedPortfolioItems.map((item) => (
                    <TableRow key={item.id} className="border-gray-700">
                      <TableCell className="text-white font-medium">
                        {item.title}
                      </TableCell>
                      <TableCell className="text-gray-300">
                        {item.clientName || '-'}
                      </TableCell>
                      <TableCell className="text-gray-300">
                        {item.serviceType || '-'}
                      </TableCell>
                      <TableCell>
                        {item.featured && (
                          <Star className="w-4 h-4 text-yellow-500" />
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEdit(item)}
                            className="text-blue-400 hover:text-blue-300"
                            data-testid={`button-edit-${item.id}`}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          {item.url && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => window.open(item.url!, '_blank')}
                              className="text-green-400 hover:text-green-300"
                              data-testid={`button-view-${item.id}`}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(item.id)}
                            disabled={deletePortfolioMutation.isPending}
                            className="text-red-400 hover:text-red-300 disabled:opacity-50"
                            data-testid={`button-delete-${item.id}`}
                          >
                            {deletePortfolioMutation.isPending ? (
                              <div className="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <Trash2 className="w-4 h-4" />
                            )}
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
