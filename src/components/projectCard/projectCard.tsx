import { Button } from "../button";
import ArrowRightIcon from "../../assets/icons/arrowRightIcon";
type ProjectCardProps = {
  src: string;
  title: string;
  subtitle: string;
};

export default function ProjectCard({
  src,
  title = "Project Title",
  subtitle = "Project description or subtitle should be here",
}: ProjectCardProps) {
//   const random = Math.floor(Math.random() * 5) + 1;
//   const bgClass = `bg-[var(--color-random${random})]`; to randomly pic color out of 5 random colors

  return (
    <div
      className={` bg-gray-300 max-w-75 rounded-4xl shadow-card overflow-hidden flex flex-col justify-between`}
    >
      {/* Image Section */}
      <div className="flex items-center justify-center py-10 px-4">
        <img src={src} alt={title} className="object-contain w-fit h-fit" />
      </div>

      {/* White Bottom Section */}
      <div className="bg-white px-6 pt-4 pb-6 text-center rounded-[2rem] m-1">
        <p className=" text-title-xs font-semibold ">
          {title}
        </p>
        <p >{subtitle}</p>
        <div className="mt-4">
          <Button className="rounded-full">View Project<ArrowRightIcon /></Button>
        </div>
      </div>
    </div>
  );
}
