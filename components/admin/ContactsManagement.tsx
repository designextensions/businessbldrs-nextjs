"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, AlertCircle } from "lucide-react";
import type { Contact } from "@/lib/db/schema";

interface ContactsManagementProps {
  contacts: Contact[];
  contactsLoading: boolean;
  contactsError: any;
}

export default function ContactsManagement({
  contacts,
  contactsLoading,
  contactsError
}: ContactsManagementProps) {
  const typedContacts = contacts as Contact[];

  const formatDate = (dateString: string | Date | null) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Mail className="w-5 h-5" />
          Contact Submissions
        </CardTitle>
        <CardDescription className="text-gray-400">
          View messages from your contact form
        </CardDescription>
      </CardHeader>
      <CardContent>
        {contactsLoading ? (
          <div className="text-center py-8">
            <p className="text-gray-400">Loading contacts...</p>
          </div>
        ) : contactsError ? (
          <Alert className="border-red-500 bg-red-500/10">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-white">
              Failed to load contacts: {(contactsError as Error).message}
            </AlertDescription>
          </Alert>
        ) : typedContacts.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Mail className="w-12 h-12 mx-auto mb-4 text-gray-600" />
            <p className="text-gray-400">No contact submissions yet</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {typedContacts.map((contact) => (
              <div key={contact.id} className="p-4 bg-gray-800 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-white">{contact.name}</h3>
                    <p className="text-sm text-gray-400">{contact.email}</p>
                    {contact.company && (
                      <p className="text-sm text-gray-400">{contact.company}</p>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    {formatDate(contact.createdAt)}
                  </span>
                </div>
                {contact.message && (
                  <p className="text-sm text-gray-300 mt-2">{contact.message}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
