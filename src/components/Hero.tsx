"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center noise-bg overflow-hidden pt-20">
      {/* Background elements */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/img/pwBg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/40 to-black pointer-events-none" />

      <div className="container-custom px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-[0.3em] bg-primary-pink/10 text-primary-pink rounded-full border border-primary-pink/20">
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
            <span className="text-primary-pink">experiences</span> that <br />
            <span className="text-primary-yellow italic font-serif">matter.</span>
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
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 128, 171, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-pw text-white font-bold rounded-xl flex items-center gap-3 shadow-2xl transition-all"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05, borderColor: "rgba(255, 210, 43, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-background border border-primary-yellow/30 hover:bg-white/5 text-white font-bold rounded-xl flex items-center gap-3 backdrop-blur-sm transition-all"
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
        className="absolute bottom-10 right-12 w-px bg-gradient-to-b from-primary-pink via-primary-yellow to-transparent hidden lg:block"
      />
    </section>
  );
}
