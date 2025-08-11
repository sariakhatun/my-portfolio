import React from "react";
import ThemeToggle from "../Components/ThemeToggle";
import Background from "../Components/Background";
import Navbar from "../Components/Navbar";
import Navbar1 from "../Components/Navbar1";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import SkillsSection from "./SkillsSection ";

const Home = () => {
  return (
    <div className="min-h-screen pt-24 md:pt-0 lg:pt-8  dark:bg-gray-900 ">
      {/* theme toggle */}

      {/* Background Effect */}

      {/* Navbar */}

      {/* Main Content */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <HeroSection />
        <AboutMe></AboutMe>
        <SkillsSection></SkillsSection>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
