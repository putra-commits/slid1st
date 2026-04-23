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
             {/* Premium Book Thumbnail Area (Kindle Style) */}
             <div className="relative h-72 bg-slate-900 border-b border-slate-800 flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900 z-0"></div>

                {/* Book Object */}
                <div className="relative w-[130px] h-[180px] z-10 transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:-translate-y-2 shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-sm border border-slate-700 overflow-hidden bg-slate-950">
                    <img src={ebook.coverImage} alt={ebook.title} className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-overlay group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500" />
                    
                    {/* Typography Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent">
                        <h4 className="text-white font-black leading-tight text-xs drop-shadow-lg mb-1.5 line-clamp-3">{ebook.title}</h4>
                        <div className="w-4 h-0.5 bg-amber-500 mb-1.5"></div>
                        <p className="text-amber-500 font-bold text-[7px] uppercase tracking-widest drop-shadow-md">Putu Putrayasa</p>
                    </div>

                    {/* Book Highlight / Gloss */}
                    <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-white/20 via-transparent to-transparent"></div>
                    <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-white/20"></div>
                </div>

                {/* Badge Overlay (Top Left) */}
                <div className="absolute top-4 left-4 z-20 bg-slate-900/90 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-700 shadow-xl">
                    {ebook.category}
                </div>

                {/* Status Indicator (Top Right) */}
                {!ebook.isUnlocked && (
                   <div className="absolute top-4 right-4 z-20 bg-red-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.4)] border border-red-500/50">
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
