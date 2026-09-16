import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import EventCard from './components/EventCard';
import FeaturedCard from './components/FeaturedCard';
import SearchBar from './components/SearchBar';
import Particles from './components/Particles';
import { events } from './data/EventData';

// Inline SVG icons
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

function App() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('submitted') === 'true') {
      window.history.replaceState({}, '', '/');
      const toast = document.createElement('div');
      toast.textContent = '✅ Registration submitted successfully!';
      toast.className = 'fixed top-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl bg-emerald-500 text-white font-medium shadow-2xl shadow-emerald-500/40 z-50';
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 4000);
    }
  }, []);

  // Split featured (Title Event) from the rest
  const featuredEvent = useMemo(() => events.find(e => e.category === 'Title Event'), []);
  const regularEvents = useMemo(() => events.filter(e => e.category !== 'Title Event'), []);

  const filteredEvents = useMemo(() => {
    return regularEvents.filter((event) => {
      const matchesSearch = event.name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'All' || event.category === filter;
      return matchesSearch && matchesFilter;
    });
  }, [search, filter, regularEvents]);

  const filters = ['All', 'Technical', 'Non-Technical'];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center">
      <div className="app-bg"></div>
      <Particles />

      <main className="relative w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center">
        <Header />

        <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent my-6"></div>

        {/* ⭐ FEATURED TITLE EVENT */}
        {featuredEvent && (
          <section className="w-full mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-300">
                ★ Featured Event
              </span>
              <span className="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-transparent"></span>
            </div>
            <FeaturedCard
              name={featuredEvent.name}
              link={featuredEvent.link}
              category={featuredEvent.category}
            />
          </section>
        )}

        {/* Regular Events Section */}
        <section className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Event <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Lineup</span>
              </h2>
              <p className="text-sm text-gray-300 mt-2 font-light">
                Pick an event and register in seconds
              </p>
            </div>
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full border transition-all duration-300 ${
                  filter === f
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg shadow-blue-500/40 scale-105'
                    : 'bg-slate-800/60 text-gray-300 border-white/15 hover:border-white/40 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto text-xs text-gray-400 font-light">
              Showing <span className="text-blue-300 font-semibold">{filteredEvents.length}</span> of {regularEvents.length}
            </span>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredEvents.map((event, index) => (
                <EventCard
                  key={event.id}
                  name={event.name}
                  link={event.link}
                  index={index}
                  category={event.category}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-gray-400">
              <p className="text-lg">No events found</p>
              <p className="text-sm mt-1">Try a different search or filter</p>
            </div>
          )}
        </section>

        <footer className="w-full mt-24 pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ASCENTRON'26
              </h3>
              <p className="text-xs text-gray-400 mt-1 font-light">
                ECE Department • Annual Event
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/eea.mit?stkn=MnV4a255b2FxZGxs" className="w-10 h-10 rounded-full bg-slate-800/60 border border-white/15 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-400 hover:bg-slate-800 transition-all">
                <InstagramIcon />
              </a>
              
              
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-8 font-light">
            © 2026 Ascentron. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;