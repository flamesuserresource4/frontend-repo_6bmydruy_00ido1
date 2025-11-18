import React from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenValuation }) {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-6 px-6 py-3 rounded-full bg-black/30 backdrop-blur-xl border border-white/10 text-white">
        {/* Brand */}
        <a href="#home" className="text-sm sm:text-base tracking-tighter font-bold font-[\'Playfair Display\']">
          TROY PUSTE
        </a>

        {/* Center Menu */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-light tracking-wide">
          <a href="#home" className="hover:opacity-80 transition-opacity">HOME</a>
          <span className="opacity-30">|</span>
          <a href="#troy" className="hover:opacity-80 transition-opacity">MEET TROY</a>
          <span className="opacity-30">|</span>
          <a href="#process" className="hover:opacity-80 transition-opacity">MY PROCESS</a>
          <span className="opacity-30">|</span>
          <a href="#intel" className="hover:opacity-80 transition-opacity">MARKET INTEL</a>
        </nav>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-3">
          <a
            href="https://troypuste.expportal.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition-colors text-xs tracking-wide"
          >
            EXPLORE LISTINGS <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onOpenValuation}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 hover:bg-black/40 border border-white/10 transition-colors text-xs tracking-wide"
          >
            PRIVATE VALUATION
          </button>
          <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/30 border border-white/10">
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
