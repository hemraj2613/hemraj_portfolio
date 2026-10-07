import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  FileText, 
  Terminal, 
  Mail, 
  FolderGit2, 
  User, 
  Cpu, 
  Briefcase, 
  ArrowRight,
  Trophy,
  GraduationCap,
  Wrench,
  Sun,
  Moon
} from 'lucide-react';

export const CommandPalette = ({
  isOpen,
  onClose,
  onOpenResumeModal,
  projects = [],
  theme = 'dark',
  onToggleTheme
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          setQuery('');
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'theme',
      title: theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme',
      desc: theme === 'dark' ? 'Toggle light mode color scheme' : 'Toggle dark mode color scheme',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => { onClose(); onToggleTheme?.(); }
    },
    {
      id: 'resume',
      title: 'View & Download CV',
      desc: 'ATS digital resume format and PDF print',
      icon: FileText,
      action: () => { onClose(); onOpenResumeModal(); }
    },
    {
      id: 'about',
      title: 'Go to About Story',
      desc: 'B.Sc. CSIT background and developer philosophy',
      icon: User,
      action: () => { onClose(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }
    },
    {
      id: 'skills',
      title: 'Explore Skills Matrix',
      desc: 'Python, Django, Flutter, React, MySQL, Pandas, Scikit-learn',
      icon: Cpu,
      action: () => { onClose(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }
    },
    {
      id: 'projects',
      title: 'Browse Featured Projects',
      desc: 'E-Shop Django, Student Portal Flutter, Blood Bridge, NagarAlert',
      icon: FolderGit2,
      action: () => { onClose(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }
    },
    {
      id: 'experience',
      title: 'View Internship Timeline',
      desc: 'Experience at Clouds Nepal & CODE IT',
      icon: Briefcase,
      action: () => { onClose(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }
    },
    {
      id: 'achievements',
      title: 'View Achievements & Honors',
      desc: '1st Position — CodeFest 2025 Ideathon Champion',
      icon: Trophy,
      action: () => { onClose(); document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' }); }
    },
    {
      id: 'education',
      title: 'View Academic Education',
      desc: 'B.Sc. CSIT @ Kailali Multiple Campus, Far Western University',
      icon: GraduationCap,
      action: () => { onClose(); document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }); }
    },
    {
      id: 'services',
      title: 'View Engineering Services',
      desc: 'Django, REST APIs, Full-Stack, Flutter, Database, Data Science',
      icon: Wrench,
      action: () => { onClose(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }
    },
    {
      id: 'terminal',
      title: 'Open Interactive CLI Terminal',
      desc: 'Execute interactive CLI commands',
      icon: Terminal,
      action: () => { onClose(); document.getElementById('terminal')?.scrollIntoView({ behavior: 'smooth' }); }
    },
    {
      id: 'contact',
      title: 'Contact / Hire Hem Raj',
      desc: 'Send a project inquiry or message',
      icon: Mail,
      action: () => { onClose(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }
    }
  ];

  const filteredActions = actions.filter(
    (a) => a.title.toLowerCase().includes(query.toLowerCase()) || a.desc.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projects.filter(
    (p) => p.title.toLowerCase().includes(query.toLowerCase()) || p.technologies?.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        className="w-full max-w-xl bg-[#050505] border border-[#1e293b] rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Search Header */}
        <div className="p-3.5 bg-[#0a0a0a] border-b border-[#1e293b] flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search (e.g. 'Django', 'Flutter', 'CV', 'achievements')..."
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
          />
          <kbd className="px-2 py-0.5 text-[10px] font-mono bg-[#050505] border border-[#1e293b] rounded-full text-slate-400 shrink-0">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="p-2 max-h-[380px] overflow-y-auto space-y-1 text-xs sm:text-sm">
          
          <div className="px-3 py-1.5 text-[11px] font-mono text-[#94a3b8] uppercase">
            Quick Actions & Sections
          </div>

          {filteredActions.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#0a0a0a] text-left transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#0a0a0a] text-[#38bdf8] border border-[#1e293b] group-hover:text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-200 font-semibold group-hover:text-white">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#94a3b8]">
                      {item.desc}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-[#38bdf8] transition-colors" />
              </button>
            );
          })}

          {filteredProjects.length > 0 && query && (
            <>
              <div className="px-3 pt-3 pb-1.5 text-[11px] font-mono text-[#94a3b8] uppercase">
                Matching Projects
              </div>
              {filteredProjects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => {
                    onClose();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#0a0a0a] text-left transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#0a0a0a] text-[#38bdf8] border border-[#1e293b]">
                      <FolderGit2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-200 font-semibold">{proj.title}</div>
                      <div className="text-xs text-[#94a3b8] font-mono">{proj.technologies?.join(', ')}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#050505] text-[#38bdf8] border border-[#1e293b]">
                    {proj.category}
                  </span>
                </button>
              ))}
            </>
          )}

        </div>

        {/* Footer */}
        <div className="p-2.5 bg-[#0a0a0a] border-t border-[#1e293b] flex items-center justify-between text-[11px] text-[#94a3b8] font-mono px-4">
          <span>Navigate with shortcuts (⌘K / Ctrl+K)</span>
          <span>Hem Raj Ojha Portfolio</span>
        </div>
      </motion.div>
    </div>
  );
};
