import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { 
  Trophy, 
  Brain, 
  Layers, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

const achievementIconMap = {
  Trophy: Trophy,
  Brain: Brain,
  Layers: Layers,
  Zap: Zap
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>MILESTONES & LEARNING HIGHLIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Recognitions, academic consistency, and practical hands-on development milestones.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item) => {
            const IconComp = achievementIconMap[item.icon] || Trophy;

            return (
              <div
                key={item.id}
                className="group relative glass-panel rounded-3xl p-6 border border-white/10 dark:border-white/10 light:border-slate-200 glass-panel-hover flex flex-col justify-between transition-all duration-300 overflow-hidden"
              >
                {/* Subtle Card Background Accent */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl glass-pill flex items-center justify-center ${item.accent} group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full glass-pill text-slate-700 dark:text-slate-300 border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-indigo-400 mb-3">
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4 mt-4 border-t border-white/5 flex items-center text-[11px] font-mono text-slate-500 dark:text-slate-400 group-hover:text-indigo-400 transition-colors">
                  <span>Deploython 2.0 Track</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
