import { Button } from "../button";
import ArrowRightIcon from "../../assets/icons/arrowRightIcon";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  src: string;
  title: string;
  subtitle: string;
  id: string;
};

export default function ProjectCard({
  id,
  src,
  title = "Project Title",
  subtitle = "Project description or subtitle should be here",
}: ProjectCardProps) {
  return (
    <div
      className="group bg-use-grey-200 rounded-4xl shadow-card overflow-hidden flex flex-col justify-between"
      role="region"
      aria-label={`Project card: ${title}`}
    >
      {/* Image Section */}
      <div className="relative w-full h-64 px-4 pt-10 pb-4">
        <Link
          rel="preload"
          to={`/project/${id}/${title}`}
          aria-label={`Open project ${title}`}
        >
          <img
            src={src}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-3xl"
          />
        </Link>
      </div>

      {/* Bottom Section */}
      <div className="bg-use-grey-100 px-6 pt-4 pb-6 text-center rounded-[2rem] m-4 z-10 relative shadow-md">
        <p className="text-title-xs font-semibold">{title}</p>
        <p>{subtitle}</p>
        <div className="mt-4">
          <Link
            rel="preload"
            to={`/project/${id}/${title}`}
            aria-label={`View project ${title}`}
          >
            <Button
              className="px-6 py-2 group hover:scale-105 rounded-full transition-transform duration-300"
              aria-label={`View project ${title}`}
            >
              View Project{" "}
              <ArrowRightIcon
                className="transition-all duration-300 ease-out group-hover:translate-x-2"
                aria-hidden="true"
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
