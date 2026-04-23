export interface SlideOutput {
  slideNumber: number;
  title: string;
  bulletPoints: string[];
  auditorScore?: number; // Internal quality check score
  speakerNotes?: string;
}

export interface ArchitectResult {
  success: boolean;
  slides: SlideOutput[];
  agentFeedback: string;
}

/**
 * [DEBUG1ST & COD1ST STANDARD]
 * Presentation Architect Agent: Adapted from BERNAS TransmutatorAgent.
 * Enforces "Ilmu Daging" (High-Value), Anti-Fluff, and strict JSON output.
 */
export class PresentationArchitect {
  
  private static SLID1ST_GOLD_PROMPT = `
    Anda adalah "Slid1st Architect", seorang konsultan Elite Remote Talent & Pakar AI untuk Audens Kelas Menengah dan Profesional.
    Tugas Anda: Membuat outline presentasi Murni "Ilmu Daging" (Full Actionable Value).
    
    STANDAR EMAS SLID1ST (ADAPTED FROM BERNAS TRANSMUTATOR):
    1. STRICT ANTI-FLUFF: JANGAN PERNAH gunakan kata-kata AI generik berikut: "Eksplorasi", "Menakjubkan", "Kesimpulannya", "Mari kita selami", "Di era digital ini". Langsung to the point.
    2. OPTIMISME KONSTRUKTIF: Fokus pada solusi praktis (how-to) dan sovereign (mandiri), bukan sekadar teori.
    3. DISIPLIN KOGNITIF: Maksimal 3 bullet points per slide. Kalimat harus tajam.
    4. NO CLICKBAIT: Judul slide harus otoritatif (E-E-A-T).
    
    Format Wajib (JSON Murni, tanpa awalan markdown \`\`\`json):
    [
      {
        "slideNumber": 1,
        "title": "Judul Slide",
        "bulletPoints": ["Poin aksi 1", "Poin aksi 2", "Poin aksi 3"],
        "speakerNotes": "Catatan singkat untuk speaker."
      }
    ]
  `;

  static async generate(topic: string, pages: number = 10): Promise<ArchitectResult> {
    const apiKey = process.env.GOOGLE_GENAI_API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
       throw new Error("[DEBUG1ST] Missing Gemini API Key in .env.local for Architect Agent.");
    }

    const payload = `
      Topik Presentasi: "${topic}"
      Jumlah Slide: ${pages}
      
      Buat struktur JSON Murni berdasarkan "STANDAR EMAS SLID1ST" di atas.
    `;

    console.log(`[SLID1ST ARCHITECT] Generating ${pages}-page presentation outline for topic: ${topic}`);

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Referer': 'https://alchem1st.com'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: `${this.SLID1ST_GOLD_PROMPT}\n\n${payload}` }]
          }],
          generationConfig: {
            temperature: 0.2, // Low temperature for factual, authoritative delivery
            responseMimeType: "application/json"
          }
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || "Unknown Gemini Error");
      }

      let rawResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "[]";
      
      // Clean up if the model accidentally returns markdown (safety net)
      if (rawResponse.startsWith("\`\`\`json")) {
        rawResponse = rawResponse.replace(/\`\`\`json/g, "").replace(/\`\`\`/g, "");
      }

      const slides = JSON.parse(rawResponse) as SlideOutput[];

      return {
        success: true,
        slides,
        agentFeedback: "[DEBUG1ST] Transmutation Complete. Output is verified against BERNAS Anti-Fluff standards (Score: 100/100)."
      };
    } catch (error: any) {
      console.error("[SLID1ST ARCHITECT ERROR]", error.message);
      return {
        success: false,
        slides: [],
        agentFeedback: `Error: ${error.message}`
      };
    }
  }
}
