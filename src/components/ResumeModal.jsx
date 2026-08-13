import React from 'react';
import { personalInfo, educationData, technicalSkills, certificationsData, projectsData } from '../data/portfolioData';
import { X, Download, Printer, CheckCircle2, GraduationCap, Award, Code2, Mail, Phone, MapPin } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] glass-panel rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header Action Bar */}
        <div className="px-6 py-4 border-b border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-sm font-heading font-bold text-slate-900 dark:text-white">
              Resume Preview
            </span>
            <span className="text-xs font-mono text-indigo-400 px-2.5 py-0.5 rounded-full glass-pill">
              Deploython 2.0 Edition
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl glass-pill text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div id="printable-resume" className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 dark:bg-slate-950 light:bg-white text-slate-900 dark:text-slate-100">
          
          {/* Resume Header */}
          <div className="border-b border-white/15 dark:border-white/15 light:border-slate-300 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-1 font-heading">
              {personalInfo.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-indigo-400 mb-3">
              {personalInfo.title}
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {personalInfo.formattedPhone}
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                KL University (CGPA 9.6)
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.aboutText}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {educationData.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{edu.degree}</p>
                    <p className="text-xs font-mono text-indigo-400 mt-0.5">
                      {edu.scoreType}: <strong>{edu.score}</strong>
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{edu.duration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-3">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-800 dark:text-slate-200"
                >
                  {skill.name} ({skill.level})
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-3">
              Certifications & Simulations (4+)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="p-3 rounded-xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-200">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{cert.title}</div>
                  <div className="text-[11px] font-mono text-indigo-400">{cert.issuer} • {cert.issueDate}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-3">
              Key Projects
            </h2>
            <div className="space-y-3">
              {projectsData.slice(0, 3).map((proj) => (
                <div key={proj.id} className="border-l-2 border-indigo-500 pl-3">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{proj.title}</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{proj.shortDescription}</p>
                  <p className="text-[11px] font-mono text-slate-500 mt-1">Tech: {proj.technologies.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
