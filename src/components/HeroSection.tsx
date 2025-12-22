"use client";

import MovinButton from "./MovinButton";
import CountUp from "./ui/CountUp";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 w-full pb-10 flex flex-col items-center mt-20 sm:mt-25 md:mt-35">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-12 lg:gap-12 items-center justify-center w-full max-w-6xl">
        <div className="flex flex-col items-center lg:items-start order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-left leading-tight sm:leading-snug text-[#0EAC78] font-['Fredoka'] px-2">
            Harshit Yadav
          </h1>
          <div className="mt-2 sm:mt-3">
            <LayoutTextFlip
              text=""
              words={[
                "Sometimes Web2",
                "Sometimes Web3",
                "Sometimes DSA",
                "Sometimes in Delusion",
              ]}
            />
          </div>
        </div>

        <img
          src="/image.png"
          alt="My profile"
          className="w-80 h-80 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-70 lg:h-70 xl:w-110 xl:h-110 shadow-2xl order-1 lg:order-2"
        />
      </div>

      <div className="flex flex-col items-center mt-8 sm:mt-10 lg:mt-12 w-full max-w-7xl mx-auto">
        <p className="text-md sm:text-base lg:text-xl font-['Fredoka'] text-center max-w-4xl text-neutral-700 dark:text-neutral-300 px-4 sm:px-6 leading-relaxed">
          Hi, I'm Harshit Yadav, a 5th-semester Computer Science and Design
          student at MITS Gwalior. I'm passionate about web development and
          currently exploring Web3, with a keen interest in building on the
          Solana blockchain. Outside of tech, I enjoy lifting weights, listening
          to music, and playing basketball. I believe in growing both mentally
          and physically, and I'm always eager to learn and create. If You dont
          know me, what are you waiting for,{" "}
          <span
            onClick={() => window.open("https://x.com/Harshit_yad4v")}
            className="font-bold border-b-2 hover:text-[#0EAC78] cursor-pointer"
          >
            lets connect
          </span>
          !
        </p>

        <div className="mt-6 sm:mt-8 lg:mt-10">
          <MovinButton />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 lg:mt-12 w-full max-w-2xl px-4">
          <div className="flex flex-col border border-zinc-200 dark:border-zinc-700 p-4 sm:p-5 lg:p-6 rounded-2xl flex-1 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
            <span className="text-4xl sm:text-5xl lg:text-7xl text-center font-bold text-[#0EAC78]">
              <CountUp
                from={0}
                to={96}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
            </span>
            <span className="text-zinc-600 dark:text-zinc-400 font-['Fredoka'] text-sm sm:text-md lg:text-xl text-center mt-2">
              Litres of coffee consumed
            </span>
          </div>

          <div className="flex flex-col border border-zinc-200 dark:border-zinc-700 p-4 sm:p-5 lg:p-6 rounded-2xl flex-1 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
            <span className="text-4xl sm:text-5xl lg:text-7xl text-center font-bold text-[#0EAC78]">
              <CountUp
                from={0}
                to={6}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </span>
            <span className="text-zinc-600 dark:text-zinc-400 font-['Fredoka'] ttext-sm sm:text-md lg:text-xl text-center mt-2">
              Major projects completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
