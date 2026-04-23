import { PresentationArchitect } from '../src/lib/slid1st/architect-agent';
import * as dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function runBatch() {
  console.log("🚀 [SLID1ST AI FACTORY] Memulai Eksekusi Batch untuk 9 Judul Artikel...");
  console.log("🔧 Model: Gemini 2.5 Flash");
  console.log("🛡️ Target: 9 Slide per Judul (Format JSON Murni - Anti Fluff)\\n");

  const titles = [
    "Strategi Mengotomatisasi Penilaian Tugas Mahasiswa Menggunakan AI Tanpa Kehilangan Sentuhan Manusia",
    "Membangun Pitch Deck Konsultan B2B yang Tidak Bisa Ditolak Menggunakan Framework Agentic",
    "Cara Menyusun Skripsi dan Riset Literatur 10x Lebih Cepat dengan AI RAG",
    "Panduan Transisi Karir dari Karyawan Kantoran Menjadi Freelancer Global Bergaji Dolar",
    "Implementasi AI Agent Sederhana untuk Menangani Komplain Pelanggan UMKM 24/7",
    "Masterclass Membangun Personal Branding di LinkedIn Menggunakan AI Content Factory",
    "Teknik Menyusun Silabus Kurikulum Adaptif Berbasis Kebutuhan Industri Global 2026",
    "Cara Menjual Jasa AI Automasi ke Perusahaan Lokal dengan Modal Nol Rupiah",
    "Blueprint Membangun Tim Asinkron Global: Manusia Strategi, AI Eksekutor"
  ];

  const targetSlides = 9;
  const allResults: any[] = [];

  for (let i = 0; i < titles.length; i++) {
    const topic = titles[i];
    console.log(`⏳ [${i + 1}/${titles.length}] Memproses: "${topic}"...`);
    
    // Simulate slight delay to avoid rate limits if any
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const result = await PresentationArchitect.generate(topic, targetSlides);
    
    if (result.success) {
      console.log(`   ✅ Selesai! (Score: Lolos Audit Ilmu Daging)`);
      allResults.push({
        id: i + 1,
        topic: topic,
        total_slides: result.slides.length,
        blueprint: result.slides
      });
    } else {
      console.log(`   ❌ Gagal: ${result.agentFeedback}`);
    }
  }

  const outputPath = path.resolve(process.cwd(), 'batch_9_presentations.json');
  fs.writeFileSync(outputPath, JSON.stringify(allResults, null, 2));

  console.log(`\\n🎉 BATCH SELESAI! Hasil Blueprint 9 Presentasi telah disimpan ke:`);
  console.log(`📁 ${outputPath}`);
}

runBatch().catch(err => {
    console.error("Fatal Error:", err);
});
