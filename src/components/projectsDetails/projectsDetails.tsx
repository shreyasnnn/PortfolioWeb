import { ArrowLeft } from "lucide-react";
import { Button } from "../button";
import { ProjectInfo, projectsDetails } from "../../dataController";
import { Link, useParams } from "react-router-dom";
import Footer from "../footer/footer";
import { useEffect } from "react";
import FadeInScroll from "../../assets/UI/fadeInScroll";
// import Menu from "../menu/menu";
// import { useRef, type RefObject } from "react";
// import HomeIcon from "../../assets/icons/homeIcon";
// import AboutIcon from "../../assets/icons/aboutIcon";
// import ProjectIcon from "../../assets/icons/projectIcon";
// import ToolkitIcon from "../../assets/icons/toolkitIcon";

type ProjectsDetails = {};
export default function ProjectsDetails({}: ProjectsDetails) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams<{ id: string }>();

  const project = ProjectInfo.projects.find((proj) => proj.id === id);

  if (!project) {
    return <div className="p-4 text-red-500">Project not found.</div>;
  }
  return (
    <div>
      {/*Back Button*/}
        <div className="fixed top-1 left-1">
        <Link to={"/"}>
          <Button className="bg-use-grey-100 rounded-3xl m-3 border-0 border-use-grey-200">
            <ArrowLeft color="black" />
          </Button>
        </Link>
      </div>

      {/* Head container */}
      <FadeInScroll direction="down" delayMs={100}>
        <div className="bg-use-grey-100 mt-[20%] px-5 py-3 m-3 rounded-4xl">
        <div className="bg-gray-300 flex flex-row rounded-4xl p-2 gap-2">
          <div>
            <img
              src={project.coverImage}
              className={`w-19 h-16 object-cover rounded-full`}
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-title-xs font-use-regular">{project.caption}</p>
            <p className="text-title-s font-use-medium">{project.title}</p>
          </div>
        </div>
        <img src={project.coverImage} className={`rounded-2xl mt-5`} />
      </div>
      </FadeInScroll>

      {/*Details*/}
      <FadeInScroll direction="down" delayMs={300}>
        <div className="flex flex-col gap-y-2 px-3">
        {projectsDetails.map((project, index) => {
          return (
            <div
              key={index}
              className="bg-use-grey-100 flex flex-row rounded-3xl px-2 py-6 gap-x-3 items-center"
            >
              <div>
                <img
                  src={project.URL}
                  className="h-15 p-2 rounded-full bg-use-grey-200 "
                />
              </div>
              <div className="flex flex-col">
                <p className="text-caption-xs text-use-grey-300">
                  {project.title}
                </p>
                <p className="text-title-xs font-use-semibold">
                  {project.Content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      </FadeInScroll>

      {/*Images*/}
      <div className="bg-use-grey-100 px-2 py-3 mx-3 mt-3 rounded-xl">
        {ProjectInfo.projects.map((project, index) => {
          return (
            <div key={index}>
              {project.images.map((image, index) => (
                <img key={index} src={image} />
              ))}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-50">
        <Footer />
      </div>

      {/* Bottom-Centered Scroll Menu */}
      {/* <Menu scrollToSection={scrollToSection} items={MenuItems}>
        <Button
          onClick={() => scrollToSection(Projects)}
          className="cursor-pointer rounded-4xl md:rounded-4xl text-title-xs font-heading font-use-medium"
        >
          Projects
        </Button>
      </Menu> */}
    </div>
  );
}
