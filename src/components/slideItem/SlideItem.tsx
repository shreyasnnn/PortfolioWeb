import React from "react";
import classNames from "classnames";
import {CircleCheckIcon} from '../../assets/icons/circleCheckIcon';

type SlideCardProps = {
  text: string;
  children?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>; // 👈 Use div attributes since you're rendering a <div>

export function SlideItem({
  text,
  children,
  className = "",
  ...props
}: SlideCardProps) {
  return (
    <div
      className={classNames("flex flex-row items-center gap-2 p-2 w-fit", className)}
      {...props}
    >
      <CircleCheckIcon height={25} fill="grey"/>
      <span>{text}</span>
      {children}
    </div>
  );
}
