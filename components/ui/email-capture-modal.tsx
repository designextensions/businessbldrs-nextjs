import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { trackEvent } from "@/components/ui/google-analytics";
import { Download, Mail, User, Building, X, CheckCircle, FileText } from "lucide-react";

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceId: number;
  resourceTitle: string;
  downloadUrl: string;
  onSuccess: (email: string, name: string, company?: string) => void;
}

export default function EmailCaptureModal({
  isOpen,
  onClose,
  resourceId,
  resourceTitle,
  downloadUrl,
  onSuccess
}: EmailCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const triggerDownload = () => {
    window.open(downloadUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to download leads endpoint
      await apiRequest('POST', '/api/download-leads', {
        email: formData.email,
        name: formData.name,
        company: formData.company || undefined,
        resourceId,
        resourceTitle
      });

      // Track download gated event
      trackEvent('download_gated', {
        event_category: 'downloads',
        event_label: resourceTitle,
        resource_id: resourceId
      });

      // Store credentials and notify parent
      onSuccess(formData.email, formData.name, formData.company || undefined);

      setIsSuccess(true);

      // Trigger the download
      triggerDownload();

      toast({
        title: "Success!",
        description: "Your download has started. Check your downloads folder.",
      });

      // Close modal after delay
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', company: '' });
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Error submitting lead:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({ name: '', email: '', company: '' });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        className="max-w-md bg-white border-2 border-charcoal-900 p-0 shadow-offset"
        hideDefaultClose
        data-testid="modal-email-capture"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-stone-100 p-2 hover:bg-stone-200 transition-colors"
          aria-label="Close"
          data-testid="button-close-modal"
        >
          <X className="w-4 h-4 text-charcoal-900" />
        </button>

        {isSuccess ? (
          // Success State
          <div className="p-8 text-center" data-testid="modal-success">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl font-display uppercase text-charcoal-900 mb-2">
                Download Started!
              </DialogTitle>
              <DialogDescription className="text-stone-600">
                Your download should begin automatically. Check your downloads folder.
              </DialogDescription>
            </DialogHeader>
          </div>
        ) : (
          // Form State
          <div>
            {/* Header */}
            <div className="bg-yellow-400 px-6 py-5 border-b-2 border-charcoal-900">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-charcoal-900 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="label-industrial text-charcoal-900">FREE DOWNLOAD</span>
              </div>
              <DialogHeader>
                <DialogTitle className="text-xl font-display uppercase text-charcoal-900 leading-tight">
                  Get Your Free Resource
                </DialogTitle>
                <DialogDescription className="text-charcoal-800 font-medium mt-1">
                  {resourceTitle}
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Form */}
            <div className="p-6">
              <p className="text-stone-600 text-sm mb-4">
                Enter your details below for instant access. We'll also send you helpful marketing tips.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="pl-10 h-12 border-2 border-stone-300 focus:border-yellow-400 focus:ring-yellow-400"
                    data-testid="input-name"
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-stone-400" />
                </div>

                <div className="relative">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="pl-10 h-12 border-2 border-stone-300 focus:border-yellow-400 focus:ring-yellow-400"
                    data-testid="input-email"
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-stone-400" />
                </div>

                <div className="relative">
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="pl-10 h-12 border-2 border-stone-300 focus:border-yellow-400 focus:ring-yellow-400"
                    data-testid="input-company"
                  />
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-stone-400" />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-charcoal-900 font-display uppercase py-4 text-lg border-2 border-charcoal-900 shadow-offset-sm hover-press transition-all duration-300"
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    'Processing...'
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Download Now
                    </>
                  )}
                </Button>
              </form>

              <p className="text-xs text-stone-500 mt-4 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
