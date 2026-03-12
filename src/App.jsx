import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

const LoadingScreen = () => {
  const columns = 5;

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex overflow-hidden pointer-events-none"
      exit={{ transition: { staggerChildren: 0.1 } }}
    >
      {[...Array(columns)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1],
            delay: i * 0.1,
          }}
          className="relative h-full w-full bg-[#0a0a0a] border-r border-white/5 last:border-none"
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center z-[1000]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
          className="flex flex-col items-center"
        >
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-xs tracking-[0.5em] uppercase font-light"
            >
              Loading Experience
            </motion.h1>
          </div>

          <div className="w-[120px] h-[1px] bg-white/10 relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute h-full bg-white"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isLoading ? 0 : 1,
          y: isLoading ? 20 : 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
          delay: 1,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </motion.div>
    </ReactLenis>
  );
}

export default App;
