import React, { useState } from "react";

interface FolderProps {
  title: string;
  src: {
    first: string;
    second: string;
    third: string;
  };
  color?: TailwindColorKey;
  size?: number;
  className?: string;
}

// Tailwind color mapping
const tailwindColors = {
  "useGrey-100": "#fefeff",
  "useGrey-200": "#d7e0df",
  "useGrey-900": "#211f27",
  "usePurple-100": "#dfe4fa",
  "usePurple-200": "#a4a6f5",
  "useBlue-300": "#4f63df",
  "useYellow-100": "#fcf1c6",
  "useOrange-400": "#e07a2d",
  "useOrange-500": "#b7502f",
  "useBrown-600": "#3e1c14",
  "useNeutral-light": "#F9FAFB",
  "useNeutral-dark": "#111827",
} as const;

type TailwindColorKey = keyof typeof tailwindColors;

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

const Folder: React.FC<FolderProps> = ({
  title,
  src,
  color = "usePurple-200",
  size = 1,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: 3 }, () => ({ x: 0, y: 0 }))
  );

  const colorHex = tailwindColors[color];
  const folderBackColor = darkenColor(colorHex, 0.08);
  const paper1 = darkenColor(tailwindColors["useNeutral-light"], 0.1);
  const paper2 = darkenColor(tailwindColors["useNeutral-light"], 0.05);
  const paper3 = tailwindColors["useNeutral-light"];

  const imageArray = [src.first, src.second, src.third];

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handlePaperMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - (rect.left + rect.width / 2)) * 0.15;
    const offsetY = (e.clientY - (rect.top + rect.height / 2)) * 0.15;
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (_: React.MouseEvent, index: number) => {
    setOpen(false);
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const getOpenTransform = (index: number) => {
    if (index === 0) return "translate(-120%, -70%) rotate(-15deg)";
    if (index === 1) return "translate(10%, -70%) rotate(15deg)";
    if (index === 2) return "translate(-50%, -100%) rotate(5deg)";
    return "";
  };

  return (
    <div
      className={`flex flex-col items-center ${className}`}
      style={{ transform: `scale(${size})`, transformOrigin: "top center" }}
    >
      <div
        className="group relative transition-all duration-200 ease-in cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setOpen(false)}
        style={{ transform: open ? "translateY(-8px)" : undefined }}
      >
        <div
          className="relative w-[100px] h-[80px] rounded-tl-0 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px]"
            style={{ backgroundColor: folderBackColor }}
          />

          {imageArray.map((src, i) => {
            const bg = i === 0 ? paper1 : i === 1 ? paper2 : paper3;
            const sizeClasses =
              i === 0
                ? "w-[70%] h-[80%]"
                : i === 1
                ? "w-[80%] h-[70%]"
                : "w-[90%] h-[60%]";
            return (
              <div
                key={i}
                onMouseMove={(e) => handlePaperMouseMove(e, i)}
                onMouseLeave={(e) => handlePaperMouseLeave(e, i)}
                className={`absolute z-20 bottom-[10%] left-1/2 transition-all duration-300 ease-in-out ${
                  !open
                    ? "transform -translate-x-1/2 translate-y-[10%] group-hover:translate-y-0"
                    : "hover:scale-110"
                } ${sizeClasses}`}
                style={{
                  backgroundColor: bg,
                  borderRadius: "10px",
                  overflow: "hidden",
                  transform: open
                    ? `${getOpenTransform(i)} translate(${
                        paperOffsets[i].x
                      }px, ${paperOffsets[i].y}px)`
                    : undefined,
                }}
              >
                {src && (
                  <img
                    src={src}
                    loading="lazy"
                    alt={`paper-${i}`}
                    className="w-full h-full object-cover max-w-full max-h-full rounded-md"
                  />
                )}
              </div>
            );
          })}
          {/* Folder front skew layers */}
          <div
            className="absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out rounded-[5px_10px_10px_10px]"
            style={{
              backgroundColor: tailwindColors[color],
              transform: open
                ? "skew(-15deg) scaleY(0.6)"
                : "skew(0deg) scaleY(1)",
              transition: "transform 0.3s ease-in-out",
              borderRadius: "5px 10px 10px 10px",
            }}
          />

          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${
              !open ? "group-hover:[transform:skew(-15deg)_scaleY(0.6)]" : ""
            }`}
            style={{
              backgroundColor: tailwindColors[color],
              borderRadius: "5px 10px 10px 10px",
              ...(open && { transform: "skew(-15deg) scaleY(0.6)" }),
            }}
          />
        </div>
      </div>
      <div className="text-center text-sm font-semibold mt-4 mb-10 text-gray-700">
        {title}
      </div>
    </div>
  );
};

export default Folder;
