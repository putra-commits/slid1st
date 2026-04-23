/**
 * 🧪 OUROBOROS SELF-TEST (Ouroboros Loop Training for Slid1st)
 * Mengirim pertanyaan spesifik tentang Remote Talent, IT Skills (Google Cert), 
 * dan pembentukan Slide Outline ke chatbot internal. AI mengevaluasi respon 
 * untuk terus memperbaiki kemampuan konsultasinya.
 */
import * as dotenv from 'dotenv';
import path from 'path';
import * as fs from 'fs';

// Coba baca .env.local dari root project atau environment terkait
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: 'd:/FullStack/alchemist/.env.local' }); // Alchem1st (repo utama)
dotenv.config({ path: 'd:/FullStack/OmniCommander/.env.local' }); // Fallback folder arsip

const UNIPILE_URL = process.env.UNIPILE_BASE_URL || "https://api36.unipile.com:16667";
const UNIPILE_KEY = process.env.UNIPILE_MASTER_KEY || process.env.UNIPILE_API_KEY || '';

async function unipileRequest(endpoint: string, options: RequestInit = {}) {
    const url = `${UNIPILE_URL}${endpoint}`;
    const headers = {
        'X-API-KEY': UNIPILE_KEY,
        'Content-Type': 'application/json',
        'accept': 'application/json',
        ...options.headers,
    };
    const response = await fetch(url, { ...options, headers });
    if (!response.ok) {
        const err = await response.text();
        throw new Error(`Unipile Error ${response.status}: ${err}`);
    }
    return response.json();
}

// ======== SIMULASI PERTANYAAN OUROBOROS (SLID1ST FOCUS) ========
const TRAINING_SCENARIOS = [
    {
        tenant: 'slid1st',
        persona: 'Slid1st Career Coach',
        question: 'Bagaimana cara mulai berkarir secara remote sebagai Data Analyst pemula?',
        expectedTopics: ['Google Certification', 'Portofolio', 'Upwork', 'Remote Talent']
    },
    {
        tenant: 'slid1st',  
        persona: 'Slid1st Agentic Slide Master',
        question: 'Tolong buatkan outline slide 10 halaman tentang penggunaan Agentic AI untuk Guru Sekolah.',
        expectedTopics: ['Otomatisasi silabus', 'Feedback otomatis', 'Mindset']
    },
    {
        tenant: 'slid1st',
        persona: 'Remote Talent Mentor', 
        question: 'Apakah gaji global bisa didapat tanpa fasih bahasa Inggris lisan? Apa alternatifnya?',
        expectedTopics: ['Asinkron', 'Tulisan', 'DeepL', 'Keahlian teknis']
    },
    {
        tenant: 'slid1st',
        persona: 'Slid1st Growth Expert',
        question: 'Saya sudah punya sertifikasi AWS, bagaimana saya memasarkan jasa saya di LinkedIn?',
        expectedTopics: ['Optimasi Profil', 'Outreach Agent', 'Personal Branding']
    }
];

async function runOuroborosTraining() {
    console.log("🐍 ═══════════════════════════════════════════════");
    console.log("🐍  OUROBOROS SELF-TRAINING LOOP (SLID1ST) v1.0");
    console.log("🐍  Menguji kesiapan Agen AI dalam Remote Talent & Slides...");
    console.log("🐍 ═══════════════════════════════════════════════\n");

    if (!UNIPILE_KEY) {
        console.error("❌ API key Unipile tidak ditemukan di environment.");
        return;
    }

    // Step 1: Cari akun WhatsApp internal
    console.log("📡 [Step 1] Mencari akun WhatsApp internal...");
    const { items: accounts } = await unipileRequest('/api/v1/accounts');
    const activeWA = accounts.filter((a: any) => 
        a.type === 'WHATSAPP' && a.sources?.some((s: any) => s.status === 'OK')
    );
    
    if (activeWA.length === 0) {
        console.error("❌ Tidak ada akun WhatsApp aktif untuk simulasi.");
        return;
    }

    const internalAccount = activeWA[0];
    console.log(`✅ Menggunakan akun: ${internalAccount.name} (${internalAccount.id})\n`);

    // Step 2: Cari chat internal (self-chat)
    console.log("📡 [Step 2] Mencari chat internal untuk sandbox...");
    const chats = await unipileRequest('/api/v1/chats?limit=5');
    
    if (!chats.items || chats.items.length === 0) {
        console.error("❌ Tidak ada chat yang tersedia untuk pengujian.");
        return;
    }

    const sandboxChat = chats.items[0];
    console.log(`✅ Sandbox chat: ${sandboxChat.name || sandboxChat.id}\n`);

    // Step 3: Kirim skenario pelatihan
    console.log("🤖 [Step 3] Memulai skenario Ouroboros (Slid1st)...\n");
    
    const TOTAL_MESSAGES = 4; // Untuk testing batch awal Slid1st, batasi di 4
    
    for (let i = 0; i < TOTAL_MESSAGES; i++) {
        const scenario = TRAINING_SCENARIOS[i];
        
        const variasi = `[Slid1st Ouroboros #${i + 1}]`;
        const variedQuestion = `${scenario.question} ${variasi}`;

        console.log(`━━━ Skenario ${i + 1}/${TOTAL_MESSAGES}: ${scenario.persona} ━━━`);
        console.log(`📝 Pertanyaan: "${variedQuestion}"`);

        try {
            await unipileRequest(`/api/v1/chats/${sandboxChat.id}/messages`, {
                method: 'POST',
                body: JSON.stringify({ 
                    text: `[SLID1ST-TEST] ${variedQuestion}` 
                })
            });
            console.log(`✅ Pertanyaan terkirim!`);
        } catch (err: any) {
            console.error(`❌ Gagal kirim pesan ke-${i+1}: ${err.message}`);
        }

        if (i < TOTAL_MESSAGES - 1) {
            console.log(`⏳ Tunggu 5 detik...\n`);
            await new Promise(r => setTimeout(r, 5000));
        }
    }

    // Step 4: Harvest respon
    console.log("\n🔄 [Step 4] Menunggu 20 detik agar AI Cloud Run merespons...\n");
    await new Promise(r => setTimeout(r, 20000));

    console.log("📡 [Step 5] Memanen jawaban AI dari chat sandbox...\n");
    try {
        const messages = await unipileRequest(`/api/v1/chats/${sandboxChat.id}/messages?limit=20`);
        
        if (messages.items && messages.items.length > 0) {
            console.log("═══ HASIL HARVESTING OUROBOROS (SLID1ST) ═══\n");
            
            const logPath = path.resolve(process.cwd(), 'scripts', 'ouroboros_harvest.json');
            fs.writeFileSync(logPath, JSON.stringify(messages.items, null, 2));
            console.log(`💾 Log percakapan disimpan ke: ${logPath}\n`);

            for (const msg of messages.items.slice(0, 8)) {
                const direction = msg.is_from_me ? '🤖 BOT/USER' : '👤 SENDER';
                const text = (msg.text || msg.body || '(no text)').substring(0, 150);
                console.log(`${direction}: ${text}...`);
            }
        }
    } catch (err: any) {
        console.error(`❌ Gagal memanen: ${err.message}`);
    }

    console.log("\n🐍 ═══════════════════════════════════════════════");
    console.log("🐍  OUROBOROS SLID1ST LOOP SELESAI!");
    console.log("🐍 ═══════════════════════════════════════════════");
}

runOuroborosTraining().catch(err => {
    console.error("🔴 FATAL:", err.message);
});
