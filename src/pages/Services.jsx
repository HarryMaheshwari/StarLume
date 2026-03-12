import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "01",
    title: "Editorial",
    desc: "High-end visual storytelling for magazines, fashion houses, and digital lookbooks. We craft narratives that transcend the frame.",
    img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Portraiture",
    desc: "A study in human character. We focus on raw emotion and cinematic lighting to capture the unspoken essence of the individual.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Branding",
    desc: "Visual identity through the lens. Creating consistent, powerful imagery that defines and elevates luxury brands.",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Architecture",
    desc: "Capturing the dialogue between light and structure. A minimalist approach to documenting space and form.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
  }
];

const Services = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    services.forEach((service) => {
      const img = new Image();
      img.src = service.img;
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col font-sans">
      
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="absolute inset-0"
          >
            <img
              src={services[activeIdx].img}
              alt={services[activeIdx].title}
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-20 pt-32 pb-12">
        
        <div className="flex-[1.5] flex flex-col justify-center space-y-2">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.8em] text-white/40 mb-4 block"
          >
            Capabilities
          </motion.span>
          
          <nav className="flex flex-col items-start">
            {services.map((service, index) => (
              <button
                key={service.id}
                onMouseEnter={() => setActiveIdx(index)}
                onClick={() => setActiveIdx(index)}
                className="group relative flex items-center w-full py-3 md:py-5 text-left outline-none"
              >
                <span className={`text-[10px] md:text-xs font-mono transition-all duration-500 mr-4 md:mr-8 
                  ${activeIdx === index ? "text-white" : "text-white/20"}`}>
                  {service.id}
                </span>

                <h2 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tighter transition-all duration-700 
                  ${activeIdx === index 
                    ? "text-white italic translate-x-2 md:translate-x-6" 
                    : "text-white/10 group-hover:text-white/30"
                  }`}>
                  {service.title}
                </h2>

                {activeIdx === index && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-white/40 to-transparent w-full hidden md:block" 
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 flex flex-col justify-end lg:justify-center lg:pl-20 mt-12 lg:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="backdrop-blur-sm lg:backdrop-blur-none bg-white/5 lg:bg-transparent p-8 lg:p-0 rounded-2xl border border-white/5 lg:border-none"
            >
              <h3 className="text-white text-lg md:text-2xl font-serif mb-4 italic">
                {services[activeIdx].title} Photography
              </h3>
              <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-sm">
                {services[activeIdx].desc}
              </p>
              
              <Link to="/contact" className="inline-flex items-center gap-4 group">
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-white">
                  <motion.div 
                    className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" 
                  />
                  <span className="relative z-10 text-white group-hover:text-black transition-colors duration-500 text-xl">
                    →
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-white/60 group-hover:text-white transition-colors">
                  Inquire
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <footer className="relative z-10 px-6 md:px-20 pb-8 flex justify-between items-center text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/30">
        <div className="flex items-center gap-4">
          <span className="w-8 h-[1px] bg-white/20" />
          Available Worldwide
        </div>
        <div className="hidden sm:flex gap-8">
          <span className="hover:text-white transition-colors cursor-default">Precision</span>
          <span className="hover:text-white transition-colors cursor-default">Elegance</span>
          <span className="hover:text-white transition-colors cursor-default">Legacy</span>
        </div>
      </footer>
    </div>
  );
};

export default Services;