import React, { useState } from 'react';

export default function ValuationModal({ open, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 w-full max-w-xl mx-auto rounded-3xl bg-black/30 backdrop-blur-xl border border-white/10 text-white p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-['Playfair Display'] font-bold tracking-tighter text-2xl">Private Valuation</h3>
            <p className="text-white/70 font-light tracking-wide text-sm mt-1">Request a discreet, data-led assessment of your property.</p>
          </div>
          <button onClick={onClose} className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 border border-white/10">Close</button>
        </div>

        <form className="mt-6 grid grid-cols-1 gap-4">
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full name" className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 outline-none placeholder:text-white/40 font-light tracking-wide" />
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 outline-none placeholder:text-white/40 font-light tracking-wide" />
          <input value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Property address" className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 outline-none placeholder:text-white/40 font-light tracking-wide" />
          <textarea value={notes} onChange={(e)=>setNotes(e.target.value)} rows="4" placeholder="Context / timing / objectives" className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 outline-none placeholder:text-white/40 font-light tracking-wide" />
          <button type="button" onClick={onClose} className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-sm tracking-wide">Submit Request</button>
        </form>
      </div>
    </div>
  );
}
