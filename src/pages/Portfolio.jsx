import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Abstract Skin",
    cat: "Editorial",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000",
    size: "tall",
  },
  {
    id: 2,
    title: "Modern Void",
    cat: "Arch",
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1000",
    size: "wide",
  },
  {
    id: 3,
    title: "Urban Silence",
    cat: "Portrait",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000",
    size: "medium",
  },
  {
    id: 4,
    title: "Ghost Light",
    cat: "Editorial",
    img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000",
    size: "tall",
  },
  {
    id: 5,
    title: "Chrome Heart",
    cat: "Fashion",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
    size: "medium",
  },
  {
    id: 6,
    title: "Steel Sky",
    cat: "Arch",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
    size: "wide",
  },
  {
    id: 7,
    title: "Neon Noir",
    cat: "Fashion",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000",
    size: "tall",
  },
  {
    id: 8,
    title: "Glass House",
    cat: "Arch",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
    size: "medium",
  },
  {
    id: 9,
    title: "Velvet Dust",
    cat: "Editorial",
    img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1000",
    size: "wide",
  },
  {
    id: 10,
    title: "Cold Pulse",
    cat: "Portrait",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000",
    size: "tall",
  },
  {
    id: 11,
    title: "Deep Static",
    cat: "Fashion",
    img: "https://images.unsplash.com/photo-1445205170230-053b830c6039?q=80&w=1000",
    size: "medium",
  },
  {
    id: 12,
    title: "Mono Structure",
    cat: "Arch",
    img: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1000",
    size: "wide",
  },
];

const categories = ["All", "Editorial", "Portrait", "Arch", "Fashion"];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <div className="min-h-screen bg-[#020202] pt-32 pb-20 px-6 md:px-12 selection:bg-blue-600">
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-[1800px] mx-auto mb-20 flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
        <div>
          <h1 className="text-white text-6xl md:text-9xl font-black uppercase tracking-[-0.08em] leading-[0.75] mb-6">
            Archive<span className="text-blue-600">.</span>
          </h1>
          <p className="text-white/20 uppercase tracking-[0.5em] text-[10px] font-mono">
            Index // 12 Total Units
          </p>
        </div>

        <nav className="flex flex-wrap gap-8 border-b border-white/5 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-700 ${
                filter === cat
                  ? "text-blue-500"
                  : "text-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      <motion.div
        layout
        className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-40 text-center relative z-10">
        <p className="text-white/10 uppercase tracking-[1em] text-[9px] mb-12 font-mono">
          End of Transmission
        </p>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all duration-500"
          >
            Start New Brief
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

const ProjectItem = ({ project, index }) => {
  const gridClasses = {
    tall: "md:col-span-4 md:row-span-2 h-[600px] md:h-[800px]",
    wide: "md:col-span-8 h-[400px] md:h-[500px]",
    medium: "md:col-span-4 h-[400px] md:h-[500px]",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className={`${
        gridClasses[project.size]
      } group relative overflow-hidden bg-[#080808]`}
    >
      <Link to={`/portfolio/${project.id}`}>
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover grayscale brightness-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-blue-500 mb-3 underline underline-offset-8 decoration-1">
            {project.cat}
          </p>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default Portfolio;
