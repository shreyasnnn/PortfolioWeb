import React from "react";
import classNames from "classnames";
import { CircleCheckIcon } from "../../assets/icons/circleCheckIcon";

type SlideItemProps = {
  text: string;
  children?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function SlideItem({
  text,
  children,
  className = "",
  ...props
}: SlideItemProps) {
  return (
    <div
      className={classNames(
        "flex flex-row items-center gap-2 p-2 w-fit",
        className
      )}
      role="group" // Adds semantic grouping
      aria-label={text} // Improves screen reader accessibility
      {...props}
    >
      <CircleCheckIcon height={25} fill="grey" aria-hidden="true" />
      <span>{text}</span>
      {children}
    </div>
  );
}
