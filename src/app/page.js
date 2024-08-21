import Image from "next/image";
import HeroSection from "./components/herosection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
          <Navbar />
        <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection / >
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />

        <Footer />
        </div>
    </main>
  );
}
