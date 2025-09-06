import { useRef, type RefObject } from "react";
import { Button } from "../../components/button";
import NavBar from "../../components/navBar";
import { SlideItem } from "../../components/slideItem";
import { ToolItem } from "../../components/toolItem";
import {
  skills,
  projectImage,
  ProjectInfo,
  arearOfInterest,
  tools,
} from "../../dataController/index";
import ProjectCard from "../../components/projectCard/projectCard";
import Folder from "../../components/Folder/Folder";
import Footer from "../../components/footer/footer";
import Menu from "../../components/menu/menu";
import HomeIcon from "../../assets/icons/homeIcon";
import AboutIcon from "../../assets/icons/aboutIcon";
import ProjectIcon from "../../assets/icons/projectIcon";
import ToolkitIcon from "../../assets/icons/toolkitIcon";
import FadeInOnScroll from "../../assets/UI/fadeInScroll";
import { sectionTexts } from "../../dataController/index";

export default function HomeScreen() {
  const Home = useRef<HTMLElement>(null);
  const About = useRef<HTMLElement>(null);
  const Projects = useRef<HTMLElement>(null);
  const Toolkit = useRef<HTMLElement>(null);

  const MenuItems = [
    { label: "Home", ref: Home, logo: <HomeIcon height={25} /> },
    { label: "About", ref: About, logo: <AboutIcon height={23} /> },
    { label: "Projects", ref: Projects, logo: <ProjectIcon height={25} /> },
    { label: "Toolkits", ref: Toolkit, logo: <ToolkitIcon height={25} /> },
  ];

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={Home}
      className="flex flex-col relative w-full overflow-x-hidden"
    >
      {/* NavBar*/}
      <FadeInOnScroll delayMs={500}>
        <NavBar />
      </FadeInOnScroll>

      {/* Skills Scroll*/}
      <FadeInOnScroll delayMs={700}>
        <div className="mt-6 md:mt-12 lg:mt-25 w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex space-x-4 w-max animate-scroll no-scrollbar opacity-50">
            {skills.map((skill, index) => (
              <SlideItem
                key={index}
                text={skill}
                className="px-3 sm:px-4 py-1 sm:py-2 rounded-3xl border-white border-2 bg-gray-100 opacity-80 text-sm sm:text-lg text-gray-800 text-opacity-60 shrink-0"
              />
            ))}
          </div>
        </div>
      </FadeInOnScroll>

      {/* Title */}
      <div className="mt-8 md:mt-10 flex items-center justify-center px-4">
        <FadeInOnScroll delayMs={900}>
          <h1 className="text-title-s font-heading font-use-semibold text-center leading-tight">
            Connecting the Dots.
            <br /> Developing the Difference.
          </h1>
        </FadeInOnScroll>
      </div>

      {/* Projects Button */}
      <FadeInOnScroll delayMs={1100}>
        <div className="mt-8 md:mt-10 flex items-center justify-center w-full px-4">
          <Button
            onClick={() => scrollToSection(Projects)}
            aria-label="Scroll to Projects section"
            className=" hover:scale-105 cursor-pointer relative rounded-3xl text-body-s font-sans font-use-semibold px-6 sm:px-8 md:px-10 py-2 sm:py-3 overflow-hidden group"
          >
            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
              Projects
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-color duration-500">
              Let's go
            </span>
          </Button>
        </div>
      </FadeInOnScroll>

      {/* Project Scroll Images */}
      <FadeInOnScroll delayMs={100}>
        <div className="mt-12 md:mt-25 mx-auto overflow-hidden px-4">
          <div className="flex w-max animate-scroll no-scrollbar space-x-10">
            {[...projectImage.image, ...projectImage.image].map(
              (item, index) => (
                <div
                  key={index}
                  className="p-0 rounded-xl md:rounded-2xl flex-shrink-0"
                >
                  <img
                    src={item.URL}
                    alt={item.title || `Project image ${index + 1}`} // fallback alt text
                    className="rounded-xl md:rounded-2xl w-[350px] sm:w-[450px] md:w-[500px] lg:w-[550px] h-96 object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </FadeInOnScroll>

      {/* Subsystems Button */}
      <FadeInOnScroll delayMs={300}>
        <section
          ref={Projects}
          className="flex items-center justify-center mt-16 md:mt-30 px-4"
        >
          <Button
            variant="primary"
            className="px-6 py-2 rounded-full text-body-xs font-sans font-use-medium"
          >
            {sectionTexts.projectSection.btnText}
          </Button>
        </section>
      </FadeInOnScroll>

      {/* Projects Section */}
      <FadeInOnScroll delayMs={400}>
        <p className="text-title-m font-heading font-use-medium text-center mt-8 md:mt-10 px-4">
          {sectionTexts.projectSection.title}
        </p>
      </FadeInOnScroll>
      <FadeInOnScroll delayMs={500}>
        <div className="flex items-center justify-center mt-3 md:mt-4 px-4">
          <p className="text-caption-s font-sans font-use-light text-center w-full md:w-3/4 lg:w-1/2">
            {sectionTexts.projectSection.description}
          </p>
        </div>
      </FadeInOnScroll>

      {/* Project Cards */}
      <div className="flex justify-center py-8 md:py-10 px-4">
        <div className="w-full max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
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
                      id={project.id}
                      src={project.coverImage}
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

      {/* Area of Interest */}
      <FadeInOnScroll delayMs={200}>
        <div className="flex items-center justify-center mt-16 md:mt-30 px-4">
          <Button
            variant="primary"
            className="px-6 py-2 rounded-full text-body-xs font-sans font-use-medium"
          >
            {sectionTexts.areaOfInterestSection.btnText}
          </Button>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll delayMs={300} direction="up">
        <p className="text-title-m font-heading font-use-medium text-center mt-4 md:mt-5 px-4">
          {sectionTexts.areaOfInterestSection.title}
        </p>
      </FadeInOnScroll>
      <FadeInOnScroll delayMs={400}>
        <div className="flex items-center justify-center mt-3 md:mt-4 px-4">
          <p className="text-caption-s font-sans font-use-light text-center w-full md:w-3/4 lg:w-1/2">
            {sectionTexts.areaOfInterestSection.description}
          </p>
        </div>
      </FadeInOnScroll>

      {/* Area of Interest Grid */}
      <FadeInOnScroll delayMs={100}>
        <div className="flex justify-center items-center px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
            {arearOfInterest.map((item, idx) => (
              <div
                key={idx}
                className="bg-use-grey-100 rounded-3xl mx-4 shadow-md flex justify-center items-center"
                style={{ padding: `${item.size * 50}px` }}
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
      </FadeInOnScroll>

      {/* Toolkit Section */}
      <FadeInOnScroll delayMs={200}>
        <section
          ref={Toolkit}
          className="flex items-center justify-center mt-16 md:mt-30 px-4"
        >
          <Button
            variant="primary"
            className="px-6 py-2 rounded-full text-body-xs font-sans font-use-medium"
          >
            {sectionTexts.powerfulToolsSection.btnText}
          </Button>
        </section>
      </FadeInOnScroll>
      <FadeInOnScroll delayMs={300}>
        <p className="text-title-m font-heading font-use-medium text-center mt-4 md:mt-5 px-4">
          {sectionTexts.powerfulToolsSection.title}
        </p>
      </FadeInOnScroll>
      <FadeInOnScroll delayMs={400}>
        <div className="flex items-center justify-center mt-3 md:mt-4 px-4">
          <p className="text-caption-s font-sans font-use-light text-center w-full md:w-3/4 lg:w-1/2">
            {sectionTexts.powerfulToolsSection.description}
          </p>
        </div>
      </FadeInOnScroll>

      {/* Tool Items */}
      <FadeInOnScroll delayMs={100}>
        <div className="flex items-center justify-center flex-col gap-2 mt-8 md:mt-10 px-4 w-full">
          {tools.map((tool, index) => (
            <ToolItem
              key={index}
              title={tool.title}
              icon={tool.URL}
              description={tool.caption}
              percentage={tool.percentage}
              speed={1500}
            />
          ))}
        </div>
      </FadeInOnScroll>

      {/* Footer */}
      <Footer />

      {/* Bottom-Centered Scroll Menu */}
      <Menu scrollToSection={scrollToSection} items={MenuItems}>
        <Button
          onClick={() => scrollToSection(Projects)}
          className="px-6 py-2 hover:scale-105 cursor-pointer rounded-4xl md:rounded-4xl text-title-xs font-heading font-use-medium"
        >
          Projects
        </Button>
      </Menu>
    </section>
  );
}
