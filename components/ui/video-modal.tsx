import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  description?: string;
}

// Function to extract YouTube video ID from various YouTube URL formats
const getYouTubeVideoId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

// Function to check if URL is a YouTube URL
const isYouTubeUrl = (url: string): boolean => {
  return url.includes('youtube.com') || url.includes('youtu.be');
};

// Function to check if URL is a Vimeo URL
const isVimeoUrl = (url: string): boolean => {
  return url.includes('vimeo.com');
};

// Function to get Vimeo video ID
const getVimeoVideoId = (url: string): string | null => {
  const match = url.match(/vimeo\.com\/(?:.*\/)?(\d+)/);
  return match ? match[1] : null;
};

export default function VideoModal({ isOpen, onClose, videoUrl, title, description }: VideoModalProps) {
  const [embedUrl, setEmbedUrl] = useState<string>("");

  useEffect(() => {
    if (!videoUrl) return;

    if (isYouTubeUrl(videoUrl)) {
      const videoId = getYouTubeVideoId(videoUrl);
      if (videoId) {
        setEmbedUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`);
      }
    } else if (isVimeoUrl(videoUrl)) {
      const videoId = getVimeoVideoId(videoUrl);
      if (videoId) {
        setEmbedUrl(`https://player.vimeo.com/video/${videoId}?autoplay=1`);
      }
    } else {
      // For direct video URLs or other formats
      setEmbedUrl(videoUrl);
    }
  }, [videoUrl]);

  const handleClose = () => {
    setEmbedUrl(""); // Clear the embed URL to stop video playback
    onClose();
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl w-full bg-gray-900 border-gray-700 p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold text-white pr-8">
              {title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-gray-400 hover:text-white hover:bg-gray-800 p-2"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          {description && (
            <p className="text-gray-300 text-sm mt-2">{description}</p>
          )}
        </DialogHeader>
        
        <div className="px-6 pb-6">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            {embedUrl && (
              <iframe
                src={embedUrl}
                title={title}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}