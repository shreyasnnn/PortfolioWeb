import { webData } from "../../dataController";
import { Button } from "../../components/button";
import SlideItem from "../../components/slideItem/SlideItem.tsx"
import ProjectCard from "../../components/projectCard/projectCard.tsx";
import sample from '../../assets/images/sample1.png'

export const HomeScreen = () => {
  return (
    <>
      <div>
        <h1  className="text-5xl text-random1">
          Home
        </h1>
        <h1 className="text-4xl text-[var(--color-random5)]">{webData.name}</h1>
        <Button label="primary" size="md" />
        <SlideItem src='https://framerusercontent.com/images/d9ERdme0yPWPtVrYG9b8nbXum8.png?scale-down-to=1024'  />
        <ProjectCard src={sample} title="Redefining Waste" subtitle="NAMETECH Textile Recycling Management"/>
      </div>
    </>
  );
};