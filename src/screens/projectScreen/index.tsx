import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../components/button";
import { ProjectInfo, getProjectDetails } from "../../dataController";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/footer/footer";
import FadeInScroll from "../../assets/UI/fadeInScroll";
import { motion } from "framer-motion";

export default function ProjectsDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams<{ id: string }>();
  const project = ProjectInfo.projects.find((proj) => proj.id === id);

  if (!project) {
    return <div className="p-4 text-red-500">Project not found.</div>;
  }

  // Generate dynamic project details
  const projectsDetails = getProjectDetails(project);

  return (
    <>
      <div className="flex flex-col lg:px-[21%]">
        {/* Back Button */}
        <div className="fixed top-1 left-1 z-10">
          <Link to={"/"}>
            <Button className="bg-use-grey-100 px-6 py-2 rounded-3xl m-3 border-0 border-use-grey-200">
              <ArrowLeft color="black" />
            </Button>
          </Link>
        </div>

        {/* Head Container */}
        <FadeInScroll direction="down" delayMs={100}>
          <div className="flex flex-col bg-use-grey-100 mt-20 px-5 py-3 m-3 rounded-4xl">
            <div className="bg-gray-300 flex flex-row rounded-4xl p-2 gap-2">
              <div>
                <img
                  src={project.coverImage}
                  loading="lazy"
                  className={`w-19 h-16 object-cover rounded-full`}
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-title-xs font-use-regular">
                  {project.caption}
                </p>
                <p className="text-title-s font-use-medium">{project.title}</p>
              </div>
            </div>
            <img loading="lazy" src={project.coverImage} className="rounded-3xl mt-5" />
          </div>
        </FadeInScroll>

        {/* Details Section */}
        <FadeInScroll direction="down" delayMs={200}>
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-3 gap-y-2 px-3">
            {projectsDetails.map((detail, index) => (
              <div
                key={index}
                className="bg-use-grey-100 flex flex-row lg:flex-col lg:gap-y-6 rounded-4xl px-2 py-6 lg:py-20 gap-x-3 items-center"
              >
                <div className="flex">
                  <img
                    src={detail.URL}
                    loading="lazy"
                    className="h-15 lg:h-20 p-2 rounded-full bg-use-grey-200"
                  />
                </div>
                <div className="flex flex-col lg:items-center">
                  <p className="text-caption-xs text-use-grey-300">
                    {detail.title}
                  </p>
                  <p className="text-title-xs font-use-semibold lg:text-center">
                    {detail.Content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInScroll>

        {/* Project Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center bg-use-grey-100 px-2 py-3 lg:px-3 lg:py-5 mx-3 mt-3 rounded-4xl overflow-hidden"
        >
          {project.images.map((image, imageIndex) => (
            <motion.img
              key={imageIndex}
              src={image}
              alt=""
              className={`w-full h-auto object-cover ${
                imageIndex === 0 ? "rounded-t-4xl" : ""
              } ${imageIndex === project.images.length - 1 ? "rounded-b-4xl" : ""}`}
            />
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-50">
        <Footer />
      </div>
    </>
  );
}
