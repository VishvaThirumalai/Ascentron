import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full sm:max-w-xs">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300" />
      <input
        type="text"
        placeholder="Search events..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2.5 bg-slate-800/60 border border-white/15 rounded-xl text-sm text-white placeholder-gray-400 outline-none focus:border-blue-400/70 focus:bg-slate-800/90 focus:shadow-lg focus:shadow-blue-500/20 transition-all"
      />
    </div>
  );
};

export default SearchBar;