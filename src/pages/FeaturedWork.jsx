import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// 1. YOUR DATA ENGINE
const projects = [
  { id: 1, title: "Abstract Skin", cat: "Editorial", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000", size: "tall" },
  { id: 2, title: "Modern Void", cat: "Arch", img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1000", size: "wide" },
  { id: 3, title: "Urban Silence", cat: "Portrait", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000", size: "medium" },
  { id: 4, title: "Ghost Light", cat: "Editorial", img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000", size: "tall" },
  { id: 5, title: "Chrome Heart", cat: "Fashion", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000", size: "medium" },
  { id: 6, title: "Steel Sky", cat: "Arch", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000", size: "wide" },
];

const categories = ["All", "Editorial", "Portrait", "Arch", "Fashion"];

const FeaturedWork = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.cat === filter);

  return (
    <section className="bg-[#020202] py-24 px-6 md:px-12 relative overflow-hidden">
      {/* SECTION HEADER */}
      <div className="max-w-[1800px] mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="relative">
          <span className="text-blue-600 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">Archive.01</span>
          <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Selected <br /> <span className="text-white/20">Frames</span>
          </h2>
        </div>

        <nav className="flex gap-6 border-b border-white/5 pb-4 font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] uppercase tracking-widest transition-all duration-500 ${
                filter === cat ? "text-blue-500" : "text-white/20 hover:text-white"
              }`}
            >
              [{cat}]
            </button>
          ))}
        </nav>
      </div>

      <motion.div layout className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const gridClasses = {
    tall: "md:col-span-4 md:row-span-2 h-[500px] md:h-[800px]",
    wide: "md:col-span-8 h-[350px] md:h-[450px]",
    medium: "md:col-span-4 h-[350px] md:h-[450px]"
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: index * 0.05 }}
      className={`${gridClasses[project.size]} group relative overflow-hidden bg-[#080808] border border-white/5`}
    >
      <Link to={`/portfolio/${project.id}`}>
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[9px] font-mono uppercase tracking-[0.5em] text-blue-500 mb-2">
                Type // {project.cat}
              </p>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
                {project.title}
              </h3>
            </div>
            <div className="font-mono text-[9px] text-white/40 mb-1">
              VIEW_FILE
            </div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </Link>
    </motion.div>
  );
};

export default FeaturedWork;