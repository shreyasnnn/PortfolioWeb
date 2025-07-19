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
    <div className="w-full flex justify-center mt-10">
      <div className="flex flex-wrap flex-col lg:flex-row gap-6 items-center">
        <Button
          variant="secondary"
          className="rounded-full p-0 shadow-card h-20 w-20"
        >
          <img src={profilePhoto} className="rounded-full" />
        </Button>

        <a
          href={resume}
          className="w-64 flex flex-col relative items-center justify-center text-center lg:text-start lg:items-start"
          onMouseEnter={() => setOnMouseEnter(true)}
          onMouseLeave={() => setOnMouseEnter(false)}
        >
          <span className="font-semibold text-title-xs block ">{name}</span>

          <div className="relative h-10 mt-1 w-full flex items-center justify-center text-center lg:text-start ">
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

        <div className="flex flex-row space-x-3">
          {NAV_BAR_ITEM.ICON_CONFIG.map((button, index) => {
            return (
              <Button
                key={index}
                variant="secondary"
                className={`${
                  button.TITLE && "mx-6"
                } rounded-xl h-16 min-w-16 shadow-card border-0`}
                onClick={() => handleClick(button.REDIRECT)}
              >
                {" "}
                <div className="flex">
                  {button.IS_ACTIVE && <div>🟢</div>}
                  {button.ICON && (
                    <img
                      className="h-5"
                      src={button.ICON.URL}
                      alt={button.ICON.ALT}
                    />
                  )}
                  {button.TITLE && <div>{button.TITLE}</div>}
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
