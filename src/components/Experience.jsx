import React from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  Building,
  Calendar,
  MapPin,
  CheckCircle2,
  Terminal,
  Layers,
  Smartphone,
  Database,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const Experience = ({ experiences = [] }) => {
  return (
    <section
      id="experience"
      className="py-24 bg-[#050505] border-t border-[#1e293b] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-[#1e293b] text-xs font-mono text-[#38bdf8]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Engineering & Internship Timeline
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8]">
            Hands-on software development experience building production Django
            backends, data science pipelines, and cross-platform Flutter
            applications.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-[#1e293b] ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative space-y-4"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#050505] border-2 border-[#38bdf8] flex items-center justify-center shadow-md shadow-[#38bdf8]/20">
                <div className="w-2 h-2 rounded-full bg-[#38bdf8]" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-[#1e293b] hover:border-[#38bdf8]/40 transition-all space-y-6 shadow-xl">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1e293b] pb-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] pt-1">
                      <Building className="w-3.5 h-3.5" />
                      <span className="font-semibold text-white">
                        {exp.company}
                      </span>
                      <span className="text-[#94a3b8]">• {exp.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-[#94a3b8]">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#050505] border border-[#1e293b]">
                      <Calendar className="w-3.5 h-3.5 text-[#38bdf8]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  {exp.summary}
                </p>

                {/* Responsibilities Checklist */}
                <div className="space-y-3">
                  <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Key Responsibilities & Deliverables
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {exp.responsibilities?.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-300 p-2 rounded-xl bg-[#050505] border border-[#1e293b]/60"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                        <span className="text-[#94a3b8] text-xs leading-snug">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-[#1e293b]">
                  <span className="text-xs font-mono text-[#94a3b8]">
                    Tools & Frameworks:
                  </span>
                  {exp.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-[#050505] border border-[#1e293b] text-[11px] font-mono text-[#38bdf8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
