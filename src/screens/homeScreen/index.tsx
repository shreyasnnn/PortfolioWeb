import { webData } from "../../dataController";
import { Button } from "../../components/button";
export const HomeScreen = () => {
  return (
    <>
      <div>
        <h1 style={{ color: "var(--color-random5)" }} className="text-5xl">
          Home
        </h1>
        <h1 className="text-4xl">{webData.name}</h1>
        <Button label="primary" size="md" />
      </div>
    </>
  );
};
