import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/island-cinematic.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient to ensure contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="font-['Playfair Display'] font-bold tracking-tighter text-4xl sm:text-6xl md:text-7xl max-w-5xl leading-tight">
          The Island Authority
        </h1>
        <p className="mt-6 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-2xl text-white/80">
          Grosse Ile Real Estate, reimagined for the private client. Dark, cinematic, and unmistakably discreet.
        </p>
      </div>
    </section>
  );
}
