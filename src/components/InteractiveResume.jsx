import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Printer, 
  Copy, 
  Check, 
  X,
  Download,
  Award,
  GraduationCap
} from 'lucide-react';

export const InteractiveResume = ({
  isOpen,
  onClose,
  profile,
  experiences = [],
  skills = [],
  education = [],
  achievements = []
}) => {
  const [copied, setCopied] = useState(false);
  const [activeView, setActiveView] = useState('preview');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainText = `
HEM RAJ OJHA
Python & Django Developer | Full-Stack Developer | Data Science Enthusiast
Email: ${profile?.email || 'hemrajojha1122334455@gmail.com'}
Location: ${profile?.location || 'Nepal (Available Globally)'}
GitHub: ${profile?.socials?.github || 'https://github.com/hemrajojha'} | LinkedIn: ${profile?.socials?.linkedin || 'https://linkedin.com/in/hemrajojha'}

PROFESSIONAL SUMMARY
${profile?.aboutStory ? profile.aboutStory[0] : ''} ${profile?.aboutStory ? profile.aboutStory[1] : ''}

EDUCATION
- B.Sc. Computer Science and Information Technology (B.Sc. CSIT)
  Kailali Multiple Campus, Far Western University
  Graduated 4-Year Degree

MAJOR ACHIEVEMENTS
- 1st Position — Farwest Province Ideathon, CodeFest 2025

TECHNICAL SKILLS
- Frontend: HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS
- Backend: Python, Django, Django REST Framework, Node.js, Express.js
- Mobile: Flutter, Dart, GetX
- Database: MySQL, SQLite, MongoDB
- Data Science: Pandas, NumPy, Matplotlib, Scikit-learn
- Tools: Git, GitHub, Postman, VS Code

EXPERIENCE & INTERNSHIPS
1. Python with Django & Data Science Intern — Clouds Nepal Web Pvt. Ltd.
   • Django web application development and REST API endpoint architecture
   • Database management, relational schema modeling, and query optimizations using Django ORM
   • Designing and deploying interactive analytics dashboards for administrative telemetry
   • Data analysis and exploratory data wrangling on real-world datasets with Pandas and NumPy
   • Machine learning experiments and model evaluation with Scikit-learn

2. Flutter Developer Intern — CODE IT
   • Flutter application development for smooth cross-platform Android and iOS experiences
   • Architecting reactive state management workflows using GetX
   • REST API integration with asynchronous JSON parsing and robust error handling
   • Implementing biometric and JWT authentication flows
   • Conducting Postman API testing and network debugging

KEY PROJECTS
- E-Shop: Django E-Commerce & Analytics Platform (Python, Django, SQLite, Pandas, NumPy, Scikit-learn, Matplotlib)
- Student Portal Mobile App (Flutter, Dart, GetX, Node.js, REST API, Postman)
- Blood Bridge (PHP, MySQL, Bootstrap, JavaScript)
- NagarAlert (React, Node.js, Express.js, MongoDB)
`.trim();

    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJson = () => {
    const resumeData = {
      profile,
      experiences,
      skills,
      education,
      achievements,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(resumeData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Hem_Raj_Ojha_CV.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-4xl bg-[#050505] border border-[#1e293b] rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
      >
        {/* Top Controls Bar */}
        <div className="p-4 bg-[#0a0a0a] border-b border-[#1e293b] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-[#050505] text-[#38bdf8] border border-[#1e293b]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-sm font-bold text-white">Curriculum Vitae / Resume</h3>
              <p className="text-[11px] text-[#94a3b8] font-mono">Hem Raj Ojha • B.Sc. CSIT Graduate</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex bg-[#050505] p-1 rounded-full border border-[#1e293b] text-xs">
              <button
                onClick={() => setActiveView('preview')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  activeView === 'preview' ? 'bg-white text-black font-bold' : 'text-[#94a3b8]'
                }`}
              >
                Visual CV
              </button>
              <button
                onClick={() => setActiveView('json')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  activeView === 'json' ? 'bg-white text-black font-bold' : 'text-[#94a3b8]'
                }`}
              >
                JSON Data
              </button>
            </div>

            <button
              onClick={handleCopyText}
              title="Copy ATS Text"
              className="p-2 rounded-full bg-[#0a0a0a] hover:bg-[#1e293b] text-slate-300 hover:text-white border border-[#1e293b] text-xs flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden md:inline">Copy ATS Text</span>
            </button>

            <button
              onClick={handlePrint}
              title="Print to PDF"
              className="p-2 px-3 rounded-full bg-white hover:bg-slate-200 text-black font-semibold text-xs flex items-center gap-1.5 shadow-sm shadow-white/10 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden md:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#0a0a0a] hover:bg-[#1e293b] border border-[#1e293b] text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto bg-[#050505] text-slate-200 print:bg-white print:text-black">
          
          {activeView === 'json' ? (
            <pre className="text-xs font-mono bg-[#0a0a0a] p-4 rounded-xl border border-[#1e293b] overflow-x-auto text-[#38bdf8]">
              {JSON.stringify({ profile, experiences, skills, education, achievements }, null, 2)}
            </pre>
          ) : (
            <div className="max-w-3xl mx-auto space-y-8 text-xs sm:text-sm">
              
              {/* Header Info */}
              <div className="border-b border-[#1e293b] pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {profile?.name || 'Hem Raj Ojha'}
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-[#38bdf8] font-mono mt-1">
                    {profile?.subtitle || 'Python & Django Developer | Full-Stack Developer | Data Science Enthusiast'}
                  </p>
                </div>

                <div className="space-y-1 text-xs text-[#94a3b8] font-mono text-center sm:text-right">
                  <div>{profile?.email}</div>
                  <div>{profile?.location}</div>
                  <div className="text-[#38bdf8]">github.com/hemrajojha • linkedin.com/in/hemrajojha</div>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold font-mono text-[#38bdf8] uppercase tracking-wider">
                  Professional Summary
                </h2>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                  {profile?.aboutStory ? profile.aboutStory[0] : ''} {profile?.aboutStory ? profile.aboutStory[1] : ''}
                </p>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold font-mono text-[#38bdf8] uppercase tracking-wider flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </h2>
                <div className="p-4 rounded-2xl bg-[#0a0a0a] border border-[#1e293b] space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-white text-sm">B.Sc. Computer Science and Information Technology (B.Sc. CSIT)</span>
                    <span className="font-mono text-emerald-400">Graduated</span>
                  </div>
                  <div className="text-slate-300 text-xs">
                    Kailali Multiple Campus • Far Western University
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Major Achievement</span>
                </h2>
                <div className="p-4 rounded-2xl bg-[#0a0a0a] border border-amber-500/30 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-white">1st Position — Farwest Province Ideathon</span>
                    <p className="text-[#94a3b8]">CodeFest 2025 • First Place Winner</p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[11px]">2025</span>
                </div>
              </div>

              {/* Skills breakdown */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold font-mono text-[#38bdf8] uppercase tracking-wider">
                  Technical Core Competencies
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 bg-[#0a0a0a] rounded-xl border border-[#1e293b]">
                    <span className="font-bold text-white">Frontend:</span> HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS
                  </div>
                  <div className="p-3 bg-[#0a0a0a] rounded-xl border border-[#1e293b]">
                    <span className="font-bold text-white">Backend:</span> Python, Django, Django REST Framework, Node.js, Express.js
                  </div>
                  <div className="p-3 bg-[#0a0a0a] rounded-xl border border-[#1e293b]">
                    <span className="font-bold text-white">Mobile:</span> Flutter, Dart, GetX State Management
                  </div>
                  <div className="p-3 bg-[#0a0a0a] rounded-xl border border-[#1e293b]">
                    <span className="font-bold text-white">Database:</span> MySQL, SQLite, MongoDB
                  </div>
                  <div className="p-3 bg-[#0a0a0a] rounded-xl border border-[#1e293b]">
                    <span className="font-bold text-white">Data Science:</span> Pandas, NumPy, Matplotlib, Scikit-learn
                  </div>
                  <div className="p-3 bg-[#0a0a0a] rounded-xl border border-[#1e293b]">
                    <span className="font-bold text-white">Tools:</span> Git, GitHub, Postman, VS Code
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-5">
                <h2 className="text-xs font-bold font-mono text-[#38bdf8] uppercase tracking-wider">
                  Professional Internship Experience
                </h2>

                {experiences.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-2xl bg-[#0a0a0a] border border-[#1e293b] space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <h3 className="font-serif font-bold text-white text-sm sm:text-base">
                        {exp.role} <span className="text-[#38bdf8]">@ {exp.company}</span>
                      </h3>
                      <span className="text-xs font-mono text-[#94a3b8]">{exp.period}</span>
                    </div>
                    <ul className="space-y-1 pl-4 list-disc text-[#94a3b8] text-xs leading-relaxed">
                      {exp.responsibilities?.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="p-4 bg-[#0a0a0a] border-t border-[#1e293b] flex items-center justify-between text-xs">
          <span className="text-[#94a3b8] font-mono">
            Hem Raj Ojha • Official CV
          </span>
          <button
            onClick={handleDownloadJson}
            className="text-[#38bdf8] hover:underline font-mono cursor-pointer"
          >
            Export JSON Schema
          </button>
        </div>

      </motion.div>
    </div>
  );
};
