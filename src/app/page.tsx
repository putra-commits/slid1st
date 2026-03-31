'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Globe, Notebook, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
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

      {/* Offer / CTA Section */}
      <section id="checkout" className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24">
        <div className="p-10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF]/10 blur-[100px]" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Invest in Your Remote Future</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            30+ pages of pure insights. No fluff. Just the exact steps to transition into an Agentic AI powered Remote Professional.
          </p>
          <div className="flex flex-col items-center gap-4">
            <span className="text-4xl font-extrabold text-[#00F0FF]">Rp 8.500</span>
            <span className="text-sm text-gray-500 line-through">Normal Price: Rp 250.000</span>
            <button className="mt-4 px-12 py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              Get Access <Share2 size={20} />
            </button>
            <p className="text-xs text-gray-500 mt-4 max-w-sm">
              * Secure payment via Midtrans. You will receive an email with direct access to the Masterclass blueprint and Alchem1st ecosystem.
            </p>
          </div>
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
