import { ReactNode, memo, useMemo } from "react";
import { useScrollAnimation, animationVariants } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: keyof typeof animationVariants;
  delay?: number;
  className?: string;
}

const AnimatedSection = memo(function AnimatedSection({ 
  children, 
  variant = "fadeInUp", 
  delay = 0,
  className = "" 
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation();
  const animation = animationVariants[variant];

  // Memoize styles to prevent unnecessary recalculations
  const delayStyle = useMemo(() => 
    delay > 0 ? { transitionDelay: `${delay}ms` } : {}, 
    [delay]
  );

  const combinedClassName = useMemo(() => 
    `${animation.initial} ${isVisible ? animation.animate : ''} ${animation.transition} ${className}`,
    [animation.initial, animation.animate, animation.transition, isVisible, className]
  );

  return (
    <div
      ref={elementRef}
      className={combinedClassName}
      style={delayStyle}
    >
      {children}
    </div>
  );
});

export default AnimatedSection;