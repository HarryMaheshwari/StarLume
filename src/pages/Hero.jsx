import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  const videoScaleTransform = useTransform(scrollYProgress, [0, 0.2], [1.1, 1.3]);
  const videoBlur = useTransform(scrollYProgress, [0, 0.2], [0, 15]);
  const textOpacityScroll = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const shutterTopScroll = useTransform(scrollYProgress, [0, 0.2], ["0%", "15%"]);
  const shutterBottomScroll = useTransform(scrollYProgress, [0, 0.2], ["0%", "15%"]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] } 
    }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="relative h-[100svh] w-full bg-[#020202] overflow-hidden flex items-center justify-center font-sans"
    >
      <motion.div
        initial={{ height: "50%" }}
        animate={{ height: "0%" }} // Opens on entry
        style={{ height: shutterTopScroll }} // Controlled by scroll after entry
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
        className="absolute top-0 w-full bg-[#020202] z-50 border-b border-white/5"
      />
      <motion.div
        initial={{ height: "50%" }}
        animate={{ height: "0%" }} 
        style={{ height: shutterBottomScroll }} 
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
        className="absolute bottom-0 w-full bg-[#020202] z-50 border-t border-white/5"
      />

      <motion.div
        initial={{ scale: 1.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ scale: videoScaleTransform, filter: `blur(${videoBlur}px)` }}
        className="absolute inset-0 z-0 h-full w-full"
      >
        <video
          src="https://www.pexels.com/download/video/5768300/"
          className="w-full h-full object-cover brightness-[0.4] contrast-[1.2] saturate-[0.6]"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="absolute inset-0 z-30 pointer-events-none p-6 md:p-12 flex flex-col justify-between"
      >
        <div className="flex justify-between items-start" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-8 md:h-8 opacity-20">
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white" />
        </div>
        <div className="flex justify-between items-end font-mono text-[7px] md:text-[9px] tracking-[0.3em] text-white/40 uppercase">
          <div>ISO 800 <br /> 24FPS</div>
          <div className="text-right">4K RAW <br /> LOG_C</div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: textOpacityScroll }}
        className="relative z-40 text-center w-full px-4"
      >
        {/* Subtitle */}
        <motion.span 
          variants={itemVariants}
          className="block text-[8px] md:text-[10px] uppercase text-white/30 mb-6 font-bold tracking-[1.5em] ml-[1.5em]"
        >
          Cinematographer
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, letterSpacing: "1em", filter: "blur(10px)" }}
          animate={{ opacity: 1, letterSpacing: "-0.06em", filter: "blur(0px)" }}
          transition={{ duration: 2, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
          className="text-[18vw] md:text-[10vw] font-black uppercase leading-[0.75] text-white mb-12 select-none"
        >
          Starlume <br /> Studios
        </motion.h1>

        <motion.div variants={itemVariants} className="flex justify-center">
          <Link to="/portfolio" className="group flex flex-col items-center gap-4">
            <span className="text-[9px] md:text-[11px] uppercase tracking-[0.6em] font-medium text-white/60 group-hover:text-white transition-colors duration-500">
              Play Sequence
            </span>
            <div className="w-[40px] md:w-[60px] h-[1px] bg-white/20 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute inset-0 bg-white"
              />
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;