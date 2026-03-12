import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <main className="relative w-full bg-[#030303] text-[#f0f0f0] font-sans overflow-x-hidden min-h-screen">
      {/* Subtle Grain Overlay */}
      <div className="fixed inset-0 z-[99] pointer-events-none opacity-[0.03] bg-[url('https://res.cloudinary.com/dvw6as7on/image/upload/v1689721382/grain_y7p7wv.png')]" />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-12 h-[1px] bg-blue-600" />
          <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-blue-600">Secure Line // Open</span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[8vw] font-medium leading-[0.85] tracking-tighter"
          >
            Connect<span className="text-blue-600">.</span>
          </motion.h1>
        </div>
      </section>

      <section className="pb-40 px-6 md:px-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <motion.div {...fadeInUp}>
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="group relative">
              <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 group-focus-within:text-blue-600 transition-colors">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-blue-600 transition-colors font-light text-xl"
                placeholder="John Doe"
              />
            </div>

            <div className="group relative">
              <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 group-focus-within:text-blue-600 transition-colors">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-blue-600 transition-colors font-light text-xl"
                placeholder="john@starlume.com"
              />
            </div>

            <div className="group relative">
              <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 group-focus-within:text-blue-600 transition-colors">Project Brief</label>
              <textarea 
                rows="4" 
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-blue-600 transition-colors font-light text-xl resize-none"
                placeholder="Describe the vision..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 text-white px-12 py-4 text-[10px] font-mono uppercase tracking-[0.3em] hover:bg-blue-700 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <div className="flex flex-col justify-between space-y-20 lg:space-y-0 lg:pl-20">
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h4 className="text-[10px] font-mono text-blue-600 uppercase tracking-[0.4em] mb-6">General Inquiries</h4>
            <p className="text-2xl md:text-3xl font-light text-white/80 hover:text-white transition-colors cursor-pointer">
              hello@starlume.labs
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h4 className="text-[10px] font-mono text-blue-600 uppercase tracking-[0.4em] mb-6">Location</h4>
            <p className="text-xl font-light text-white/60 leading-relaxed">
              Studio 404, Neon District <br />
              Reykjavík, Iceland
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="flex gap-12">
            {['Instagram', 'Twitter', 'Vimeo'].map((link) => (
              <a key={link} href="#" className="text-[10px] font-mono uppercase tracking-widest text-white/40 hover:text-blue-600 transition-colors">
                {link}
              </a>
            ))}
          </motion.div>

          <div className="hidden lg:block pt-10">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 border border-white/5 rounded-full flex items-center justify-center"
            >
               <div className="w-1 h-1 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="p-6 md:p-12 flex justify-between items-end border-t border-white/5">
        <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
          Starlume Labs © 2024 <br /> All Rights Reserved
        </div>
      </footer>
    </main>
  );
};

export default Contact;