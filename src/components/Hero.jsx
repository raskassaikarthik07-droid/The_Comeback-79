import React, { useState, useEffect } from 'react';
import { personalInfo, heroFloatingTech } from '../data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  Sparkles, 
  Code2, 
  Coffee, 
  Cpu, 
  Atom, 
  Bot, 
  BarChart3, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const iconMap = {
  Coffee: Coffee,
  Terminal: Terminal,
  Cpu: Cpu,
  Atom: Atom,
  Bot: Bot,
  BarChart3: BarChart3
};

const Hero = ({ onOpenResume }) => {
  const [typedIndex, setTypedIndex] = useState(0);
  const titles = [
    "Computer Science Engineering Student",
    "Frontend & Software Developer",
    "AI & Large Language Models Enthusiast",
    "Data Analytics Practitioner"
  ];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const fullText = titles[typedIndex % titles.length];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(40);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setTypedIndex(prev => prev + 1);
          setTypingSpeed(90);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typedIndex, typingSpeed]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Deploython / Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Deploython 2.0 Challenge Ready</span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="text-emerald-400">KL University CSE</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="gradient-text font-heading">
                {personalInfo.name}
              </span>
            </h1>

            {/* Dynamic Animated Subtitle */}
            <div className="h-10 sm:h-12 flex items-center mb-5">
              <span className="text-lg sm:text-2xl font-medium text-slate-700 dark:text-slate-200">
                {currentText}
              </span>
              <span className="w-0.5 h-6 sm:h-7 bg-indigo-500 ml-1 inline-block animate-pulse" />
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300/90 max-w-2xl leading-relaxed mb-8 font-normal">
              {personalInfo.bio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              {/* View Projects */}
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Download Resume Button */}
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-panel border border-indigo-500/30 hover:border-indigo-400 text-slate-900 dark:text-white hover:text-indigo-400 font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </button>

              {/* Contact Me Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-pill hover:bg-white/10 text-slate-700 dark:text-slate-200 font-medium text-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links & Quick Proof Badges */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200/80 w-full">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg glass-pill text-slate-700 dark:text-slate-300 hover:text-indigo-400 dark:hover:text-indigo-400 hover:border-indigo-500/40 transition-all hover:scale-110"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg glass-pill text-slate-700 dark:text-slate-300 hover:text-indigo-400 dark:hover:text-indigo-400 hover:border-indigo-500/40 transition-all hover:scale-110"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg glass-pill text-slate-700 dark:text-slate-300 hover:text-indigo-400 dark:hover:text-indigo-400 hover:border-indigo-500/40 transition-all hover:scale-110"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 ml-auto text-xs font-mono text-emerald-400/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>CGPA 9.6 • 4+ Certifications</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Visual with Floating Tech Chips */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            {/* Background Glow under the card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl transform rotate-1 scale-95" />

            {/* Central Developer Terminal Visual */}
            <div className="relative w-full max-w-md glass-panel rounded-2xl p-5 border border-white/15 dark:border-white/15 light:border-slate-300/80 shadow-2xl z-10 transition-all duration-300 hover:shadow-indigo-500/20">
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 dark:border-white/10 light:border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>sai_karthik.dev ~ portfolio</span>
                </div>
                <div className="w-3" />
              </div>

              {/* Code Snippet Display */}
              <div className="font-mono text-xs leading-relaxed space-y-2 text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-100/90 p-4 rounded-xl border border-white/5">
                <p className="text-slate-500">// Deploython 2.0 Candidate Profile</p>
                <p>
                  <span className="text-purple-400">const</span> <span className="text-indigo-300 font-semibold">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">name:</span> <span className="text-emerald-300">"{personalInfo.name}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">university:</span> <span className="text-cyan-300">"{personalInfo.university}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">year:</span> <span className="text-amber-300">"2nd Year B.Tech CSE"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">cgpa:</span> <span className="text-emerald-400 font-bold">9.6</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">focus:</span> [
                  <span className="text-indigo-300">"AI"</span>, 
                  <span className="text-indigo-300">"React"</span>, 
                  <span className="text-indigo-300">"Data"</span>, 
                  <span className="text-indigo-300">"DSA"</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">status:</span> <span className="text-emerald-300">"Building & Innovating 🚀"</span>
                </p>
                <p>&#125;;</p>
              </div>

              {/* Status footer inside visual */}
              <div className="mt-4 pt-3 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-indigo-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ready for Challenges</span>
                </div>
                <span className="text-slate-500">v2.0 • 2026</span>
              </div>
            </div>

            {/* 6 Subtle Floating Glass Tech Badges */}
            <div className="absolute -top-6 -left-4 sm:-left-8 glass-panel px-3 py-1.5 rounded-xl border border-amber-500/30 flex items-center gap-2 shadow-lg animate-float-slow z-20">
              <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                <Coffee className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">Java</span>
            </div>

            <div className="absolute -top-7 -right-2 sm:-right-4 glass-panel px-3 py-1.5 rounded-xl border border-blue-500/30 flex items-center gap-2 shadow-lg animate-float-reverse z-20">
              <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">Python</span>
            </div>

            <div className="absolute top-1/2 -left-6 sm:-left-10 -translate-y-1/2 glass-panel px-3 py-1.5 rounded-xl border border-indigo-500/30 flex items-center gap-2 shadow-lg animate-float-reverse z-20">
              <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Cpu className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">C Lang</span>
            </div>

            <div className="absolute -bottom-5 right-2 sm:-right-6 glass-panel px-3 py-1.5 rounded-xl border border-cyan-500/30 flex items-center gap-2 shadow-lg animate-float-slow z-20">
              <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Atom className="w-3.5 h-3.5 animate-spin-slow" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">React</span>
            </div>

            <div className="absolute -bottom-6 left-6 sm:left-4 glass-panel px-3 py-1.5 rounded-xl border border-purple-500/30 flex items-center gap-2 shadow-lg animate-float-reverse z-20">
              <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">AI & LLMs</span>
            </div>

            <div className="absolute top-1/3 -right-6 sm:-right-8 glass-panel px-3 py-1.5 rounded-xl border border-emerald-500/30 flex items-center gap-2 shadow-lg animate-float-slow z-20">
              <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <BarChart3 className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">Data</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
