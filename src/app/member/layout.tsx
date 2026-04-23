import React from 'react';
import Link from 'next/link';

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div>
                 <Link href="/member/library" className="text-xl font-black text-[#1e3a8a] tracking-widest hover:text-[#1e3a8a]/80 transition-colors flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-serif font-black text-xl mr-2 pb-0.5">B</div>
                    BERNAS
                    <span className="text-amber-500 text-sm font-black tracking-widest ml-1 mt-0.5 border-l-2 border-gray-200 pl-2">MEMBER</span>
                 </Link>
                 <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400 ml-11 -mt-0.5">Sovereign Digital Library</span>
             </div>
          </div>
          <div className="flex items-center gap-6">
             <div className="hidden md:flex items-center gap-4 text-sm font-bold text-gray-600 uppercase tracking-widest">
                 <Link href="/member/library" className="hover:text-[#1e3a8a] transition-colors">Digital Library</Link>
             </div>
             <button className="bg-[#1e3a8a] text-white px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#1e3a8a]/90 transition-colors shadow-md">
                 Account
             </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-[1400px] mx-auto px-6 py-8 text-center text-sm font-medium text-gray-500">
          <p>© {new Date().getFullYear()} Universitas Mahakarya Asia. Powered by BERNAS.id Ecosystem & Slid1st Ouroboros Standard.</p>
        </div>
      </footer>
    </div>
  );
}
