import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LocalUploader } from "@/components/LocalUploader";
import { Trash2, Eye, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ImageManagerProps {
  currentImageUrl?: string;
  onImageChange: (imageUrl: string) => void;
  placeholder?: string;
  className?: string;
}

export function ImageManager({
  currentImageUrl = "",
  onImageChange,
  placeholder = "Enter image URL or upload a new image",
  className = "",
}: ImageManagerProps) {
  const [imageUrl, setImageUrl] = useState(currentImageUrl);
  const { toast } = useToast();

  const handleUploadComplete = (filePath: string) => {
    setImageUrl(filePath);
    onImageChange(filePath);
    toast({
      title: "Success",
      description: "Image uploaded successfully",
    });
  };

  const handleUploadError = (error: string) => {
    toast({
      title: "Error",
      description: error,
      variant: "destructive",
    });
  };

  const handleManualUrlChange = (value: string) => {
    setImageUrl(value);
    onImageChange(value);
  };

  const handleRemoveImage = () => {
    setImageUrl("");
    onImageChange("");
    toast({
      title: "Success",
      description: "Image removed",
    });
  };

  const handlePreviewImage = () => {
    if (imageUrl) {
      window.open(imageUrl, '_blank');
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Current Image Preview */}
      {imageUrl && (
        <div className="border border-gray-600 rounded-lg p-4 bg-gray-800">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-white">Current Image</h4>
            <div className="flex gap-2">
              <Button
                type="button"
                size="sm"
                variant="ghost"
                onClick={handlePreviewImage}
                className="text-blue-400 hover:text-blue-300"
                data-testid="button-preview-image"
              >
                <Eye className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                size="sm"
                variant="ghost"
                onClick={handleRemoveImage}
                className="text-red-400 hover:text-red-300"
                data-testid="button-remove-image"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="relative aspect-video max-w-md mx-auto bg-gray-700 rounded overflow-hidden">
            {imageUrl.startsWith('http') || imageUrl.startsWith('/') ? (
              <img
                src={imageUrl}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            <div className={`absolute inset-0 flex items-center justify-center ${imageUrl ? 'hidden' : ''}`}>
              <ImageIcon className="w-12 h-12 text-gray-500" />
            </div>
          </div>
        </div>
      )}

      {/* Upload Section */}
      <div className="space-y-3">
        <div className="flex gap-2">
          <LocalUploader
            maxSize={10485760}
            onUploadComplete={handleUploadComplete}
            onError={handleUploadError}
            buttonClassName="bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            Upload Image
          </LocalUploader>
        </div>

        <div className="text-center text-gray-400 text-sm">
          OR
        </div>

        {/* Manual URL Input */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Image URL
          </label>
          <Input
            type="text"
            value={imageUrl}
            onChange={(e) => handleManualUrlChange(e.target.value)}
            placeholder={placeholder}
            className="bg-gray-700 border-gray-600 text-white"
            data-testid="input-image-url"
          />
          <p className="text-xs text-gray-400 mt-1">
            Enter a direct image URL or upload a new image above
          </p>
        </div>
      </div>
    </div>
  );
}
