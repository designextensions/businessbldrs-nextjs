import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { trackEvent } from "@/components/ui/google-analytics";
import { trackHubSpotFormSubmission } from "@/components/ui/hubspot-analytics";
import { BookOpen, Users, TrendingUp, Mail, Phone, Building, X, Play, CheckCircle } from "lucide-react";

const POPUP_STORAGE_KEY = "marketing_masterclass_popup_dismissed";
const POPUP_DELAY_MS = 30000; // 30 seconds

export default function MarketingMasterclassPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Scroll to top when popup opens
  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isOpen]);

  useEffect(() => {
    // Check if user has already dismissed the popup
    const dismissed = localStorage.getItem(POPUP_STORAGE_KEY);
    if (dismissed) {
      return;
    }

    // Timer-based trigger (30 seconds after page load)
    const timer = setTimeout(() => {
      // Double-check localStorage before showing (in case user dismissed in another tab)
      if (!localStorage.getItem(POPUP_STORAGE_KEY)) {
        setIsOpen(true);
        trackEvent('view_popup', {
          event_category: 'engagement',
          event_label: 'marketing_masterclass_popup_timer',
          value: 30
        });
      }
    }, POPUP_DELAY_MS);

    // Exit-intent trigger (when mouse moves to top of page to close tab)
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is moving to top of viewport AND popup hasn't been dismissed
      if (e.clientY < 10 && !localStorage.getItem(POPUP_STORAGE_KEY)) {
        clearTimeout(timer); // Cancel timer if exit-intent triggers first
        setIsOpen(true);
        trackEvent('view_popup', {
          event_category: 'engagement',
          event_label: 'marketing_masterclass_popup_exit_intent'
        });
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(POPUP_STORAGE_KEY, 'true');
    
    trackEvent('popup_closed', {
      event_category: 'engagement',
      event_label: 'marketing_masterclass_popup_dismissed'
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to form submissions endpoint for proper tracking and HubSpot integration
      await apiRequest('POST', '/api/form-submissions', {
        formId: 2,
        formSlug: 'marketing-masterclass',
        submissionData: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          interests: 'Marketing Masterclass video series',
          source: 'popup'
        },
        submitterEmail: formData.email,
        submitterName: formData.name
      });

      setIsSubmitted(true);
      localStorage.setItem(POPUP_STORAGE_KEY, 'true'); // Don't show again
      
      // Track Marketing Masterclass signup from popup
      trackEvent('generate_lead', {
        currency: 'USD',
        value: 500,
        event_category: 'engagement',
        event_label: 'marketing_masterclass_popup_signup',
        form_name: 'Marketing Masterclass Popup'
      });
      
      // Track HubSpot form submission
      trackHubSpotFormSubmission('marketing_masterclass_popup', {
        company: formData.company,
        estimated_value: 500,
        source: 'popup'
      });
      
      toast({
        title: "Success!",
        description: "Thank you! We'll send you access to the Marketing Masterclass shortly.",
      });

      // Close popup after 5 seconds to give users time to see success message
      setTimeout(() => {
        setIsOpen(false);
      }, 5000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent 
        className="max-w-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-yellow-500/30 text-white p-0 max-h-[85vh] overflow-y-auto"
        data-testid="popup-masterclass"
        hideDefaultClose
      >
        {/* Close button - sticky so always visible on mobile */}
        <button
          onClick={handleClose}
          className="fixed sm:absolute right-4 sm:right-4 top-4 sm:top-4 z-[10000] rounded-full bg-gray-800/90 sm:bg-white/10 p-2.5 sm:p-2 hover:bg-white/20 transition-colors shadow-lg"
          aria-label="Close popup"
          data-testid="button-close-popup"
        >
          <X className="w-5 h-5 sm:w-4 sm:h-4 text-white" />
        </button>

        {isSubmitted ? (
          // Success State
          <div className="p-8 sm:p-12 text-center" data-testid="popup-success-message">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl sm:text-3xl font-black text-white mb-3" data-testid="text-success-title">
                Thank You!
              </DialogTitle>
              <DialogDescription className="text-base text-gray-300 max-w-md mx-auto" data-testid="text-success-description">
                We've sent your Marketing Masterclass access details to your email. 
                Get ready to transform your marketing approach!
              </DialogDescription>
            </DialogHeader>
          </div>
        ) : (
          // Main Popup Content - Simplified for mobile
          <div className="relative">
            {/* Header with gradient background */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-4 sm:px-6 py-3 sm:py-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="bg-black/20 rounded-full p-1.5">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="font-bold text-black uppercase text-xs tracking-wide">
                  Free Resource
                </span>
              </div>
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-black text-black leading-tight">
                  Get Our FREE Marketing Masterclass
                </DialogTitle>
                <DialogDescription className="text-sm sm:text-base text-black/80 font-medium mt-1">
                  Learn to attract customers with clear messaging
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Content - Single column on mobile, two columns on desktop */}
            <div className="p-4 sm:p-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                {/* Benefits - Shown on desktop only */}
                <div className="hidden lg:block">
                  <h3 className="text-lg font-bold text-white mb-3">What You'll Learn:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="bg-yellow-500/20 rounded-lg p-1.5 mt-0.5">
                        <TrendingUp className="w-4 h-4 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Strategic Planning</h4>
                        <p className="text-gray-400 text-xs">Create marketing plans that deliver results</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-yellow-500/20 rounded-lg p-1.5 mt-0.5">
                        <Users className="w-4 h-4 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Audience Targeting</h4>
                        <p className="text-gray-400 text-xs">Reach your ideal customers with precision</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-yellow-500/20 rounded-lg p-1.5 mt-0.5">
                        <BookOpen className="w-4 h-4 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Clear Messaging</h4>
                        <p className="text-gray-400 text-xs">Communicate value that converts</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">Get Instant Access</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3">Enter your details below</p>

                    <form onSubmit={handleSubmit} className="space-y-2.5">
                      <div className="relative">
                        <Input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pl-9 h-10 text-sm"
                          data-testid="input-name"
                        />
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                      </div>
                      
                      <div className="relative">
                        <Input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pl-9 h-10 text-sm"
                          data-testid="input-email"
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                      </div>
                      
                      <div className="relative">
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="Phone (Optional)"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pl-9 h-10 text-sm"
                          data-testid="input-phone"
                        />
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-2.5 text-sm sm:text-base rounded-lg shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                        data-testid="button-submit"
                      >
                        {isSubmitting ? 'Sending...' : 'Get Free Access →'}
                      </Button>

                      <button
                        type="button"
                        onClick={handleClose}
                        className="w-full text-gray-400 hover:text-white text-xs sm:text-sm py-1.5 transition-colors"
                        data-testid="button-maybe-later"
                      >
                        Maybe Later
                      </button>
                    </form>

                    <p className="text-xs text-gray-500 mt-2 text-center">
                      100% free. No credit card required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
