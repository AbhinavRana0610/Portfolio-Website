"use client";
import { motion } from "framer-motion";
import Image from "next/image";


export default function About() {
  return (
    <section id="about" className="section-padding noise-bg overflow-hidden relative">

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-white/10">
              <motion.div
                className="w-full h-full"
                initial={{ filter: "grayscale(100%)" }}
                whileHover={{ filter: "grayscale(0%)" }}
                whileTap={{ filter: "grayscale(0%)" }}
                transition={{ duration: 0.7 }}
              >
                <Image 
                  src="/profile.png" 
                  alt="About me" 
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            {/* Decorative background blocks */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-2 h-32 bg-primary-yellow/50 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              A blend of <span className="text-primary-pink">Design</span> & <span className="text-primary-yellow">Code.</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              As a frontend developer working in a startup environment, I focus on building responsive, user-friendly, and production-ready web interfaces. I work closely with real clients, turning their requirements into clean and functional digital experiences.
            </p>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              My approach is simple — every UI should not only look good but also perform smoothly and solve real problems. I enjoy working with modern technologies like React, Tailwind, and JavaScript, and I’m constantly improving my skills by building and shipping real-world projects.
            </p>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
              <div>
                <h4 className="text-3xl font-black text-primary-pink mb-1">1+</h4>
                <p className="text-xs uppercase tracking-widest text-foreground/50 font-bold">Year Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-primary-pink mb-1">20+</h4>
                <p className="text-xs uppercase tracking-widest text-foreground/50 font-bold">Projects Delivered</p>
              </div>
            </div>

            <motion.div 
              className="mt-12"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <a href="#contact" className="text-primary-yellow font-bold uppercase tracking-widest text-sm flex items-center gap-4 group">
                Let&apos;s build something together
                <span className="w-12 h-px bg-primary-yellow group-hover:w-20 transition-all duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
