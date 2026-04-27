import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={heroBg}
          alt="Athlete Background"
          className="w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-white"></div>
      </div>

      {/* Interactive Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-12 h-full w-full opacity-[0.02]">
          {[...Array(144)].map((_, i) => (
            <motion.div
              key={i}
              className="border-[0.5px] border-black h-full aspect-square"
              whileHover={{ backgroundColor: "rgba(0,0,0,1)", transition: { duration: 0 } }}
              initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 bg-black text-white text-xs font-black uppercase tracking-[0.3em] mb-6">
            Keysha Sports Custom Apparel Pekanbaru
          </span>
          <h1 className="text-6xl md:text-8xl mb-8 leading-[0.9] font-black italic">
            TINGKATKAN PERMAINANMU <br />
            <span className="text-black-300 not-italic">DENGAN CUSTOM JERSEY.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto uppercase font-medium tracking-tight">
            Produksi jersey kualitas premium dengan teknologi sublimasi.<br />
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/6283171426232"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-black text-white font-black uppercase tracking-widest flex items-center gap-3 cursor-hover"
              data-cursor-text="Order Now"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pesan via WhatsApp
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </motion.a>
            <div className="px-6 py-2 border-2 border-black font-black uppercase tracking-tighter">
              Mulai dari Rp 85.000
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative side text */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] rotate-90 origin-left text-gray-400">
          EST. 2024 / PEKANBARU / INDONESIA
        </p>
      </div>
    </section>
  );
};

export default Hero;
