import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Building, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  Award
} from 'lucide-react';

export const Education = ({ education = [], educationList = [] }) => {
  const allEdu = education.length > 0 ? education : educationList;
  const edu = allEdu[0] || {
    degree: 'B.Sc. Computer Science and Information Technology (B.Sc. CSIT)',
    institution: 'Kailali Multiple Campus',
    university: 'Far Western University',
    status: 'Graduated / Alumnus',
    period: '4-Year Undergraduate Degree',
    location: 'Dhangadhi, Kailali, Nepal',
    highlights: [
      'Comprehensive study of Data Structures & Algorithms, Object-Oriented Programming (Python/Java/C++), and Database Management Systems (DBMS).',
      'Specialized coursework in Software Engineering, Web Technologies, Artificial Intelligence, Operating Systems, and Computer Networks.',
      'Active participant and leader in campus tech activities, coding workshops, and provincial hackathons.'
    ]
  };

  const coursework = [
    'Data Structures & Algorithms',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming',
    'Software Engineering & Testing',
    'Artificial Intelligence & Machine Learning',
    'Computer Networks & Security',
    'Operating Systems & System Architecture',
    'Web Technology & Cloud Concepts'
  ];

  return (
    <section id="education" className="py-24 bg-[#050505] border-t border-[#1e293b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-[#1e293b] text-xs font-mono text-[#38bdf8]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Formal Computer Science & IT Degree
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8]">
            Rigorous undergraduate foundation in theoretical computer science, algorithms, software engineering principles, and database architectures.
          </p>
        </div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-[#0a0a0a] border border-[#1e293b] space-y-8 shadow-xl"
        >
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1e293b] pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#050505] border border-[#1e293b] flex items-center justify-center text-[#38bdf8] shadow-inner">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
                  {edu.status || 'Graduated / Alumnus'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white pt-1">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] pt-1">
                  <span className="font-bold text-white text-sm">{edu.institution}</span>
                  <span className="text-[#94a3b8]">• {edu.university}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-[#94a3b8]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#050505] border border-[#1e293b]">
                <Calendar className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>{edu.period}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#050505] border border-[#1e293b]">
                <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>{edu.location}</span>
              </div>
            </div>
          </div>

          {/* Highlights & Coursework Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs sm:text-sm">
            
            {/* Highlights (Left 7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="font-serif font-bold text-white text-base flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#38bdf8]" />
                <span>Curriculum & Academic Foundations</span>
              </h4>

              <div className="space-y-3">
                {edu.highlights?.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#050505] border border-[#1e293b]">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span className="text-[#94a3b8] leading-relaxed text-xs sm:text-sm">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Coursework Pills (Right 5 Cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#050505] border border-[#1e293b] space-y-4">
              <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider font-mono">
                Key Coursework Studied
              </h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-lg bg-[#0a0a0a] border border-[#1e293b] text-xs font-mono text-[#94a3b8]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
