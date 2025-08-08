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
    <div className="group bg-use-grey-200 rounded-4xl shadow-card overflow-hidden flex flex-col justify-between">
      {/* Image Section with spacing at the top */}
      <div className="relative w-full h-64 px-4 pt-10 pb-4">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-3xl"
        />
      </div>

      {/* White Bottom Section (overlapping slightly if needed) */}
      <div className="bg-use-grey-100 px-6 pt-4 pb-6 text-center rounded-[2rem] m-4 z-10 relative shadow-md">
        <p className="text-title-xs font-semibold">{title}</p>
        <p>{subtitle}</p>
        <div className="mt-4">
          <Link to={`/project/${id}`}>
            <Button className="rounded-full">
              View Project <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
