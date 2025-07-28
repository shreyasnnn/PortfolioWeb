import React from "react";
import classNames from "classnames";

type ToolItemProps = {
  icon: string;
  title: string;
  description: string;
  percentage: number;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function ToolItem({
  icon,
  title,
  description,
  percentage,
  className = "",
  children,
  ...props
}: ToolItemProps) {
  return (
    <div
      className={classNames(
        "relative bg-white text-black rounded-2xl overflow-hidden shadow-md p-4 w-full max-w-2xl",
        className
      )}
      {...props}
    >
      {/* Background progress fill */}
      <div
        className={`absolute top-0 left-0 h-full bg-black`}
        style={{ width: `${percentage}%` }}
      />

      {/* Foreground content */}
        <div className="relative z-10 flex items-center justify-between">
        {/* Left section: icon + text */}
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-xl p-2 shadow-sm">
            <img src={icon} alt={title} className="h-10 w-10 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-title-xs font-semibold text-use-grey-100">{title}</span>
            <span className="text-caption-xs text-use-grey-200">{description}</span>
          </div>
        </div>

        {/* Right section: percentage pill */}
        <div className="bg-neutral-500 text-white text-sm font-medium px-3 py-1 rounded-full">
          {percentage}%
        </div>
      </div>

      {children}
    </div>
  );
}
