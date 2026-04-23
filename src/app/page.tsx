'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Globe, Notebook, Share2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [referralId, setReferralId] = useState<string | null>(null);

  useEffect(() => {
    console.log("[DEBUG1ST] Home: Component mounted. Activating Sovereign UI...");
    setMounted(true);
    
    // Auto-capture Affiliate Referral from URL (?ref=ID)
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref) {
      console.log(`[SLID1ST AFFILIATE] Referral Code Detected: ${ref}`);
      setReferralId(ref);
    }
  }, []);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate transaction processing then redirect to BERNAS.id for membership
    setTimeout(() => {
      setLoading(false);
      let redirectUrl = `https://bernas.id/klaim-masterclass?email=${encodeURIComponent(formData.email)}`;
      // Append Referral ID to credit the affiliate member
      if (referralId) {
        redirectUrl += `&ref=${encodeURIComponent(referralId)}`;
      }
      window.location.href = redirectUrl;
    }, 2500);
  };

  if (!mounted) {
    return <div className="min-h-screen bg-[#0A0A10]" />;
  }

  return (
    <main className="min-h-screen bg-[#0A0A10] text-[#ededed] overflow-hidden flex flex-col items-center">
      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#4A00E0] rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#00F0FF] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#00F0FF]/20 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
          The New Era of Remote Talent
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          Master IT Skills & <br /> <span className="gradient-text">Agentic AI Workflows</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12"
        >
          Stop being replaced by AI. Become the orchestrator that commands it. A concise, powerful guide to building a world-class remote career.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#checkout"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#4A00E0] to-[#00F0FF] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Get "Ilmu Daging" Now <ArrowRight size={18} />
          </Link>
          <Link
            href="#curriculum"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-panel text-white font-medium hover:bg-white/5 transition-colors"
          >
            View Curriculum
          </Link>
        </motion.div>
      </section>

      {/* Values Section */}
      <section id="curriculum" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass-panel flex flex-col gap-4 border border-white/5"
          >
            <div className="w-12 h-12 rounded-lg bg-[#4A00E0]/20 flex items-center justify-center text-[#4A00E0]">
              <Brain size={24} />
            </div>
            <h3 className="text-xl font-bold mt-2">Agentic Mindset</h3>
            <p className="text-gray-400">
              Shift from manually prompting chatbots to orchestrating autonomous agents that do the heavy lifting for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl glass-panel flex flex-col gap-4 border border-white/5"
          >
            <div className="w-12 h-12 rounded-lg bg-[#00F0FF]/20 flex items-center justify-center text-[#00F0FF]">
              <Notebook size={24} />
            </div>
            <h3 className="text-xl font-bold mt-2">IT Certification Pipeline</h3>
            <p className="text-gray-400">
              Step-by-step guidance on leveraging AI to accelerate passing Google, Meta, and AWS certifications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-2xl glass-panel flex flex-col gap-4 border border-white/5"
          >
            <div className="w-12 h-12 rounded-lg bg-[#4A00E0]/20 flex items-center justify-center text-purple-400">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold mt-2">Global Remote Talent</h3>
            <p className="text-gray-400">
              How to position yourself on global platforms like Upwork and LinkedIn, pricing your value in the Agentic era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offer / Lead Magnet Section */}
      <section id="checkout" className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24">
        <div className="p-10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF]/10 blur-[100px]" />
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Mulai Karir Remote Anda</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Blueprint Masterclass Agentic AI 30+ halaman eksklusif. Dapatkan akses *membership* premium yang di *host* langsung di infrastruktur BERNAS.id.
            </p>
          </div>

          {!isCheckout ? (
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="text-4xl font-extrabold text-[#00F0FF]">Rp 8.500</span>
              <span className="text-sm text-gray-500 line-through">Normal: Rp 250.000</span>
              <button 
                onClick={() => setIsCheckout(true)}
                className="mt-4 px-12 py-4 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#4A00E0] text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2"
              >
                Klaim Masterclass Sekarang <ArrowRight size={20} />
              </button>
            </div>
          ) : (
            <form onSubmit={handleCheckout} className="max-w-md mx-auto flex flex-col gap-4">
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl mb-4 text-sm text-gray-300 text-center">
                Investasi: <strong className="text-white">Rp 8.500</strong>. Anda akan diarahkan ke <span className="text-blue-400 font-bold">BERNAS.id</span> untuk mengakses Membership Masterclass setelah pembayaran.
              </div>
              <input 
                type="text" required placeholder="Nama Lengkap" 
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#00F0FF] focus:outline-none transition-colors"
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="email" required placeholder="Email Utama" 
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#00F0FF] focus:outline-none transition-colors"
                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
              />
              <input 
                type="tel" required placeholder="Nomor WhatsApp" 
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#00F0FF] focus:outline-none transition-colors"
                value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
              />
              <button 
                type="submit" disabled={loading}
                className="w-full mt-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#4A00E0] text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all disabled:opacity-50 flex justify-center items-center"
              >
                {loading ? <span className="animate-pulse">Memproses Data...</span> : "Lanjut ke Pembayaran"}
              </button>
              <button 
                type="button" onClick={() => setIsCheckout(false)}
                className="w-full text-sm text-gray-500 hover:text-white mt-2"
              >
                Batalkan
              </button>
            </form>
          )}

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 py-12 mt-20">
        <div className="w-full max-w-7xl mx-auto px-6 text-center text-gray-500 flex flex-col items-center">
          <p className="mb-2">© 2026 Slid1st by Alchem1st. All rights reserved.</p>
          <p className="text-sm">Empowering the new Indonesian Middle Class via Agentic Workflows.</p>
        </div>
      </footer>
    </main>
  );
}
