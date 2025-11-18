import React from 'react';

export function MeetTroy() {
  return (
    <section id="troy" className="relative py-24 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl">
            <img src="/troy-portrait.jpg" alt="Troy Puste" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-['Playfair Display'] font-bold tracking-tighter text-3xl sm:text-4xl md:text-5xl">Meet Troy</h2>
            <p className="mt-6 text-white/80 font-light tracking-wide">
              Precision, discretion, and a relentless standard of excellence. I advise private clients on Grosse Ile’s most distinctive properties with a process built for certainty and calm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MyProcess() {
  const items = [
    {
      title: 'Acquisition & Positioning',
      body:
        'We define the brief, map micro-markets, and position you to move fast with total clarity.',
    },
    {
      title: 'Private Listing Strategy',
      body:
        'Quiet marketing, rigorous data, and curated exposure. Your story, told to the right audience only.',
    },
    {
      title: 'Negotiation & Stewardship',
      body:
        'Decisive execution and serene closing. I remain your first call long after the keys.',
    },
  ];

  return (
    <section id="process" className="relative py-24 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-['Playfair Display'] font-bold tracking-tighter text-3xl sm:text-4xl md:text-5xl mb-12">My Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((card) => (
            <div key={card.title} className="rounded-3xl p-6 bg-black/30 backdrop-blur-xl border border-white/10">
              <h3 className="font-['Playfair Display'] font-bold tracking-tighter text-xl">{card.title}</h3>
              <p className="mt-4 text-white/80 font-light tracking-wide text-sm">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MarketIntel() {
  return (
    <section id="intel" className="relative py-24 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="rounded-3xl p-8 bg-black/30 backdrop-blur-xl border border-white/10">
          <h2 className="font-['Playfair Display'] font-bold tracking-tighter text-3xl sm:text-4xl md:text-5xl">Market Intel</h2>
          <p className="mt-6 text-white/80 font-light tracking-wide max-w-3xl">
            Real-time signals from on-island demand, off-market movements, and waterfront micro-shifts. Clean data, clear direction.
          </p>
        </div>
      </div>
    </section>
  );
}
