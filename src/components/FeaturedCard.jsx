import React from 'react';
import { ArrowUpRight, Crown, Sparkles } from 'lucide-react';

const FeaturedCard = ({ name, link, category }) => {
  const isRealLink = Boolean(link) && typeof link === 'string' && link.trim().startsWith('http');
  const cleanLink = isRealLink ? link.trim() : null;

  const handleClick = (e) => {
    if (!cleanLink) {
      e.preventDefault();
      alert(`📢 Registration for "${name}" will open soon!`);
    }
  };

  return (
    <a
      href={cleanLink || '#'}
      target={cleanLink ? '_blank' : '_self'}
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group relative block w-full rounded-3xl overflow-hidden no-underline cursor-pointer transition-all duration-500 hover:-translate-y-1"
    >
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Inner card */}
      <div className="relative rounded-3xl bg-slate-900 m-[2px] p-6 sm:p-8 overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Content grid: stacks on mobile, side-by-side on desktop */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">

          {/* Left: Info */}
          <div className="min-w-0">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-amber-500/40 whitespace-nowrap">
                <Crown className="w-3 h-3" />
                Title Event
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-semibold tracking-widest uppercase backdrop-blur-sm whitespace-nowrap">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {name}
            </h3>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-amber-100/90 mt-3 font-light max-w-lg leading-relaxed">
              The most prestigious title of the fest. Compete, shine, and be crowned the face of Ascentron'26.
            </p>
          </div>

          {/* Right: CTA Button */}
          <div className="md:shrink-0">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-bold shadow-xl shadow-amber-500/30 group-hover:shadow-amber-500/50 group-hover:scale-105 transition-all duration-300 whitespace-nowrap">
              <span className="text-sm sm:text-base tracking-wider uppercase">
                {cleanLink ? 'Register Now' : 'Coming Soon'}
              </span>
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300 shrink-0" />
            </div>
          </div>

        </div>
      </div>
    </a>
  );
};

export default FeaturedCard;