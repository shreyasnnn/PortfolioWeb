import { Button } from "../../components/button";
import NavBar from "../../components/navBar";
import { SlideItem } from "../../components/slideItem";
import { skills } from "../../dataController/index";
import { projectImage } from "../../dataController/index";
// import ProjectCard from "../../components/projectCard/projectCard"
// import { ProjectInfo } from "../../dataController/index";

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

      {/* <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 mt-30 gap-x-50 gap-y-50">
        {ProjectInfo.projects.map((project)=>{
          return(
            <div key={project.title}>
              <ProjectCard  src={project.src} title={project.title} subtitle={project.caption}></ProjectCard>
            </div>
          )
        })}
      </div>
      </div> */}

    </div>
  );
};
