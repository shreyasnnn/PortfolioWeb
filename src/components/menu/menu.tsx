// components/menu/menu.tsx
import { type ReactNode, type RefObject } from "react";

export type MenuItem = {
  label: string;
  ref: RefObject<HTMLElement | null>;
  logo: ReactNode;
};

type MenuProps = {
  items: MenuItem[];
  children?: ReactNode;
  scrollToSection?: (ref: RefObject<HTMLElement | null>) => void;
};

export default function Menu({ items, children, scrollToSection }: MenuProps) {

  return (
    <div className="fixed bottom-10 left-1/2 flex gap-2 -translate-x-1/2 z-50 bg-white rounded-full shadow-lg p-2">
      <div className="bg-use-grey-200 flex items-center gap-12 rounded-4xl px-4 py-3">
        {items.map((item, idx) => (
          <div key={idx} className="relative flex flex-col items-center group">
            {/* Hover Label */}
            <div className="absolute -top-18 whitespace-nowrap bg-use-grey-100 text-use-grey-900 text-title-xs font-use-medium px-3 py-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:-translate-y-1">
              {item.label}
            </div>

            {/* Logo Button */}
            <button
              onClick={() => scrollToSection?.(item.ref)}
              className="text-xl transition-all duration-200 transform group-hover:-translate-y-3 flex items-center justify-center w-10 h-10"
            >
              {item.logo}
            </button>
          </div>
        ))}

      </div>
        {/* Extra children rendered last */}
        {children && (
          <>{children}</>
        )}
    </div>
  );
}
