"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { apiRequest } from "@/lib/queryClient";
import { isUnauthorizedError } from "@/lib/authUtils";
import { ArrowLeft, Save, X } from "lucide-react";
import { LocalUploader } from "@/components/LocalUploader";

export default function CreateArticle() {
  const router = useRouter();
  const setLocation = (path: string) => router.push(path);
  const { toast } = useToast();
  const { user, isLoading: authLoading, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  const [articleForm, setArticleForm] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: '',
    category: '',
    image: '',
    isPublished: false
  });

  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>('');

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
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
  }, [isAuthenticated, authLoading, toast]);

  // Set default author when user data loads
  useEffect(() => {
    if (user) {
      setArticleForm(prev => ({
        ...prev,
        author: (user as any).firstName || (user as any).email || ''
      }));
    }
  }, [user]);

  // Create article mutation
  const createArticleMutation = useMutation({
    mutationFn: async (articleData: any) => {
      return await apiRequest('POST', '/api/admin/articles', articleData);
    },
    onSuccess: () => {
      toast({
        title: "Article Created",
        description: "Article has been successfully created",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/articles"] });
      setLocation("/admin");
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
        title: "Create Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Image upload handler for local uploads
  const handleImageUpload = (filePath: string) => {
    setUploadedImageUrl(filePath);
    setArticleForm(prev => ({ ...prev, image: filePath }));
    toast({
      title: "Image Uploaded",
      description: "Featured image uploaded successfully",
    });
  };

  const handleRemoveImage = () => {
    setUploadedImageUrl('');
    setArticleForm(prev => ({ ...prev, image: '' }));
  };

  const handleCreateArticle = () => {
    if (!articleForm.title.trim() || !articleForm.content.trim()) {
      toast({
        title: "Validation Error",
        description: "Title and content are required",
        variant: "destructive",
      });
      return;
    }

    const articleData = {
      ...articleForm,
      image: uploadedImageUrl || articleForm.image, // Use uploaded image or manual URL
      slug: articleForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      date: new Date().toISOString().split('T')[0],
      readTime: Math.max(1, Math.ceil(articleForm.content.split(/\s+/).length / 200)) + ' min read'
    };

    createArticleMutation.mutate(articleData);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen band-dark flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen band-dark p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setLocation("/admin")}
              className="border-charcoal-700 text-stone-300 hover:bg-charcoal-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Admin
            </Button>
            <h1 className="headline-lg font-display uppercase text-white">Create <span className="text-yellow-400">Article</span></h1>
          </div>
        </div>

        <Card className="bg-charcoal-900 border-2 border-charcoal-800 shadow-offset">
          <CardHeader>
            <CardTitle className="text-white">Article Details</CardTitle>
            <CardDescription className="text-stone-300">
              Fill in the article information and content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title" className="text-white">Title *</Label>
                <Input
                  id="title"
                  value={articleForm.title}
                  onChange={(e) => setArticleForm({...articleForm, title: e.target.value})}
                  className="bg-charcoal-800 border-charcoal-700 text-white"
                  placeholder="Article title"
                />
              </div>
              <div>
                <Label htmlFor="author" className="text-white">Author</Label>
                <Input
                  id="author"
                  value={articleForm.author}
                  onChange={(e) => setArticleForm({...articleForm, author: e.target.value})}
                  className="bg-charcoal-800 border-charcoal-700 text-white"
                  placeholder="Author name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category" className="text-white">Category</Label>
                <Input
                  id="category"
                  value={articleForm.category}
                  onChange={(e) => setArticleForm({...articleForm, category: e.target.value})}
                  className="bg-charcoal-800 border-charcoal-700 text-white"
                  placeholder="Category"
                />
              </div>
              <div>
                <Label className="text-white mb-3 block">Featured Image</Label>
                <div className="space-y-4">
                  {/* Image Upload Section */}
                  <div className="flex items-center gap-4">
                    <LocalUploader
                      maxSize={10485760}
                      onUploadComplete={handleImageUpload}
                      onError={(error) => {
                        toast({
                          title: "Upload Error",
                          description: error,
                          variant: "destructive",
                        });
                      }}
                      buttonClassName="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Upload Image
                    </LocalUploader>
                    
                    <span className="text-stone-400 text-sm">or</span>
                    
                    <Input
                      value={articleForm.image}
                      onChange={(e) => setArticleForm({...articleForm, image: e.target.value})}
                      className="bg-charcoal-800 border-charcoal-700 text-white flex-1"
                      placeholder="Enter image URL manually"
                    />
                  </div>
                  
                  {/* Image Preview */}
                  {(uploadedImageUrl || articleForm.image) && (
                    <div className="relative inline-block">
                      <img
                        src={uploadedImageUrl || articleForm.image}
                        alt="Featured image preview"
                        className="w-32 h-32 object-cover rounded-lg border border-charcoal-700"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute -top-2 -right-2 w-6 h-6 p-0"
                        onClick={handleRemoveImage}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="excerpt" className="text-white">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={articleForm.excerpt}
                onChange={(e) => setArticleForm({...articleForm, excerpt: e.target.value})}
                className="bg-charcoal-800 border-charcoal-700 text-white"
                placeholder="Brief description of the article"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="content" className="text-white">Content *</Label>
              <Textarea
                id="content"
                value={articleForm.content}
                onChange={(e) => setArticleForm({...articleForm, content: e.target.value})}
                className="bg-charcoal-800 border-charcoal-700 text-white"
                placeholder="Article content (HTML supported)"
                rows={15}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="published"
                checked={articleForm.isPublished}
                onCheckedChange={(checked) => setArticleForm({...articleForm, isPublished: checked})}
              />
              <Label htmlFor="published" className="text-white">Published</Label>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                onClick={() => setLocation("/admin")}
                className="border-charcoal-700 text-stone-300 hover:bg-charcoal-700"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleCreateArticle}
                disabled={createArticleMutation.isPending}
                className="bg-yellow-400 text-black hover:bg-yellow-300"
              >
                <Save className="w-4 h-4 mr-2" />
                {createArticleMutation.isPending ? 'Creating...' : 'Create Article'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}