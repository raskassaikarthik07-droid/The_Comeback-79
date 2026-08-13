import React from 'react';
import { useTheme } from '../context/ThemeContext';

const BackgroundEffects = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background base layer */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          isDark
            ? 'bg-slate-950 text-slate-100'
            : 'bg-gradient-to-br from-slate-50 via-indigo-50/40 to-slate-100 text-slate-900'
        }`}
      />

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Glowing animated atmospheric orbs */}
      {/* Top Left Orb */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl transition-opacity duration-1000 animate-pulse-glow"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)',
        }}
      />

      {/* Top Right Orb */}
      <div
        className="absolute top-20 -right-24 w-[32rem] h-[32rem] rounded-full blur-3xl transition-opacity duration-1000 animate-float-slow"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.06) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 70%)',
        }}
      />

      {/* Center Ambient Orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl transition-opacity duration-1000 animate-float-reverse opacity-40 dark:opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.05) 50%, transparent 70%)',
        }}
      />

      {/* Bottom Left Orb */}
      <div
        className="absolute -bottom-40 left-10 w-[30rem] h-[30rem] rounded-full blur-3xl transition-opacity duration-1000"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
        }}
      />

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay" />
    </div>
  );
};

export default BackgroundEffects;
