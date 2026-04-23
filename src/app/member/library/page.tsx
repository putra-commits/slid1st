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
             {/* 3D Book Thumbnail Area */}
             <div className="relative h-64 bg-[#0a0a0e] flex items-center justify-center p-6 border-b border-slate-800/50 overflow-hidden">
                {/* Abstract background blur */}
                <div className="absolute inset-0 bg-amber-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* The 3D Book Object */}
                <div className="relative w-32 h-44 [perspective:1200px] z-10 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-105">
                    <div className="w-full h-full relative [transform-style:preserve-3d] [transform:rotateY(-25deg)] group-hover:[transform:rotateY(-10deg)] transition-all duration-700 shadow-2xl rounded-r-md">
                        {/* Book Spine (Left thickness) */}
                        <div className="absolute top-0 left-0 w-5 h-full bg-gradient-to-r from-slate-900 to-slate-800 border-y border-l border-slate-700/50 [transform-origin:left] [transform:rotateY(90deg)] rounded-l-sm shadow-[inset_-2px_0_5px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
                           <span className="text-[6px] text-white/30 font-black uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 line-clamp-1">{ebook.title}</span>
                        </div>
                        
                        {/* Front Cover */}
                        <div className="absolute inset-0 bg-slate-900 rounded-r-md rounded-l-sm overflow-hidden shadow-[inset_4px_0px_10px_rgba(255,255,255,0.15)] ring-1 ring-white/10">
                            <img src={ebook.coverImage} alt={ebook.title} className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700" />
                            {/* Glossy shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Paper Edge (Right Side) */}
                        <div className="absolute top-1 bottom-1 -right-[1px] w-4 bg-gradient-to-b from-[#f0f0f0] via-white to-[#d0d0d0] [transform-origin:left] [transform:rotateY(90deg)] shadow-inner"></div>
                    </div>
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 z-20 bg-slate-900/80 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-700 shadow-md">
                    {ebook.category}
                </div>

                {/* Status Indicator */}
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
