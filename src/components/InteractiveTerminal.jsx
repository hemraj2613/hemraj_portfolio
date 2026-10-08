import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import {
  Terminal as TerminalIcon,
  CornerDownLeft,
  Trash2,
  Maximize2,
  Minimize2,
  Database,
  Check,
} from "lucide-react";

import {
  developerProfile,
  initialSkills,
  initialProjects,
  initialExperiences,
  initialAchievements,
  initialEducation,
  initialServices,
  initialTestimonials,
} from "../../server/db.js";

export const InteractiveTerminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "Hem Raj Ojha Developer CLI Shell v2026.1 (x86_64-python-django-node)",
      time: new Date().toLocaleTimeString(),
    },
    {
      type: "system",
      text: 'Connected to Portfolio Database. Type "help" for interactive commands.',
      time: new Date().toLocaleTimeString(),
    },
    {
      type: "prompt",
      command: "bio",
      time: new Date().toLocaleTimeString(),
    },
    {
      type: "output",
      text: [
        "👤 Name: Hem Raj Ojha",
        "🎓 Degree: B.Sc. Computer Science and Information Technology (B.Sc. CSIT)",
        "🏛️ Campus: Kailali Multiple Campus, Far Western University",
        "💼 Subtitle: Python & Django Developer | Full-Stack Developer | Data Science Enthusiast",
        "🟢 Status: Available for Opportunities & Projects",
      ],
      time: new Date().toLocaleTimeString(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommandSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const cmd = input.trim();
    setInput("");

    if (cmd.toLowerCase() === "clear") {
      setHistory([
        {
          type: "system",
          text: "Terminal screen cleared. Ready for input.",
          time: new Date().toLocaleTimeString(),
        },
      ]);
      return;
    }

    // Append user command
    const newEntry = {
      type: "prompt",
      command: cmd,
      time: new Date().toLocaleTimeString(),
    };
    setHistory((prev) => [...prev, newEntry]);

    setIsLoading(true);

    try {
      const normalized = cmd.toLowerCase();
      let output = ["Command executed locally."];

      if (normalized === "help") {
        output = [
          "Available commands:",
          "  bio",
          "  skills",
          "  projects",
          "  experience",
          "  achievements",
          "  education",
          "  services",
          "  hire",
          "  resume",
          "  help",
        ];
      } else if (normalized === "bio") {
        output = [
          `👤 Name: ${developerProfile.name}`,
          `🎯 Headline: ${developerProfile.headline}`,
          `💼 Roles: ${developerProfile.roles.join(" | ")}`,
          `📍 Location: ${developerProfile.location}`,
          `✅ Status: ${developerProfile.availability.label}`,
        ];
      } else if (normalized === "skills") {
        output = initialSkills.map(
          (group) =>
            `${group.category}: ${group.skills.map((skill) => skill.name).join(", ")}`,
        );
      } else if (normalized === "projects") {
        output = initialProjects.map(
          (project) => `- ${project.title} (${project.category})`,
        );
      } else if (normalized === "experience") {
        output = initialExperiences.map(
          (item) => `${item.role} @ ${item.company}`,
        );
      } else if (normalized === "achievements") {
        output = initialAchievements.map(
          (item) => `${item.title} (${item.year})`,
        );
      } else if (normalized === "education") {
        output = initialEducation.map(
          (item) => `${item.degree} @ ${item.institution}`,
        );
      } else if (normalized === "services") {
        output = initialServices.map(
          (item) => `${item.title} — ${item.category}`,
        );
      } else if (normalized === "hire") {
        output = [
          "Available for full-time, contract, and freelance work.",
          `Email: ${developerProfile.email}`,
          `Location: ${developerProfile.location}`,
        ];
      } else if (normalized === "resume") {
        output = [
          "Resume request captured. Open the portfolio webpage and use the resume modal to view the latest profile details.",
        ];
      } else {
        output = [
          `Unknown command: ${cmd}`,
          'Type "help" to view available commands.',
        ];
      }

      setHistory((prev) => [
        ...prev,
        {
          type: "output",
          text: output,
          time: new Date().toLocaleTimeString(),
        },
      ]);
    } catch (err) {
      setHistory((prev) => [
        ...prev,
        {
          type: "error",
          text: `Execution failed: ${err.message || "Unable to process command locally."}`,
          time: new Date().toLocaleTimeString(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickCommands = [
    "help",
    "bio",
    "skills",
    "projects",
    "experience",
    "achievements",
    "education",
    "services",
    "hire",
  ];

  return (
    <section
      id="terminal"
      className="py-24 relative bg-[#050505] border-t border-[#1e293b]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0a0a0a] border border-[#1e293b] text-[#38bdf8] text-xs font-mono mb-4">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>INTERACTIVE DEVELOPER CLI</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#38bdf8] dark:text-white  tracking-tight mb-4">
            Interactive Developer Terminal
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed">
            Execute real-time commands to query Hem Raj Ojha's background,
            projects, internship timelines, and skill matrix.
          </p>
        </div>

        {/* Terminal Container */}
        
        <div
          className={`mx-auto transition-all duration-300 ${isExpanded ? "max-w-6xl" : "max-w-4xl"} `}
        >
          
          <div className="rounded-3xl border border-[#1e293b] bg-[#050505]  shadow-2xl overflow-hidden font-mono text-xs sm:text-sm relative">
            {/* Terminal Window Header Bar */}
            <div className="p-3.5 bg-[#0a0a0a] border-b border-[#1e293b] flex items-center justify-between ">
              {/* Window Controls */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs text-slate-400 font-mono hidden sm:inline">
                  hemraj@portfolio-kernel: ~
                </span>
              </div>

              {/* Status / Utilities */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#050505] border border-[#1e293b] text-[10px] text-emerald-400 font-mono">
                  <Database className="w-3 h-3" />
                  <span>Database Online</span>
                </div>

                <button
                  onClick={() => setHistory([])}
                  title="Clear Console"
                  className="p-1.5 rounded hover:bg-[#1e293b] text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  title="Toggle Fullscreen"
                  className="p-1.5 rounded hover:bg-[#1e293b] text-slate-400 hover:text-white transition-colors cursor-pointer hidden sm:block"
                >
                  {isExpanded ? (
                    <Minimize2 className="w-3.5 h-3.5" />
                  ) : (
                    <Maximize2 className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Quick Command Suggestions */}
            <div className="px-4 py-2.5 bg-[#0a0a0a]/70 border-b border-[#1e293b] flex items-center gap-2 overflow-x-auto text-xs scrollbar-none">
              <span className="text-slate-500 text-[11px] font-mono shrink-0">
                Quick run:
              </span>
              {quickCommands.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => {
                    setInput(cmd);
                    inputRef.current?.focus();
                  }}
                  className="px-2.5 py-0.5 rounded-full bg-[#050505] hover:bg-[#1e293b] border border-[#1e293b] text-[#38bdf8] text-[11px] font-mono transition-colors shrink-0 cursor-pointer"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Body Screen */}
            <div
              onClick={() => inputRef.current?.focus()}
              className="p-5 min-h-[340px] max-h-[480px] overflow-y-auto space-y-3 cursor-text bg-[#050505]"
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  {item.type === "system" && (
                    <div className="text-[#94a3b8] italic text-xs">
                      [SYS {item.time}] {item.text}
                    </div>
                  )}

                  {item.type === "prompt" && (
                    <div className="flex items-center gap-2 text-[#38bdf8]">
                      <span className="text-emerald-400 font-bold">
                        hemraj@cli:~$
                      </span>
                      <span className="text-white font-semibold">
                        {item.command}
                      </span>
                      <span className="text-[10px] text-slate-600 ml-auto font-mono">
                        {item.time}
                      </span>
                    </div>
                  )}

                  {item.type === "output" && (
                    <div className="pl-4 text-slate-300 leading-relaxed space-y-1 text-xs">
                      {Array.isArray(item.text) ? (
                        item.text.map((line, i) => (
                          <div
                            key={i}
                            className="whitespace-pre-wrap font-mono"
                          >
                            {line}
                          </div>
                        ))
                      ) : (
                        <div className="whitespace-pre-wrap font-mono">
                          {item.text}
                        </div>
                      )}
                    </div>
                  )}

                  {item.type === "error" && (
                    <div className="pl-4 text-rose-400 font-mono text-xs">
                      {item.text}
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-[#38bdf8] pl-4">
                  <span className="animate-spin">⠋</span>
                  <span>Executing server query...</span>
                </div>
              )}

              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input Bar */}
            <form
              onSubmit={handleCommandSubmit}
              className="p-3 bg-[#0a0a0a] border-t border-[#1e293b] flex items-center gap-2"
            >
              <span className="text-emerald-400 font-bold pl-2 text-xs sm:text-sm">
                hemraj@cli:~$
              </span>
              <input
                ref={inputRef}
                id="terminal-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command (e.g. 'help', 'bio', 'skills', 'projects', 'achievements')..."
                className="flex-1 bg-transparent text-white placeholder-slate-600 focus:outline-none text-xs sm:text-sm font-mono"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-1.5 rounded-lg bg-[#050505] hover:bg-[#1e293b] border border-[#1e293b] text-slate-300 hover:text-white disabled:opacity-40 transition-colors cursor-pointer"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
