import React from 'react';

export default function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 opacity-[0.05]"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=2000&auto=format&fit=crop)',
        backgroundSize: 'cover',
        mixBlendMode: 'normal',
      }}
    />
  );
}
