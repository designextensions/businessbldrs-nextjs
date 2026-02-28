"use client";

import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Plus, Edit2, Trash2, Eye, EyeOff, ChevronRight, GripVertical } from "lucide-react";
import type { NavigationItem, InsertNavigationItemType } from "@/lib/db/schema";

interface NavigationFormData {
  label: string;
  href: string;
  icon?: string;
  parentId?: number;
  order: number;
  isVisible: boolean;
  isDropdown: boolean;
  target: string;
}

export default function NavigationManagementPage() {
  const [editingItem, setEditingItem] = useState<NavigationItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<NavigationFormData>({
    label: "",
    href: "",
    icon: "",
    parentId: undefined,
    order: 0,
    isVisible: true,
    isDropdown: false,
    target: "_self"
  });
  const { toast } = useToast();

  const { data: navigationItems = [], isLoading } = useQuery<NavigationItem[]>({
    queryKey: ["/api/navigation"],
    staleTime: 30000
  });

  const createMutation = useMutation({
    mutationFn: (data: InsertNavigationItemType) =>
      apiRequest("POST", "/api/navigation", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/navigation"] });
      setIsDialogOpen(false);
      resetForm();
      toast({ title: "Navigation item created successfully" });
    },
    onError: () => {
      toast({ title: "Failed to create navigation item", variant: "destructive" });
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<NavigationItem> }) =>
      apiRequest("PUT", `/api/navigation/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/navigation"] });
      setIsDialogOpen(false);
      resetForm();
      toast({ title: "Navigation item updated successfully" });
    },
    onError: () => {
      toast({ title: "Failed to update navigation item", variant: "destructive" });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) =>
      apiRequest("DELETE", `/api/navigation/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/navigation"] });
      toast({ title: "Navigation item deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete navigation item", variant: "destructive" });
    }
  });

  const toggleVisibility = (item: NavigationItem) => {
    updateMutation.mutate({ id: item.id, data: { isVisible: !item.isVisible } });
  };

  const resetForm = () => {
    setFormData({
      label: "",
      href: "",
      icon: "",
      parentId: undefined,
      order: 0,
      isVisible: true,
      isDropdown: false,
      target: "_self"
    });
    setEditingItem(null);
  };

  const openCreateDialog = () => {
    resetForm();
    setFormData(prev => ({ ...prev, order: navigationItems.length + 1 }));
    setIsDialogOpen(true);
  };

  const openEditDialog = (item: NavigationItem) => {
    setEditingItem(item);
    setFormData({
      label: item.label,
      href: item.href,
      icon: item.icon || "",
      parentId: item.parentId ?? undefined,
      order: item.order ?? 0,
      isVisible: item.isVisible ?? true,
      isDropdown: item.isDropdown ?? false,
      target: item.target ?? "_self"
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...formData,
      icon: formData.icon || undefined,
      parentId: formData.parentId || undefined
    };
    if (editingItem) {
      updateMutation.mutate({ id: editingItem.id, data });
    } else {
      createMutation.mutate(data as unknown as InsertNavigationItemType);
    }
  };

  const parentItems = navigationItems.filter((item: NavigationItem) => !item.parentId);
  const childItems = navigationItems.filter((item: NavigationItem) => item.parentId);
  const getChildItems = (parentId: number) =>
    childItems.filter((item: NavigationItem) => item.parentId === parentId);

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-charcoal-800 w-1/4"></div>
          <div className="h-32 bg-charcoal-800"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen band-dark text-white">
      <div className="container mx-auto py-8 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="headline-lg font-display uppercase text-white">
              Navigation <span className="text-yellow-400">Management</span>
            </h1>
            <p className="text-stone-400">Manage your website's navigation structure</p>
          </div>
          <Button
            onClick={openCreateDialog}
            className="bg-yellow-400 hover:bg-yellow-500 text-charcoal-900 font-semibold border-2 border-charcoal-800"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Navigation Item
          </Button>
        </div>

        <Card className="bg-charcoal-900 border-2 border-charcoal-800 shadow-offset">
          <CardHeader>
            <CardTitle className="text-white">Navigation Items</CardTitle>
            <CardDescription className="text-stone-400">
              Manage main navigation and dropdown menu items. Items are displayed in order.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {parentItems
                .sort((a: NavigationItem, b: NavigationItem) => (a.order || 0) - (b.order || 0))
                .map((item: NavigationItem) => (
                <div key={item.id} className="border-2 border-charcoal-700 p-4 bg-charcoal-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <GripVertical className="w-4 h-4 text-stone-400" />
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{item.label}</span>
                          {item.isDropdown && <Badge variant="secondary">Dropdown</Badge>}
                          {!item.isVisible && <Badge variant="outline">Hidden</Badge>}
                        </div>
                        <p className="text-sm text-stone-400">{item.href}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => toggleVisibility(item)}>
                        {item.isVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => openEditDialog(item)}>
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => deleteMutation.mutate(item.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {item.isDropdown && (
                    <div className="mt-4 ml-6 space-y-2">
                      {getChildItems(item.id)
                        .sort((a: NavigationItem, b: NavigationItem) => (a.order || 0) - (b.order || 0))
                        .map((child: NavigationItem) => (
                        <div key={child.id} className="flex items-center justify-between bg-charcoal-700 p-3">
                          <div className="flex items-center space-x-2">
                            <ChevronRight className="w-4 h-4 text-stone-400" />
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium">{child.label}</span>
                                {!child.isVisible && <Badge variant="outline" className="text-xs">Hidden</Badge>}
                              </div>
                              <p className="text-xs text-stone-400">{child.href}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Button variant="ghost" size="sm" onClick={() => toggleVisibility(child)}>
                              {child.isVisible ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => openEditDialog(child)}>
                              <Edit2 className="w-3 h-3" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => deleteMutation.mutate(child.id)}>
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editingItem ? "Edit Navigation Item" : "Create Navigation Item"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="label">Label</Label>
              <Input
                id="label"
                value={formData.label}
                onChange={(e) => setFormData(prev => ({ ...prev, label: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="href">URL/Link</Label>
              <Input
                id="href"
                value={formData.href}
                onChange={(e) => setFormData(prev => ({ ...prev, href: e.target.value }))}
                placeholder="/page-url or https://example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="parentId">Parent Item (for submenus)</Label>
              <Select
                value={formData.parentId?.toString() || ""}
                onValueChange={(value) => setFormData(prev => ({
                  ...prev,
                  parentId: value ? parseInt(value) : undefined
                }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="None (top-level item)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">None (top-level item)</SelectItem>
                  {parentItems.map((item: NavigationItem) => (
                    <SelectItem key={item.id} value={item.id.toString()}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="order">Order</Label>
              <Input
                id="order"
                type="number"
                value={formData.order}
                onChange={(e) => setFormData(prev => ({ ...prev, order: parseInt(e.target.value) || 0 }))}
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="isVisible"
                checked={formData.isVisible}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isVisible: checked }))}
              />
              <Label htmlFor="isVisible">Visible</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="isDropdown"
                checked={formData.isDropdown}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isDropdown: checked }))}
              />
              <Label htmlFor="isDropdown">Has Dropdown</Label>
            </div>
            <div>
              <Label htmlFor="target">Link Target</Label>
              <Select
                value={formData.target}
                onValueChange={(value) => setFormData(prev => ({ ...prev, target: value }))}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="_self">Same Window</SelectItem>
                  <SelectItem value="_blank">New Window</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                {editingItem ? "Update" : "Create"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
