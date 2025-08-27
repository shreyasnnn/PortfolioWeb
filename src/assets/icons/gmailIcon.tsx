import * as React from "react";

// By: tabler
// See: https://v0.app/icon/tabler/mail-forward
// Example: <IconTablerMailForward width="24px" height="24px" style={{color: "#000000"}} />

export const GmailIcon = ({
  height = "1em",
  strokeWidth = "2",
  fill = "none",
  focusable = "false",
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, "children">) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    focusable={focusable}
    {...props}
  >
    <g
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      <path d="M12 18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.5" />
      <path d="m3 6l9 6l9-6m-6 12h6m-3-3l3 3l-3 3" />
    </g>
  </svg>
);
