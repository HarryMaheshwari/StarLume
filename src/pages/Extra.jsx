import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Extra = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#080808", "#121212", "#050505"]
  );

  const work = [
    {
      id: "01",
      title: "The Architecture of Light",
      role: "Director of Photography",
      year: "2024",
      img: "/images/img1.jpg",
    },
    {
      id: "02",
      title: "Silent Chronos",
      role: "Visual Director",
      year: "2023",
      img: "/images/img2.jpg",
    },
    {
      id: "03",
      title: "Modern Artifacts",
      role: "Creative Lead",
      year: "2024",
      img: "/images/img3.jpg",
    },
  ];

  return (
    <motion.main className="relative min-h-screen font-sans bg-black text-white transition-colors duration-1000 ease-in-out selection:bg-white selection:text-black">
      <section className="relative min-h-[100svh] flex flex-col justify-center px-6 sm:px-12 md:px-24 py-20">
        <div className="max-w-[1400px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <div className="h-px w-8 sm:w-12 bg-white/30" />
              <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.6em] text-white/40 font-medium">
                Los Angeles — Worldwide
              </span>
            </div>

            <h1 className="text-[14vw] sm:text-[10vw] md:text-[8vw] font-extralight leading-[0.85] tracking-tight uppercase mb-16 sm:mb-24">
              Starlume <br />
              <span className="font-bold">Studios</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
              <p className="max-w-md text-white/50 text-base sm:text-xl font-light leading-relaxed">
                A multidisciplinary visual production house dedicated to the art
                of cinematic storytelling and technical precision.
              </p>

              <div className="flex flex-wrap gap-x-16 gap-y-8 md:justify-end">
                <div>
                  <p className="text-[10px] uppercase text-white/30 mb-5 tracking-widest font-bold">
                    Expertise
                  </p>
                  <ul className="text-[11px] sm:text-xs space-y-3 uppercase tracking-widest font-semibold">
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-white/20 rounded-full" />{" "}
                      Cinematography
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-white/20 rounded-full" /> Art
                      Direction
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-white/20 rounded-full" />{" "}
                      Post-Grading
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      <section className="px-6 sm:px-12 md:px-24 py-20 sm:py-40 max-w-[1600px] mx-auto space-y-40 sm:space-y-80">
        {work.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </section>

      <section className="py-32 px-6 sm:px-12 md:px-24 border-t border-white/5 bg-black">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 block mb-4 font-bold">
                Collaborations
              </span>
              <h2 className="text-5xl sm:text-7xl font-bold uppercase tracking-tighter leading-none">
                Trusted by <br />{" "}
                <span className="text-white/20 italic">Industry Leaders.</span>
              </h2>
            </div>
            <p className="max-w-xs text-white/40 text-xs sm:text-sm leading-relaxed uppercase tracking-wider font-medium">
              Delivering high-fidelity visual solutions for global brands and
              independent creators alike.
            </p>
          </div>

          {/* Client Logo Grid - Minimalist & Refined */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 mb-32">
            {[
              "Nike",
              "Apple",
              "A24",
              "Tesla",
              "Netflix",
              "Sony",
              "Vogue",
              "Porsche",
            ].map((client) => (
              <div
                key={client}
                className="h-32 sm:h-48 bg-black flex items-center justify-center group"
              >
                <span className="text-white/10 group-hover:text-white transition-colors duration-700 text-xs sm:text-sm uppercase tracking-[0.4em] font-black">
                  {client}
                </span>
              </div>
            ))}
          </div>

          {/* Featured Client Quote */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <p className="text-2xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight mb-8 italic">
                  "Starlume transformed our brand's visual identity with a level
                  of technical precision we hadn't seen before. Their eye for
                  light is unparalleled."
                </p>
                <div className="flex items-center gap-6">
                  <div className="h-px w-12 bg-white/20" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] font-bold">
                      Marcus Thorne
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                      Creative Director, A24
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Subtle Call to Action integrated within */}
            <div className="md:col-span-4 flex md:justify-end">
              <button className="group relative px-12 py-12 rounded-full border border-white/10 hover:border-white transition-all duration-700 aspect-square flex items-center justify-center overflow-hidden">
                <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-black group-hover:text-black transition-colors duration-500 text-center">
                  Start Your <br /> Project
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.76, 0, 0.24, 1]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

const ProjectRow = ({ project, index }) => {
  const rowRef = useRef(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const smoothY = useSpring(yParallax, { stiffness: 100, damping: 30 });

  return (
    <div
      ref={rowRef}
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-12 sm:gap-20 md:gap-32`}
    >
      <div className="w-full md:w-[60%] relative overflow-hidden aspect-[4/5] sm:aspect-[16/10] bg-zinc-900 group">
        <motion.img
          style={{ y: smoothY, scale: 1.15 }}
          src={project.img}
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-1000"
          alt={project.title}
        />
        <div className="absolute bottom-6 left-6 md:hidden">
          <span className="text-[9px] uppercase tracking-[0.3em] font-black bg-white text-black px-2 py-1">
            {project.id}
          </span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full md:w-[40%] flex flex-col items-start"
      >
        <div className="flex items-baseline gap-4 mb-6">
          <span className="font-serif italic text-xl sm:text-3xl text-white/20">
            {project.id}
          </span>
          <div className="h-px w-12 bg-white/10" />
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
            {project.year}
          </span>
        </div>

        <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter mb-6 leading-tight">
          {project.title}
        </h3>

        <p className="text-white/40 uppercase text-[9px] sm:text-[11px] tracking-[0.4em] font-bold mb-10">
          Role // {project.role}
        </p>

        <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-white/20 pb-2 hover:border-white transition-colors duration-300">
          View Case Study
        </button>
      </motion.div>
    </div>
  );
};

export default Extra;
