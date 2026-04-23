"use client";

import { notFound, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { DIGITAL_LIBRARY } from '@/lib/mock-ebooks';

export default function EbookReaderPage() {
  const params = useParams();
  const slug = params.slug as string;
  const ebook = DIGITAL_LIBRARY.find((e) => e.slug === slug);

  const [isUnlocked, setIsUnlocked] = useState<boolean | null>(null);
  const [justClaimed, setJustClaimed] = useState(false);

  useEffect(() => {
    if (!ebook) return;

    const claimed = localStorage.getItem('bernas_claimed_ebook');
    if (!claimed) {
      // Automatic claim of the very first book they read!
      localStorage.setItem('bernas_claimed_ebook', ebook.id);
      setIsUnlocked(true);
      setJustClaimed(true);
    } else {
      if (claimed === ebook.id) {
        setIsUnlocked(true);
      } else {
        setIsUnlocked(false);
      }
    }
  }, [ebook]);

  if (!ebook) {
    notFound();
  }

  // Prevent hydration bounce by ensuring we know unlock state before rendering
  if (isUnlocked === null) {
      return <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center text-[#1e3a8a] font-bold">Memverifikasi Otoritas Akses...</div>;
  }

  // Auth Gate Simulation for locked content
  if (!isUnlocked) {
      return (
          <div className="max-w-3xl mx-auto px-6 py-24 text-center">
              <div className="w-20 h-20 bg-red-500/10 border border-red-500/50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl">🔒</span>
              </div>
              <h1 className="text-3xl font-black text-[#1e3a8a] uppercase tracking-widest mb-4">Akses Eksklusif Terkunci</h1>
              <p className="text-gray-600 font-medium mb-8">Anda telah menikmati 3 Ebook gratis bulan ini. Ebook <strong>"{ebook.title}"</strong> termasuk dalam jajaran koleksi Premium Ouroboros.</p>

              {/* Killer God-Tier Copywriting */}
              <div className="bg-orange-50/80 border border-orange-200/60 rounded-xl p-6 md:p-8 mb-12 text-left w-full shadow-[0_10px_30px_rgba(234,88,12,0.05)]">
                  <h3 className="text-orange-800 font-black text-lg md:text-xl mb-3 flex items-center gap-2">
                     <span className="text-2xl drop-shadow-sm">⚡</span> Bocoran Rahasia Dalam "{ebook.title}"
                  </h3>
                  <div className="bg-white p-5 rounded-lg border border-orange-100/50 shadow-sm">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium italic">"Satu teknik <b>Growth Hacking</b> dari buku rahasia ini nilainya setara puluhan juta rupiah jika Anda berani mengeksekusinya di perusahaan Anda hari ini. Bayangkan Anda duduk mencuri strategi kasta tertinggi para <b>Top CEO</b> hanya dengan modal yang bahkan tidak lebih mahal dari harga secangkir kopi pagi Anda.<br/><br/><b>Rp 20.000</b> adalah investasi paling tidak masuk akal yang pernah Anda lakukan untuk berpotensi mengubah trajektori finansial Anda selamanya. Keputusan logis tersulit Anda hari ini hanyalah membuktikannya."</p>
                  </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mb-12">
                  {/* Single Ebook Tier */}
                  <button className="bg-white text-[#1e3a8a] border-2 border-[#1e3a8a]/20 px-6 py-3 rounded-xl hover:border-[#1e3a8a] transition-all w-full md:w-auto flex flex-col items-center justify-center group shadow-sm hover:shadow-[0_10px_30px_rgba(30,58,138,0.1)]">
                      <span className="text-[10px] text-gray-400 line-through font-medium mb-0.5">Harga Normal: Rp 50.000</span>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm font-bold group-hover:text-[#1e3a8a]">Unlock Ebook Ini (Rp 20.000)</span>
                        <span className="bg-red-50 text-red-600 text-[10px] font-black px-1.5 py-0.5 rounded border border-red-200">-60%</span>
                      </div>
                  </button>

                  <div className="text-[10px] font-black uppercase text-gray-400 flex items-center justify-center">ATAU</div>

                  {/* Bundle Tier */}
                  <button className="relative bg-gradient-to-r from-amber-500 to-orange-600 text-white border border-transparent px-8 py-3 rounded-xl font-black text-sm hover:shadow-[0_10px_30px_rgba(245,158,11,0.4)] hover:-translate-y-0.5 transition-all w-full md:w-auto flex flex-col items-center justify-center leading-tight">
                      <div className="absolute -top-3 inset-x-0 flex justify-center">
                          <span className="bg-red-600 text-white text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md border-2 border-white animate-pulse">DISKON GILA 75%</span>
                      </div>
                      <span className="text-[10px] text-orange-200 line-through font-medium mb-1 mt-1">Total Nilai: Rp 400.000 (8 Ebook x 50Rb)</span>
                      <span className="text-sm">Buka Semua 8 Ebook (Rp 99.000)</span>
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
              <div className="text-left bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 md:p-8 mt-4 shadow-sm">
                  <h3 className="text-lg md:text-xl font-black text-[#1e3a8a] uppercase tracking-widest mb-6">Yang Anda Dapatkan di Bundle 99Rb:</h3>
                  <ul className="space-y-4">
                      {DIGITAL_LIBRARY.filter(b => !b.isUnlocked).map((b, i) => (
                          <li key={b.id} className="flex gap-4">
                              <span className="text-white mt-0.5 bg-[#1e3a8a] w-6 h-6 flex items-center justify-center rounded-full text-xs font-black shrink-0 shadow-sm">{i + 1}</span>
                              <div>
                                  <h4 className="text-gray-900 font-bold text-sm">{b.title}</h4>
                                  <p className="text-gray-500 text-xs mt-1 leading-relaxed hidden md:block">{b.description}</p>
                              </div>
                          </li>
                      ))}
                      <li className="flex gap-4 p-5 mt-6 bg-orange-50 rounded-xl border border-orange-200 shadow-sm">
                          <span className="text-amber-500 mt-0.5 text-xl">🎁</span>
                          <div>
                              <h4 className="text-orange-700 font-black uppercase tracking-widest text-sm mb-1">Voucher Agenc1st Rp 500.000</h4>
                              <p className="text-gray-600 text-xs leading-relaxed">Potongan harga tunai eksklusif untuk layanan Jasa SEO, Pembuatan Web Eksekutif, hingga Riset Data Driven Marketing tingkat nasional bersama Agenc1st Foundation.</p>
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
          <div className="sticky top-28 bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="mb-6 pb-6 border-b border-gray-200">
                  <h3 className="text-sm font-black text-[#1e3a8a] uppercase tracking-widest mb-2 line-clamp-2">{ebook.title}</h3>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Oleh: {ebook.author}</p>
              </div>
              
              <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1e3a8a] mb-4">Daftar Isi</h4>
                  {ebook.tableOfContents ? (
                      <ul className="space-y-3">
                          {ebook.tableOfContents.map((toc, idx) => (
                              <li key={idx} className="flex justify-between items-start gap-4 cursor-pointer group">
                                  <span className={`text-xs font-bold leading-relaxed transition-colors ${toc.isActive ? 'text-[#1e3a8a]' : 'text-gray-500 group-hover:text-[#1e3a8a]'}`}>
                                      {toc.title}
                                  </span>
                                  <span className="text-[9px] font-bold text-gray-400 mt-0.5">{toc.pageStr}</span>
                              </li>
                          ))}
                      </ul>
                  ) : (
                      <p className="text-xs text-gray-400 italic">Daftar isi tidak tersedia</p>
                  )}
              </div>
          </div>
      </aside>

      {/* Main Reader Content */}
      <article className="bg-white rounded-2xl border border-gray-200 p-5 md:p-10 lg:p-16 shadow-xl min-h-screen">
         
         {justClaimed && (
             <div className="mb-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 md:p-8 text-white shadow-lg border-2 border-emerald-300">
                 <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest mb-2 flex items-center gap-3">
                   <span className="text-3xl">🎉</span> Klaim Berhasil!
                 </h3>
                 <p className="font-medium text-emerald-50 text-sm md:text-base leading-relaxed">Anda telah berhasil mengklaim Ebook <b>"{ebook.title}"</b> senilai Rp 50.000 secara <b>100% Gratis</b>! Jatah 1 Ebook Gratis Premium harian/bulanan Anda sudah digunakan. Untuk mambaca koleksi Ebook lainnya di perpustakaan, Anda kini harus meng-Upgrade ke Bundle Ouroboros.</p>
             </div>
         )}

         {ebook.fullHtmlContent ? (
             <div className="prose prose-base md:prose-lg max-w-none 
                 prose-p:font-medium prose-p:text-gray-700 prose-p:leading-relaxed md:prose-p:leading-loose
                 prose-headings:text-[#1e3a8a]
                 prose-h2:font-black prose-h2:tracking-tight prose-h2:text-2xl md:prose-h2:text-3xl
                 prose-li:text-gray-700 prose-li:leading-relaxed"
                 dangerouslySetInnerHTML={{ __html: ebook.fullHtmlContent }}
             />
         ) : (
             <div className="text-center py-24 text-gray-500 font-medium">Naskah sedang dalam tahap penyusunan oleh Editor BERNAS.</div>
         )}
         
         {/* Author Profile Box */}
         {ebook.author.includes("Putu Putrayasa") && (
            <div className="mt-16 pt-12 border-t border-gray-200 flex flex-col sm:flex-row gap-6 md:gap-8 items-start bg-slate-50 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256" alt="Putu Putrayasa, S.T., M.Kom." className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-white shadow-md grayscale hover:grayscale-0 transition-all duration-500" />
                <div>
                   <h3 className="text-xl md:text-2xl font-black text-[#1e3a8a] tracking-tight mb-1">Putu Putrayasa, S.T., M.Kom.</h3>
                   <p className="text-orange-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4">Founder UNMAHA, BERNAS.id & Agenc1st</p>
                   <p className="text-gray-600 font-medium leading-relaxed mb-6 text-sm md:text-base">
                     Sebagai pionir kedaulatan data dan pendidikan ekosistem digital di Indonesia, beliau memimpin The Sovereign Ecosystem yang menaungi <strong>Universitas Mahakarya Asia (UNMAHA)</strong>, BERNAS.id, Alchem1st, hingga Mahakarya Lab. Dengan visi besar mengawinkan literasi <i>technopreneurship</i> dan jurnalisme intelektual, misi utamanya adalah mencetak jutawan-jutawan digital generasi baru yang mengendalikan teknologi (AI Agents & Automations), bukan yang dikendalikan olehnya.
                   </p>
                   <a href="https://id.linkedin.com/in/putuputrayasa" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs font-bold text-white bg-[#0a66c2] px-5 py-2.5 rounded hover:bg-[#004182] transition-colors shadow-md">
                       Terhubung di LinkedIn
                   </a>
                </div>
            </div>
         )}
      </article>
    </div>
  );
}
