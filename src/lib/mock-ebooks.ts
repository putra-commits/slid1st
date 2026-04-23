export interface EbookMetadata {
  id: string;
  title: string;
  slug: string;
  author: string;
  coverImage: string;
  category: string;
  isUnlocked: boolean;
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
    author: "Mahakarya Lab",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    category: "Software Architecture",
    isUnlocked: true,
    pages: 45,
    readTimeMin: 30,
    description: "Blueprint membangun Micro-SaaS bernilai raksasa tanpa perlu menulis satu baris kode pemrograman rumit. Kuasai AI Agent, perintahkan mesin layaknya CTO, dan tuai profit secara pasif.",
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
    isUnlocked: false,
    pages: 60,
    readTimeMin: 45,
    description: "Bongkar rahasia di balik layar bagaimana membangun agensi web dan media. Dipersembahkan oleh Agenc1st: The Ultimate B2B Growth Engine. Kolaborasi dengan kampus TeFa untuk leverage massal."
  },
  {
    id: "eb-003",
    title: "Trafik Gelap: Tactics 1.000 Pengunjung Organik/Hari Tanpa Iklan",
    slug: "trafik-gelap-ribuan-organik",
    author: "BERNAS Intelligence",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    category: "Growth Hacking",
    isUnlocked: false,
    pages: 42,
    readTimeMin: 25,
    description: "Teknik melahirkan ribuan URL SEO secara presisi. Didukung oleh BERNAS.100 & Pilar1st Engine: Mesin Fabrikasi Kedaulatan Data Regional."
  },
  {
    id: "eb-004",
    title: "Omni-Salesman: Menundukkan Algoritma Lewat SEO, GEO & AEO",
    slug: "omni-salesman-trinitas",
    author: "BERNAS Digital",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    category: "Marketing Intelligence",
    isUnlocked: true,
    pages: 55,
    readTimeMin: 40,
    description: "Dari BERNAS.id: Pencerahan Warta, Sejarah Bangsa. Mempersenjatai website Anda dengan Generative Engine Optimization (GEO) layaknya nabi teknologi."
  },
  {
    id: "eb-005",
    title: "Sovereign Data: Mengapa Email List Adalah Aset Tak Ternilai",
    slug: "sovereign-data-email-list",
    author: "Mahakarya Lab",
    coverImage: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600",
    category: "Retention Strategy",
    isUnlocked: false,
    pages: 35,
    readTimeMin: 20,
    description: "Facebook bisa diblokir. Instagram bisa jatuh algoritmanya. Tetapi daftar email yang loyal senantiasa menjadi mesin ATM tak terbatas di genggaman Anda."
  },
  {
    id: "eb-006",
    title: "Copywriting 101: Jarum Hipnotis di Hati Audiens",
    slug: "copywriting-jarum-hipnotis",
    author: "BERNAS Academy",
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&q=80&w=600",
    category: "Conversion Copy",
    isUnlocked: true,
    pages: 50,
    readTimeMin: 35,
    description: "Belajar menulis untuk menjual. Bagaimana mengubah struktur kalimat yang monoton menjadi jaring yang membuat audiens tak sanggup untuk tidak membeli."
  },
  {
    id: "eb-007",
    title: "Micro-SaaS Economics: Resep Aplikasi Langganan Bulanan",
    slug: "micro-saas-resep-langganan",
    author: "Mahakarya Lab",
    coverImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=600",
    category: "Software Architecture",
    isUnlocked: false,
    pages: 38,
    readTimeMin: 25,
    description: "Cara cerdas membangun aplikasi tangguh dengan MRR eksponensial. Diorkestrasikan melalui Alchem1st: Konverter Algoritma Menjadi Emas Digital."
  },
  {
    id: "eb-008",
    title: "Influencer Mining: Menunggangi KOL untuk Viral",
    slug: "influencer-mining-viral",
    author: "Agenc1st Data",
    coverImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600",
    category: "Growth Hacking",
    isUnlocked: false,
    pages: 32,
    readTimeMin: 20,
    description: "Analisis Social Mining menggunakan B-Points Bernas.id untuk menyuap audiens lokal agar mensponsori konten Anda secara massal tanpa Ads."
  },
  {
    id: "eb-009",
    title: "Teaching Factory (TeFa) Hack: Pasukan Sales Mahasiswa",
    slug: "teaching-factory-pasukan-sales",
    author: "UNMAHA Academic",
    coverImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600",
    category: "Operations",
    isUnlocked: false,
    pages: 65,
    readTimeMin: 50,
    description: "Buku panduan resmi rektorat UNMAHA (Universitas Mahakarya Asia: Entrepreneur University). Mengubah kurikulum tugas akhir menjadi proyek monetisasi B2B berskala masif."
  },
  {
    id: "eb-010",
    title: "B2B Profiling: Masterclass LinkedIn untuk Enterprise",
    slug: "b2b-profiling-linkedin",
    author: "Mahakarya Lab",
    coverImage: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=600",
    category: "B2B Sales",
    isUnlocked: false,
    pages: 40,
    readTimeMin: 30,
    description: "Mengoptimasi Headline, About, dan Experience di LinkedIn untuk melewati gerbang SDM perusahaan dan langsung bernegosiasi dengan CEO."
  },
  {
    id: "eb-011",
    title: "Ouroboros Standard: Mitigasi Risiko Bisnis Digital",
    slug: "ouroboros-mitigasi-risiko",
    author: "Putu Putrayasa, S.T., M.Kom.",
    coverImage: "https://images.unsplash.com/photo-1614064641913-6b714b13d2f9?auto=format&fit=crop&q=80&w=600",
    category: "Management",
    isUnlocked: false,
    pages: 58,
    readTimeMin: 45,
    description: "Audit Ouroboros: Cara mengunci bisnis dari keruntuhan operasional, kegagalan tim, dan ancaman kompetitor melalui Quality Control yang kejam."
  }
];
