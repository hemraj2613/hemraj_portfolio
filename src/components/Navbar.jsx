import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Terminal as TerminalIcon, 
  Sparkles, 
  FileText, 
  Menu, 
  X, 
  Search, 
  Send,
  Trophy,
  GraduationCap,
  Briefcase,
  Sun,
  Moon
} from 'lucide-react';

export const Navbar = ({
  profile,
  onOpenCommandPalette,
  onOpenResumeModal,
  theme = 'dark',
  onToggleTheme
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'education', 'services', 'terminal', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Terminal', href: '#terminal', id: 'terminal' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#1e293b] py-2.5 shadow-xl shadow-black/60' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo / Brand */}
          <a 
            href="#home" 
            id="nav-brand-logo"
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="w-9 h-9 rounded-full bg-[#0a0a0a] border border-[#1e293b] flex items-center justify-center group-hover:border-[#38bdf8]/50 transition-colors shadow-sm">
              <Code2 className="w-4 h-4 text-[#38bdf8] group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-[#38bdf8] transition-colors">
                  {profile?.name || 'Hem Raj Ojha'}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-mono font-medium bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">
                  CSIT
                </span>
              </div>
              <p className="text-[11px] text-[#94a3b8] font-mono hidden xl:block">
                Python & Full-Stack Developer
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-[#0a0a0a] p-1 rounded-full border border-[#1e293b] shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? 'text-[#38bdf8] shadow-sm' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-[#1e293b]/50'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#38bdf8]/15 border border-[#38bdf8]/30 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Dark/Light Theme Toggle */}
            <button
              id="btn-theme-toggle"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              className="p-2 rounded-full bg-[#0a0a0a] hover:bg-[#1e293b] border border-[#1e293b] text-slate-300 hover:text-amber-400 transition-colors cursor-pointer relative group"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-[#0284c7] group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Quick Command Palette Button */}
            <button
              id="btn-nav-cmd-palette"
              onClick={onOpenCommandPalette}
              title="Search & Quick Actions (Ctrl + K)"
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#0a0a0a] hover:bg-[#1e293b] border border-[#1e293b] text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden xl:inline">Search...</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-[#1e293b] border border-slate-700 rounded text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Download CV / Resume Button */}
            <button
              id="btn-nav-resume"
              onClick={onOpenResumeModal}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0a0a] hover:bg-[#1e293b] border border-[#1e293b] text-slate-200 hover:text-white text-xs font-medium transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Download CV</span>
            </button>

            {/* Hire Me CTA */}
            <button
              id="btn-nav-hire"
              onClick={() => handleNavClick('#contact')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-100 text-black text-xs font-semibold shadow-md shadow-white/10 hover:shadow-white/20 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              id="btn-nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#0a0a0a] border border-[#1e293b] text-slate-300 lg:hidden hover:bg-[#1e293b] cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050505]/98 border-b border-[#1e293b] backdrop-blur-xl px-4 pt-3 pb-6 space-y-3"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0a0a0a] border border-[#1e293b] text-left text-xs font-medium text-slate-300 hover:text-[#38bdf8] hover:bg-[#1e293b] cursor-pointer transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-[#1e293b] flex flex-col gap-2">
              <button
                onClick={onToggleTheme}
                className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-[#1e293b] text-xs font-semibold text-slate-200 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#0284c7]" />}
                  <span>{theme === 'dark' ? 'Light Theme Mode' : 'Dark Theme Mode'}</span>
                </div>
                <span className="text-[10px] font-mono text-[#94a3b8]">
                  {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
                </span>
              </button>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenResumeModal(); }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#0a0a0a] border border-[#1e293b] text-xs font-semibold text-slate-200 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#38bdf8]" />
                View & Download CV
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

