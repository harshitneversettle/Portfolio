import Skillset from "@/components/Skillset";
import HeroSection from "@/components/HeroSection";
import MovinButton from "@/components/MovinButton";
import Navbar from "@/components/Navbar";
import { h1 } from "motion/react-client";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import SkillsSection from "@/components/SkillsSection";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <HeroSection />
      <Skillset />
      <SkillsSection />
      <ContactForm />
      
    </>
  );
}
