import { notFound } from 'next/navigation';
import { DIGITAL_LIBRARY } from '@/lib/mock-ebooks';

export default async function EbookReaderPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const ebook = DIGITAL_LIBRARY.find((e) => e.slug === resolvedParams.slug);

  if (!ebook) {
    notFound();
  }

  // Auth Gate Simulation for locked content
  if (!ebook.isUnlocked) {
      return (
          <div className="max-w-3xl mx-auto px-6 py-24 text-center">
              <div className="w-20 h-20 bg-red-500/10 border border-red-500/50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl">🔒</span>
              </div>
              <h1 className="text-3xl font-black text-white uppercase tracking-widest mb-4">Akses Terkunci</h1>
              <p className="text-slate-400 font-medium mb-12">Anda telah menikmati 3 Ebook gratis bulan ini. Ebook <strong>"{ebook.title}"</strong> termasuk dalam jajaran koleksi Premium Ouroboros.</p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  {/* Single Ebook Tier */}
                  <button className="bg-slate-800 text-white border border-slate-700 px-6 py-4 rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors w-full md:w-auto">
                      Unlock Ebook Ini (Rp 20.000)
                  </button>

                  <div className="text-[10px] font-black uppercase text-slate-500">ATAU</div>

                  {/* Bundle Ebook Tier (Highlighted) */}
                  <div className="relative w-full md:w-auto">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full z-10 whitespace-nowrap shadow-lg">
                          MOST POPULAR BUNDLE
                      </div>
                      <button className="relative bg-amber-500 text-slate-900 border-2 border-amber-400 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white hover:scale-105 transition-all w-full shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                          Buka Semua 8 Ebook (Rp 99.000)
                      </button>
                  </div>
              </div>
          </div>
      );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 md:py-12 grid lg:grid-cols-[300px_1fr] gap-8 md:gap-12">
      {/* Left Sidebar Table of Contents */}
      <aside className="hidden lg:block space-y-8">
          <div className="sticky top-28 bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="mb-6 pb-6 border-b border-slate-800">
                  <h3 className="text-sm font-black text-white uppercase tracking-widest mb-2 line-clamp-2">{ebook.title}</h3>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Oleh: {ebook.author}</p>
              </div>
              
              <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500 mb-4">Daftar Isi</h4>
                  {ebook.tableOfContents ? (
                      <ul className="space-y-3">
                          {ebook.tableOfContents.map((toc, idx) => (
                              <li key={idx} className="flex justify-between items-start gap-4 cursor-pointer group">
                                  <span className={`text-xs font-bold leading-relaxed transition-colors ${toc.isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>
                                      {toc.title}
                                  </span>
                                  <span className="text-[9px] font-bold text-slate-600 mt-0.5">{toc.pageStr}</span>
                              </li>
                          ))}
                      </ul>
                  ) : (
                      <p className="text-xs text-slate-500 italic">Daftar isi tidak tersedia</p>
                  )}
              </div>
          </div>
      </aside>

      {/* Main Reader Content */}
      <article className="bg-[#12141a] rounded-2xl border border-slate-800/50 p-5 md:p-10 lg:p-16 shadow-2xl min-h-screen">
         {ebook.fullHtmlContent ? (
             <div className="prose prose-invert prose-base md:prose-lg prose-amber max-w-none 
                 prose-p:font-medium prose-p:text-slate-300 prose-p:leading-relaxed md:prose-p:leading-loose
                 prose-h2:font-black prose-h2:tracking-tight prose-h2:text-2xl md:prose-h2:text-3xl
                 prose-li:text-slate-300 prose-li:leading-relaxed"
                 dangerouslySetInnerHTML={{ __html: ebook.fullHtmlContent }}
             />
         ) : (
             <div className="text-center py-24 text-slate-500 font-medium">Naskah sedang dalam tahap penyusunan oleh Editor BERNAS.</div>
         )}
      </article>
    </div>
  );
}
