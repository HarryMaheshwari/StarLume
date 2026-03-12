import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000");

  const navLinks = [
    { name: 'Home', path: '/', img: 'https://images.unsplash.com/photo-1638927760988-84858072d041?q=80&w=687' },
    { name: 'Portfolio', path: '/portfolio', img: 'https://images.unsplash.com/photo-1530742194242-c04a371cc5e8?q=80&w=687' },
    { name: 'Services', path: '/services', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000' },
    { name: 'About', path: '/about', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000' },
    { name: 'Contact', path: '/contact', img: 'https://images.unsplash.com/photo-1618938225889-a87f84263cc8?q=80&w=687' },
  ];

  const handleNavigation = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] p-6 md:p-10 flex justify-between items-center mix-blend-difference">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="overflow-hidden">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-white font-black uppercase tracking-[-0.03em] text-xl md:text-2xl"
          >
            starlume
          </motion.div>
        </Link>

        <button 
          onClick={() => setIsOpen(true)}
          className="group flex flex-col gap-1 items-end focus:outline-none"
        >
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-500 ease-[0.16, 1, 0.3, 1]" />
          <div className="w-5 h-[1px] bg-white group-hover:w-12 transition-all duration-500 ease-[0.16, 1, 0.3, 1]" />
          <span className="text-[7px] text-white/40 uppercase tracking-[0.4em] mt-1 group-hover:opacity-100 opacity-0 transition-opacity">Menu</span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[110] bg-[#080808] text-white flex flex-col md:flex-row overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="hidden md:block w-[40%] h-full relative overflow-hidden border-r border-white/5">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }}
                  animate={{ scale: 1, opacity: 0.5, filter: 'blur(0px)' }}
                  exit={{ scale: 1.05, opacity: 0, filter: 'blur(20px)' }}
                  transition={{ duration: 0.8 }}
                  src={activeImage} 
                  className="w-full h-full object-cover grayscale brightness-50"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>

            <div className="flex-1 flex flex-col justify-center px-10 md:px-20 relative z-10">
              
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-10 right-10 group"
              >
                <span className="text-[10px] uppercase tracking-[0.8em] text-white/30 group-hover:text-white transition-colors">Close [✕]</span>
              </button>

              <div className="space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + (idx * 0.08) }}
                    onMouseEnter={() => setActiveImage(link.img)}
                  >
                    <NavLink
                      to={link.path}
                      onClick={handleNavigation} 
                      className={({ isActive }) => `
                        group relative flex items-center gap-8 text-[12vw] md:text-[7vw] font-black uppercase tracking-[-0.06em] leading-[0.85]
                        ${isActive ? 'text-blue-600' : 'text-white/20 hover:text-white'}
                        transition-all duration-500
                      `}
                    >
                      <span className="text-xs font-mono tracking-widest opacity-20 group-hover:opacity-100 transition-opacity">
                        0{idx + 1}
                      </span>
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-10 left-10 md:left-auto md:right-20 flex flex-col md:flex-row gap-8 items-end md:items-center">
              <p className="text-[8px] font-mono text-white/20 tracking-[0.5em] hidden md:block uppercase">System_State: Active // Node: 01</p>
              <div className="flex gap-8">
                {['Instagram', 'Vimeo', 'Behance'].map(s => (
                  <a key={s} href="#" className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 hover:text-white transition-all">{s}</a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;