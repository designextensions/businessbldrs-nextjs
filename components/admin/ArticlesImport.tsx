"use client";

import React, { useState } from 'react';
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface ArticlesImportProps {
  onImportSuccess: () => void;
}

export default function ArticlesImport({ onImportSuccess }: ArticlesImportProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [importStatus, setImportStatus] = useState("");
  const { toast } = useToast();

  const importMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("wordpress_xml", file);

      const response = await fetch("/api/import/wordpress", {
        method: "POST",
        body: formData,
        credentials: 'include',
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "Import failed");
      }

      return response.json();
    },
    onSuccess: (data) => {
      setUploadProgress(100);
      setImportStatus(`Success! Imported ${data.imported} articles.`);
      toast({
        title: "Import Successful",
        description: `Successfully imported ${data.imported} articles from WordPress`,
      });
      onImportSuccess();
      setTimeout(() => {
        setSelectedFile(null);
        setUploadProgress(0);
        setImportStatus("");
      }, 3000);
    },
    onError: (error: Error) => {
      setUploadProgress(0);
      setImportStatus(`Import failed: ${error.message}`);
      toast({
        title: "Import Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.name.endsWith('.xml')) {
        toast({
          title: "Invalid File Type",
          description: "Please select a valid WordPress XML export file",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
      setImportStatus("");
    }
  };

  const handleImport = () => {
    if (!selectedFile) return;

    setUploadProgress(0);
    setImportStatus("Starting import...");

    // Simulate progress during upload
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    importMutation.mutate(selectedFile);
  };

  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Upload className="w-5 h-5" />
          WordPress Import
        </CardTitle>
        <CardDescription className="text-gray-400">
          Import your WordPress blog posts from an XML export file
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Input
              type="file"
              accept=".xml"
              onChange={handleFileSelect}
              className="bg-gray-800 border-gray-600 text-white file:bg-yellow-500 file:text-black file:border-0 file:rounded-md"
            />
          </div>

          {selectedFile && (
            <div className="p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">
                Selected file: <span className="text-white font-medium">{selectedFile.name}</span>
              </p>
              <p className="text-xs text-gray-400">
                Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          )}

          {uploadProgress > 0 && (
            <div className="space-y-2">
              <Progress value={uploadProgress} className="w-full" />
              <p className="text-sm text-gray-400">Import progress: {uploadProgress}%</p>
            </div>
          )}

          {importStatus && (
            <Alert className={importStatus.includes('Success') ? "border-green-500 bg-green-500/10" : importStatus.includes('failed') ? "border-red-500 bg-red-500/10" : "border-blue-500 bg-blue-500/10"}>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-white">
                {importStatus}
              </AlertDescription>
            </Alert>
          )}

          <Button
            onClick={handleImport}
            disabled={!selectedFile || importMutation.isPending}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
          >
            {importMutation.isPending ? 'Importing...' : 'Import Articles'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
