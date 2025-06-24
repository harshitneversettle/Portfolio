import Skillset from "@/components/Skillset";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
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
