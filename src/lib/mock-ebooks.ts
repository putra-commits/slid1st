export interface EbookMetadata {
  id: string;
  title: string;
  slug: string;
  author: string;
  coverImage: string;
  category: string;
  pages: number;
  readTimeMin: number;
  description: string;
  tableOfContents?: { title: string; pageStr: string; isActive?: boolean }[];
  fullHtmlContent?: string;
}

export const DIGITAL_LIBRARY: EbookMetadata[] = [
  {
    id: "eb-001",
    title: "Strategi Menjadi Technopreneur Income 2 Digit Berbasis Vibe Coding",
    slug: "vibe-coding-technopreneur",
    author: "Putu Putrayasa, S.T., M.Kom.",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    category: "Software Architecture",
    pages: 45,
    readTimeMin: 30,
    description: "Ini bukan panduan teknis yang membosankan. Ini adalah langkah konkrit mendelegasikan ratusan jam coding kepada robot AI Agent, sehingga Anda bisa fokus pada satu-satunya hal yang penting: Monetisasi Valuasi. Pelajari anatomi Front-end hingga arsitektur Database yang siap diserap algoritma generasi terbaru. Di sinilah rahasia bagaimana seorang pemula merakit sistem yang mendistorsi pasar dengan kecepatan cahaya. Jika Anda belum pernah mencapai Rp 50 Juta per bulan pertama Anda, ebook inilah kompas mutlak Anda.",
    tableOfContents: [
      { title: "Mukadimah: The Paradigm Shift", pageStr: "Pg. 1" },
      { title: "BAB 1: Dekonstruksi Ekosistem Vibe Coding", pageStr: "Pg. 5", isActive: true },
      { title: "BAB 2: Persenjataan Emas (The Arsenal)", pageStr: "Pg. 15" },
      { title: "BAB 3: Blueprint 30 Hari", pageStr: "Pg. 25" },
      { title: "BAB 4: Monetisasi 2 Digit", pageStr: "Pg. 35" },
      { title: "BAB 5: Aegis Shield (Mitigasi)", pageStr: "Pg. 42" }
    ],
    fullHtmlContent: `
      <div class="space-y-8">
        <div class="text-center space-y-4 mb-16 border-b border-white/10 pb-12">
            <h1 class="text-3xl md:text-5xl font-black text-white font-headline leading-tight tracking-tighter">Strategi Menjadi Technopreneur Income 2 Digit Berbasis Vibe Coding</h1>
            <p class="text-amber-500 font-black uppercase tracking-[0.2em] text-sm">Disponsori Penuh Oleh: Universitas Mahakarya Asia (UNMAHA)</p>
        </div>

        <h2 class="text-2xl font-bold text-white border-b border-white/20 pb-2 mt-12 mb-6">MUKADIMAH (Executive Summary)</h2>
        <p class="text-lg text-slate-300 leading-relaxed font-medium">Rekayasa perangkat lunak tradisional mulai usang untuk pembangunan MVP (Minimum Viable Product). Biaya <i>development</i> yang tinggi dan waktu tunggu berbulan-bulan tidak lagi relevan.</p>
        <p class="text-lg text-slate-300 leading-relaxed font-medium">Selamat datang di era <strong>Vibe Coding</strong>—konsep memerintah AI Agent (seperti Cursor, Windsurf, Copilot) untuk merakit kode secara utuh dengan orkestrasi bahasa manusia. Anda tak lagi mengetik sintaks; Anda memposisikan diri sebagai CTO (Chief Technology Officer) yang memberi perintah arsitektural.</p>

        <h2 class="text-2xl font-bold text-white border-b border-white/20 pb-2 mt-12 mb-6">BAB 1: Dekonstruksi Ekosistem "Vibe Coding"</h2>
        <p class="text-lg text-slate-300 leading-relaxed font-medium">Memahami komponen Front-end, Back-end, dan Database kini sama seperti bermain kepingan <i>Lego</i>, bukan lagi belajar matematika yang rumit. Titik buta terbesar pemula adalah mereka mencoba "memprogram", padahal yang dibutuhkan mesin adalah "Seni Prompt Engineering Berlapis". Instruksikan struktur, bukan algoritmanya.</p>

        <div class="p-8 bg-slate-900 border-l-4 border-amber-500 rounded-r-xl my-8">
          <strong class="text-amber-500 font-bold uppercase tracking-widest text-xs">Ouroboros Insight:</strong>
          <p class="mt-2 text-white italic">"Berhentilah memikirkan bagaimana cara membuat tombol menjadi merah. Pikirkan mengapa tombol merah itu menghasilkan penjualan. Vibe coding akan mengurusi sisanya."</p>
        </div>

        <h2 class="text-2xl font-bold text-white border-b border-white/20 pb-2 mt-12 mb-6">BAB 2: "The Arsenal" (Persenjataan Emas Technopreneur)</h2>
        <p class="text-lg text-slate-300 leading-relaxed font-medium">Bypass antarmuka Anda. Gunakan Stack standar industri (Cod1st Standard) karena tumpukan seperti <strong>Next.js, TailwindCSS, dan Supabase/Firebase</strong> adalah yang paling direkam dan paling dipahami secara presisi oleh AI.</p>

        <h2 class="text-2xl font-bold text-white border-b border-white/20 pb-2 mt-12 mb-6">BAB 3: Blueprint 30 Hari: Dari Ide Menjadi Produk</h2>
        <ul class="list-disc pl-6 space-y-4 text-lg text-slate-300 leading-relaxed">
            <li><strong>Minggu 1: Validasi Market.</strong> Rumuskan BRD (Business Requirements Document) Anda dan serahkan ke agen LLM.</li>
            <li><strong>Minggu 2: Wireframing.</strong> Bootstrap proyek Anda dan pasang Auth Gates.</li>
            <li><strong>Minggu 3: The Prompting Loop.</strong> Ask UI -> Review Output -> Copy-Paste Errors -> Fix. Jangan panik saat kode merah. Biarkan agen yang memperbaikinya.</li>
            <li><strong>Minggu 4: CI/CD & Deployment.</strong> Tekan 3 tombol di Vercel, dan Anda mengudara secara komersial.</li>
        </ul>

        <h2 class="text-2xl font-bold text-white border-b border-white/20 pb-2 mt-12 mb-6">BAB 4: Monetisasi & Skalabilitas Pendapatan</h2>
        <p class="text-lg text-slate-300 leading-relaxed font-medium">Gunakan taktik Micro-SaaS Economics: Kunci 500 pengguna berlangganan Rp 100.000/Bulan, maka Anda menyentuh Rp 50.000.000 (Income 2 Digit) tanpa harus mempekerjakan ratusan staf. Ataupun kerjakan proyek senilai Rp 25 Juta/Klien bermodalkan <i>whitelabeling</i> Agenc1st Ecosystem.</p>

        <h2 class="text-2xl font-bold text-white border-b border-white/20 pb-2 mt-12 mb-6">Panggilan Menuju Aksi (Call To Action B2B)</h2>
        <div class="mt-12 p-8 bg-gradient-to-br from-amber-500/20 to-slate-900 border border-amber-500/40 rounded-[2rem] text-center">
            <h3 class="text-xl font-bold text-amber-500 mb-4 uppercase tracking-widest">Akselerasi Impian Anda</h3>
            <p class="text-white font-medium mb-6">Kewalahan melakukan Vibe Coding sendirian? Bergabunglah dengan Ekosistem Agenc1st dan dapatkan tim UNMAHA TeFa yang membangun infrastruktur Anda dalam hitungan minggu.</p>
            <button class="bg-amber-500 text-slate-900 px-8 py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-slate-900 transition-colors">Tanya Tim Agenc1st</button>
        </div>
      </div>
    `
  },
  {
    id: "eb-002",
    title: "The Agenc1st Blueprint: Membangun Digital Agency Valuasi Rp1 Miliar",
    slug: "agenc1st-blueprint-1-miliar",
    author: "Putu Putrayasa, S.T., M.Kom.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    category: "Digital Business",
    pages: 60,
    readTimeMin: 45,
    description: "Mayoritas digital agency hancur di tahun pertama karena bertumpu pada margin yang tipis dan sistem akuisisi klien yang leher botol. Di dalam buku rahasia The Agenc1st Blueprint, Anda akan dibekali rancang bangun infrastruktur B2B Growth Engine tercangih. Belajar bagaimana mengeksploitasi kampus TeFa (Teaching Factory) untuk melipatgandakan tim operasional secara eksponensial dengan modal minimal. Jika Anda serius membangun valuasi bisnis hingga Rp1 Miliar, seluruh SOP dan kerangka negosiasi penutupan transaksi kaliber dewa telah kami buka secara gamblang di sini.",
    tableOfContents: [
      { title: "Mukadimah: Anatomi Kegagalan Agensi B2B", pageStr: "Pg. 1", isActive: true },
      { title: "BAB 1: The TeFa Arbitrage (Hack SDM 80%)", pageStr: "Pg. 12" },
      { title: "BAB 2: Matriks Akuisisi Klien Skala Enterprise", pageStr: "Pg. 25" },
      { title: "BAB 3: Pipeline 1 Miliar Pertama Anda", pageStr: "Pg. 40" }
    ],
    fullHtmlContent: `
      <div class="space-y-8">
        <div class="text-center space-y-4 mb-16 border-b border-gray-200 pb-12">
            <h1 class="text-3xl md:text-5xl font-black text-[#1e3a8a] font-headline leading-tight tracking-tighter">The Agenc1st Blueprint: Membangun Digital Agency Valuasi Rp1 Miliar</h1>
            <p class="text-amber-600 font-black uppercase tracking-[0.2em] text-sm md:text-base bg-amber-50 inline-block px-4 py-2 rounded-full border border-amber-200">Disponsori Penuh Oleh: Agenc1st Foundation</p>
        </div>

        <h2 class="text-2xl font-bold text-[#1e3a8a] border-b-2 border-amber-500 pb-2 mt-12 mb-6 inline-block">MUKADIMAH: Anatomi Kegagalan Agensi B2B</h2>
        
        <p>Berdasarkan laporan analisa bisnis global <i>(Gartner, 2025)</i>, <b>78% digital agency baru mengalami kebangkrutan operasional di 18 bulan pertamanya</b>. Mengapa angka ini sangat brutal? Jawabannya bermuara pada satu penyakit sistemik: <strong>Cost of Delivery (Biaya Produksi)</strong> yang lebih tinggi daripada <strong>Customer Lifetime Value (CLV)</strong>.</p>
        
        <p>Kebanyakan agensi pemula menghabiskan miliaran rupiah mempekerjakan *Senior Developer*, *Copywriter*, dan *Media Buyer* untuk mengerjakan proyek klien seharga puluhan juta. Hasilnya? Margin keuntungan tercekik menjadi kurang dari 15%. Anda tidak sedang membangun bisnis; Anda hanya menjadi direktur dari sebuah panti sosial yang sibuk mensubsidi gaji karyawan Anda sendiri.</p>

        <div class="p-8 my-10 bg-[#f8fafc] border border-gray-200 rounded-xl shadow-sm relative overflow-hidden">
          <div class="absolute top-0 left-0 w-2 h-full bg-[#1e3a8a]"></div>
          <strong class="text-[#1e3a8a] font-black uppercase tracking-widest text-sm flex items-center gap-2"><span className="text-xl">📊</span> Data Terbuka: Rasio Kebangkrutan Agensi Indonesia 2024-2026</strong>
          <ul class="mt-4 space-y-3 font-medium text-gray-700">
            <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-red-500"></span> <strong>Gagal Negosiasi B2B:</strong> 42% Agensi kesulitan menembus gerbang CEO.</li>
            <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> <strong>Kegagalan Retensi Tim:</strong> 65% Karyawan berbakat dibajak perusahaan startup besar.</li>
            <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> <strong>Margin Negatif:</strong> 51% Proyek Agensi *over-budget* karena revisi tanpa henti.</li>
          </ul>
        </div>

        <h2 class="text-2xl font-bold text-[#1e3a8a] border-b-2 border-amber-500 pb-2 mt-16 mb-6 inline-block">BAB 1: The TeFa Arbitrage (Sistem Penetas SDM 80% Lebih Murah)</h2>
        
        <p>Untuk menembus valuasi <b>Rp 1 Miliar pertama</b>, Anda harus membelah sistem perekrutan tradisional. Selamat datang di era <strong>Teaching Factory (TeFa)</strong>. Arsitektur bisnis Agenc1st yang kami kembangkan memanfaatkan kelaparan dan kejeniusan mahasiswa dari Universitas Mahakarya Asia (UNMAHA) yang sedang haus akan Portfolio industri riil.</p>

        <p>Alih-alih mempekerjakan 10 staf senior dengan gaji UMR penuh bulanan, Agenc1st mengikat mahasiswa tingkat akhir dengan *SLA (Service Level Agreement)* berbasis penyelesaian modular. Para mahasiswa menggunakan proyek riil klien sebagai pengganti kurikulum tugas akhir kampus mereka. Strategi ganda ini menghasilkan <b>Arbitrase Ketenagakerjaan</b> yang mendistorsi biaya operasional hingga 80% ke dasar lantai!</p>

        <blockquote class="italic text-gray-500 border-l-4 border-gray-300 pl-6 my-8 text-xl font-medium leading-relaxed">
          "Anda tidak bisa mengalahkan sebuah agensi yang tidak perlu pusing memikirkan beban pesangon, BPJS, dan turn-over karyawan, karena tulang punggung operasional mereka bersumber langsung dari institusi pendidikan tingkat nasional."
        </blockquote>

        <p>Modul pelatihan agen jarak jauh (*Remote Talent*) kami di UNMAHA telah menyaring ratusan kandidat spesialisasi—mulai dari *Prompt Engineer*, *Data Analyst*, hingga *React Developer*. Mereka adalah aset digital terkalibrasi yang siap Anda terjunkan dalam medan tempur proyek B2B klien tanpa risiko *overhead* tetap.</p>
        
        <h2 class="text-2xl font-bold text-[#1e3a8a] border-b-2 border-amber-500 pb-2 mt-16 mb-6 inline-block">Panggilan Invasi B2B</h2>
        <div class="mt-8 p-8 bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] rounded-[2rem] text-center shadow-xl border border-blue-800">
            <h3 class="text-xl font-black text-amber-400 mb-4 uppercase tracking-widest leading-relaxed">Sistem Valuasi Rp 1 Miliar Anda Siap Di-Clone</h3>
            <p class="text-blue-50 font-medium mb-8 leading-relaxed max-w-2xl mx-auto">Kami di Agenc1st Foundation telah merakit ulang mesin akuisisi dan kurikulum TeFa ini menjadi *White-label Framework*. Anda bisa menyewa infrastruktur kami sepenuhnya bulan ini.</p>
            <button class="bg-amber-500 text-slate-900 px-8 py-3.5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-[#1e3a8a] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Diskusikan Ekspansi Agency Anda Bersama Founder</button>
        </div>
      </div>
    `
  },
  {
    id: "eb-003",
    title: "Trafik Gelap: Tactics 1.000 Pengunjung Organik/Hari Tanpa Iklan",
    slug: "trafik-gelap-ribuan-organik",
    author: "Putu Putrayasa, S.T., M.Kom.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    category: "Growth Hacking",
    pages: 42,
    readTimeMin: 25,
    description: "Lupakan membakar uang puluhan juta di Facebook atau Google Ads. Selamat datang di era Trafik Gelap yang dikendalikan oleh BERNAS.100. Buku ini mengupas tuntas teknik kotor namun legal dalam melahirkan ribuan URL SEO yang mengangkangi posisi halaman satu mesin pencari. Pelajari integrasi Pilar1st Engine, strategi fabrikasi artikel masif berbasis AI, dan manipulasi kedaulatan data regional. Inilah fondasi bagaimana 1.000 pengunjung organik mendarat di keranjang belanja Anda setiap harinya tanpa henti.",
    tableOfContents: [
      { title: "Mukadimah: Kematian Iklan Berbayar", pageStr: "Pg. 1", isActive: true },
      { title: "BAB 1: Anatomi Trafik Gelap", pageStr: "Pg. 15" },
      { title: "BAB 2: Algoritma Pilar1st Engine", pageStr: "Pg. 28" },
      { title: "BAB 3: Kedaulatan Data Regional", pageStr: "Pg. 35" }
    ],
    fullHtmlContent: `
      <div class="space-y-8">
        <div class="text-center space-y-4 mb-16 border-b border-gray-200 pb-12">
            <h1 class="text-3xl md:text-5xl font-black text-[#1e3a8a] font-headline leading-tight tracking-tighter">Trafik Gelap: Tactics 1.000 Pengunjung Organik/Hari Tanpa Iklan</h1>
            <p class="text-amber-600 font-black uppercase tracking-[0.2em] text-sm md:text-base bg-amber-50 inline-block px-4 py-2 rounded-full border border-amber-200">Disponsori Penuh Oleh: The BERNAS.100 Initiative</p>
        </div>

        <h2 class="text-2xl font-bold text-[#1e3a8a] border-b-2 border-amber-500 pb-2 mt-12 mb-6 inline-block">MUKADIMAH: Kematian Iklan Berbayar (Paid Ads)</h2>
        
        <p>Apakah Anda menyadari bahwa biaya akuisisi pelanggan (CAC - Customer Acquisition Cost) melalui Facebook dan Google Ads telah meroket sebesar <b>220%</b> sejak pembaruan privasi iOS 14 tahun 2021? Mengandalkan lalu lintas berbayar di ekosistem modern sama artinya dengan menyewa tanah di atas gunung berapi.</p>
        
        <p>Di BERNAS.id, kami meyakini bahwa <b>Kedaulatan Data</b> adalah satu-satunya benteng pertahanan. Anda tidak bisa mendaulat bisnis jika keran pengunjung Anda dikontrol oleh tombol "Banned" milik Mark Zuckerberg atau pembaruan algoritma inti Google yang brutal.</p>

        <div class="flex flex-col md:flex-row gap-8 my-12 items-center">
           <div class="w-full md:w-1/2">
             <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm">
                <h4 class="font-black text-[#1e3a8a] uppercase tracking-widest text-sm mb-4">Metrik ROI Organik Harian</h4>
                <div class="space-y-4">
                   <div>
                     <div class="flex justify-between text-xs font-bold text-gray-500 mb-1"><span>Target: 1.000 Klik/Hari</span><span>Rp 0,-</span></div>
                     <div class="w-full bg-gray-200 rounded-full h-2.5"><div class="bg-emerald-500 h-2.5 rounded-full" style="width: 100%"></div></div>
                   </div>
                   <div>
                     <div class="flex justify-between text-xs font-bold text-gray-500 mb-1"><span>Target: Google Ads 1.000 Klik</span><span>Rp 2.500.000,-</span></div>
                     <div class="w-full bg-gray-200 rounded-full h-2.5"><div class="bg-rose-500 h-2.5 rounded-full" style="width: 100%"></div></div>
                   </div>
                </div>
                <p class="text-xs text-gray-500 mt-4 italic font-medium">*Data internal kampanye BERNAS.100 (Kuartal 1 2026)</p>
             </div>
           </div>
           <div class="w-full md:w-1/2">
             <p class="text-gray-700 leading-relaxed font-medium">Melalui strategi Trafik Gelap yang dirancang oleh mesin <b>Pilar1st</b>, Anda dapat mensimulasikan ledakan klik organik bernilai jutaan rupiah secara mandiri. Kami menggunakan algoritma pembuat URL laten yang menculik *long-tail keywords* sebelum kompetitor raksasa menyadarinya.</p>
           </div>
        </div>

        <h2 class="text-2xl font-bold text-[#1e3a8a] border-b-2 border-amber-500 pb-2 mt-16 mb-6 inline-block">BAB 1: Anatomi Trafik Gelap & Manipulasi SERP</h2>
        
        <p>Trafik Gelap <i>(Dark Traffic)</i> bukanlah peretasan ilegal. Ini adalah pemahaman level arsitektural tentang bagaimana Bot Google meng-<i>crawl</i> dan mengindeks variasi entitas geografis. Sebagai contoh, alih-alih bersaing pada kata kunci berdarah: <i>"Jasa Pembuatan Website B2B"</i>, mesin kami melahirkan 500 halaman spesifik secara otonom dalam satu malam:</p>

        <ul class="list-none space-y-3 font-medium text-gray-700 bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
            <li class="flex items-center gap-3"><span class="text-amber-500">✅</span> Jasa Pembuatan Website B2B di <b class="text-[#1e3a8a]">Sleman</b></li>
            <li class="flex items-center gap-3"><span class="text-amber-500">✅</span> Jasa Pembuatan Website B2B di <b class="text-[#1e3a8a]">Bantul</b></li>
            <li class="flex items-center gap-3"><span class="text-amber-500">✅</span> Jasa Pembuatan Website B2B di <b class="text-[#1e3a8a]">Denpasar Selatan</b></li>
        </ul>

        <p>Secara agregat, 500 halaman pencarian super-lokal ini menyerap <b>lebih banyak klik dan niat beli (Buyer Intent)</b> daripada satu halaman raksasa milik perusahaan konglomerat. Inilah Kedaulatan Data Regional yang memenangkan pertempuran kecil untuk mendominasi perang besar.</p>

      </div>
    `
  },
  {
    id: "eb-004",
    title: "Omni-Salesman: Menundukkan Algoritma Lewat SEO, GEO & AEO",
    slug: "omni-salesman-trinitas",
    author: "Putu Putrayasa, S.T., M.Kom.",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    category: "Marketing Intelligence",
    pages: 55,
    readTimeMin: 40,
    description: "Ketika algoritma Google terus berubah tanpa permisi, Anda membutuhkan kerangka Generative Engine Optimization (GEO) tingkat tinggi. Omni-Salesman merangkung metode trinitas SEO, GEO & AEO yang diadopsi dari arsitektur raksasa media berita BERNAS.id. Anda tidak hanya diajarkan menulis untuk manusia, tapi memprogram psikologi mesin pencari agar mengkultuskan nama brand Anda. Jadikan website Anda bukan sekadar brosur digital, melainkan salesman gaib yang berjualan di 100 negara secara bersamaan saat Anda tertidur."
  },
  {
    id: "eb-005",
    title: "Sovereign Data: Mengapa Email List Adalah Aset Tak Ternilai",
    slug: "sovereign-data-email-list",
    author: "Putu Putrayasa, S.T., M.Kom.",
    coverImage: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600",
    category: "Retention Strategy",
    pages: 35,
    readTimeMin: 20,
    description: "Berapa kerugian Anda jika akun Instagram dengan 100K Followers Anda dibanned oleh META hari ini? Sovereign Data akan menyadarkan Anda betapa fatalnya membangun aset di atas tanah sewaan platform asing. Di sini Anda akan dijajali strategi gila tentang membangun Email List miliaran rupiah sebagai bunker terakhir keamanan bisnis Anda. Pelajari funnel akuisisi, psikologi penulisan Subjek Email yang tak tertolak, dan kerangka The Aegis Shield untuk memastikan Anda mencetak uang hanya dengan menekan satu tombol 'Send'."
  },
  {
    id: "eb-006",
    title: "Copywriting 101: Jarum Hipnotis di Hati Audiens",
    slug: "copywriting-jarum-hipnotis",
    author: "Putu Putrayasa, S.T., M.Kom.",
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&q=80&w=600",
    category: "Conversion Copy",
    pages: 50,
    readTimeMin: 35,
    description: "Sebagus apapun produk Anda, jika Anda gagal melukiskannya dengan kata-kata, Anda hanya akan berakhir sebagai barang rongsokan di etalase internet. Copywriting 101 adalah jarum hipnotis yang akan saya tanamkan ke dalam kepala Anda. Anda akan menguasai cara memenggal penolakan audiens sejak tiga detik pertama mereka membaca Headline Anda. Buku ini bukan tentang menata kata yang indah, tapi meretas sistem limbik dan dopamin manusia agar mereka berdesakan mengeluarkan kartu kreditnya untuk Anda."
  },
  {
    id: "eb-007",
    title: "Micro-SaaS Economics: Resep Aplikasi Langganan Bulanan",
    slug: "micro-saas-resep-langganan",
    author: "Putu Putrayasa, S.T., M.Kom.",
    coverImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=600",
    category: "Software Architecture",
    pages: 38,
    readTimeMin: 25,
    description: "Mengejar proyek sekali putus adalah model bisnis kaum pekerja keras. Namun, mengumpulkan pendapatan langganan bulanan berulang (MRR) adalah strategi para maharaja perangkat lunak. Ebook ini membedah anatomi cerdas membangun aplikasi SaaS (Software as a Service) berskala mikro namun berpenghasilan makro. Dengan orkestrasi metodologi Alchem1st, Anda akan diajarkan cara mengubah kode mentah algoritma menjadi mesin penyedot emas digital yang mengunci klien Anda secara permanen."
  },
  {
    id: "eb-008",
    title: "Influencer Mining: Menunggangi KOL untuk Viral",
    slug: "influencer-mining-viral",
    author: "Putu Putrayasa, S.T., M.Kom.",
    coverImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600",
    category: "Growth Hacking",
    pages: 32,
    readTimeMin: 20,
    description: "Jangan bayar Influencer (KOL) ratusan juta jika Anda tidak paham cara menunggangi arus algoritma mereka. Influencer Mining dari lab BERNAS.id akan mendobrak kepala Anda tentang efisiensi Social Mining. Gunakan integrasi B-Points untuk menciptakan kerumunan buatan yang bersedia men-sponsori dan mem-viralkan konten Anda secara militan. Temukan pola memanipulasi audiens loka, agar mereka rela melakukan 'Word of Mouth' pemasaran terselubung berskala nasional tanpa budget Ads."
  },
  {
    id: "eb-009",
    title: "Teaching Factory (TeFa) Hack: Pasukan Sales Mahasiswa",
    slug: "teaching-factory-pasukan-sales",
    author: "Putu Putrayasa, S.T., M.Kom.",
    coverImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600",
    category: "Operations",
    pages: 65,
    readTimeMin: 50,
    description: "Sebuah strategi 'brute force' yang meresmikan kolaborasi antara dunia industri kapitalistik dan kurikulum akademis Universitas Mahakarya Asia (UNMAHA). Temukan cara memanfaatkan Teaching Factory (TeFa) guna mengubah mahasiwa semester akhir menjadi prajurit sales dan operasional B2B yang fanatik. Ebook saksi bisu ini mengurai kerangka teknis rektorat dalam menjembatani kelangkaan SDM murah nan jenius bagi perusahaan Anda, menciptakan rantai pasokan profit abadi dari garis depan bangku perkuliahan."
  },
  {
    id: "eb-010",
    title: "B2B Profiling: Masterclass LinkedIn untuk Enterprise",
    slug: "b2b-profiling-linkedin",
    author: "Putu Putrayasa, S.T., M.Kom.",
    coverImage: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=600",
    category: "B2B Sales",
    pages: 40,
    readTimeMin: 30,
    description: "Ketika proposal Anda tersangkut pada meja satpam atau staf administrasi, Anda telah kalah bernegosiasi. B2B Profiling membawa Anda mendobrak gerbang isolasi C-Level perusahaan kaliber raksasa langsung menggunakan LinkedIn. Sempurnakan arsitektur Headline, About, dan Storytelling Experience Anda, mengubah profil kusam menjadi magnet Enterprise. Melalui skema Masterclass ini, saya akan tunjukkan 3 baris pesan InMail yang tak pernah gagal memaksa CEO merespon undangan kopi Anda dalam 24 jam pertama."
  },
  {
    id: "eb-011",
    title: "Ouroboros Standard: Mitigasi Risiko Bisnis Digital",
    slug: "ouroboros-mitigasi-risiko",
    author: "Putu Putrayasa, S.T., M.Kom.",
    coverImage: "https://images.unsplash.com/photo-1614064641913-6b714b13d2f9?auto=format&fit=crop&q=80&w=600",
    category: "Management",
    pages: 58,
    readTimeMin: 45,
    description: "Pertumbuhan yang tidak diaudit adalah kanker yang membunuh dari dalam. Ouroboros Standard adalah kitab hitam mitigasi yang diciptakan untuk mengunci pintu keluar dari segala bentuk keruntuhan operasional dan blunder mematikan. Mulai dari membangun UX prosedur berlapis, hingga menyiagakan jaring Quality Control yang tak pandang bulu terhadap manajemen kejam. Buku ini tidak hanya menyelamatkan bisnis miliaran Anda dari kebangkrutan mendadak, tapi mensterilkan ancaman musuh yang mendompleng di dalam tim."
  }
];
