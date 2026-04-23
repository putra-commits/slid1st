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
             {/* Thumbnail Area */}
             <div className="relative h-48 bg-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 z-10 group-hover:bg-transparent transition-colors"></div>
                <img src={ebook.coverImage} alt={ebook.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" />
                
                {/* Book Badge */}
                <div className="absolute top-4 left-4 z-20 bg-slate-950/90 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-700">
                    {ebook.category}
                </div>

                {/* Status Indicator */}
                {!ebook.isUnlocked && (
                   <div className="absolute top-4 right-4 z-20 bg-red-500/90 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                     Premium
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
