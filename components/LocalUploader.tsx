import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LocalUploaderProps {
  onUploadComplete: (filePath: string, originalFilename?: string) => void;
  onError?: (error: string) => void;
  accept?: string;
  maxSize?: number;
  className?: string;
  buttonClassName?: string;
  children?: React.ReactNode;
}

export function LocalUploader({
  onUploadComplete,
  onError,
  accept = "image/*",
  maxSize = 10 * 1024 * 1024,
  className,
  buttonClassName,
  children,
}: LocalUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > maxSize) {
      onError?.(`File size must be less than ${Math.round(maxSize / 1024 / 1024)}MB`);
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch("/api/local-upload", {
        method: "POST",
        body: formData,
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Upload failed");
      }

      const result = await response.json();
      onUploadComplete(result.filePath, file.name);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Upload failed";
      onError?.(message);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className={cn("relative", className)}>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
        disabled={isUploading}
      />
      <Button
        type="button"
        variant="outline"
        className={cn("w-full", buttonClassName)}
        disabled={isUploading}
      >
        {isUploading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Uploading...
          </>
        ) : (
          <>
            <Upload className="w-4 h-4 mr-2" />
            {children || "Upload Image"}
          </>
        )}
      </Button>
    </div>
  );
}
