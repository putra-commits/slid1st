'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Lightbulb, PlayCircle, Trophy } from 'lucide-react';
import { SlideData } from '../data/masterclass';

interface SlideViewerProps {
  slides: SlideData[];
}

export default function SlideViewer({ slides }: SlideViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const slide = slides[currentIndex];
  const isLastSlide = currentIndex === slides.length - 1;

  // Keybindings for navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = 0;
      if (nextIndex >= slides.length) nextIndex = slides.length - 1;
      return nextIndex;
    });
    setShowNotes(false);
  }, [slides.length]);

  const nextSlide = () => {
    if (!isLastSlide) paginate(1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) paginate(-1);
  };

  // Framer Motion Variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full min-h-[85vh] flex flex-col items-center justify-center p-4 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c0c16] via-[#05050A] to-[#120524] shadow-[0_0_50px_rgba(74,0,224,0.15)]">
      
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00F0FF] rounded-full blur-[180px] opacity-[0.05] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A00E0] rounded-full blur-[180px] opacity-[0.1] pointer-events-none" />

      {/* Top Bar: Progress & Counter */}
      <div className="absolute top-0 left-0 w-full p-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#4A00E0]/20 flex items-center justify-center border border-[#4A00E0]/30 shadow-[0_0_15px_rgba(74,0,224,0.4)]">
            <Trophy size={18} className="text-[#00F0FF]" />
          </div>
          <div>
            <span className="text-xs text-gray-400 block font-semibold uppercase tracking-widest">Masterclass Progress</span>
            <span className="text-sm text-white font-bold">{currentIndex + 1} / {slides.length}</span>
          </div>
        </div>
        
        {/* Toggle Notes Button */}
        <button 
          onClick={() => setShowNotes(!showNotes)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
            showNotes 
            ? 'bg-[#00F0FF]/20 border-[#00F0FF]/50 text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
            : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
          }`}
        >
          <Lightbulb size={16} className={showNotes ? "animate-pulse" : ""} />
          <span className="text-sm font-medium">{showNotes ? 'Tutup Materi Rahasia' : 'Buka Rahasia (Ilmu Daging)'}</span>
        </button>
      </div>

      {/* Progress Bar Line */}
      <div className="absolute top-20 left-6 right-6 h-1 bg-white/5 rounded-full overflow-hidden z-20">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#4A00E0] to-[#00F0FF] shadow-[0_0_10px_#00F0FF]"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Main Slide Content Area */}
      <div className="w-full max-w-5xl h-full flex items-center justify-center px-4 md:px-12 z-10 my-24">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full flex justify-center"
          >
            <div className="w-full max-w-4xl glass-panel rounded-2xl p-8 md:p-12 border border-white/5 shadow-2xl bg-black/40 backdrop-blur-xl">
              
              <h2 className="text-sm font-bold text-[#00F0FF] tracking-widest uppercase mb-4 opacity-80 flex items-center gap-2">
                <PlayCircle size={14} /> MODULE {currentIndex + 1}
              </h2>
              
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                {slide.title.replace(/^\d+\.\s*/, '')}
              </h1>
              
              {slide.subtitle && (
                <p className="text-xl md:text-2xl text-purple-300 font-light mb-10 border-l-4 border-[#00F0FF] pl-4">
                  {slide.subtitle}
                </p>
              )}

              <div className="space-y-6">
                {slide.points.map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="mt-1 min-w-[24px] w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#00F0FF]/50 group-hover:bg-[#00F0FF]/10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-gray-500 group-hover:bg-[#00F0FF] group-hover:shadow-[0_0_8px_#00F0FF] transition-all" />
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed font-medium">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Speaker Notes Reveal (Ilmu Daging) */}
              <AnimatePresence>
                {showNotes && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 rounded-xl bg-gradient-to-r from-purple-900/40 to-cyan-900/20 border border-purple-500/30 relative">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#4A00E0] to-[#00F0FF] rounded-l-xl" />
                      <h4 className="text-[#00F0FF] font-bold mb-2 flex items-center gap-2">
                         <Lightbulb size={18} /> INSIGHT RAHASIA:
                      </h4>
                      <p className="text-white text-lg leading-relaxed italic">
                        "{slide.note}"
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation Controls */}
      <div className="absolute bottom-0 left-0 w-full p-6 flex items-center justify-between z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5 transition-all text-white font-medium backdrop-blur-md border border-white/10"
        >
          <ChevronLeft size={20} /> <span className="hidden sm:inline">Module Sebelumnya</span>
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, idx) => (
             <button 
               key={idx}
               onClick={() => {
                 if(idx > currentIndex) paginate(1);
                 else if(idx < currentIndex) paginate(-1);
                 setCurrentIndex(idx);
               }}
               className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]' : 'bg-gray-600 hover:bg-gray-400'}`}
               aria-label={`Go to slide ${idx + 1}`}
             />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={isLastSlide}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all backdrop-blur-md ${
            isLastSlide 
            ? 'opacity-30 bg-white/5 border border-white/10 text-white cursor-not-allowed'
            : 'bg-gradient-to-r from-[#4A00E0] to-[#00F0FF] text-white hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] border border-transparent'
          }`}
        >
          <span className="hidden sm:inline">Lanjutkan</span> <ChevronRight size={20} />
        </button>
      </div>
      
    </div>
  );
}
