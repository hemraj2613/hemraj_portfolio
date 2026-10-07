import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Star,
  Flame,
  ArrowUpRight
} from 'lucide-react';

export const Achievements = ({ achievements = [] }) => {
  return (
    <section id="achievements" className="py-24 bg-[#050505] border-t border-[#1e293b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-[#1e293b] text-xs font-mono text-amber-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Competitions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Honors & Hackathon Achievements
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8]">
            Recognized for technical creativity, problem-solving, and practical engineering in provincial tech competitions.
          </p>
        </div>

        {/* Featured Achievement Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#0a0a0a] border-2 border-amber-500/40 relative overflow-hidden shadow-2xl space-y-6"
          >
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1e293b] pb-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-black shadow-lg shadow-amber-500/20">
                  <Trophy className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                      🏆 Winner In Province Ideathon
                    </span>
                    <span className="text-xs font-mono text-[#94a3b8]">CodeFest 2025</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white pt-1">
                    1st Position — Farwest Province Ideathon
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-[#94a3b8]">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#050505] border border-[#1e293b]">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>2025</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#050505] border border-[#1e293b]">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Farwest Province, Nepal</span>
                </div>
              </div>
            </div>

            {/* Description & Impact */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10 text-xs sm:text-sm">
              <div className="lg:col-span-2 space-y-4">
                <p className="text-[#94a3b8] leading-relaxed text-sm">
                  Awarded First Position among leading university and provincial student engineering teams at CodeFest 2025 Farwest Province Ideathon. Recognized by judges and academic mentors for pitching, architecting, and prototyping an impactful software solution solving critical regional challenges.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-lg bg-[#050505] border border-[#1e293b] text-xs font-mono text-amber-300">
                    💡 Innovation & Ideation
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#050505] border border-[#1e293b] text-xs font-mono text-white">
                    ⚙️ Technical Prototyping
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#050505] border border-[#1e293b] text-xs font-mono text-[#38bdf8]">
                    📊 Data-Driven Regional Impact
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#050505] border border-[#1e293b] space-y-3">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Competition Highlights
                </div>
                <ul className="space-y-2 text-xs text-[#94a3b8]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Provincial Championship Trophy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Evaluated on Feasibility & Scalability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Endorsed by Far Western University faculty</span>
                  </li>
                </ul>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
