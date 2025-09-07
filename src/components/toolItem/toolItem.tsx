import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

type ToolItemProps = {
  icon: string;
  title: string;
  description: string;
  percentage: number;
  speed?: number;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

// Returns background color class based on percentage
function getColorByPercentage(percentage: number): string {
  if (percentage <= 0) return "bg-white";
  if (percentage <= 10) return "bg-gray-200";
  if (percentage <= 20) return "bg-gray-400";
  if (percentage <= 30) return "bg-gray-600";
  return "bg-black";
}

export function ToolItem({
  icon,
  title,
  description,
  percentage,
  speed = 1000,
  className = "",
  children,
  ...props
}: ToolItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [currentColor, setCurrentColor] = useState(getColorByPercentage(0));

  // Intersection Observer to detect when element comes into viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Animate progress bar when in view
  useEffect(() => {
    if (inView && progressRef.current) {
      progressRef.current.style.transition = `width ${speed}ms ease-in-out`;
      progressRef.current.style.width = `${percentage}%`;
      setCurrentColor(getColorByPercentage(percentage));
    }
  }, [inView, percentage, speed]);

  return (
    <div
      ref={containerRef}
      className={classNames(
        "relative bg-white text-black rounded-2xl overflow-hidden shadow-md p-4 w-full max-w-2xl",
        className
      )}
      role="group"
      aria-label={`${title} skill progress`}
      {...props}
    >
      {/* Animated background progress bar */}
      <div
        ref={progressRef}
        className={classNames("absolute top-0 left-0 h-full", currentColor)}
        style={{ width: "0%" }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-xl p-2 shadow-sm">
            <img
              src={icon}
              loading="lazy"
              alt={title}
              className="h-10 w-10 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-title-xs font-semibold text-use-grey-100">
              {title}
            </span>
            <span className="text-caption-xs text-use-grey-200">
              {description}
            </span>
          </div>
        </div>
        <div className="bg-neutral-500 text-white text-sm font-medium px-3 py-1 rounded-full">
          {percentage}%
        </div>
      </div>

      {children}
    </div>
  );
}

export default ToolItem;
