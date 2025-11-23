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
      <RiRobot3Fill  onClick={() => router.push("/chatbot")} className="fixed bottom-6 right-6 text-7xl p-3 bg rounded-full cursor-pointer shadow-lg" />

    </>
  );
}
