import { useState, useCallback } from "react";

interface LocalUploadResponse {
  success: boolean;
  filePath: string;
  filename: string;
  originalName: string;
  size: number;
}

interface UseUploadOptions {
  onSuccess?: (response: LocalUploadResponse) => void;
  onError?: (error: Error) => void;
}

export function useUpload(options: UseUploadOptions = {}) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [progress, setProgress] = useState(0);

  const uploadFile = useCallback(
    async (file: File): Promise<LocalUploadResponse | null> => {
      setIsUploading(true);
      setError(null);
      setProgress(0);

      try {
        setProgress(10);
        
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch("/api/local-upload", {
          method: "POST",
          body: formData,
          credentials: 'include',
        });

        setProgress(80);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || "Failed to upload file");
        }

        const uploadResponse: LocalUploadResponse = await response.json();
        setProgress(100);
        options.onSuccess?.(uploadResponse);
        return uploadResponse;
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Upload failed");
        setError(error);
        options.onError?.(error);
        return null;
      } finally {
        setIsUploading(false);
      }
    },
    [options]
  );

  return {
    uploadFile,
    isUploading,
    error,
    progress,
  };
}
