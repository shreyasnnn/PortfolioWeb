import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  strokeWidth?: string | number;
}

const ArrowRightIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  stroke = 'currentColor',
  strokeWidth = 2,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
};

export default ArrowRightIcon;