import SlideViewer from '@/components/SlideViewer';
import { masterclassSlides } from '@/data/masterclass';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MasterclassArena() {
  return (
    <main className="min-h-screen bg-[#05050A] text-white font-sans selection:bg-[#00F0FF] selection:text-black">
      {/* Stealth Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none">
        <Link 
          href="/" 
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all opacity-60 hover:opacity-100"
        >
          <ArrowLeft size={16} /> Kembali ke Beranda
        </Link>
        <div className="pointer-events-auto text-xs font-bold tracking-[0.2em] text-[#00F0FF]/50 uppercase">
          Alchem1st Sovereign Network
        </div>
      </nav>

      <div className="w-full min-h-screen flex items-center justify-center p-4 sm:p-8 pt-24">
        <div className="w-full max-w-[1400px]">
          <SlideViewer slides={masterclassSlides} />
        </div>
      </div>
    </main>
  );
}
