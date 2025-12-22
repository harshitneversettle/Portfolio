"use client";

import Skillset from "@/components/Skillset";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import RobotButton from "@/components/RobotButton";
import { ContactForm } from "@/components/ContactForm";
import Chatbot from "@/app/chatbot/page";
import { FaRobot } from "react-icons/fa";
import { RiRobot3Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <RobotButton />
      <Navbar />
      <HeroSection />
      <Skillset />
      <SkillsSection />
      <ContactForm />
    </>
  );
}
