"use client";

import Skillset from "@/components/Skillset";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import { ContactForm } from "@/components/ContactForm";
import Chatbot  from "@/app/chatbot/page";
import { FaRobot } from "react-icons/fa";
import { RiRobot3Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skillset />
      <SkillsSection />
      <ContactForm />  
<button
        onClick={() => router.push("/chatbot")}
        className="fixed bottom-6 right-6 animate-bounce z-50 hover:bg-[gray-600] text-white p-4  transition-all duration-100 hover:scale-110 active:scale-95 "
        aria-label="Open chatbot"
      >
        <RiRobot3Fill className="text-5xl" />
      </button>
    </>
  );
}
