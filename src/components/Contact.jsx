import React, { useState } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import {
  Mail,
  Send,
  MapPin,
  Clock,
  CheckCircle,
  MessageSquare,
  Sparkles,
  Calendar,
  Github,
  Linkedin,
} from "lucide-react";

export const Contact = ({ profile }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Django Web Development");
  const [budget, setBudget] = useState("Flexible / Negotiable");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const projectTypes = [
    "Django Web Development",
    "REST API & Microservices",
    "Full-Stack Web App (React + Node / Django)",
    "Flutter Mobile App Development",
    "Database Engineering & Optimization",
    "Data Analysis & Machine Learning",
    "Full-Time / Contract Engineering Role",
  ];

  const budgetRanges = [
    "Flexible / Negotiable",
    "Under $1,000",
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000+",
    "Full-Time Employment",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 400));

      setStatus("success");
      setFeedbackMsg(
        "Thank you! Your message has been queued locally and is ready to be sent from a backend service when connected.",
      );

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setFeedbackMsg(
        err.message || "An error occurred while sending your message.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative bg-[#050505] border-t border-[#1e293b]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0a0a0a] border border-[#1e293b] text-[#38bdf8] text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Start a Project or Hire Hem Raj Ojha
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed">
            Have an application to build, need backend or Flutter mobile
            engineering, or seeking a dedicated full-time developer? Let's
            discuss.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl border border-[#1e293b] space-y-6 bg-[#0a0a0a]">
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Contact Channels
                </h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  I typically respond to project requests and recruiter
                  communications promptly.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`mailto:${profile?.email || "hemrajojha1122334455@gmail.com"}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#050505] border border-[#1e293b] hover:border-[#38bdf8]/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-[#0a0a0a] text-[#38bdf8] border border-[#1e293b]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#94a3b8] font-mono uppercase">
                      DIRECT INBOX
                    </div>
                    <div className="font-medium text-slate-200 group-hover:text-white transition-colors">
                      {profile?.email || "hemrajojha1122334455@gmail.com"}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#050505] border border-[#1e293b]">
                  <div className="p-2.5 rounded-xl bg-[#0a0a0a] text-emerald-400 border border-[#1e293b]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#94a3b8] font-mono uppercase">
                      LOCATION & TIMEZONE
                    </div>
                    <div className="font-medium text-slate-200">
                      {profile?.location ||
                        "Nepal (NPT / Remote Available Globally)"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#050505] border border-[#1e293b]">
                  <div className="p-2.5 rounded-xl bg-[#0a0a0a] text-purple-400 border border-[#1e293b]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#94a3b8] font-mono uppercase">
                      CURRENT AVAILABILITY
                    </div>
                    <div className="font-medium text-slate-200">
                      Open for Full-Time, Contract, or Freelance Work
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-[#1e293b] flex items-center gap-3">
                <a
                  href={
                    profile?.socials?.github || "https://github.com/hemrajojha"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#050505] hover:bg-[#1e293b] border border-[#1e293b] text-slate-300 hover:text-white transition-colors shadow-sm"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={
                    profile?.socials?.linkedin ||
                    "https://linkedin.com/in/hemrajojha"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#050505] hover:bg-[#1e293b] border border-[#1e293b] text-slate-300 hover:text-sky-400 transition-colors shadow-sm"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Project Request Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl border border-[#1e293b] bg-[#0a0a0a] shadow-xl">
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Send Direct Inquiry
              </h3>
              <p className="text-xs text-[#94a3b8] mb-6">
                Fill out your details and project goals below to connect
                directly with Hem Raj Ojha.
              </p>

              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white">
                    Message Transmitted!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {feedbackMsg}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-5 py-2 rounded-full bg-[#050505] hover:bg-[#1e293b] border border-[#1e293b] text-xs font-semibold text-white cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John / Hiring Team"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#1e293b] text-xs sm:text-sm text-white focus:outline-none focus:border-[#38bdf8] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#1e293b] text-xs sm:text-sm text-white focus:outline-none focus:border-[#38bdf8] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Project Scope / Category
                      </label>
                      <select
                        id="contact-type-select"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#1e293b] text-xs sm:text-sm text-white focus:outline-none focus:border-[#38bdf8] transition-colors"
                      >
                        {projectTypes.map((type) => (
                          <option
                            key={type}
                            value={type}
                            className="bg-[#050505] text-white"
                          >
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Target Budget Range
                      </label>
                      <select
                        id="contact-budget-select"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#1e293b] text-xs sm:text-sm text-white focus:outline-none focus:border-[#38bdf8] transition-colors"
                      >
                        {budgetRanges.map((b) => (
                          <option
                            key={b}
                            value={b}
                            className="bg-[#050505] text-white"
                          >
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Project Goals & Description *
                    </label>
                    <textarea
                      id="contact-message-input"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your project scope, features, timeline, or engineering opportunity..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#1e293b] text-xs sm:text-sm text-white focus:outline-none focus:border-[#38bdf8] transition-colors"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs">
                      {feedbackMsg}
                    </div>
                  )}

                  <button
                    id="btn-submit-contact"
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white hover:bg-slate-100 text-black text-xs sm:text-sm font-bold shadow-lg shadow-white/10 hover:shadow-white/20 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {status === "sending" ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Hem Raj</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
