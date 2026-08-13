import React from 'react';
import { educationData } from '../data/portfolioData';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Sparkles, 
  Calendar, 
  CheckCircle2,
  TrendingUp,
  Building2
} from 'lucide-react';

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Award: Award
};

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            A consistent record of academic excellence in Computer Science Engineering and science coursework.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical central glowing line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 shadow-[0_0_12px_rgba(99,102,241,0.6)]" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const IconComp = iconMap[item.icon] || GraduationCap;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1 z-20">
                    <div className="w-9 h-9 rounded-full bg-slate-950 dark:bg-slate-950 light:bg-white border-2 border-indigo-500 shadow-lg shadow-indigo-500/40 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="group glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 dark:border-white/10 light:border-slate-200 glass-panel-hover transition-all duration-300">
                      
                      {/* Top Meta: Status and Duration */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-indigo-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.duration}</span>
                        </div>

                        <span
                          className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full ${
                            item.isCurrent
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : 'bg-slate-800/60 text-slate-300 border border-white/10'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      {/* Institution & Degree */}
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-400 transition-colors">
                        {item.institution}
                      </h3>
                      <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                        {item.degree}
                      </div>

                      {/* Score Highlight Pill */}
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-mono font-semibold mb-4">
                        <Award className="w-4 h-4 text-amber-400" />
                        <span>
                          {item.scoreType}: <strong className="text-white text-sm">{item.score}</strong>
                        </span>
                      </div>

                      {/* Details list */}
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-1" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
