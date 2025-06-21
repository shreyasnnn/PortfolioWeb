import React from "react";
import classNames from "classnames";

export type ButtonProps = {
  label: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  borderRadius?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  label,
  size = "md",
  disabled = false,
  onClick,
  borderRadius = "2rem",
  icon,
  iconPosition = "right",
}) => {
  const radiusClass = `rounded-[${borderRadius}]`;

  return (
    <button
      className={classNames(
        "inline-flex items-center justify-center gap-2 focus:outline-none transition bg-button text-light",
        sizeClasses[size],
        radiusClass,
        { "opacity-50 cursor-not-allowed": disabled }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{label}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};
