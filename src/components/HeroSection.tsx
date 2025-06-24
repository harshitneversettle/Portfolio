import MovinButton from "./MovinButton";
import { Spotlight } from "./ui/Spotlight";
import { ColourfulText } from "@/components/ui/colourful-text";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div>
      <div className="m-auto flex flex-col items-center mt-12 px-4 md:px-10 lg:px-20">
        <h1 className="flex text-4xl md:text-5xl w-full justify-center mb-5 text-center">
          Hello , this is&nbsp; <ColourfulText text="Harshit Yadav" />{" "}
        </h1>

        <p className="flex max-w-4xl text-md md:text-lg text-center">
          Hi, I'm Harshit Yadav — a 4th semester Computer Science and
          Design student at Madhav Institute of Technology and Science
          (MITS), Gwalior. I'm passionate about tech, especially web
          development, and I love bringing creative ideas to life through code.
          When I’m not coding or exploring new tech, you’ll probably find me
          lifting weights at the gym, listening to music, or shooting hoops on
          the basketball court. I believe in growing both mentally and
          physically — and I'm always up for learning something new.
        </p>
        <div className="mt-10 text-xl md:text-2xl">
          <MovinButton />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
