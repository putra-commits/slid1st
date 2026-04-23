import React from 'react';
import Link from 'next/link';

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 flex flex-col">
      {/* Top Banner Auth Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
             {/* Sponsor Logo Implementation */}
             <img src="/images/unmaha-logo.jpg" alt="UNMAHA Logo" className="h-8 rounded-sm object-contain bg-white p-1" />
             <div className="w-px h-8 bg-slate-800"></div>
             <div>
                 <Link href="/member/library" className="text-xl font-black text-white tracking-widest uppercase hover:text-amber-500 transition-colors">
                    Slid<span className="text-amber-500">1st</span> Member
                 </Link>
                 <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">UNMAHA Digital Library</span>
             </div>
          </div>
          <div className="flex items-center gap-6">
             <div className="hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <Link href="/member/library" className="hover:text-amber-500 transition-colors">Rak Buku</Link>
                <Link href="#" className="hover:text-amber-500 transition-colors">Bookmark</Link>
             </div>
             <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-black">
                     PT
                 </div>
             </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <p>© {new Date().getFullYear()} Universitas Mahakarya Asia. Powered by Slid1st Ouroboros Standard.</p>
      </footer>
    </div>
  );
}
