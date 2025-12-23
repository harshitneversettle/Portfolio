"use client";

import Skillset from "@/components/Skillset";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import RobotButton from "@/components/RobotButton";
import { ContactForm } from "@/components/ContactForm";

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
