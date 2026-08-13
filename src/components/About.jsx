import React from 'react';
import { personalInfo, aboutCards } from '../data/portfolioData';
import { 
  GraduationCap, 
  Code2, 
  Bot, 
  LineChart, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  MapPin, 
  BookOpen, 
  Compass
} from 'lucide-react';

const iconComponents = {
  GraduationCap: GraduationCap,
  Code2: Code2,
  Bot: Bot,
  LineChart: LineChart
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="gradient-text">Sai Karthik</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Main About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left: Bio Narrative & Stats */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 dark:border-white/10 light:border-slate-200">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    B.Tech in Computer Science & Engineering
                  </h3>
                  <p className="text-sm font-mono text-indigo-400">
                    KL University • Batch 2025 – Present
                  </p>
                </div>
              </div>

              {/* Exact requested text */}
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                {personalInfo.aboutText}
              </p>

              {/* Core Philosophy / Drive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100/80 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    Strong academic consistency with <strong>9.6 CGPA</strong>.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100/80 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    Hands-on project builder in <strong>React & AI</strong>.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100/80 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    Certified in <strong>Agentic AI & Analytics</strong>.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100/80 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    Active participant in <strong>Tech Hackathons</strong>.
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 dark:border-white/10 light:border-slate-200">
              <div className="text-center p-3 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100">
                <div className="text-2xl sm:text-3xl font-extrabold gradient-text-cyan">9.6</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">Current CGPA</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100">
                <div className="text-2xl sm:text-3xl font-extrabold gradient-text">4+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">Certifications</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100">
                <div className="text-2xl sm:text-3xl font-extrabold gradient-text-amber">2nd</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">Year CSE</div>
              </div>
            </div>
          </div>

          {/* Right: 4 Interactive Glass Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutCards.map((card) => {
              const IconComp = iconComponents[card.icon] || Code2;
              return (
                <div
                  key={card.id}
                  className="group relative glass-panel rounded-2xl p-5 border border-white/10 dark:border-white/10 light:border-slate-200 glass-panel-hover overflow-hidden cursor-default transition-all duration-300"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  />

                  <div className="relative z-10 flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl glass-pill flex items-center justify-center ${card.accent} shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-400 transition-colors">
                          {card.title}
                        </h4>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md glass-pill text-slate-400 dark:text-slate-400">
                          {card.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-snug">
                        {card.description}
                      </p>
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

export default About;
