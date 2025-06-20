import { webData } from "../../dataController";
import { Button } from "../../components/button";
import '../../index.css'
export const HomeScreen = () => {
  return (
    <>
      <div>
        <h1  className="text-5xl text-[var(--color-random1)]">
          Home
        </h1>
        <h1 className="text-4xl text-[var(--color-random5)]">{webData.name}</h1>
        <Button label="primary" size="md" />
      </div>
    </>
  );
};