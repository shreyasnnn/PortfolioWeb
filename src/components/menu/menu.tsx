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
    <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 flex gap-1 sm:gap-2 -translate-x-1/2 z-50 bg-white rounded-full shadow-lg p-1 sm:p-2">
      <div className="bg-use-grey-200 flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 rounded-3xl sm:rounded-4xl px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3">
        {items.map((item, idx) => (
          <div key={idx} className="relative flex flex-col items-center group">
            {/* Hover Label */}
            <div className="absolute -top-14 sm:-top-16 md:-top-18 whitespace-nowrap bg-use-grey-100 text-use-grey-900 text-caption-s sm:text-body-xs md:text-title-xs font-use-medium px-2 sm:px-3 py-1 sm:py-2 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:-translate-y-1">
              {item.label}
            </div>

            {/* Logo Button */}
            <button
              onClick={() => scrollToSection?.(item.ref)}
              className="text-lg sm:text-xl transition-all duration-200 transform group-hover:-translate-y-2 sm:group-hover:-translate-y-3 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
            >
              {item.logo}
            </button>
          </div>
        ))}
      </div>
      {/* Extra children rendered last */}
      {children && <>{children}</>}
    </div>
  );
}
