"use client";

import MovinButton from "./MovinButton";
import CountUp from "./ui/CountUp";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 w-full pb-10 flex flex-col items-center mt-35 ">
      <div className="flex gap-20 items-center align center   ">
        <div className=" flex-col ">
          <h1 className=" text-2xl text-[#0EAC78] sm:text-3xl md:text-4xl lg:text-5xl font-['Fredoka'] Black xl:text-7xl font-bold text-center leading-tight sm:leading-snug px-2">
          Harshit Yadav
        </h1>
          <LayoutTextFlip
          text=""
          words={["Sometimes Web2", "Sometimes Web3", "Sometimes DSA" , "Sometimes in Delusion"]}
        />
        </div>
        
        
      <img
        src="/cat.png"
        alt="My profile"
        className="w-48 h-48 sm:w-56 sm:h-56 lg:w-70 lg:h-70 rounded-full  shadow-2 items-center mt-3  "
      />
      </div>
      <div className="flex flex-col items-center mt-5 w-full max-w-7xl mx-auto">
        
        <p className="text-lg font-['Fredoka']  text-center max-w-4xl text-neutral-700 dark:text-neutral-300 px-2">
          Hi, I'm Harshit Yadav, a 5th-semester Computer Science and Design student at MITS Gwalior. I'm passionate about web development and currently exploring Web3, with a keen interest in building on the Solana blockchain. Outside of tech, I enjoy lifting weights, listening to music, and playing basketball. I believe in growing both mentally and physically, and I'm always eager to learn and create . If You dont know me , what are you waiting for , <span onClick={()=> window.open("https://x.com/Harshit_yad4v" )}  className="font-bold border-b-2 hover:text-[#0EAC78]"> lets connect</span> !
        </p>

        <div className="mt-6 sm:mt-8 lg:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl">
          <MovinButton />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12 lg:mt-15 w-full max-w-2xl px-2">
          <div className="flex flex-col border-1 border-zinc-200 p-3 sm:p-4 rounded-2xl lg:rounded-4xl flex-1">
            <span className="text-3xl sm:text-4xl lg:text-5xl text-center">
              <CountUp
                from={0}
                to={96}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
            </span>
            <span className="text-zinc-600 font-['Fredoka'] text- sm:text-sm lg:text-base text-center mt-1">
              Litres of coffee consumed this year
            </span>
          </div>
          <div className="flex flex-col border-1 border-zinc-200 p-3 sm:p-4 rounded-2xl lg:rounded-4xl flex-1">
            <span className="text-3xl sm:text-4xl lg:text-5xl text-center">
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
            <span className="text-zinc-600 font-['Fredoka'] text-sm sm:text-sm lg:text-base text-center mt-1">
              Major projects completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;