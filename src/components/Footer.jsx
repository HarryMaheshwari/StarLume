import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-[#020202] text-white pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="w-full md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[7vw] font-bold uppercase tracking-tightest leading-[0.8] mb-8"
            >
              Let’s <br /> <span className="text-white/20">Talk.</span>
            </motion.h2>
            <a 
              href="mailto:hello@starlume.com" 
              className="text-lg md:text-2xl font-light tracking-widest uppercase border-b border-white/10 pb-2 hover:border-white transition-all duration-500"
            >
              hello@starlume.com
            </a>
          </div>

          <div className="w-full md:w-auto flex flex-wrap gap-x-8 gap-y-4 md:gap-12">
            {['Instagram', 'Vimeo', 'Behance'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="group relative overflow-hidden text-[11px] uppercase tracking-[0.3em] font-bold"
              >
                <span className="block transition-transform duration-500 group-hover:-translate-y-full">{link}</span>
                <span className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0 italic text-white/50">{link}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-black uppercase tracking-tighter">Starlume</h1>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold hidden md:block">
              Visual Production House
            </span>
          </div>

          <div className="flex items-center gap-10">
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/10 font-bold">
              ©2026
            </span>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="text-[9px] uppercase tracking-[0.4em] font-black hover:text-white/40 transition-colors"
            >
              [ Top ]
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;