import React from 'react';
import { motion } from 'framer-motion';

const MaterialCard = ({ title, type, description, delay }) => {
  return (
    <motion.div
      className="relative overflow-hidden group cursor-hover"
      data-cursor-text="Lihat Detail"
      initial={{ opacity: 0, x: type === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 0.98 }}
    >
      <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
        {/* Simulating texture with pattern */}
        <div className={`absolute inset-0 opacity-20 ${type === 'left' ? 'bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:10px_10px]' : 'bg-[repeating-linear-gradient(45deg,#000,#000_1px,transparent_1px,transparent_5px)]'}`}></div>
        
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
        
        <div className="absolute bottom-0 left-0 p-10 w-full bg-gradient-to-t from-black to-transparent text-white">
          <h3 className="text-4xl mb-2">{title}</h3>
          <p className="text-sm uppercase tracking-widest opacity-70">{description}</p>
        </div>
      </div>

      {/* Tilt inner overlay */}
      <motion.div 
        className="absolute inset-4 border border-white/30 pointer-events-none"
        whileHover={{ inset: "24px" }}
      />
    </motion.div>
  );
};

const MaterialShowcase = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20" data-aos="fade-down">
          <h2 className="text-5xl md:text-6xl mb-4">MATERIAL PREMUM.</h2>
          <p className="text-gray-500 uppercase font-black tracking-widest text-xs">Pilih kenyamanan terbaik untuk performamu</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <MaterialCard 
            title="MILANO" 
            type="left" 
            description="Tekstur Halus & Ringan" 
            delay={0.2} 
          />
          <MaterialCard 
            title="EMBOSS" 
            type="right" 
            description="Tekstur Premium & Eksklusif" 
            delay={0.4} 
          />
        </div>
      </div>
    </section>
  );
};

export default MaterialShowcase;
