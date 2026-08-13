import React, { useState } from 'react';
import { skillCategories, technicalSkills } from '../data/portfolioData';
import { 
  Sparkles, 
  Coffee, 
  Cpu, 
  Terminal, 
  Binary, 
  Globe, 
  Palette, 
  FileCode2, 
  Atom, 
  Layout, 
  BarChart3, 
  Bot,
  Search,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const skillIconMap = {
  Coffee: Coffee,
  Cpu: Cpu,
  Terminal: Terminal,
  Binary: Binary,
  Globe: Globe,
  Palette: Palette,
  FileCode2: FileCode2,
  Atom: Atom,
  Layout: Layout,
  BarChart3: BarChart3,
  Bot: Bot
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = technicalSkills.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Core computer science foundation, full-stack frontend development, generative AI tools, and data analytics.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-panel border border-white/10 dark:border-white/10 light:border-slate-200">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md shadow-indigo-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 dark:hover:bg-white/5 light:text-slate-600 light:hover:text-slate-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Java)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl glass-input placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const IconComp = skillIconMap[skill.icon] || Globe;
            return (
              <div
                key={skill.name}
                className="group relative glass-panel rounded-2xl p-5 border border-white/10 dark:border-white/10 light:border-slate-200 glass-panel-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} p-[1.5px] shadow-sm`}
                      >
                        <div className="w-full h-full rounded-[10px] bg-slate-950 dark:bg-slate-950 light:bg-white flex items-center justify-center text-slate-200 dark:text-slate-200 light:text-slate-800 group-hover:scale-105 transition-transform">
                          <IconComp className="w-5 h-5 text-indigo-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-400 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          {skill.level}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold text-indigo-400 px-2 py-0.5 rounded-md glass-pill">
                      {skill.progress}%
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300/80 mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Visualizer Bar */}
                <div>
                  <div className="w-full h-2 rounded-full bg-slate-800/60 dark:bg-slate-800/80 light:bg-slate-200 overflow-hidden p-[1px]">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]`}
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl">
            <p className="text-slate-400 text-sm">No skills found matching "{searchTerm}".</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;
