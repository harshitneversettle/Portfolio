import { Button } from "./ui/moving-border";
import { FlipWords } from "../components/ui/flip-words";

const MovinButton = () => {
  const words = ["About Me", "Explore More"];
  return (
    <div className="w-full flex justify-center">
      <Button
        borderRadius="1.75rem"
        className="text-sm md:text-base bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 relative"
      >
        <FlipWords words={words} />
      </Button>
    </div>
  );
};

export default MovinButton;
