import { useState } from "react";
import { Button } from "./button";

import {
  profilePhoto,
  resume,
  name,
  collage,
  NAV_BAR_ITEM,
} from "../dataController";

export default function NavBar() {
  const [onMouseEnter, setOnMouseEnter] = useState(false);

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <nav className="w-full flex justify-center mt-10" aria-label="Main navigation">
      <div className="flex flex-wrap flex-col lg:flex-row gap-6 items-center">

        {/* Profile Button */}
        <Button
          variant="secondary"
          className="rounded-full shadow-card h-25 w-25 p-2"
          aria-label="Profile photo"
        >
          <img
            rel="preload"
            src={profilePhoto}
            alt="Profile photo"
            className="rounded-full w-full h-full object-cover"
          />
        </Button>

        {/* Resume/Collage Link */}
        <a
          href={resume}
          aria-label={`View resume of ${name}`}
          className="w-64 flex flex-col relative items-center justify-center text-center lg:text-start lg:items-start"
          onMouseEnter={() => setOnMouseEnter(true)}
          onMouseLeave={() => setOnMouseEnter(false)}
        >
          <span className="font-semibold text-title-xs block">{name}</span>

          <div className="relative h-10 mt-1 w-full flex items-center justify-center text-center lg:text-start">
            <p
              className={`text-caption-s font-regular absolute top-0 left-0 w-full transition-opacity duration-300 ${
                onMouseEnter ? "opacity-0" : "opacity-100"
              }`}
            >
              {collage}
            </p>
            <p
              className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${
                onMouseEnter ? "opacity-100" : "opacity-0"
              }`}
            >
              Click to see my profile
            </p>
          </div>
        </a>

        {/* Navigation Buttons */}
        <div className="flex flex-row space-x-3">
          {NAV_BAR_ITEM.ICON_CONFIG.map((button, index) => (
            <Button
              key={index}
              variant="secondary"
              aria-label={button.TITLE ? `Open ${button.TITLE}` : "Open link"}
              className={`${
                button.TITLE ? "mx-6" : ""
              } px-6 py-2 rounded-xl h-14 min-w-12 shadow-card border-0 cursor-pointer transition duration-200 ease-in-out hover:-translate-y-1`}
              onClick={() => handleClick(button.REDIRECT)}
            >
              <div className="flex items-center">
                {button.IS_ACTIVE && <div aria-hidden="true">🟢</div>}
                {button.ICON && (
                  <img
                    loading="lazy"
                    src={button.ICON.URL}
                    alt={button.ICON.ALT || button.TITLE || "Navigation icon"}
                    className="h-5"
                  />
                )}
                {button.TITLE && <div>{button.TITLE}</div>}
              </div>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}