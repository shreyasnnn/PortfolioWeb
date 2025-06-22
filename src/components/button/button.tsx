import React from "react";
import classNames from "classnames";

export type ButtonProps = {
  variant?: "black" | "white" | "empty";
  children?: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "black",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const variantClasses = {
    black: "bg-black text-white",
    white: "bg-white text-black border border-gray-300",
    empty: "bg-transparent text-inherit",
  };

  return (
    <button
      className={classNames(
        "inline-flex items-center justify-center gap-2 px-4 py-2 transition disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
