import NavBar from "../../components/navBar";
import { SlideItem } from "../../components/slideItem/slideItem";
import { skills } from "../../dataController/index";

export const HomeScreen = () => {
  return (
    <div className="flex-col">
      <NavBar />

      {/* Scrollable skills section */}
      <div className="mt-[100px] w-[30%] mx-auto overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex space-x-4 w-max  animate-scroll no-scrollbar opacity-50">
          {[...skills,...skills].map((skill, index) => (
            <SlideItem
              key={index}
              text={skill}
              className="px-4 py-2 rounded-3xl border-white border-2 bg-gray-100 opacity-80 text-lg text-gray-800 text-opacity-60 shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
