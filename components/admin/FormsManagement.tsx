"use client";

import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  Edit,
  Mail,
  Eye,
  Users,
  Settings,
  FormInput,
  Calendar,
  ArrowUpDown,
  CheckCircle,
  XCircle,
  Download,
  Shield
} from "lucide-react";
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';
import EmptyState from './EmptyState';
import { formatDistanceToNow } from 'date-fns';
import type { Form, FormSubmission } from "@/lib/db/schema";

function FormsManagement() {
  const [selectedForm, setSelectedForm] = useState<Form | null>(null);
  const [editingForm, setEditingForm] = useState<Form | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch forms
  const { data: forms = [], isLoading: formsLoading, error: formsError } = useQuery({
    queryKey: ["/api/forms"],
    staleTime: 0, gcTime: 0, refetchOnMount: 'always',
    queryFn: async () => {
      try {
        const response = await fetch('/api/forms', {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data as Form[];
      } catch (error) {
        console.error('Forms fetch error:', error);
        throw error;
      }
    }
  });

  // Fetch form submissions
  const { data: submissions = [], isLoading: submissionsLoading, error: submissionsError } = useQuery({
    queryKey: ["/api/form-submissions", selectedForm?.id],
    staleTime: 0, gcTime: 0, refetchOnMount: 'always',
    queryFn: async () => {
      try {
        const url = `/api/form-submissions${selectedForm?.id ? `?formId=${selectedForm.id}` : ''}`;
        const response = await fetch(url, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data as FormSubmission[];
      } catch (error) {
        console.error('Form submissions fetch error:', error);
        throw error;
      }
    },
    enabled: true
  });

  // Update form mutation
  const updateFormMutation = useMutation({
    mutationFn: async (formData: { id: number; data: Partial<Form> }) => {
      const response = await fetch(`/api/forms/${formData.id}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData.data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/forms"] });
      queryClient.invalidateQueries({ queryKey: ["/api/form-submissions"] });
      setEditingForm(null);
      toast({
        title: "Success",
        description: "Form updated successfully",
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

  const handleUpdateForm = (form: Form, updates: Partial<Form>) => {
    updateFormMutation.mutate({ id: form.id, data: updates });
  };

  const handleSaveForm = () => {
    if (!editingForm) return;

    updateFormMutation.mutate({
      id: editingForm.id,
      data: {
        notificationEmail: editingForm.notificationEmail,
        isActive: editingForm.isActive,
        description: editingForm.description
      }
    });
  };

  const sortedSubmissions = Array.isArray(submissions)
    ? [...submissions].sort((a: FormSubmission, b: FormSubmission) => {
        const dateA = new Date(a.createdAt || 0).getTime();
        const dateB = new Date(b.createdAt || 0).getTime();
        return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
      })
    : [];

  const filteredSubmissions = selectedForm
    ? sortedSubmissions.filter((sub: FormSubmission) => sub.formId === selectedForm.id)
    : sortedSubmissions;

  const getFormSubmissionCount = (formId: number) => {
    return Array.isArray(submissions)
      ? submissions.filter((sub: FormSubmission) => sub.formId === formId).length
      : 0;
  };

  const exportSubmissions = (formSlug: string) => {
    const formSubmissions = Array.isArray(submissions)
      ? submissions.filter((sub: FormSubmission) => sub.formSlug === formSlug)
      : [];
    const csvContent = [
      // Header
      ['Date', 'Name', 'Email', 'HubSpot ID', 'Processed', 'Data'].join(','),
      // Data rows
      ...formSubmissions.map((sub: FormSubmission) => [
        new Date(sub.createdAt || 0).toLocaleDateString(),
        sub.submitterName || '',
        sub.submitterEmail || '',
        sub.hubspotContactId || '',
        sub.isProcessed ? 'Yes' : 'No',
        JSON.stringify(sub.submissionData).replace(/"/g, '""')
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formSlug}-submissions.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (formsLoading) return <LoadingState message="Loading forms..." />;

  // Handle authentication errors specifically
  if (formsError) {
    const errorMessage = (formsError as Error)?.message || 'Failed to load forms';
    if (errorMessage.includes('Authentication required') || errorMessage.includes('401')) {
      return (
        <div className="space-y-6">
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Authentication Required
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Your session has expired. Please refresh the page to log back in.
              </p>
              <Button onClick={() => window.location.reload()}>
                Refresh Page
              </Button>
            </div>
          </div>
        </div>
      );
    }
    return <ErrorState message={errorMessage} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Forms Management</h2>
          <p className="text-muted-foreground">Manage form settings and view submissions</p>
        </div>
      </div>

      <Tabs defaultValue="forms" className="space-y-4">
        <TabsList>
          <TabsTrigger value="forms">Forms</TabsTrigger>
          <TabsTrigger value="submissions">
            Submissions ({Array.isArray(submissions) ? submissions.length : 0})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="forms" className="space-y-4">
          {!Array.isArray(forms) || forms.length === 0 ? (
            <EmptyState
              title="No forms found"
              description="Forms will appear here once they are configured"
              icon={<FormInput />}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.isArray(forms) && forms.map((form: Form) => (
                <Card key={form.id} className="relative">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{form.name}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant={form.isActive === true ? "default" : "secondary"}>
                          {form.isActive ? "Active" : "Inactive"}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingForm(editingForm?.id === form.id ? null : form)}
                          data-testid={`button-edit-form-${form.id}`}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription>{form.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {editingForm?.id === form.id ? (
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium">Notification Email</label>
                          <Input
                            value={editingForm.notificationEmail}
                            onChange={(e) => setEditingForm({
                              ...editingForm,
                              notificationEmail: e.target.value
                            })}
                            placeholder="email@example.com"
                            data-testid={`input-notification-email-${form.id}`}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Description</label>
                          <Input
                            value={editingForm.description || ''}
                            onChange={(e) => setEditingForm({
                              ...editingForm,
                              description: e.target.value
                            })}
                            placeholder="Form description"
                            data-testid={`input-description-${form.id}`}
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={`active-${form.id}`}
                            checked={editingForm.isActive ?? false}
                            onChange={(e) => setEditingForm({
                              ...editingForm,
                              isActive: e.target.checked
                            })}
                            data-testid={`checkbox-active-${form.id}`}
                          />
                          <label htmlFor={`active-${form.id}`} className="text-sm">
                            Form is active
                          </label>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={handleSaveForm}
                            disabled={updateFormMutation.isPending}
                            data-testid={`button-save-form-${form.id}`}
                          >
                            Save
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingForm(null)}
                            data-testid={`button-cancel-form-${form.id}`}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          {form.notificationEmail}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {getFormSubmissionCount(form.id)} submissions
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedForm(form)}
                            data-testid={`button-view-submissions-${form.id}`}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View Submissions
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => exportSubmissions(form.slug)}
                            data-testid={`button-export-${form.id}`}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Export
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="submissions" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">
                Form Submissions
                {selectedForm && ` - ${selectedForm.name}`}
              </h3>
              <p className="text-sm text-muted-foreground">
                {filteredSubmissions.length} total submissions
              </p>
            </div>
            <div className="flex gap-2">
              {selectedForm && (
                <Button
                  variant="outline"
                  onClick={() => setSelectedForm(null)}
                  data-testid="button-clear-filter"
                >
                  Show All Forms
                </Button>
              )}
              <Button
                variant="outline"
                onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                data-testid="button-sort-submissions"
              >
                <ArrowUpDown className="h-4 w-4 mr-1" />
                Sort {sortOrder === 'desc' ? 'Oldest First' : 'Newest First'}
              </Button>
            </div>
          </div>

          {submissionsLoading ? (
            <LoadingState message="Loading submissions..." />
          ) : submissionsError ? (
            <ErrorState message="Failed to load submissions" />
          ) : filteredSubmissions.length === 0 ? (
            <EmptyState
              title="No submissions found"
              description={selectedForm ? `No submissions found for ${selectedForm.name}` : "No form submissions yet"}
              icon={<FormInput />}
            />
          ) : (
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Form</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>HubSpot</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubmissions.map((submission: FormSubmission) => {
                    const form = Array.isArray(forms)
                      ? forms.find((f: Form) => f.id === submission.formId)
                      : undefined;
                    return (
                      <TableRow key={submission.id} data-testid={`row-submission-${submission.id}`}>
                        <TableCell className="text-sm">
                          {formatDistanceToNow(new Date(submission.createdAt || 0), { addSuffix: true })}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{form?.name || submission.formSlug}</Badge>
                        </TableCell>
                        <TableCell>{submission.submitterName || '-'}</TableCell>
                        <TableCell>{submission.submitterEmail || '-'}</TableCell>
                        <TableCell>
                          {submission.hubspotContactId ? (
                            <Badge variant="default" className="text-xs">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Synced
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="text-xs">
                              <XCircle className="h-3 w-3 mr-1" />
                              Not Synced
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge variant={submission.isProcessed ? "default" : "secondary"}>
                            {submission.isProcessed ? "Processed" : "Pending"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <details className="cursor-pointer">
                            <summary className="text-sm text-blue-600 hover:text-blue-800">
                              View Data
                            </summary>
                            <pre className="mt-2 p-2 bg-gray-50 rounded text-xs max-w-md overflow-auto">
                              {JSON.stringify(submission.submissionData, null, 2)}
                            </pre>
                          </details>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default FormsManagement;
