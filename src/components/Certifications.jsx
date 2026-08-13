import React, { useState } from 'react';
import { certificationsData } from '../data/portfolioData';
import { 
  Award, 
  Cpu, 
  BarChart3, 
  Sparkles, 
  Code, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  X,
  Calendar
} from 'lucide-react';

const certIconMap = {
  Cpu: Cpu,
  BarChart3: BarChart3,
  Sparkles: Sparkles,
  Code: Code
};

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>CREDENTIALS & VERIFIED LEARNING</span>
          </div>

          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Certifications & <span className="gradient-text">Badges</span>
            </h2>
            {/* Subtle Certificate Count Indicator */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/40 text-indigo-300 font-mono text-xs font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              4+ Certifications
            </span>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Industry-recognized certifications and job simulations in Agentic AI, Data Analytics, and Web Development.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Certifications Grid (4 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => {
            const IconComp = certIconMap[cert.icon] || Award;

            return (
              <div
                key={cert.id}
                className="group relative glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 dark:border-white/10 light:border-slate-200 glass-panel-hover flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Top Meta: Issuer Badge & Date */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-lg border ${cert.badgeColor}`}>
                      {cert.issuer}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.issueDate}</span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl glass-pill flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-110 group-hover:border-indigo-500/50 transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                        Verified by <strong className="text-slate-700 dark:text-slate-300">{cert.issuerBadge}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed mb-5">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md glass-pill text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center gap-3">
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600/90 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl glass-pill text-slate-400 hover:text-white text-xs font-mono hover:border-indigo-500/40 transition-all flex items-center gap-1"
                    title="Direct credential link"
                  >
                    <span>Verify ID</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Certificate Preview Modal */}
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl text-center">
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-5 right-5 p-2 rounded-xl glass-pill text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-400" />
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full glass-pill mb-2 inline-block">
                {activeCert.issuer}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {activeCert.title}
              </h3>

              <p className="text-xs text-slate-400 mb-6">
                Issued to <strong className="text-white">Raskas Sai Karthik</strong> • {activeCert.issueDate}
              </p>

              <div className="text-left bg-slate-900/60 p-4 rounded-xl border border-white/5 mb-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p className="mb-2 font-semibold text-indigo-300">Curriculum & Competency:</p>
                <p>{activeCert.description}</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setActiveCert(null)}
                  className="flex-1 py-2.5 px-4 rounded-xl glass-pill text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={activeCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-xs font-semibold text-white flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/30"
                >
                  <span>Open Verification Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certifications;
