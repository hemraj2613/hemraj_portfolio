import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { Experience } from "./components/Experience.jsx";
import { Achievements } from "./components/Achievements.jsx";
import { Education } from "./components/Education.jsx";
import { Services } from "./components/Services.jsx";
import { InteractiveTerminal } from "./components/InteractiveTerminal.jsx";
import { Testimonials } from "./components/Testimonials.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { InteractiveResume } from "./components/InteractiveResume.jsx";
import { CommandPalette } from "./components/CommandPalette.jsx";
import { ScrollToTop } from "./components/ScrollToTop.jsx";
import {
  developerProfile as fallbackProfile,
  initialProjects as fallbackProjects,
  initialSkills as fallbackSkills,
  initialExperiences as fallbackExperiences,
  initialAchievements as fallbackAchievements,
  initialEducation as fallbackEducation,
  initialServices as fallbackServices,
  initialTestimonials as fallbackTestimonials,
  initialAnalytics as fallbackAnalytics,
} from "../server/db.js";

export default function App() {
  const [profile, setProfile] = useState(fallbackProfile);
  const [projects, setProjects] = useState(fallbackProjects);
  const [skills, setSkills] = useState(fallbackSkills);
  const [experiences, setExperiences] = useState(fallbackExperiences);
  const [achievements, setAchievements] = useState(fallbackAchievements);
  const [education, setEducation] = useState(fallbackEducation);
  const [services, setServices] = useState(fallbackServices);
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);
  const [analytics, setAnalytics] = useState(fallbackAnalytics);

  // Theme State
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("hemraj_portfolio_theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
      return "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
      root.setAttribute("data-theme", "dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }

    try {
      localStorage.setItem("hemraj_portfolio_theme", theme);
    } catch (e) {
      // Storage unavailable
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Modals States
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const handleLikeProject = async (id) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: (p.likes ?? 0) + 1 } : p)),
    );
    setAnalytics((prev) => ({
      ...prev,
      totalLikes: (prev.totalLikes ?? 0) + 1,
    }));
  };

  const handleViewProject = async (id) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, views: (p.views ?? 0) + 1 } : p)),
    );
  };

  const handleAddTestimonial = async (data) => {
    const newTestimonial = {
      id: `test-${Date.now()}`,
      ...data,
      likes: 0,
      date: new Date().toISOString().slice(0, 10),
    };

    setTestimonials((prev) => [newTestimonial, ...prev]);
    setAnalytics((prev) => ({
      ...prev,
      totalLikes: (prev.totalLikes ?? 0) + 1,
    }));
    return true;
  };

  const handleLikeTestimonial = async (id) => {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, likes: (t.likes ?? 0) + 1 } : t)),
    );
    setAnalytics((prev) => ({
      ...prev,
      totalLikes: (prev.totalLikes ?? 0) + 1,
    }));
  };

  return (
   <div className="min-h-screen bg-[#050505] text-[#ffffff] flex flex-col selection:bg-[#38bdf8]/30 selection:text-[#38bdf8] transition-colors duration-250">
      {/* Top Sticky Navigation */}
      <Navbar
        profile={profile}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          profile={profile}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        <About profile={profile} />

        <Skills categories={skills} />

        <Projects
          projects={projects}
          onLikeProject={handleLikeProject}
          onViewProject={handleViewProject}
        />

        <Experience experiences={experiences} />

        <Achievements achievements={achievements} />

        <Education education={education} educationList={education} />

        <Services services={services} servicesList={services} />

        <InteractiveTerminal />

        <Testimonials
          testimonials={testimonials}
          onAddTestimonial={handleAddTestimonial}
          onLikeTestimonial={handleLikeTestimonial}
        />

        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        analytics={analytics}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Floating Scroll to Top Arrow Button */}
      <ScrollToTop />

      {/* Interactive Resume Modal */}
      <InteractiveResume
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        profile={profile}
        experiences={experiences}
        skills={skills}
        education={education}
        achievements={achievements}
      />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        projects={projects}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    </div>
  );
}
