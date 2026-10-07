import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  GraduationCap, 
  Code2, 
  BarChart3, 
  Zap, 
  Sparkles, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  BookOpen,
  Trophy,
  ArrowUpRight
} from 'lucide-react';

export const About = ({ profile }) => {
  const iconMap = {
    Code2: Code2,
    BarChart3: BarChart3,
    Zap: Zap,
    Sparkles: Sparkles,
  };

  const coreTech = [
    { name: 'Python', role: 'Primary Backend & ML Language' },
    { name: 'Django & DRF', role: 'Web Architecture & REST APIs' },
    { name: 'React & Tailwind', role: 'Interactive Client Interfaces' },
    { name: 'Flutter & Dart', role: 'Cross-Platform Mobile Apps' },
    { name: 'Pandas & Scikit-learn', role: 'Data Analysis & ML Pipelines' },
    { name: 'MySQL & MongoDB', role: 'Relational & Document DBs' },
    { name: 'Postman & Git', role: 'API Testing & Version Control' }
  ];

  return (
    <section id="about" className="py-24 bg-[#050505] border-t border-[#1e293b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-[#1e293b] text-xs font-mono text-[#38bdf8]">
            <User className="w-3.5 h-3.5" />
            <span>About Hem Raj Ojha</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Software Development, Backend Engineering & Data-Driven Solutions
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            A B.Sc. CSIT graduate with a relentless focus on creating resilient software systems, performant APIs, intuitive cross-platform mobile apps, and machine learning telemetry.
          </p>
        </div>

        {/* Top Grid: Bio Story + Education & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Professional Story (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-[#1e293b] space-y-4">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-[#38bdf8]" />
                <span>Professional Story & Background</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {profile?.aboutStory ? (
                  profile.aboutStory.map((paragraph, index) => (
                    <p key={index} className="text-[#94a3b8] leading-relaxed">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <>
                    <p className="text-[#94a3b8]">
                      I am Hem Raj Ojha, a B.Sc. Computer Science and Information Technology (B.Sc. CSIT) graduate from Kailali Multiple Campus, Far Western University. My engineering journey is defined by a strong curiosity for architecting scalable backend APIs, intuitive digital experiences, and leveraging data to solve real-world problems.
                    </p>
                    <p className="text-[#94a3b8]">
                      With specialized hands-on internship experience in Python, Django, and Data Science at Clouds Nepal Web Pvt. Ltd., as well as cross-platform mobile engineering at CODE IT, I bridge the gap between robust server-side logic and responsive, accessible user interfaces.
                    </p>
                  </>
                )}
              </div>

              {/* Technologies Highlights */}
              <div className="pt-4 border-t border-[#1e293b] space-y-3">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Core Technologies & Focus Areas
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {coreTech.map((tech) => (
                    <div 
                      key={tech.name}
                      className="p-2.5 rounded-xl bg-[#050505] border border-[#1e293b] flex items-center justify-between"
                    >
                      <span className="font-semibold text-white">{tech.name}</span>
                      <span className="text-[11px] font-mono text-[#38bdf8]">{tech.role}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right 5 Cols: Education Card & Career Interests */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Highlight Card */}
            <div className="p-6 rounded-3xl bg-[#0a0a0a] border border-[#1e293b] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#050505] border border-[#1e293b] text-[#38bdf8]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">Education</h4>
                    <span className="text-[11px] font-mono text-emerald-400">Graduated B.Sc. CSIT</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#050505] border border-[#1e293b] text-[11px] font-mono text-[#38bdf8]">
                  4-Year Degree
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="font-bold text-white text-sm">
                  {profile?.educationSummary?.degree || 'B.Sc. Computer Science and Information Technology'}
                </div>
                <div className="text-slate-300 font-medium">
                  {profile?.educationSummary?.institution || 'Kailali Multiple Campus'} • {profile?.educationSummary?.university || 'Far Western University'}
                </div>
                <p className="text-[#94a3b8] text-xs leading-relaxed pt-1">
                  {profile?.educationSummary?.description || 'Comprehensive curriculum covering Data Structures & Algorithms, DBMS, Operating Systems, Software Engineering, Artificial Intelligence, and Computer Networks.'}
                </p>
              </div>
            </div>

            {/* Career Interests Card */}
            <div className="p-6 rounded-3xl bg-[#0a0a0a] border border-[#1e293b] space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#38bdf8]" />
                <h4 className="font-serif font-bold text-white text-base">Career Interests</h4>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                {(profile?.careerInterests || [
                  'Backend Engineering & Microservices with Python & Django',
                  'Full-Stack Web Architecture (React, Node.js, Express, Tailwind CSS)',
                  'Mobile Application Development (Flutter & Dart)',
                  'Data Science, Exploratory Data Analysis & Machine Learning (Pandas, Scikit-learn)',
                  'RESTful API Design, Postman Testing & Database Optimization (MySQL, SQLite, MongoDB)'
                ]).map((interest, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span className="text-[#94a3b8]">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Experience Level Pill */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0a0a0a] to-[#050505] border border-[#1e293b] flex items-center justify-between text-xs font-mono">
              <span className="text-[#94a3b8]">Level & Internship Experience:</span>
              <span className="text-white font-bold px-2.5 py-0.5 rounded-full bg-[#1e293b]">
                Junior / Graduate Engineer (2+ Yrs Practical)
              </span>
            </div>

          </div>

        </div>

        {/* Developer Philosophy Row */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-bold text-white">
              Developer Philosophy & Engineering Principles
            </h3>
            <span className="text-xs font-mono text-[#94a3b8] hidden sm:inline">
              Core Tenets
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(profile?.developerPhilosophy || []).map((val, idx) => {
              const Icon = iconMap[val.icon] || Code2;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0a0a0a] border border-[#1e293b] hover:border-[#38bdf8]/40 transition-all space-y-2.5 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#050505] border border-[#1e293b] flex items-center justify-center text-[#38bdf8] group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif font-bold text-white text-sm">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
