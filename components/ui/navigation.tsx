"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Users, UserCheck, Globe, MessageSquare, Palette, Video, Search, Smartphone, Settings, Briefcase, Calendar, Book, Star, X, Menu, Target, Megaphone, Bot, BarChart3, TrendingUp, ArrowRight, FileText, Shield, Server } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation";

const BBCompactLogo = "/logo-compact.png";
const BB_Full_Lockup_dark_1_3 = "/logo-full.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openServicesMenu = useCallback(() => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesMenuOpen(true);
  }, []);

  const closeServicesMenu = useCallback(() => {
    servicesTimeoutRef.current = setTimeout(() => setServicesMenuOpen(false), 150);
  }, []);
  const location = usePathname();
  
  const isHomePage = location === '/';
  
  const lightBackgroundPages = [
    '/team', '/downloads', '/ministry-blueprint', '/cost-calculator',
    '/privacy-policy', '/terms-and-conditions', '/maintenance',
    '/portfolio', '/articles', '/resources/articles', '/resources', '/videos',
    '/storybrand-agency'
  ];

  const darkHeroPages = [
    '/ada-accessibility', '/hosting',
    '/services/plan', '/services/produce', '/services/promote', '/services/protect',
    '/industries/automotive', '/industries/construction', '/industries/manufacturing',
    '/industries/education', '/industries/healthcare', '/industries/accounting',
    '/industries/dental', '/industries/consumer-goods'
  ];
  
  const scrollActivatedPages = ['/about', '/services', '/testimonials', '/website-design', '/storybrand-messaging', '/branding-logos', '/video-production', '/marketing-services', '/app-development', '/hubspot-implementation', '/request-quote', '/st-augustine', '/jacksonville', '/palm-coast', '/ponte-vedra', '/orange-park', '/gainesville', '/daytona-beach', '/ai-blueprint', '/ai-development', '/ada-accessibility', '/hosting', '/maintenance', '/services/plan', '/services/produce', '/services/promote', '/services/protect', '/industries/automotive', '/industries/construction', '/industries/manufacturing', '/industries/education', '/industries/healthcare', '/industries/accounting', '/industries/dental', '/industries/consumer-goods'];
  
  const normalizedLocation = location.replace(/\/$/, '');
  
  const needsDarkBackground = lightBackgroundPages.some(page => 
    normalizedLocation === page || normalizedLocation.startsWith(page + '/')
  );

  const isDarkHeroPage = darkHeroPages.includes(normalizedLocation);
  
  const isScrollActivatedPage = scrollActivatedPages.includes(location);

  useEffect(() => {
    let ticking = false;
    let resizeTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setIsMobile(window.innerWidth < 640);
      }, 150);
    };

    setIsMobile(window.innerWidth < 640);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setExpandedSections({});
    setServicesMenuOpen(false);
  }, [location]);

  const baseMaxLogoHeight = isMobile ? 48 : 56;
  const maxLogoHeight = isHomePage && !isMobile ? baseMaxLogoHeight * 1.1 : baseMaxLogoHeight;
  const minLogoHeight = isMobile ? 48 : 36;
  const scrollRange = 80;
  const scrollProgress = isMobile ? 0 : Math.min(scrollY / scrollRange, 1);
  const logoHeight = maxLogoHeight - (maxLogoHeight - minLogoHeight) * scrollProgress;
  const navPadding = isMobile ? 14 : 20;
  const navHeight = logoHeight + (navPadding * 2);
  
  const logoTransitionStart = 0.2;
  const logoTransitionEnd = 0.5;
  const logoTransitionProgress = isMobile ? 0 : Math.max(0, Math.min(1, (scrollProgress - logoTransitionStart) / (logoTransitionEnd - logoTransitionStart)));
  const fullLogoOpacity = 1 - logoTransitionProgress;
  const compactLogoOpacity = logoTransitionProgress;
  
  let minBackgroundOpacity = 0.1;
  if (isHomePage) {
    minBackgroundOpacity = 0.1;
  } else if (needsDarkBackground) {
    minBackgroundOpacity = 0.95;
  } else if (isDarkHeroPage) {
    minBackgroundOpacity = 0;
  } else if (isScrollActivatedPage) {
    minBackgroundOpacity = 0.1;
  }
  
  const backgroundOpacity = Math.max(minBackgroundOpacity, Math.min(scrollY / 60, 0.98));
  const hasScrolledPastHero = scrollY > 100;

  const toggleSection = (sectionKey: string) => {
    setExpandedSections(prev => ({ ...prev, [sectionKey]: !prev[sectionKey] }));
  };

  const showDarkHeroNav = isDarkHeroPage && !hasScrolledPastHero;
  const navLinkColor = showDarkHeroNav ? '#ffffff' : undefined;
  const navLinkClass = `font-display font-bold text-sm lg:text-base ${showDarkHeroNav ? '' : 'text-charcoal-900'} hover:text-yellow-500 transition-colors uppercase tracking-wide flex items-center`;
  const dropdownClass = "absolute top-full left-0 mt-2 w-56 bg-charcoal-900 border-2 border-white/20 shadow-offset opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50";
  const dropdownItemClass = "px-4 py-3 text-stone-300 hover:text-charcoal-900 hover:bg-yellow-400 transition-colors cursor-pointer flex items-center text-sm font-medium";
  const megaMenuItemClass = "flex items-start gap-3 px-3 py-2.5 rounded-sm hover:bg-charcoal-800 transition-colors cursor-pointer group/item";

  return (
    <>
      <nav 
        className="navigation-header fixed top-0 left-0 right-0 w-full"
        style={{ 
          height: `${navHeight}px`,
          backgroundColor: isDarkHeroPage 
            ? `rgba(255, 255, 255, ${Math.min(backgroundOpacity, 0.98)})`
            : `rgba(255, 255, 255, ${Math.max(0.3, backgroundOpacity * 0.9)})`,
          willChange: 'transform, background-color, height',
          transform: 'translate3d(0, 0, 0)',
          zIndex: 100,
        }}
        data-testid="navigation"
      >
        {/* Partial black line aligned with content area */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8" style={{ opacity: showDarkHeroNav ? 0 : 1, transition: 'opacity 300ms ease-out' }}>
          <div className="max-w-7xl mx-auto h-[2px] bg-charcoal-900" />
        </div>
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-full">
            <div className="flex-shrink-0 relative">
              <Link href="/">
                <div className="relative flex items-center" style={{ height: `${logoHeight}px`, width: isMobile ? 'auto' : '280px', maxWidth: isMobile ? '200px' : '280px' }}>
                  <img 
                    className="cursor-pointer hover:opacity-80 transition-all duration-300 ease-out object-contain absolute top-0 left-0"
                    style={{ height: `${logoHeight}px`, width: 'auto', maxWidth: '280px', opacity: fullLogoOpacity, transition: 'opacity 300ms ease-out, filter 300ms ease-out', filter: showDarkHeroNav ? 'brightness(10) saturate(0)' : 'brightness(0) saturate(100%)' }}
                    src={BB_Full_Lockup_dark_1_3}
                    alt="Business Builders Logo"
                  />
                  <img 
                    className="cursor-pointer hover:opacity-80 transition-all duration-300 ease-out object-contain absolute top-0 left-0"
                    style={{ height: `${logoHeight}px`, width: `${logoHeight}px`, opacity: compactLogoOpacity, transition: 'opacity 300ms ease-out, filter 300ms ease-out', filter: showDarkHeroNav ? 'brightness(10) saturate(0)' : 'brightness(0) saturate(100%)' }}
                    src={BBCompactLogo}
                    alt="Business Builders"
                  />
                  <span 
                    className="font-display font-black text-charcoal-900 uppercase tracking-wide whitespace-nowrap hidden sm:block"
                    style={{ 
                      marginLeft: `${logoHeight + 8}px`, 
                      opacity: compactLogoOpacity, 
                      transition: 'opacity 300ms ease-out',
                      fontSize: `${Math.max(12, logoHeight * 0.4)}px`
                    }}
                  >
                    BUSINESS BUILDERS
                  </span>
                </div>
              </Link>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-4">
                <div className="relative group">
                  <Link href="/about" className={navLinkClass} style={{ color: navLinkColor }}>
                    About <ChevronDown className="w-4 h-4 ml-1" />
                  </Link>
                  <div className={dropdownClass}>
                    <Link href="/about"><div className={dropdownItemClass}><Users className="w-4 h-4 mr-3 text-yellow-400" /> About Us</div></Link>
                    <Link href="/team"><div className={dropdownItemClass}><UserCheck className="w-4 h-4 mr-3 text-yellow-400" /> Our Team</div></Link>
                    <Link href="/testimonials"><div className={dropdownItemClass}><Star className="w-4 h-4 mr-3 text-yellow-400" /> Testimonials</div></Link>
                  </div>
                </div>

                <div className="relative"
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={closeServicesMenu}
                >
                  <Link href="/services" className={navLinkClass} style={{ color: navLinkColor }}>
                    Services <ChevronDown className="w-4 h-4 ml-1" />
                  </Link>
                  <div
                    className={`fixed left-0 right-0 transition-all duration-200 z-50 ${servicesMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    style={{ top: `${navHeight}px` }}
                    onMouseEnter={openServicesMenu}
                    onMouseLeave={closeServicesMenu}
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="bg-charcoal-900 border-2 border-white/20 shadow-offset">
                        <div className="grid grid-cols-4 divide-x-2 divide-charcoal-700">
                          <div className="p-6">
                            <Link href="/services/plan" className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-yellow-400 hover:border-yellow-300 transition-colors">
                              <Target className="w-5 h-5 text-yellow-400" />
                              <span className="font-display font-black text-sm uppercase tracking-wider text-yellow-400 hover:text-yellow-300">Plan</span>
                              <ArrowRight className="w-3 h-3 text-yellow-400 ml-auto" />
                            </Link>
                            <div className="space-y-1">
                              <Link href="/storybrand-agency">
                                <div className={megaMenuItemClass}>
                                  <MessageSquare className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <div>
                                    <div className="font-display font-bold text-sm text-white uppercase">StoryBrand Agency</div>
                                    <div className="text-xs text-stone-400 mt-0.5">Certified StoryBrand marketing agency — clarify your message & grow</div>
                                  </div>
                                </div>
                              </Link>
                              <Link href="/storybrand-messaging">
                                <div className={megaMenuItemClass}>
                                  <FileText className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <div>
                                    <div className="font-display font-bold text-sm text-white uppercase">Marketing Blueprint</div>
                                    <div className="text-xs text-stone-400 mt-0.5">StoryBrand Blueprint packages from $1,950</div>
                                  </div>
                                </div>
                              </Link>
                              <Link href="/ai-blueprint">
                                <div className={megaMenuItemClass}>
                                  <Bot className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <div>
                                    <div className="font-display font-bold text-sm text-white uppercase">AI Blueprint</div>
                                    <div className="text-xs text-stone-400 mt-0.5">AI strategy & custom workflow planning</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="p-6">
                            <Link href="/services/produce" className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-yellow-400 hover:border-yellow-300 transition-colors">
                              <Palette className="w-5 h-5 text-yellow-400" />
                              <span className="font-display font-black text-sm uppercase tracking-wider text-yellow-400 hover:text-yellow-300">Produce</span>
                              <ArrowRight className="w-3 h-3 text-yellow-400 ml-auto" />
                            </Link>
                            <div className="space-y-1">
                              <Link href="/branding-logos">
                                <div className={megaMenuItemClass}>
                                  <Palette className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <div>
                                    <div className="font-display font-bold text-sm text-white uppercase">Branding & Logos</div>
                                    <div className="text-xs text-stone-400 mt-0.5">Build a memorable brand identity</div>
                                  </div>
                                </div>
                              </Link>
                              <Link href="/website-design">
                                <div className={megaMenuItemClass}>
                                  <Globe className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <div>
                                    <div className="font-display font-bold text-sm text-white uppercase">Website Design</div>
                                    <div className="text-xs text-stone-400 mt-0.5">Custom sites that convert visitors to leads</div>
                                  </div>
                                </div>
                              </Link>
                              <Link href="/video-production">
                                <div className={megaMenuItemClass}>
                                  <Video className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <div>
                                    <div className="font-display font-bold text-sm text-white uppercase">Video Production</div>
                                    <div className="text-xs text-stone-400 mt-0.5">Professional video to tell your story</div>
                                  </div>
                                </div>
                              </Link>
                              <Link href="/app-development">
                                <div className={megaMenuItemClass}>
                                  <Smartphone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <div>
                                    <div className="font-display font-bold text-sm text-white uppercase">App Development</div>
                                    <div className="text-xs text-stone-400 mt-0.5">Custom mobile & web applications</div>
                                  </div>
                                </div>
                              </Link>
                              <Link href="/ai-development">
                                <div className={megaMenuItemClass}>
                                  <Bot className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <div>
                                    <div className="font-display font-bold text-sm text-white uppercase">AI Development</div>
                                    <div className="text-xs text-stone-400 mt-0.5">Custom AI tools & automated workflows</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="p-6">
                            <Link href="/services/promote" className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-yellow-400 hover:border-yellow-300 transition-colors">
                              <Megaphone className="w-5 h-5 text-yellow-400" />
                              <span className="font-display font-black text-sm uppercase tracking-wider text-yellow-400 hover:text-yellow-300">Promote</span>
                              <ArrowRight className="w-3 h-3 text-yellow-400 ml-auto" />
                            </Link>
                            <div className="space-y-1">
                              <Link href="/marketing-services">
                                <div className={megaMenuItemClass}>
                                  <TrendingUp className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <div>
                                    <div className="font-display font-bold text-sm text-white uppercase">Marketing Services</div>
                                    <div className="text-xs text-stone-400 mt-0.5">Full-service marketing strategy & execution</div>
                                  </div>
                                </div>
                              </Link>
                              <Link href="/seo-services">
                                <div className={megaMenuItemClass}>
                                  <Search className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <div>
                                    <div className="font-display font-bold text-sm text-white uppercase">SEO Services</div>
                                    <div className="text-xs text-stone-400 mt-0.5">Get found online with search optimization</div>
                                  </div>
                                </div>
                              </Link>
                              <Link href="/social-media-marketing">
                                <div className={megaMenuItemClass}>
                                  <BarChart3 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <div>
                                    <div className="font-display font-bold text-sm text-white uppercase">Social Media</div>
                                    <div className="text-xs text-stone-400 mt-0.5">Engage audiences across social platforms</div>
                                  </div>
                                </div>
                              </Link>
                              <Link href="/hubspot-implementation">
                                <div className={megaMenuItemClass}>
                                  <Settings className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <div>
                                    <div className="font-display font-bold text-sm text-white uppercase">HubSpot CRM</div>
                                    <div className="text-xs text-stone-400 mt-0.5">CRM setup, automation & reporting</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="p-6">
                            <Link href="/services/protect" className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-yellow-400 hover:border-yellow-300 transition-colors">
                              <Shield className="w-5 h-5 text-yellow-400" />
                              <span className="font-display font-black text-sm uppercase tracking-wider text-yellow-400 hover:text-yellow-300">Protect</span>
                              <ArrowRight className="w-3 h-3 text-yellow-400 ml-auto" />
                            </Link>
                            <div className="space-y-1">
                              <Link href="/hosting">
                                <div className={megaMenuItemClass}>
                                  <Server className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <div>
                                    <div className="font-display font-bold text-sm text-white uppercase">Managed Hosting</div>
                                    <div className="text-xs text-stone-400 mt-0.5">99.9% uptime, SSL & nightly backups</div>
                                  </div>
                                </div>
                              </Link>
                              <Link href="/maintenance">
                                <div className={megaMenuItemClass}>
                                  <Settings className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <div>
                                    <div className="font-display font-bold text-sm text-white uppercase">Maintenance</div>
                                    <div className="text-xs text-stone-400 mt-0.5">WordPress updates, security & support</div>
                                  </div>
                                </div>
                              </Link>
                              <Link href="/ada-accessibility">
                                <div className={megaMenuItemClass}>
                                  <Shield className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <div>
                                    <div className="font-display font-bold text-sm text-white uppercase">ADA Compliance</div>
                                    <div className="text-xs text-stone-400 mt-0.5">Website accessibility & legal protection</div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="border-t-2 border-charcoal-700 px-6 py-3 bg-charcoal-800 flex items-center justify-between">
                          <span className="text-xs text-stone-400 font-display uppercase tracking-wider">Plan, Produce, Promote & Protect — our proven process to grow your business</span>
                          <Link href="/services">
                            <div className="flex items-center gap-1 text-xs font-display font-bold uppercase text-yellow-400 hover:text-yellow-300 transition-colors">
                              View All Services <ArrowRight className="w-3 h-3" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/portfolio" className={navLinkClass} style={{ color: navLinkColor }}>Portfolio</Link>
                <Link href="/events" className={navLinkClass} style={{ color: navLinkColor }}>Events</Link>

                <div className="relative group">
                  <Link href="/resources" className={navLinkClass} style={{ color: navLinkColor }}>
                    Resources <ChevronDown className="w-4 h-4 ml-1" />
                  </Link>
                  <div className={dropdownClass}>
                    <Link href="/resources"><div className={dropdownItemClass}><Book className="w-4 h-4 mr-3 text-yellow-400" /> All Resources</div></Link>
                    <Link href="/articles"><div className={dropdownItemClass}><Book className="w-4 h-4 mr-3 text-yellow-400" /> Articles</div></Link>
                    <Link href="/videos"><div className={dropdownItemClass}><Video className="w-4 h-4 mr-3 text-yellow-400" /> Videos</div></Link>
                    <Link href="/downloads"><div className={dropdownItemClass}><Settings className="w-4 h-4 mr-3 text-yellow-400" /> Downloads</div></Link>
                  </div>
                </div>
              </div>
            
              <div className="flex items-center gap-3">
                <Link href="/request-quote">
                  <Button size="default" data-testid="button-nav-quote">
                    REQUEST A QUOTE
                  </Button>
                </Link>
                
                <div className="lg:hidden">
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-12 h-12 bg-yellow-400 border-2 border-charcoal-900 shadow-offset-sm flex items-center justify-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                    data-testid="button-mobile-menu"
                  >
                    {isOpen ? <X className="w-6 h-6 text-charcoal-900" /> : <Menu className="w-6 h-6 text-charcoal-900" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isClient && isOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-charcoal-900 opacity-98" onClick={() => setIsOpen(false)} />
          
          <div className="relative h-full w-full overflow-y-auto">
            <div className="flex flex-col pt-28 pb-8 px-6">
              <div className="absolute top-6 right-6">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center"
                >
                  <X className="w-6 h-6 text-charcoal-900" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <button onClick={() => toggleSection('company')} className="w-full text-left group">
                    <div className="flex items-center justify-between py-4 border-b-2 border-charcoal-800">
                      <span className="font-display font-bold text-2xl text-white uppercase">Company</span>
                      <ChevronRight className={`w-6 h-6 text-yellow-400 transition-transform ${expandedSections.company ? 'rotate-90' : ''}`} />
                    </div>
                  </button>
                  {expandedSections.company && (
                    <div className="pl-4 pt-3 space-y-2 border-l-2 border-yellow-400 ml-2">
                      <Link href="/about"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>About Us</div></Link>
                      <Link href="/team"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Our Team</div></Link>
                      <Link href="/testimonials"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Testimonials</div></Link>
                    </div>
                  )}
                </div>

                <div>
                  <button onClick={() => toggleSection('services')} className="w-full text-left group">
                    <div className="flex items-center justify-between py-4 border-b-2 border-charcoal-800">
                      <span className="font-display font-bold text-2xl text-white uppercase">Services</span>
                      <ChevronRight className={`w-6 h-6 text-yellow-400 transition-transform ${expandedSections.services ? 'rotate-90' : ''}`} />
                    </div>
                  </button>
                  {expandedSections.services && (
                    <div className="pt-4 space-y-5">
                      <div>
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-yellow-400/40 ml-2">
                          <Target className="w-4 h-4 text-yellow-400" />
                          <span className="font-display font-bold text-xs uppercase tracking-wider text-yellow-400">Plan</span>
                        </div>
                        <div className="pl-4 space-y-1 border-l-2 border-yellow-400 ml-2">
                          <Link href="/storybrand-agency"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>StoryBrand Agency</div></Link>
                          <Link href="/storybrand-messaging"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Marketing Blueprint</div></Link>
                          <Link href="/ai-blueprint"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>AI Blueprint</div></Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-yellow-400/40 ml-2">
                          <Palette className="w-4 h-4 text-yellow-400" />
                          <span className="font-display font-bold text-xs uppercase tracking-wider text-yellow-400">Produce</span>
                        </div>
                        <div className="pl-4 space-y-1 border-l-2 border-yellow-400 ml-2">
                          <Link href="/branding-logos"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Branding & Logos</div></Link>
                          <Link href="/website-design"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Website Design</div></Link>
                          <Link href="/video-production"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Video Production</div></Link>
                          <Link href="/app-development"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>App Development</div></Link>
                          <Link href="/ai-development"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>AI Development</div></Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-yellow-400/40 ml-2">
                          <Megaphone className="w-4 h-4 text-yellow-400" />
                          <span className="font-display font-bold text-xs uppercase tracking-wider text-yellow-400">Promote</span>
                        </div>
                        <div className="pl-4 space-y-1 border-l-2 border-yellow-400 ml-2">
                          <Link href="/marketing-services"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Marketing Services</div></Link>
                          <Link href="/seo-services"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>SEO Services</div></Link>
                          <Link href="/social-media-marketing"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Social Media</div></Link>
                          <Link href="/hubspot-implementation"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>HubSpot CRM</div></Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-yellow-400/40 ml-2">
                          <Shield className="w-4 h-4 text-yellow-400" />
                          <span className="font-display font-bold text-xs uppercase tracking-wider text-yellow-400">Protect</span>
                        </div>
                        <div className="pl-4 space-y-1 border-l-2 border-yellow-400 ml-2">
                          <Link href="/hosting"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Managed Hosting</div></Link>
                          <Link href="/maintenance"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Maintenance</div></Link>
                          <Link href="/ada-accessibility"><div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>ADA Compliance</div></Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link href="/portfolio">
                  <div className="py-4 border-b-2 border-charcoal-800 font-display font-bold text-2xl text-white uppercase hover:text-yellow-400" onClick={() => setIsOpen(false)}>Portfolio</div>
                </Link>
                
                <Link href="/events">
                  <div className="py-4 border-b-2 border-charcoal-800 font-display font-bold text-2xl text-white uppercase hover:text-yellow-400" onClick={() => setIsOpen(false)}>Events</div>
                </Link>
                
                <div>
                  <button onClick={() => toggleSection('resources')} className="w-full text-left">
                    <div className="flex items-center justify-between py-4 border-b-2 border-charcoal-800">
                      <span className="font-display font-bold text-2xl text-white uppercase">Resources</span>
                      <ChevronRight className={`w-6 h-6 text-yellow-400 transition-transform ${expandedSections.resources ? 'rotate-90' : ''}`} />
                    </div>
                  </button>
                  {expandedSections.resources && (
                    <div className="pl-4 pt-3 space-y-2 border-l-2 border-yellow-400 ml-2">
                      {[
                        { href: "/resources", label: "All Resources" },
                        { href: "/articles", label: "Articles" },
                        { href: "/videos", label: "Videos" },
                        { href: "/downloads", label: "Downloads" },
                      ].map(item => (
                        <Link key={item.href} href={item.href}>
                          <div className="py-2 text-lg text-stone-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>{item.label}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t-2 border-charcoal-800">
                <Link href="/request-quote">
                  <Button 
                    onClick={() => setIsOpen(false)}
                    className="w-full"
                    size="xl"
                  >
                    REQUEST A QUOTE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
