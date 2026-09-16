import React from 'react';

const Header = () => {
  return (
    <header className="relative w-full flex flex-col items-center justify-center pt-0 pb-0 text-center">

      {/* Colorful glows behind */}
      <div className="absolute top-6 w-40 h-40 bg-blue-500/40 rounded-full blur-[90px] -z-10"></div>
      <div className="absolute top-10 right-1/3 w-32 h-32 bg-purple-500/40 rounded-full blur-[80px] -z-10"></div>
      <div className="absolute top-16 left-1/3 w-32 h-32 bg-pink-500/30 rounded-full blur-[80px] -z-10"></div>

      {/* LOGO - smaller */}
      <div className="relative mb-4">
        <div className="logo-glow relative w-24 h-24 rounded-full p-[2px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden border-2 border-white/20">
            <img
              src="/logo.png"
              alt="Ascentron Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span class="text-3xl font-black bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">A</span>';
              }}
            />
          </div>
        </div>
        <span className="absolute -bottom-1 -right-1 px-2 py-0.5 text-[9px] font-bold tracking-wider rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/50">
          2026
        </span>
      </div>

      {/* Main Title - smaller */}
      <h1 className="shine-text text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none">
        ASCENTRON
      </h1>

      {/* Subtitle with lines */}
      <div className="mt-3 flex items-center justify-center gap-3">
        <span className="w-10 h-px bg-gradient-to-r from-transparent to-blue-400"></span>
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-blue-300 uppercase">
          ECE Department
        </p>
        <span className="w-10 h-px bg-gradient-to-l from-transparent to-blue-400"></span>
      </div>

      {/* Year - smaller */}
      <h2 className="mt-3 text-lg sm:text-xl font-light text-gray-200">
        Ascentron <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">'26</span>
      </h2>

      <p className="mt-3 text-gray-300 max-w-lg mx-auto text-xs sm:text-sm leading-relaxed px-4 font-light">
        Where innovation meets celebration. Explore the lineup of technical and non-technical events.
      </p>
    </header>
  );
};

export default Header;