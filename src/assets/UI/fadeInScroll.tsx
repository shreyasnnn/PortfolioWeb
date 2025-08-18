import { useEffect, useRef, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  delayMs?: number; // default: 1000ms
  direction?: "left" | "right" | "up" | "down"; // default: 'up'
  className?: string; // optional external className for overriding styles
};

export default function FadeIn({
  children,
  delayMs = 1000,
  direction = "up",
  className = "",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delayMs);
        }
      },
      { threshold: 0.5 }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [delayMs]);

  const directionClasses = {
    left: "-translate-x-10",
    right: "translate-x-10",
    up: "-translate-y-10",
    down: "translate-y-10",
  };

  const hiddenClass = directionClasses[direction];
  const showClass = "translate-x-0 translate-y-0";

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? `opacity-100 ${showClass}` : `opacity-0 ${hiddenClass}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
