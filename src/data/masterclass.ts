export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  points: string[];
  note: string;
}

export const masterclassSlides: SlideData[] = [
  {
    id: 1,
    title: "1. The Great Reset: Tahun 2026",
    subtitle: "Mengapa Skil Tradisional Menjadi Usang",
    points: [
      "Era Generative AI telah meruntuhkan nilai eksklusif dari 'Information Gathering' (Mencari Informasi).",
      "Gelar akademis tidak lagi menjadi jaminan atas kemampuan pemecahan masalah (Problem Solving).",
      "Perusahaan global kini memprioritaskan: Kecepatan Eksekusi > Tata Bahasa Akademis.",
      "Pertanyaan utama 2026: 'Seberapa efisien Anda bisa memandu mesin untuk menyelesaikan pekerjaan 5 orang?'"
    ],
    note: "Selamat datang. Kita berada di tepi jurang evolusi kelas menengah. Banyak yang mengira AI hanyalah tren, padahal ia adalah mesin pemusnah massal bagi pekerjaan yang bersifat repetitif. Modul pertama ini adalah Wake-Up call Anda."
  },
  {
    "id": 2,
    "title": "2. Mitos AI Mencuri Pekerjaan",
    "subtitle": "Kenyataan Pahit dari Lanskap Remote Talent",
    "points": [
      "Mitos: 'Robot AI (ChatGPT) akan menggantikan manusia.'",
      "Kenyataan: 'Pekerjaan Anda akan diambil oleh SESEORANG yang terampil menggunakan AI.'",
      "Mereka bekerja 10 jam lebih sedikit dari Anda, tapi outputnya 10x lebih banyak berkat automasi.",
      "Anda memiliki dua pilihan: Menjadi penonton yang takut, atau menjadi sutradara operasi algoritma."
    ],
    "note": "AI itu buta tanpa tujuan. AI membutuhkan manusia untuk merumuskan batasan masalah (Constraints). Mereka yang menguasai seni mengatur AI-lah yang akan memonopoli kekayaan di era baru ini."
  },
  {
    "id": 3,
    "title": "3. Hentikan Prompting, Mulai Berpikir Agentic",
    "subtitle": "Evolusi dari Chatbot ke Autonomous Agents",
    "points": [
      "Prompting (Tanya-Jawab): Mentalitas pekerja level bawah. Anda bertanya, AI menjawab sesaat.",
      "Agentic (Otonomi): Mentalitas CEO. Anda memberikan obyektif besar, AI memecahnya, mencari data, dan mengeksekusinya tanpa henti.",
      "Agentic AI adalah sistem yang mampu memperbaiki dirinya sendiri saat menemui jalan buntu (Self-Correction).",
      "Contoh: Jangan minta AI menulis email. Minta AI membaca 100 email masuk, memilah yang penting, dan membalas otomatis dengan nada bahasa Anda."
    ],
    "note": "Ini adalah pergeseran fundamental. Jangan anggap AI sebagai Google versi pintar. Anggap AI sebagai staf magang jenius yang tidak pernah tidur."
  },
  {
    "id": 4,
    "title": "4. Selamat Datang di The New Middle Class",
    "subtitle": "Arbitrase Geografis: Gaji Dollar, Biaya Hidup Rupiah",
    "points": [
      "Remote Work memungkinkan Anda melakukan Arbitrase Geografis murni.",
      "Bekerja untuk perusahaan di San Francisco ($8,000/bulan) namun membelanjakannya di Indonesia.",
      "Internet menembus batasan paspor. Rekrutmen global hanya peduli pada portofolio dan kecepatan (Deliverable).",
      "Agentic AI adalah pengungkit (lever) yang membuat pemuda dari desa bisa melayani korporasi Manhattan."
    ],
    "note": "Ini bukan sekadar mengejar uang cepat. Ini adalah membangun kemerdekaan finansial mumpuni dengan memanfaatkan perbedaan nilai tukar mata uang, di mana AI menjadi mesin produksinya."
  },
  {
    "id": 5,
    "title": "5. Matematika Sederhana Pasukan Cyber",
    "subtitle": "Mengapa Klien Asing Merelakan Uangnya",
    "points": [
      "Tarif minimum Data Entry / Admin di AS: $15 - $20 per Jam.",
      "Jika Anda men-charge $12/jam (Sangat murah bagi AS), itu sama dengan ~Rp 190.000 per jam.",
      "Bekerja hanya 4 jam sehari = Rp 760.000 sehari = Rp 16+ Juta sebulan.",
      "Rahasia Agentic: Pekerjaan 4 jam tersebut dieksekusi oleh AI dalam waktu 15 Menit. Margin waktu adalah profit bersih Anda."
    ],
    "note": "Jangan pernah menjual waktu Anda secara mentah. Jual 'Hasil' (Output) dari mesin yang Anda bangun. Jika The Agent bekerja 3 jam lebih cepat, Anda dibayar penuh untuk waktu istirahat."
  },
  {
    "id": 6,
    "title": "6. Kantor Anda Adalah Internet (Asynchronous Era)",
    "subtitle": "Kunci Kebebasan Manajemen Waktu",
    "points": [
      "Bekerja Remote bukan berarti Zoom meeting jam 3 pagi mengikuti waktu New York.",
      "Masa depan kerja adalah Asynchronous (Asinkron): Pesan dan tugas ditinggalkan untuk dikerjakan kapan saja sebelum tenggat waktu (Deadline).",
      "Dokumentasi mengalahkan Diskusi. Kemampuan menulis instruksi yang tajam menentukan profesionalisme Anda.",
      "Gunakan AI (seperti Otter/Fireflies) untuk merangkum rapat jika terpaksa hadir."
    ],
    "note": "Kebebasan sejati lahir saat Anda tidak terikat oleh kalender meeting. Kerjakan logika coding atau laporan analitik Anda di tepi pantai pada pukul 10 pagi, klien Anda di benua seberang tak akan tahu."
  },
  {
    "id": 7,
    "title": "7. Tiga Fondasi Emas Remote Agentic",
    "subtitle": "Cheat Code Melompati Jalur Universitas",
    "points": [
      "1. IT Certifications (Kepercayaan Global). Universitas kurang diakui di Silicon Valley? Sertifikasi Google & AWS adalah dewa.",
      "2. Cloud Infrastructure (Sarang Agen). AI Butuh tempat untuk running 24/7. Anda wajib tahu dasar AWS, GCP, atau Firebase.",
      "3. Agentic Prompting (Mesin Kemudi). Kemampuan mengorkestrasi API, n8n, atau platform otomatisasi untuk merangkai tugas."
    ],
    "note": "Pilar ini bukan rekayasa, melainkan realita rekrutmen. Jika Anda punya sertifikasi Cloud dari Google dan tahu cara memanggil API AI, nilai Anda di mata klien luar melonjak drastis."
  },
  {
    "id": 8,
    "title": "8. Paspor Masa Depan: Sertifikasi Internasional",
    "subtitle": "Membangun Kredibilitas Instan Tanpa Kuliah IT",
    "points": [
      "Sertifikasi spesifik (seperti Google Data Analytics, Meta Social Media, AWS Cloud Practitioner) bernilai lebih tinggi dari sekadar gelar sarjana umum.",
      "Sertifikat ini membuktikan Anda menguasai keahlian yang relevan HARI INI, bukan kurikulum 5 tahun lalu.",
      "Bagaimana lulusnya jika Anda awam? Gunakan AI sebagai 'Study Buddy' (Teman Belajar tutor privat) yang sabar."
    ],
    "note": "Perusahaan seperti Google dan Meta telah mem-bypass syarat ijazah bagi pemegang sertifikasi resmi mereka. Ini adalah peretasan sistem (system hack) terbesar abad ini."
  },
  {
    "id": 9,
    "title": "9. Study Buddy Agentic AI",
    "subtitle": "Belajar Apa Saja 10x Lebih Cepat",
    "points": [
      "Berikan AI dokumen silabus modul AWS/Google ujian Anda (lewat fitur File Upload PDF).",
      "Gunakan Prompt: 'Berperanlah sebagai penguji galak. Uji saya satu per satu konsep ini dengan contoh kasus dunia nyata, dan jangan beritahu jawaban sebelum saya menebak.'",
      "AI akan menyimulasikan ratusan soal ujian, menutup kesenjangan pengetahuan Anda (Knowledge Gap) secara personal.",
      "Jika Anda terjebak, AI akan menyederhanakan penjelasan layaknya bicara pada anak usia 12 tahun."
    ],
    "note": "Pendidikan tradisional melempar satu buku untuk 40 murid. Dengan AI, Anda memiliki 1 profesor MIT eksklusif untuk mendidik otak Anda secara khusus di kamar Anda."
  },
  {
    "id": 10,
    "title": "10. Menguasai Data: Minyak Baru di Era AI",
    "subtitle": "Mata Uang yang Ditambang oleh Autopilot",
    "points": [
      "Data Analyst adalah profesi gerbang (Gateway) paling mudah untuk Remote Talent.",
      "Setiap bisnis memiliki tumpukan data (Excel, CSV, SQL) yang membingungkan. Mereka butuh seseorang untuk 'membacanya'.",
      "Anda tidak perlu jenius matematika. Gunakan *Advanced Data Analysis* (seperti ChatGPT Code Interpreter) untuk mentransformasi tabel acak menjadi Grafik Visual nan indah.",
      "Nilai tambah: Anda menagih $500 untuk laporan yang selesai dalam 15 menit oleh AI."
    ],
    "note": "Klien tidak membayar Anda untuk berhitung. Mereka membayar Anda untuk Kesimpulan (Insight). Biarkan AI yang berhitung dan membuat diagram, Anda yang mempresentasikan Insight."
  },
  {
    "id": 11,
    "title": "11. Fondasi Cloud: Rumah Bagi Pasukan AI",
    "subtitle": "Kenapa Laptop Lokal Tidak Cukup (Firebase/GCP)",
    "points": [
      "Agen AI yang sesungguhnya tidak berjalan di tab browser Anda; Mereka berjalan di 'Cloud' secara asinkronus (berjalan di awan komputer server).",
      "Memahami platform seperti Firebase atau Google Cloud Run berarti Anda tahu cara mendeploy robot Anda agar bekerja saat laptop Anda mati.",
      "Tidak perlu menjadi DevOps. Cukup pahami konsep Hosting, Database Realtime, dan Eksekusi Fungsi Skrip (Serverless Functions).",
      "Alchem1st dan BERNAS beroperasi penuh menggunakan arsitektur ini."
    ],
    "note": "Saat Anda memberikan URL hasil publikasi (deploy) Cloud kepada bos atau klien luar, Anda tidak lagi terlihat seperti freelancer pemula, melainkan Tech Founder mikro."
  },
  {
    "id": 12,
    "title": "12. Arsitektur Orketrasi: Lewati ChatGPT, Beralih ke n8n",
    "subtitle": "Pembangunan Mesin Visual Drag & Drop",
    "points": [
      "Platform seperti n8n atau Make.com adalah inti dari Agentic Automation.",
      "Visualisasikan tugas: (Trigger: Email Diterima) -> (Action: AI Mengekstrak Nama/Harga) -> (Action: Input ke Google Sheets) -> (Action: Kirim Terima Kasih ke Slack).",
      "Anda menghubungkan aplikasi-aplikasi ini tanpa menulis ribuan baris kode (Low-Code/No-Code Canvas).",
      "Setiap 'Workflow' yang Anda bangun adalah Karyawan Digital Permanen."
    ],
    "note": "Visual node-to-node (menghubungkan kotak lewat garis tarik) adalah sihir baru. Anda tinggal men-drag flow logikanya. Selamat datang di era Pabrik Kecerdasan Visual."
  },
  {
    "id": 13,
    "title": "13. Bedah Kasus: Sang Asisten Pemasar (Agenc1st)",
    "subtitle": "Otonomi di Lingkungan Dunia Nyata",
    "points": [
      "Kasus: Klien minta 30 Postingan Media Sosial dalam sebulan beserta gambar desainnya.",
      "Metode Manual: Mencari tren satu-satu, memikirkan caption, edit Canva = 40 Jam Kerja.",
      "Metode Agentic: Scrape berita harian dari BERNAS.id -> OpenAI merangkai opini & caption -> AI Text-to-Image membuat ilustrasi -> Auto-publish lewat API LinkedIn.",
      "Waktu Anda Dihabiskan: 1 Jam awal untuk rekaya Workflow; 0 Jam untuk bulan-bulan berikutnya."
    ],
    "note": "Ini bukan teori. Ini adalah taktik mesin cuan (revenue engine) yang dipraktetekkan oleh Alchemist OS setiap detiknya. Operasi tanpa gesekan manusia."
  },
  {
    "id": 14,
    "title": "14. Bekerja Kolaborasi (Coding with AI)",
    "subtitle": "Mematahkan Kutukan 'Tidak Bisa Koding'",
    "points": [
      "Zaman dulu: Pemrograman adalah tentang mengingat *syntax* (bahasa mesin) yang membosankan.",
      "Zaman Agentic: Gunakan IDE (Editor) modern seperti Cursor yang dipersenjatai Claude 3.5 Sonnet / GPT-4o.",
      "Anda bicara bahasa manusia (Bahasa Indonesia/Inggris): 'Tolong buatkan komponen form formulir interaktif warna ungu dan simpan datanya ke Firebase.'",
      "AI akan membaca basis kode Anda dan mengetikkan semuanya secara otonom dalam 5 detik."
    ],
    "note": "Pemrograman sekarang adalah proses Komunikasi, bukan Pengetikan. Sangat mudah bermanuver di ranah IT asalkan Logika Bisnis Anda jalan."
  },
  {
    "id": 15,
    "title": "15. Menjalin Reputasi di LinkedIn dan Upwork",
    "subtitle": "Kolam Pemancingan Klien Kelas Kakap",
    "points": [
      "Jangan pasif. Optimalkan profil LinkedIn Anda dengan kata kunci: 'AI Automation', 'Data Orchestration', 'Business Process Improvement'.",
      "Gunakan bot perayap untuk menemukan postingan lowongan (Job Post) asing di Upwork yang baru tayang 5 menit lalu.",
      "Kirimkan Cover Letter (Surat Pengantar) yang diracik khusus (Tailor-made) oleh bot AI yang sudah meriset website klien tersebut dalam sekejap.",
      "Kecepatan penawaran + Relevansi Ekstrem = Kemenangan Mutlak."
    ],
    "note": "Kompetisi di Upwork berdarah-darah, tetapi jika Anda menyerang lowongan sebelum detik pertama menit ke-5 dengan proposal yang super spesifik menganalisis masalah klien, Andalah juaranya."
  },
  {
    "id": 16,
    "title": "16. Matematika Harga Diri: Value-Based Pricing",
    "subtitle": "Keluarlah dari Perangkap Penjara Jam Kerja (Hourly Rate)",
    "points": [
      "Jangan menagih klien sebesar $20 per Jam untuk proses yang memakan waktu 2 Hari.",
      "Tagih klien $1,500 per Proyek atas 'Solusi Transformasi' yang akan menghemat biaya operasional mereka $50,000 per tahun.",
      "Klien Barat terbiasa dengan Harga Tinggi asal Hasil Nyata. Semakin murah harga Anda, terkadang semakin diragukan kualitasnya.",
      "Jika AI menyelesaikan pekerjaan itu dalam 2 Jam, biarkan saja. Keuntungan waktu itu adalah hak eksklusif hak-paten intelejensia Anda."
    ],
    "note": "Pricing (Pematokan harga) adalah tentang persepsi risiko. Mereka tidak membayar waktu Anda; Mereka membayar Kepastian bahwa masalah pelik bisnis mereka selesai total tanpa mereka pusing."
  },
  {
    "id": 17,
    "title": "17. Melesat dari Solo: Skalabilitas menuju Mikro-Agensi",
    "subtitle": "Kloning Diri Sendiri dalam Bentuk Digital",
    "points": [
      "Setelah Anda mendapat 3 Klien retained (berlangganan), Anda akan kehabisan Waktu.",
      "Langkah biasa: Merekrut manusia. Langkah Agentic: Merekrut 5 Agen AI baru (Sales Bot, Support Bot, Ops Bot).",
      "Anda melipatgandakan omset tenpa melipatgandakan *overhead* pusing mengurusi SDM secara ekstensif.",
      "Mikro-Agensi dengan 1 Pimpinan Manusia (Anda) dan 5 Robot setara outputnya dengan 20 Karyawan tradisional."
    ],
    "note": "Di sinilah kurva kekuasaan Anda berbelok eksponensial. Mikro-Agensi berbasis Agentic AI adalah model unit bisnis paling menggiurkan yang paling ditakuti perusahaan besar lama."
  },
  {
    "id": 18,
    "title": "18. Infrastruktur Finansial Global",
    "subtitle": "Menerbangkan Uang Asing Ke Tanah Air dengan Aman",
    "points": [
      "Menangani transaksi lintas negara sangat mudah di dekade ini.",
      "Platform *Gateway*: Payoneer (Akun Bank AS virtual Anda), Wise (Transfer kurs super rendah), atau Deel (Kontrak profesional standard Silicon Valley).",
      "Pelajari literasi dasar invoice, PPN (apabila diperlukan), dan jangan takut menggunakan Crypto (Stablecoin USDT) jika klien meminta.",
      "Legalisasi dan Integritas Finansial membedakan amatiran dengan Global Remote Talent tulen."
    ],
    "note": "Hasilkan Dollar-nya secara agresif, cairkan kembali ke ekosistem Rupiah untuk diputar di bisnis lokal. Itulah The New Middle Class sebenar-benarnya."
  },
  {
    "id": 19,
    "title": "19. Pola Pikir Keamanan dan Skalabilitas Ekstrem",
    "subtitle": "Kelemahan dan Etika dalam Operasi Agentic",
    "points": [
      "Dampak destruktif bot yang sembarangan: Menyebarkan spam email asal-asalan, memberikan janji (Hallucination) fatal atas nama klien.",
      "Validasi Kinerja (Human in The Loop): Jangan biarkan Agent merilis keputusan fatal (spt Transfer Uang/Kirim Penawaran Akhir) tanpa 1 klik persetujuan Anda.",
      "Klien tidak peduli Anda pakai AI, tapi klien membenci pekerjaan yang tidak bernyawa (Terlalu Robotik).",
      "Bumbui hasil render AI dengan 'Imperfeksi Asli Manusia' untuk personalisasi (Human-Touch) akhir."
    ],
    "note": "Rahasia bertahan puluhan tahun di industri ini adalah Jangan Malas. Biarkan AI merangkak 90% jalan, sisakan 10% sisa perjalanan untuk sentuhan emosional Anda sendiri sebagai Manusia."
  },
  {
    "id": 20,
    "title": "20. Final: Masuki The Ouroboros Loop",
    "subtitle": "Belajar Tanpa Henti Melawan Kadaluwarsa Teknologi",
    "points": [
      "Dunia AI akan bermutasi setiap 6 bulan. Modul yang Anda pelajari hari ini akan kedaluwarsa besok.",
      "Satu-satunya pertahanan adalah *Continuous Learning* bersama komunitas.",
      "The Ouroboros Loop: Aliran tanpa henti di mana kita terus menelan wawasan baru, praktek lapangan, dan memberi makan wacana ke sesama anggota.",
      "Selamat. Perjalanan Anda sebagai Remote Talent Bersenjata Agentic AI baru saja dimulai lewat gerbang Alchem1st dan BERNAS.id."
    ],
    "note": "Anda telah menyelesaikan 20 lembar esensi ilmu daging tertinggi di dekade ini. Ini adalah tiket awal yang mengubah paradigma. Jangan biarkan layar ini mati percuma. Silakan masuk, aktivasi token komunitas Anda, dan mari kita retas batasan dunia bersama."
  }
];
