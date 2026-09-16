import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const EventCard = ({ name, link, index, category }) => {
  const isRealLink = Boolean(link) && typeof link === 'string' && link.trim().startsWith('http');
  const cleanLink = isRealLink ? link.trim() : null;

  const handleClick = (e) => {
    if (!cleanLink) {
      e.preventDefault();
      alert(`📢 Registration for "${name}" will open soon!`);
    }
  };

  // Color palettes per category
  const palettes = {
    "Technical": {
      gradient: "from-blue-500 via-cyan-400 to-blue-500",
      glow: "bg-blue-500/25",
      text: "text-blue-300",
      badge: "text-blue-200 border-blue-400/40 bg-blue-500/10",
      dot: "bg-blue-400",
    },
    "Non-Technical": {
      gradient: "from-purple-500 via-pink-400 to-purple-500",
      glow: "bg-purple-500/25",
      text: "text-purple-300",
      badge: "text-purple-200 border-purple-400/40 bg-purple-500/10",
      dot: "bg-purple-400",
    },
    "Title Event": {
      gradient: "from-amber-400 via-yellow-300 to-amber-400",
      glow: "bg-amber-500/25",
      text: "text-amber-300",
      badge: "text-amber-200 border-amber-400/40 bg-amber-500/10",
      dot: "bg-amber-400",
    },
  };

  const palette = palettes[category] || palettes["Technical"];

  return (
    <a
      href={cleanLink || '#'}
      target={cleanLink ? '_blank' : '_self'}
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fade-in-up group relative cursor-pointer bg-slate-800/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col h-48 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-2xl hover:shadow-blue-500/20 no-underline"
      style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
    >

      {/* Colored corner glow */}
      <div className={`absolute -top-24 -right-24 w-56 h-56 rounded-full ${palette.glow} blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-700`}></div>

      {/* Top accent line */}
      <div className={`absolute top-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r ${palette.gradient} transition-all duration-700 rounded-t-2xl`}></div>

      {/* Category badge */}
      <span className={`inline-flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-full text-[9px] font-bold tracking-[0.15em] uppercase border ${palette.badge} z-10 relative`}>
        <span className={`w-1.5 h-1.5 rounded-full ${palette.dot}`}></span>
        {category}
      </span>

      {/* HERO: Event Name */}
      <div className="flex-1 flex items-center z-10 relative py-3">
        <h3 className="text-2xl sm:text-[26px] font-extrabold text-white leading-tight tracking-tight line-clamp-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          {name}
        </h3>
      </div>

      {/* CTA ROW */}
      <div className="flex items-center justify-between z-10 relative pt-4 border-t border-white/5">
        <span className={`text-[10px] tracking-[0.2em] uppercase font-bold transition-colors ${
          cleanLink ? `${palette.text} group-hover:text-white` : 'text-gray-500 group-hover:text-gray-400'
        }`}>
          {cleanLink ? 'Register Now' : 'Coming Soon'}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/10 text-gray-400 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300`}>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

    </a>
  );
};

export default EventCard;