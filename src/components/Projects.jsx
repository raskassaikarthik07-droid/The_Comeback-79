import React, { useState } from 'react';
import { projectCategories, projectsData } from '../data/portfolioData';
import { 
  Sparkles, 
  ExternalLink, 
  Layers, 
  Code2, 
  Bot, 
  BarChart3, 
  Cpu, 
  Eye, 
  Check, 
  X,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>FEATURED WORK & EXPERIMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Explorations in full-stack web applications, agentic AI workflows, interactive data dashboards, and algorithmic tools.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass-panel border border-white/10 dark:border-white/10 light:border-slate-200">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md shadow-indigo-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 dark:hover:bg-white/5 light:text-slate-600 light:hover:text-slate-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative glass-panel rounded-3xl overflow-hidden border border-white/10 dark:border-white/10 light:border-slate-200 glass-panel-hover flex flex-col justify-between transition-all duration-300"
            >
              {/* Project Card Visual Preview Area */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950/80 p-5 flex flex-col justify-between">
                {/* Visual Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.visualGradient} opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500`}
                />

                {/* Subtle Grid / Pattern inside preview */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Top Badge: Category & Featured Tag */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-lg glass-panel text-white font-semibold backdrop-blur-md">
                    {project.category.toUpperCase()}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Center Visual Mockup Accent */}
                <div className="relative z-10 my-auto flex items-center justify-center">
                  <div className="w-14 h-14 rounded-2xl glass-panel border border-white/30 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {project.category === 'ai' ? (
                      <Bot className="w-7 h-7 text-purple-300" />
                    ) : project.category === 'data' ? (
                      <BarChart3 className="w-7 h-7 text-emerald-300" />
                    ) : project.category === 'web' ? (
                      <Code2 className="w-7 h-7 text-cyan-300" />
                    ) : (
                      <Cpu className="w-7 h-7 text-indigo-300" />
                    )}
                  </div>
                </div>

                {/* Bottom interactive peek button */}
                <div className="relative z-10 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-white/90 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-lg glass-pill hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick Overview</span>
                  </button>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md glass-pill text-slate-700 dark:text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: GitHub & Live Demo */}
                <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center gap-2.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl glass-pill text-slate-800 dark:text-slate-200 hover:text-indigo-400 font-medium text-xs flex items-center justify-center gap-1.5 hover:border-indigo-500/40 transition-all duration-200"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-indigo-600/90 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/20 transition-all duration-200"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 dark:border-white/20 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl glass-pill text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-indigo-400 mb-3">
                <span>{selectedProject.category.toUpperCase()} PROJECT</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {selectedProject.shortDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-3">Key Highlights & Architecture</h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl glass-pill text-center text-xs font-semibold text-slate-200 hover:text-indigo-400 flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-center text-xs font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25"
                >
                  <span>Launch Live Preview</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
