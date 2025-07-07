import MovinButton from "./MovinButton";
import { ColourfulText } from "@/components/ui/colourful-text";

const HeroSection = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex flex-col items-center mt-12 w-full max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-5 leading-snug">
          Hello, this is <ColourfulText text="Harshit Yadav" />
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-center max-w-4xl text-neutral-700 dark:text-neutral-300">
          Hi, I'm Harshit Yadav — a 4th semester Computer Science and Design
          student at Madhav Institute of Technology and Science (MITS), Gwalior.
          I'm passionate about tech, especially web development, and I love
          bringing creative ideas to life through code. When I’m not coding or
          exploring new tech, you’ll probably find me lifting weights at the
          gym, listening to music, or shooting hoops on the basketball court. I
          believe in growing both mentally and physically — and I'm always up
          for learning something new.
        </p>

        <div className="mt-10 text-lg sm:text-xl md:text-2xl">
          <MovinButton />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
