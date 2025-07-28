import { Button } from "../../components/button";
import NavBar from "../../components/navBar";
import { SlideItem } from "../../components/slideItem";
import { ToolItem } from "../../components/toolItem";
import { skills } from "../../dataController/index";
import { projectImage } from "../../dataController/index";
import ProjectCard from "../../components/projectCard/projectCard";
import { ProjectInfo } from "../../dataController/index";
import { arearOfInterest } from "../../dataController/index";
import Folder from "../../components/folder/folder";
import { tools } from "../../dataController/index";
import  Footer from "../../components/footer/footer"


export const HomeScreen = () => {
  return (
    <div className="flex-col">
      <NavBar />

      {/* Scrollable skills section */}
      <div className=" mt-25 lg:w-[30%] w-[80%] mx-auto overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex space-x-4 w-max  animate-scroll no-scrollbar opacity-50">
          {skills.map((skill, index) => (
            <SlideItem
              key={index}
              text={skill}
              className="px-4 py-2 rounded-3xl border-white border-2 bg-gray-100 opacity-80 text-lg text-gray-800 text-opacity-60 shrink-0"
            ></SlideItem>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <h1 className="text-title-s font-use-semibold text-center">
          Connecting the Dots.
          <br /> Designing the Difference.
        </h1>
      </div>
      <div className="mt-10 flex items-center justify-center w-full">
        <Button className="relative rounded-3xl text-2xl px-10 py-3 overflow-hidden group text-white">
          {/* Default text */}
          <span className="text-body-s font-use-semibold absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            Projects
          </span>

          {/* Hover text */}
          <span className="text-body-s font-use-semibold opacity-0 group-hover:opacity-100 transition-color duration-300">
            Let's go
          </span>
        </Button>
      </div>

      {/* Scrollable Project images section */}
      <div className="mt-25 mx-auto overflow-hidden">
        <div className="flex space-x-4 w-max  animate-scroll no-scrollbar">
          {projectImage.image.map((item, index) => {
            return (
              <div className="p-5 bg-use-grey-200 rounded-2xl">
                <img
                  key={index}
                  src={item.URL}
                  alt={item.title}
                  className="rounded-2xl"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center mt-30">
        <Button variant="primary" className="rounded-full">
          Sub-Systems
        </Button>
      </div>

      <p className="text-title-m font-use-medium text-center mt-10">Projects</p>

      <div className="flex item-center justify-center mt-4">
        <p className="text-caption-s font-use-light text-center w-[25%]">
          A blend of engineering projects crafted during academic learning,
          personal curiosity, and team work.
        </p>
      </div>

      {/* projectCard */}
      <div className="flex justify-center py-10">
        <div className="w-full max-w-3xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {ProjectInfo.projects.map((project, idx) => {
              const isOdd = ProjectInfo.projects.length % 2 !== 0;
              const isLast = idx === ProjectInfo.projects.length - 1;
              const isLastOdd = isOdd && isLast;

              return (
                <div
                  key={project.title}
                  className={`w-full ${
                    isLastOdd ? "sm:col-span-2 flex justify-center" : ""
                  }`}
                >
                  <div className="w-full max-w-md">
                    <ProjectCard
                      src={project.src}
                      title={project.title}
                      subtitle={project.caption}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-30">
        <Button variant="primary" className="rounded-full">
          Loops
        </Button>
      </div>
      <p className="text-title-m font-use-medium text-center mt-5">
        Area of Interest
      </p>

      <div className="flex item-center justify-center mt-4">
        <p className="text-caption-s font-use-light text-center w-[25%]">
          Delivering innovative, results-driven solutions that elevate your
          brand and business
        </p>
      </div>

      {/*Area of interst section */}
      <div className="flex justify-center items-center px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
          {arearOfInterest.map((item, idx) => (
            <div
              key={idx}
              className="bg-use-neutral-light rounded-3xl shadow-md flex justify-center items-center"
              style={{ padding: `${item.size * 50}px` }} // dynamically pad to fit folder
            >
              <Folder
                title={item.title}
                src={item.src}
                size={item.size ?? 1}
                color="useGrey-200"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-30">
        <Button variant="primary" className="rounded-full">
          Toolkit
        </Button>
      </div>
      <p className="text-title-m font-use-medium text-center mt-5">
        Powerful Tools,
      </p>

      <div className="flex item-center justify-center mt-4">
        <p className="text-caption-s font-use-light text-center w-[25%]">
          Tools for Design, System Dynamics and More.
        </p>
      </div>

      {/*Powerful tools*/}
      <div className="flex items-center justify-center flex-col gap-2 mt-10">
        {tools.map((tool, index) => (
          <ToolItem
            key={index}
            title={tool.title}
            icon={tool.URL}
            description={tool.caption}
            percentage={tool.percentage}
          />
        ))}
      </div>

      {/* Get in Touch */}
      <Footer />
    </div>
  );
};
