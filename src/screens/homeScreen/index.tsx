import { Button } from "../../components/button";
import NavBar from "../../components/navBar";
import { SlideItem } from "../../components/slideItem";
import { skills } from "../../dataController/index";

export const HomeScreen = () => {

  return (
    <div className="flex-col">
      <NavBar />

      {/* Scrollable skills section */}
      <div className="bg-random4 mt-[100px] w-[30%] mx-auto overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex space-x-4 w-max  animate-scroll no-scrollbar opacity-50">
          {skills.map((skill, index) => (
            <SlideItem
              key={index}
              text={skill}
              className="px-4 py-2 rounded-3xl border-white border-2 bg-gray-100 opacity-80 text-lg text-gray-800 text-opacity-60 shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <h1 className="text-5xl text-center font-heading">
          Connecting the Dots.
          <br /> Designing the Difference.
        </h1>
      </div>
      <div className="mt-20 flex items-center justify-center w-[100%]">
        <Button className="relative rounded-3xl text-2xl px-10 py-3 overflow-hidden group text-white">
          {/* Default text */}
          <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            Projects
          </span>

          {/* Hover text */}
          <span className="opacity-0 group-hover:opacity-100 transition-color duration-300">
            Let's go
          </span>
        </Button>
      </div>
    </div>
  );
};
