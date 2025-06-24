import NavBar from "../../components/navBar";
import { SlideItem } from "../../components/slideItem/slideItem";
export const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <SlideItem
        text={"React Native"}
        className="rounded-3xl border-white border-2 text-gray-500"
      ></SlideItem>
    </>
  );
};
