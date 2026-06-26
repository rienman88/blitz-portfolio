import Navbar from "@/components/layout/Navbar";

import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";

import ProjectsReposSection from "@/components/sections/ProjectsReposSection";
import HackathonSection from "@/components/sections/HackathonSection";
import CertRoadmapSection from "@/components/sections/CertRoadmapSection";
import ContactSection from "@/components/sections/ContactSection";

import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>

      <Navbar />

      <HeroSection />

      <StatsSection />

      <AboutSection />

      <SkillsSection />

      <ProjectsReposSection />

      <HackathonSection />

      <CertRoadmapSection />

      <ContactSection />

      <Footer />

    </main>
  );
}

