import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import hemraj from "../../assets/hemraj1.png";
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Database,
  Code2,
  Terminal,
  Send,
  Layers,
  CheckCircle,
  ExternalLink,
  Award,
} from "lucide-react";

export const Hero = ({ profile, onOpenResumeModal }) => {
  const roles = profile?.roles || [
    "Python & Django Developer",
    "Full-Stack Developer",
    "Flutter Mobile Developer",
    "Data Science Enthusiast",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#050505]"
    >
      {/* Background Decorative Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio, Roles, CTAs & Socials */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0a0a0a] border border-[#1e293b] text-xs font-mono text-slate-300 shadow-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-semibold">
                {profile?.availability?.label ||
                  "Available for Opportunities & Projects"}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                {profile?.headline ||
                  "Building Digital Experiences with Code & Creativity"}
              </h1>

              {/* Subtitle / Animated Role */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 pt-1 font-mono text-sm sm:text-base text-slate-300">
                <span className="text-[#38bdf8] font-bold">Role:</span>
                <div className="h-7 overflow-hidden flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRoleIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="text-white font-semibold inline-block px-2.5 py-0.5 rounded bg-[#0a0a0a] border border-[#1e293b] text-xs sm:text-sm text-[#38bdf8]"
                    >
                      {roles[currentRoleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-mono text-[#94a3b8]">
                {profile?.subtitle ||
                  "Python & Django Developer | Full-Stack Developer | Data Science Enthusiast"}
              </p>
            </motion.div>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {profile?.intro ||
                "I am a passionate software developer and B.Sc. CSIT graduate with a deep enthusiasm for Python, Django backend systems, modern full-stack web architectures, mobile development with Flutter, and data-driven machine learning solutions."}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              {/* View Projects button */}
              <a
                href="#projects"
                id="btn-hero-view-projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-black font-bold text-xs sm:text-sm shadow-lg shadow-white/10 hover:shadow-white/20 transition-all cursor-pointer group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download CV button */}
              <a
                href="/Hemraj -CV.pdf"
                download="Hemraj -CV.pdf"
                id="btn-hero-download-cv"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a0a0a] hover:bg-[#1e293b] text-slate-200 hover:text-white border border-[#1e293b] font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#38bdf8]" />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Social Links & Highlights Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-xs text-slate-400 font-mono"
            >
              <div className="flex items-center gap-2">
                <a
                  href={
                    profile?.socials?.github || "https://github.com/hemraj2613"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-github"
                  className="p-2.5 rounded-full bg-[#0a0a0a] hover:bg-[#1e293b] border border-[#1e293b] text-slate-300 hover:text-white transition-all shadow-sm group"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href={
                    profile?.socials?.linkedin ||
                    "https://www.linkedin.com/in/hemraj-ojha-7871361a1"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-linkedin"
                  className="p-2.5 rounded-full bg-[#0a0a0a] hover:bg-[#1e293b] border border-[#1e293b] text-slate-300 hover:text-sky-400 transition-all shadow-sm group"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>

              <div className="h-4 w-px bg-[#1e293b]" />

              <div className="flex items-center gap-1.5 text-[#94a3b8] text-[11px]">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Participated in • CodeFest 2025</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Professional Profile Image & Tech Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-72 sm:w-88"
            >
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#38bdf8]/20 via-emerald-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-60" />

              {/* Profile Card Container */}
              <div className="relative bg-[#0a0a0a] border border-[#1e293b] rounded-3xl p-4 sm:p-5 shadow-2xl space-y-4">
                {/* Profile Image with subtle badge */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-[#1e293b]">
                  <img
                    src={hemraj}
                    alt="Hem Raj Ojha"
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-100"
                  />

                  {/* Corner B.Sc. CSIT Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#050505]/85 backdrop-blur-md border border-[#1e293b] flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                      <span className="text-white font-bold">
                        B.Sc. CSIT Graduate
                      </span>
                    </div>
                    <span className="text-[#38bdf8] text-[11px]">
                      KMC / FWU
                    </span>
                  </div>
                </div>

                {/* Mini Stat Blocks */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-[#050505] border border-[#1e293b]">
                    <div className="text-[#94a3b8] text-[10px] uppercase">
                      Core Backend
                    </div>
                    <div className="text-white font-bold pt-0.5">
                      Python & Django
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#050505] border border-[#1e293b]">
                    <div className="text-[#94a3b8] text-[10px] uppercase">
                      Mobile & Web
                    </div>
                    <div className="text-emerald-400 font-bold pt-0.5">
                      Flutter & React
                    </div>
                  </div>
                </div>

                {/* Terminal Quick Status */}
                <div className="p-2.5 rounded-xl bg-[#050505] border border-[#1e293b] text-[11px] font-mono text-[#94a3b8] flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>status: open_for_work</span>
                  </span>
                  <span className="text-slate-300">v2026.1</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
