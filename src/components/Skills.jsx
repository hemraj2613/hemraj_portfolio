import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Layout, 
  Server, 
  Smartphone, 
  Database, 
  BarChart2, 
  Wrench, 
  Search, 
  Atom, 
  Terminal, 
  Palette, 
  Share2, 
  Table, 
  Binary, 
  PieChart, 
  GitBranch, 
  Github, 
  Send, 
  CheckCircle2,
  Filter
} from 'lucide-react';

export const Skills = ({ categories = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    Frontend: Layout,
    Backend: Server,
    Mobile: Smartphone,
    Database: Database,
    'Data Science': BarChart2,
    Tools: Wrench,
  };

  const skillIcons = {
    HTML5: Code2,
    CSS3: Palette,
    JavaScript: Code2,
    React: Atom,
    'Tailwind CSS': Layout,
    Python: Terminal,
    Django: Server,
    'Django REST Framework': Server,
    'Node.js': Server,
    'Express.js': Share2,
    Flutter: Smartphone,
    Dart: Code2,
    MySQL: Database,
    SQLite: Database,
    MongoDB: Database,
    Pandas: Table,
    NumPy: Binary,
    Matplotlib: PieChart,
    'Scikit-learn': BarChart2,
    Git: GitBranch,
    GitHub: Github,
    Postman: Send,
    'VS Code': Code2,
  };

  const categoryNames = ['All', ...categories.map((c) => c.category)];

  const filteredCategories = categories
    .map((cat) => {
      const filteredSkills = cat.skills.filter((s) => {
        const matchesCat = selectedCategory === 'All' || cat.category === selectedCategory;
        const matchesSearch = 
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCat && matchesSearch;
      });
      return {
        ...cat,
        skills: filteredSkills,
      };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 bg-[#050505] border-t border-[#1e293b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-[#1e293b] text-xs font-mono text-[#38bdf8]">
              <Code2 className="w-3.5 h-3.5" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive Skills & Tooling Matrix
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8]">
              Spanning modern frontend UI, resilient Python/Django backends, cross-platform Flutter mobile apps, structured databases, and predictive data science libraries.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Django, Flutter)..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#0a0a0a] border border-[#1e293b] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#38bdf8] transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categoryNames.map((catName) => {
            const isSelected = selectedCategory === catName;
            const Icon = categoryIcons[catName] || Filter;
            return (
              <button
                key={catName}
                onClick={() => setSelectedCategory(catName)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                    : 'bg-[#0a0a0a] hover:bg-[#1e293b] text-slate-300 hover:text-white border border-[#1e293b]'
                }`}
              >
                {catName !== 'All' && <Icon className="w-3.5 h-3.5" />}
                <span>{catName}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid Grouped by Category */}
        <div className="space-y-10">
          {filteredCategories.map((cat) => {
            const CatIcon = categoryIcons[cat.category] || Code2;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-[#1e293b] pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-[#0a0a0a] text-[#38bdf8] border border-[#1e293b]">
                      <CatIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-[#94a3b8]">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#94a3b8] px-2.5 py-0.5 rounded-full bg-[#0a0a0a] border border-[#1e293b]">
                    {cat.skills.length} {cat.skills.length === 1 ? 'Technology' : 'Technologies'}
                  </span>
                </div>

                {/* Skills Grid for this category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.skills.map((skill) => {
                    const SkillIcon = skillIcons[skill.name] || Code2;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 rounded-2xl bg-[#0a0a0a] border border-[#1e293b] hover:border-[#38bdf8]/50 transition-all space-y-3 group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#050505] border border-[#1e293b] flex items-center justify-center text-[#38bdf8] group-hover:scale-110 transition-transform">
                              <SkillIcon className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="font-serif font-bold text-white text-sm">
                                {skill.name}
                              </h4>
                              <span className="text-[10px] font-mono text-[#94a3b8]">
                                {cat.category}
                              </span>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-xs font-mono font-bold text-white">
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Animated Progress Meter */}
                        <div className="w-full bg-[#050505] h-1.5 rounded-full overflow-hidden border border-[#1e293b]/50">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-[#38bdf8] to-emerald-400 rounded-full"
                          />
                        </div>

                        {/* Skill Tags */}
                        {skill.tags && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {skill.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded-md bg-[#050505] border border-[#1e293b] text-[10px] font-mono text-[#94a3b8] group-hover:text-slate-300 transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
