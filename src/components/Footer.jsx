import React from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { 
  Mail, 
  ArrowUp, 
  Heart, 
  Sparkles, 
  Code2, 
  Terminal 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative z-10 pt-16 pb-12 border-t border-white/10 dark:border-white/10 light:border-slate-200 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 dark:border-white/10 light:border-slate-200">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/20">
                <div className="w-full h-full rounded-[10px] bg-slate-950 dark:bg-slate-950 light:bg-white flex items-center justify-center">
                  <span className="font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 text-base">
                    SK
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-indigo-400">
                  KL University CSE • Deploython 2.0
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed mb-6">
              Second-year Computer Science Engineering student crafting interactive web experiences, exploring agentic AI, and analyzing data.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl glass-pill text-slate-700 dark:text-slate-300 hover:text-indigo-400 dark:hover:text-indigo-400 hover:border-indigo-500/40 transition-all hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl glass-pill text-slate-700 dark:text-slate-300 hover:text-indigo-400 dark:hover:text-indigo-400 hover:border-indigo-500/40 transition-all hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl glass-pill text-slate-700 dark:text-slate-300 hover:text-indigo-400 dark:hover:text-indigo-400 hover:border-indigo-500/40 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Deploython Badge & Back to top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <div className="p-4 rounded-2xl glass-panel border border-indigo-500/20 text-left md:text-right w-full">
              <span className="text-[10px] font-mono uppercase text-indigo-400 block mb-1">
                Event Edition
              </span>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Deploython 2.0 Challenge
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-1">
                Developer Portfolio Track
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 px-4 py-2.5 rounded-xl glass-panel border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-indigo-400 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-indigo-400 flex items-center gap-2 transition-all hover:-translate-y-1 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <span className="text-indigo-400 font-semibold">React & Tailwind CSS</span>
            <span>for Deploython 2.0</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
