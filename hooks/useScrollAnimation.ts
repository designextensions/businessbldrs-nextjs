import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.15, // Slightly higher threshold for better performance
    rootMargin = "0px 0px -100px 0px", // Larger margin to trigger earlier
    triggerOnce = true
  } = options;

  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create observer only once and reuse
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && observerRef.current) {
              // Disconnect immediately after first trigger for better performance
              observerRef.current.unobserve(element);
            }
          }
        },
        { threshold, rootMargin }
      );
    }

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current && element) {
        observerRef.current.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  // Cleanup observer on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { elementRef, isVisible };
}

// Animation variants optimized for performance
export const animationVariants = {
  fadeInUp: {
    initial: "opacity-0 translate-y-4", // Reduced movement for smoother animation
    animate: "opacity-100 translate-y-0",
    transition: "transition-all duration-500 ease-out" // Faster animations
  },
  fadeInLeft: {
    initial: "opacity-0 -translate-x-2", // Reduced movement
    animate: "opacity-100 translate-x-0",
    transition: "transition-all duration-500 ease-out"
  },
  fadeInRight: {
    initial: "opacity-0 translate-x-2", // Reduced movement
    animate: "opacity-100 translate-x-0",
    transition: "transition-all duration-500 ease-out"
  },
  fadeIn: {
    initial: "opacity-0",
    animate: "opacity-100",
    transition: "transition-opacity duration-400 ease-out" // Even faster for simple fade
  },
  scaleIn: {
    initial: "opacity-0 scale-98", // Less dramatic scale for smoother animation
    animate: "opacity-100 scale-100",
    transition: "transition-all duration-500 ease-out"
  }
};