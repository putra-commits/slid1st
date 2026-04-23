import Link from 'next/link';
import { DIGITAL_LIBRARY } from '@/lib/mock-ebooks';

export default function LibraryPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-black text-white font-headline uppercase tracking-tighter mb-4">Digital Library</h1>
        <p className="text-slate-400 font-medium max-w-2xl text-sm leading-relaxed">
           Akses ke 100+ blueprint rahasia untuk memenangkan persaingan bisnis digital, menembus karir eksekutif global, dan meningkatkan <i>Revenue</i> Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DIGITAL_LIBRARY.map((ebook, idx) => (
          <Link key={ebook.id} href={`/member/ebooks/${ebook.slug}`} className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all shadow-xl hover:shadow-amber-500/10">
             {/* Hyper-Realistic 3D Book Thumbnail Area */}
             <div className="relative h-72 bg-[#0a0a0e] flex items-center justify-center p-6 border-b border-slate-800/50 overflow-hidden">
                {/* Abstract background blur */}
                <div className="absolute inset-0 bg-amber-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* 3D Book Container */}
                <div className="relative w-36 h-48 [perspective:1000px] z-10 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-105 group">
                    {/* The Book (rotated to show spine) */}
                    <div className="w-full h-full relative [transform-style:preserve-3d] [transform:rotateY(25deg)] group-hover:[transform:rotateY(15deg)] transition-all duration-700">
                        
                        {/* FRONT COVER */}
                        <div className="absolute inset-0 bg-slate-900 rounded-r-md overflow-hidden shadow-2xl [transform:translateZ(15px)] border border-slate-700">
                            {/* Texture Image */}
                            <img src={ebook.coverImage} alt={ebook.title} className="w-full h-full object-cover mix-blend-overlay opacity-60" />
                            
                            {/* Typography Overlay (Makes it look like a real book) */}
                            <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent">
                                <h4 className="text-white font-black leading-snug text-sm drop-shadow-md mb-1">{ebook.title}</h4>
                                <p className="text-amber-500 font-bold text-[8px] uppercase tracking-widest drop-shadow-md">By {ebook.author}</p>
                            </div>

                            {/* Glossy shine */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>

                        {/* SPINE (Left Edge) */}
                        <div className="absolute top-0 left-0 h-full w-[30px] bg-slate-800 border-r border-slate-700 border-y py-3 [transform-origin:left] [transform:rotateY(-90deg)_translateZ(15px)] flex items-center justify-center overflow-hidden rounded-l-sm shadow-[inset_-5px_0_10px_rgba(0,0,0,0.5)]">
                            <span className="text-[7px] text-slate-300 font-black uppercase tracking-widest transform -rotate-90 whitespace-nowrap drop-shadow-md">{ebook.title}</span>
                        </div>

                        {/* Drop Shadow Base */}
                        <div className="absolute -bottom-4 -left-4 w-[120%] h-4 bg-black/80 blur-xl [transform:translateZ(-10px)]"></div>
                    </div>
                </div>

                {/* Badge Overlay (Top Left) */}
                <div className="absolute top-4 left-4 z-20 bg-slate-900/90 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-700 shadow-md">
                    {ebook.category}
                </div>

                {/* Status Indicator (Top Right) */}
                {!ebook.isUnlocked && (
                   <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-red-600 to-rose-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(225,29,72,0.6)] border border-red-400/50">
                     🔒 Premium
                   </div>
                )}
             </div>

             {/* Content Area */}
             <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-black text-white leading-tight mb-3 group-hover:text-amber-500 transition-colors line-clamp-2">
                    {ebook.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium mb-6 line-clamp-3">
                    {ebook.description}
                </p>

                <div className="mt-auto border-t border-slate-800 pt-4 flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <div className="flex items-center gap-4">
                        <span>{ebook.pages} Halaman</span>
                        <span>{ebook.readTimeMin} Menit</span>
                    </div>
                    {ebook.isUnlocked ? (
                        <span className="text-emerald-500 font-black">BACA →</span>
                    ) : (
                        <span className="text-amber-500 font-black">UNLOCK</span>
                    )}
                </div>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
