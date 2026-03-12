import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const xTranslate = useTransform(smoothProgress, [0, 1], ["0%", "-66.6%"]);
  
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.8]);

  return (
    <main ref={containerRef} className="relative h-[400vh] bg-[#020202] text-[#f0f0f0] selection:bg-blue-600 overflow-clip">
      
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.06] mix-blend-screen pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50" />
      </div>

      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        <motion.div 
          style={{ x: xTranslate }} 
          className="flex h-full w-[300vw] items-center will-change-transform"
        >
          
          <section className="relative w-screen h-full flex flex-col justify-center px-6 md:px-24">
            <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="z-10">
              <div className="flex items-center gap-4 mb-8 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} animate={{ width: 60 }} transition={{ duration: 1.5, ease: "circOut" }}
                  className="h-[1px] bg-blue-500" 
                />
                <span className="text-[10px] font-mono tracking-[1em] text-blue-500 uppercase">System_Load: Manifest.v2</span>
              </div>
              
              <h1 className="text-[15vw] leading-[0.8] font-black uppercase tracking-tighter">
                Visual <br /> 
                <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
                  Alchemy
                </span>
              </h1>
            </motion.div>

            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[60vh] opacity-20 grayscale hover:grayscale-0 transition-all duration-700">
               <video autoPlay loop muted playsInline className="w-full h-full object-cover border border-white/10" src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-and-dots-in-blue-23270-large.mp4" />
            </div>
          </section>

          <section className="relative w-screen h-full flex items-center px-6 md:px-24 bg-[#050505]">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-20">
              <div className="relative">
                <div className="absolute -top-20 -left-10 text-[20vw] font-black text-white/[0.02] select-none">01</div>
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">
                  Breaking <br /> The Optics.
                </h2>
                <p className="max-w-md font-mono text-sm text-white/40 leading-relaxed uppercase tracking-widest">
                  We believe perfection is boring. We hunt for the organic errors—the lens flares, the film grain, and the chromatic shifts that make a digital image feel alive.
                </p>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="relative w-full aspect-video border border-white/5 bg-white/[0.02] flex items-center justify-center group">
                    <motion.div 
                      animate={{ rotate: [0, 90, 180, 270, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute w-40 h-40 border-t border-blue-500 rounded-full"
                    />
                    <span className="font-mono text-[10px] tracking-[1.5em] text-white/20 group-hover:text-blue-500 transition-colors">PROCESSING</span>
                </div>
              </div>
            </div>
          </section>

          <section className="relative w-screen h-full flex items-center justify-center px-6 bg-blue-600">
             <div className="text-center">
                <motion.h2 
                  whileInView={{ y: [20, 0], opacity: [0, 1] }}
                  className="text-[12vw] font-black text-black uppercase tracking-tighter leading-none"
                >
                  Let's Film.
                </motion.h2>
                <div className="mt-10 h-px w-full bg-black/20" />
                <p className="mt-6 font-mono text-black text-xs tracking-widest uppercase font-bold cursor-pointer hover:tracking-[1.5em] transition-all">
                  Request Private Access // 2024
                </p>
             </div>
          </section>

        </motion.div>
      </div>

    
    </main>
  );
};

export default About;