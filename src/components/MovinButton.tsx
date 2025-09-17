import { Button } from "./ui/moving-border";
import { FlipWords } from "../components/ui/flip-words";

const MovinButton = () => {
  const words = ["About Me", "Explore More"];
  return (
    <div className="w-full flex justify-center px-4 sm:px-0">
      <Button
        borderRadius="1.75rem"
        className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-800"
      >
        <FlipWords words={words} />
      </Button>
    </div>
  );
};

export default MovinButton;