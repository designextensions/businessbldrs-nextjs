"use client";

import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Mail,
  Briefcase,
  Users,
  Calendar,
  Download,
  Play,
  Settings,
  Wrench,
  Upload,
  Image
} from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
  defaultTab?: string;
}

export default function AdminLayout({ children, defaultTab = "articles" }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage your website content and settings</p>
        </div>

        <Tabs defaultValue={defaultTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9 bg-gray-800 border-gray-700">
            <TabsTrigger
              value="articles"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
            >
              <FileText className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Articles</span>
            </TabsTrigger>
            <TabsTrigger
              value="portfolio"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Portfolio</span>
            </TabsTrigger>
            <TabsTrigger
              value="team"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
            >
              <Users className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Team</span>
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
            >
              <Play className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Videos</span>
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Events</span>
            </TabsTrigger>
            <TabsTrigger
              value="media"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
            >
              <Image className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Media</span>
            </TabsTrigger>
            <TabsTrigger
              value="resources"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
            >
              <Download className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Resources</span>
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
            >
              <Wrench className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Tools</span>
            </TabsTrigger>
            <TabsTrigger
              value="contacts"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Contacts</span>
            </TabsTrigger>
          </TabsList>

          {children}
        </Tabs>
      </div>
    </div>
  );
}
