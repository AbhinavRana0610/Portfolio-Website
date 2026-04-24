"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center noise-bg overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-maroon/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-teal/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-custom px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-[0.3em] bg-maroon/10 text-maroon rounded-full border border-maroon/20">
              Frontend Architect
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight"
          >
            Crafting digital <br />
            <span className="text-maroon">experiences</span> that <br />
            <span className="text-gold italic font-serif">matter.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl leading-relaxed"
          >
            I specialize in building high-end, performant, and visually stunning web applications 
            with a focus on user experience and architectural excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-maroon text-white font-bold rounded-xl flex items-center gap-3 shadow-2xl shadow-maroon/30 transition-all"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl flex items-center gap-3 backdrop-blur-sm transition-all"
            >
              Download CV
              <Download className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "100px" }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 right-12 w-px bg-gradient-to-b from-transparent via-gold to-transparent hidden lg:block"
      />
    </section>
  );
}
