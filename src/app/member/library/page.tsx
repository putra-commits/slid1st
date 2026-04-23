import Link from 'next/link';
import { DIGITAL_LIBRARY } from '@/lib/mock-ebooks';

export default function LibraryPage() {
  // Define vibrant aesthetic gradients for each book cover base
  const premiumGradients = [
    "from-blue-600 to-indigo-900",
    "from-emerald-600 to-teal-900",
    "from-rose-600 to-red-900",
    "from-amber-500 to-orange-800",
    "from-purple-600 to-violet-900",
    "from-cyan-600 to-blue-900",
    "from-pink-600 to-rose-900",
    "from-slate-700 to-slate-900",
    "from-fuchsia-600 to-purple-900",
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-[#1e3a8a] uppercase tracking-tight mb-4">Pustaka Digital</h1>
        <p className="text-gray-500 font-medium text-lg max-w-2xl">Akses eksklusif mahakarya literatur dan cetak biru bisnis digital dari Sovereign Ecosystem BERNAS.id.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
        {DIGITAL_LIBRARY.map((ebook, idx) => {
          const bgGradient = premiumGradients[idx % premiumGradients.length];
          return (
            <Link key={ebook.id} href={`/member/ebooks/${ebook.slug}`} className="group flex flex-col items-center bg-white border border-gray-100 rounded-xl p-8 hover:border-blue-200 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(29,78,216,0.1)]">
               
               {/* Authentic 3D Book Render */}
               <div className="relative w-[140px] h-[200px] mb-8 transition-transform duration-500 transform group-hover:-translate-y-4 group-hover:scale-105" style={{ perspective: '1200px' }}>
                   
                   {/* 3D Container (Rotated sharper to show THICK right Pages edge) */}
                   <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-40deg) rotateX(8deg)' }}>
                       
                       {/* Drop Shadow Base */}
                       <div className="absolute -bottom-2 -left-2 w-[110%] h-4 bg-black/30 blur-md" style={{ transform: 'translateZ(-20px)' }}></div>

                       {/* Front Cover */}
                       <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} rounded-r-sm overflow-hidden border border-white/20 shadow-xl`} style={{ transform: 'translateZ(20px)' }}>
                            {/* Abstract Image Overlay (Blend Mode for creativity) */}
                            <img src={ebook.coverImage} alt={ebook.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                            
                            {/* Top Title Overlay */}
                            <div className="absolute top-0 inset-x-0 p-4">
                                <h4 className="text-white font-black leading-snug text-xs drop-shadow-md">{ebook.title}</h4>
                            </div>

                            {/* Bottom Author Overlay */}
                            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                                <div className="w-6 h-0.5 bg-white/50 mb-2"></div>
                                <p className="text-white font-bold text-[8px] uppercase tracking-widest drop-shadow-md">Putu Putrayasa</p>
                            </div>

                            {/* Plastic Wrap Gloss */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       </div>

                       {/* Spine (Left side, mostly hidden by rotation, but creates depth) */}
                       <div className={`absolute top-0 left-0 h-full w-[40px] bg-gradient-to-b ${bgGradient} filter brightness-75 border-y border-l border-white/10`} style={{ transformOrigin: 'left', transform: 'rotateY(-90deg) translateZ(20px)' }}></div>

                       {/* Pages (Right Edge - The white paper block!) */}
                       <div className="absolute top-0 bottom-0 right-0 w-[40px] bg-[#f8f9fa] border-y border-r border-gray-300 flex" style={{ transformOrigin: 'right', transform: 'rotateY(90deg) translateZ(20px)' }}>
                           <div className="w-full h-full border-l border-r border-gray-200/50 flex flex-row justify-evenly px-0.5">
                               <div className="w-px h-full bg-gray-300"></div>
                               <div className="w-px h-full bg-gray-300 mt-1"></div>
                               <div className="w-px h-full bg-gray-300 mb-1"></div>
                           </div>
                       </div>
                       
                       {/* Top Pages (Top Edge) */}
                       <div className="absolute top-0 left-0 w-full h-[40px] bg-[#e9ecef] border border-gray-300" style={{ transformOrigin: 'top', transform: 'rotateX(90deg) translateZ(20px)' }}></div>
                   </div>
               </div>

               {/* Meta Info */}
               <div className="w-full flex flex-col gap-4 mt-auto pt-2">
                  <div className="w-full text-left">
                      <p className="text-[11px] text-gray-600 leading-relaxed font-medium line-clamp-4 italic border-l-2 border-amber-500 pl-3">
                         "{ebook.description}"
                      </p>
                  </div>
                  
                  <div className="w-full h-px bg-gray-100"></div>

                  <div className="w-full flex items-center justify-between">
                      <span className="text-[8px] font-black uppercase tracking-widest text-[#1e3a8a] bg-blue-50 px-2 py-1 rounded-full border border-blue-100/50">
                         {ebook.category}
                      </span>
                      
                      {ebook.isUnlocked ? (
                         <span className="text-[9px] uppercase font-black tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded">Gratis</span>
                      ) : (
                         <div className="flex items-center gap-1 text-rose-600 font-black text-[9px] uppercase tracking-widest bg-rose-50 border border-rose-100 px-2 py-1 rounded shadow-sm">
                            <span>🔒</span> Premium
                         </div>
                      )}
                  </div>
               </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
