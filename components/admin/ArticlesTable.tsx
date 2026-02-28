"use client";

import React, { useState, useMemo } from 'react';
import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  FileText, AlertCircle, Plus, Edit, Eye, Trash2,
  Check, X, Save, ArrowUpDown, ChevronUp, ChevronDown, Star
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { BlogArticle } from "@/lib/db/schema";

interface ArticlesTableProps {
  articles: BlogArticle[];
  articlesLoading: boolean;
  articlesError: any;
}

type SortField = 'title' | 'author' | 'category' | 'date';
type SortConfig = { field: SortField; direction: 'asc' | 'desc' };

export default function ArticlesTable({
  articles,
  articlesLoading,
  articlesError
}: ArticlesTableProps) {
  const [selectedArticles, setSelectedArticles] = useState<number[]>([]);
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [editingCell, setEditingCell] = useState<{ articleId: number; field: string } | null>(null);
  const [editingValue, setEditingValue] = useState('');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const typedArticles = articles as BlogArticle[];

  // Sorting logic
  const sortedArticles = useMemo(() => {
    if (!sortConfig) return typedArticles;

    return [...typedArticles].sort((a, b) => {
      const aValue = a[sortConfig.field as keyof BlogArticle];
      const bValue = b[sortConfig.field as keyof BlogArticle];

      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [typedArticles, sortConfig]);

  const handleSort = (field: SortField) => {
    setSortConfig(current => {
      if (!current || current.field !== field) {
        return { field, direction: 'asc' };
      }
      if (current.direction === 'asc') {
        return { field, direction: 'desc' };
      }
      return null;
    });
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedArticles(sortedArticles.map(a => a.id));
    } else {
      setSelectedArticles([]);
    }
  };

  const handleSelectArticle = (articleId: number, checked: boolean) => {
    if (checked) {
      setSelectedArticles([...selectedArticles, articleId]);
    } else {
      setSelectedArticles(selectedArticles.filter(id => id !== articleId));
    }
  };

  const handleCellEdit = (articleId: number, field: string, value: string) => {
    setEditingCell({ articleId, field });
    setEditingValue(value);
  };

  const handleCellSave = async () => {
    if (!editingCell) return;

    try {
      await apiRequest('PUT', `/api/blog-articles/${editingCell.articleId}`, {
        [editingCell.field]: editingValue
      });

      queryClient.invalidateQueries({ queryKey: ["/api/blog-articles"] });
      toast({
        title: "Success",
        description: "Article updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update article",
        variant: "destructive",
      });
    }

    setEditingCell(null);
    setEditingValue('');
  };

  const handleCellCancel = () => {
    setEditingCell(null);
    setEditingValue('');
  };

  const updateArticleMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<BlogArticle> }) => {
      return await apiRequest('PUT', `/api/blog-articles/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog-articles"] });
    },
  });

  const deleteArticleMutation = useMutation({
    mutationFn: async (id: number) => {
      return await apiRequest('DELETE', `/api/blog-articles/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog-articles"] });
      toast({
        title: "Success",
        description: "Article deleted successfully",
      });
    },
  });

  const handleBulkPublish = async (isPublished: boolean) => {
    for (const id of selectedArticles) {
      await updateArticleMutation.mutateAsync({
        id,
        data: { isPublished }
      });
    }
    toast({
      title: "Success",
      description: `${selectedArticles.length} articles ${isPublished ? 'published' : 'unpublished'}`,
    });
    setSelectedArticles([]);
  };

  const handleBulkDelete = async () => {
    if (!confirm(`Are you sure you want to delete ${selectedArticles.length} articles?`)) return;

    for (const id of selectedArticles) {
      await deleteArticleMutation.mutateAsync(id);
    }
    setSelectedArticles([]);
  };

  const handleToggleFeatured = async (articleId: number, currentStatus: boolean) => {
    await updateArticleMutation.mutateAsync({
      id: articleId,
      data: { isFeatured: !currentStatus }
    });
    toast({
      title: "Success",
      description: `Article ${!currentStatus ? 'featured' : 'unfeatured'}`,
    });
  };

  const formatDate = (dateString: string | Date | null) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (articlesLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Loading articles...</p>
      </div>
    );
  }

  if (articlesError) {
    return (
      <Alert className="border-red-500 bg-red-500/10">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription className="text-white">
          Failed to load articles: {(articlesError as Error).message}
        </AlertDescription>
      </Alert>
    );
  }

  if (typedArticles.length === 0) {
    return (
      <div className="text-center py-8">
        <FileText className="w-12 h-12 mx-auto mb-4 text-gray-600" />
        <p className="text-gray-400 mb-2">No articles found</p>
        <p className="text-sm text-gray-500">Import from WordPress or create your first article</p>
      </div>
    );
  }

  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white">All Articles</CardTitle>
            <CardDescription className="text-gray-400">
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
                className="bg-gray-600 hover:bg-gray-700 text-white"
              >
                <X className="w-4 h-4 mr-1" />
                Unpublish ({selectedArticles.length})
              </Button>
              <Button
                size="sm"
                onClick={handleBulkDelete}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Delete ({selectedArticles.length})
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700 hover:bg-gray-800/50">
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedArticles.length === sortedArticles.length && sortedArticles.length > 0}
                    onCheckedChange={handleSelectAll}
                    className="border-gray-500"
                  />
                </TableHead>
                <TableHead className="text-gray-300">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort('title')}
                    className="h-auto p-0 text-left text-gray-300 hover:text-white"
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
                <TableHead className="text-gray-300">Author</TableHead>
                <TableHead className="text-gray-300">Category</TableHead>
                <TableHead className="text-gray-300">Date</TableHead>
                <TableHead className="text-gray-300">Status</TableHead>
                <TableHead className="text-gray-300">Featured</TableHead>
                <TableHead className="text-gray-300 w-24">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedArticles.map((article) => (
                <TableRow key={article.id} className="border-gray-700 hover:bg-gray-800/50">
                  <TableCell>
                    <Checkbox
                      checked={selectedArticles.includes(article.id)}
                      onCheckedChange={(checked) => handleSelectArticle(article.id, checked as boolean)}
                      className="border-gray-500"
                    />
                  </TableCell>
                  <TableCell className="font-medium text-white max-w-xs">
                    {editingCell?.articleId === article.id && editingCell?.field === 'title' ? (
                      <div className="flex items-center gap-2">
                        <Input
                          value={editingValue}
                          onChange={(e) => setEditingValue(e.target.value)}
                          className="bg-gray-800 border-gray-600 text-white text-sm"
                          autoFocus
                        />
                        <Button size="sm" onClick={handleCellSave} className="bg-green-600 hover:bg-green-700">
                          <Save className="w-3 h-3" />
                        </Button>
                        <Button size="sm" onClick={handleCellCancel} className="bg-red-600 hover:bg-red-700">
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    ) : (
                      <div
                        className="cursor-pointer hover:bg-gray-700 p-1 rounded truncate"
                        onClick={() => handleCellEdit(article.id, 'title', article.title)}
                        title={article.title}
                      >
                        {article.title}
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-gray-300">{article.author || 'Unknown'}</TableCell>
                  <TableCell className="text-gray-300">{article.category || 'Uncategorized'}</TableCell>
                  <TableCell className="text-gray-300">{formatDate(article.date)}</TableCell>
                  <TableCell>
                    <Badge className={article.isPublished ? "bg-green-600" : "bg-gray-600"}>
                      {article.isPublished ? 'Published' : 'Draft'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleToggleFeatured(article.id, article.isFeatured || false)}
                      className={article.isFeatured ? "text-yellow-400" : "text-gray-400"}
                    >
                      <Star className={`w-4 h-4 ${article.isFeatured ? 'fill-current' : ''}`} />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={`/admin/edit-article/${article.id}`}>
                          <Edit className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={`/resources/articles/${article.slug}`}>
                          <Eye className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          if (confirm('Are you sure you want to delete this article?')) {
                            deleteArticleMutation.mutate(article.id);
                          }
                        }}
                      >
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
