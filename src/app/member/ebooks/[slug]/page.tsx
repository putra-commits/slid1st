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
              
              <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mb-12">
                  {/* Single Ebook Tier */}
                  <button className="bg-slate-800 text-white border border-slate-700 px-6 py-3 rounded-xl hover:bg-slate-700 transition-colors w-full md:w-auto flex flex-col items-center justify-center">
                      <span className="text-[10px] text-slate-400 line-through font-medium mb-0.5">Harga Normal: Rp 50.000</span>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm font-bold">Unlock Ebook Ini (Rp 20.000)</span>
                        <span className="bg-red-500/20 text-red-400 text-[10px] font-black px-1.5 py-0.5 rounded border border-red-500/30">-60%</span>
                      </div>
                  </button>

                  <div className="text-[10px] font-black uppercase text-slate-500 flex items-center justify-center">ATAU</div>

                  {/* Bundle Tier */}
                  <button className="relative bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 border border-amber-400 px-8 py-3 rounded-xl font-black text-sm hover:from-amber-400 hover:to-orange-400 transition-colors shadow-[0_0_30px_rgba(245,158,11,0.3)] w-full md:w-auto flex flex-col items-center justify-center">
                      <div className="absolute -top-3 inset-x-0 flex justify-center">
                          <span className="bg-red-600 text-white text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-full shadow-md border border-red-500">Most Popular Bundle</span>
                      </div>
                      <span className="text-sm mt-1">Buka Semua 8 Ebook (Rp 99.000)</span>
                  </button>
              </div>

              {/* Upsell Bonus Ticket */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-6 md:p-8 mb-8 text-white shadow-[0_10px_30px_rgba(245,158,11,0.2)] text-left">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className="text-5xl drop-shadow-md">🎟️</div>
                      <div>
                          <h4 className="text-xl md:text-2xl font-black uppercase tracking-widest mb-1 drop-shadow-sm">SUPER BONUS UNLOCK</h4>
                          <p className="text-white/95 text-sm md:text-base leading-relaxed mb-3">Setiap pembelian <b>Bundle 8 Ebook</b>, Anda otomatis mendapatkan VOUCHER senilai <b>Rp 500.000</b> untuk layanan SEO & Konsultasi Growth Hacking eksklusif dari <b>Agenc1st</b>!</p>
                          <div className="inline-block bg-white text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded shadow-sm">Terbatas Bulan Ini</div>
                      </div>
                  </div>
              </div>

              {/* Bundle Contents Listing (Mini LP) */}
              <div className="text-left bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-widest mb-6">Yang Anda Dapatkan di Bundle Kedaulatan:</h3>
                  <ul className="space-y-4">
                      {DIGITAL_LIBRARY.filter(b => !b.isUnlocked).map((b, i) => (
                          <li key={b.id} className="flex gap-4">
                              <span className="text-amber-500 mt-0.5 bg-amber-500/10 w-6 h-6 flex items-center justify-center rounded-full text-xs font-black shrink-0">{i + 1}</span>
                              <div>
                                  <h4 className="text-white font-bold text-sm">{b.title}</h4>
                                  <p className="text-slate-400 text-xs mt-1 leading-relaxed hidden md:block">{b.description}</p>
                              </div>
                          </li>
                      ))}
                      <li className="flex gap-4 p-4 mt-6 bg-slate-800/80 rounded-xl border border-amber-500/30">
                          <span className="text-amber-500 mt-0.5 text-lg">🎁</span>
                          <div>
                              <h4 className="text-amber-500 font-black uppercase tracking-widest text-sm mb-1">Voucher Agenc1st Rp 500.000</h4>
                              <p className="text-slate-300 text-xs leading-relaxed">Potongan harga eksklusif untuk layanan Jasa SEO, Pembuatan Web Organik Eksekutif, hingga Riset Data Driven Marketing tingkat dewa bersama Agenc1st.</p>
                          </div>
                      </li>
                  </ul>
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
         
         {/* Author Profile Box */}
         {ebook.author.includes("Putu Putrayasa") && (
            <div className="mt-16 pt-12 border-t border-slate-800 flex flex-col sm:flex-row gap-6 md:gap-8 items-start bg-slate-900/50 p-6 md:p-8 rounded-2xl">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256" alt="Putu Putrayasa, S.T., M.Kom." className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-slate-800 shadow-xl grayscale hover:grayscale-0 transition-all duration-500" />
                <div>
                   <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-1">Putu Putrayasa, S.T., M.Kom.</h3>
                   <p className="text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4">Founder UNMAHA, BERNAS.id & Agenc1st</p>
                   <p className="text-slate-400 font-medium leading-relaxed mb-6 text-sm md:text-base">
                     Sebagai pionir kedaulatan data dan pendidikan ekosistem digital di Indonesia, beliau memimpin The Sovereign Ecosystem yang menaungi <strong>Universitas Mahakarya Asia (UNMAHA)</strong>, BERNAS.id, Alchem1st, hingga Mahakarya Lab. Dengan visi besar mengawinkan literasi <i>technopreneurship</i> dan jurnalisme intelektual, misi utamanya adalah mencetak jutawan-jutawan digital generasi baru yang mengendalikan teknologi (AI Agents & Automations), bukan yang dikendalikan olehnya.
                   </p>
                   <a href="https://id.linkedin.com/in/putuputrayasa" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs font-bold text-white bg-[#0a66c2] px-5 py-2.5 rounded hover:bg-[#004182] transition-colors shadow-[0_0_15px_rgba(10,102,194,0.3)]">
                       Terhubung di LinkedIn
                   </a>
                </div>
            </div>
         )}
      </article>
    </div>
  );
}
