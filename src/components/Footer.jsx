import React from 'react';
import { 
  Code2, 
  Database, 
  Terminal, 
  ArrowUp, 
  Heart, 
  Github, 
  Linkedin,
  Award,
  GraduationCap
} from 'lucide-react';

export const Footer = ({
  profile,
  analytics,
  onOpenResumeModal
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#1e293b] pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0a0a0a] border border-[#1e293b] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-[#38bdf8]" />
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                {profile?.name || 'Hem Raj Ojha'}
              </span>
            </div>

            <p className="text-xs text-[#94a3b8] max-w-sm leading-relaxed">
              Python & Django Developer, Full-Stack Engineer & B.Sc. CSIT graduate building scalable backend systems, data science solutions, and cross-platform Flutter applications.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile?.socials?.github || 'https://github.com/hemrajojha'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#0a0a0a] hover:bg-[#1e293b] border border-[#1e293b] text-slate-300 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile?.socials?.linkedin || 'https://linkedin.com/in/hemrajojha'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#0a0a0a] hover:bg-[#1e293b] border border-[#1e293b] text-slate-300 hover:text-sky-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="hover:text-[#38bdf8] transition-colors">About</a>
              <a href="#skills" className="hover:text-[#38bdf8] transition-colors">Skills</a>
              <a href="#projects" className="hover:text-[#38bdf8] transition-colors">Projects</a>
              <a href="#experience" className="hover:text-[#38bdf8] transition-colors">Experience</a>
              <a href="#achievements" className="hover:text-[#38bdf8] transition-colors">Achievements</a>
              <a href="#education" className="hover:text-[#38bdf8] transition-colors">Education</a>
              <a href="#services" className="hover:text-[#38bdf8] transition-colors">Services</a>
              <a href="#terminal" className="hover:text-[#38bdf8] transition-colors">Terminal</a>
              <a href="#contact" className="hover:text-[#38bdf8] transition-colors">Contact</a>
              <button 
                onClick={onOpenResumeModal} 
                className="text-left text-[#38bdf8] hover:underline cursor-pointer"
              >
                Download CV
              </button>
            </div>
          </div>

          {/* Col 3: Live Portfolio Telemetry */}
          <div className="lg:col-span-4 p-5 rounded-3xl bg-[#0a0a0a] border border-[#1e293b] space-y-3 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono text-xs text-white font-bold">Portfolio Data Engine</span>
              </div>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 font-mono text-[11px] text-[#94a3b8]">
              <div className="bg-[#050505] p-2 rounded-xl border border-[#1e293b]">
                <div>Total Visits:</div>
                <div className="text-white font-bold">{analytics?.totalVisits || 1}</div>
              </div>
              <div className="bg-[#050505] p-2 rounded-xl border border-[#1e293b]">
                <div>Total Likes:</div>
                <div className="text-white font-bold">{analytics?.totalLikes || 1}</div>
              </div>
              <div className="bg-[#050505] p-2 rounded-xl border border-[#1e293b]">
                <div>Inquiries:</div>
                <div className="text-white font-bold">{analytics?.totalMessages || 0}</div>
              </div>
              <div className="bg-[#050505] p-2 rounded-xl border border-[#1e293b]">
                <div>Engine:</div>
                <div className="text-emerald-400 font-bold">Express + Node</div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-slate-500 pt-1">
              B.Sc. CSIT • Kailali Multiple Campus • Far Western University
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#94a3b8]">
            © {new Date().getFullYear()} {profile?.name || 'Hem Raj Ojha'}. Built with Python/Django & Full-Stack craft.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              id="btn-footer-scroll-to-top"
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
