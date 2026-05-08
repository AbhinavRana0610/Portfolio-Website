"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          isOpen 
            ? "z-[100] py-6 bg-transparent" 
            : isScrolled 
              ? "z-50 py-4 glass shadow-2xl" 
              : "z-50 py-8 bg-transparent"
        }`}
      >
        <div className="container-custom flex justify-between items-center px-6">
          <motion.a
            href="#"
            className={`text-2xl font-black tracking-tighter relative z-10 transition-colors duration-300 ${
              isOpen ? "text-white" : "text-primary-pink"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(false)}
          >
            AR<span className="text-primary-yellow">.</span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium text-foreground/70 hover:text-primary-yellow transition-colors uppercase tracking-widest"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary-pink transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 128, 171, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-pw text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all hidden md:block shadow-lg shadow-primary-pink/20 border border-white/10"
          >
            Hire Me
          </motion.a>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden relative z-10 w-12 h-12 flex flex-col items-center justify-center gap-1.5 text-foreground focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8, backgroundColor: "#FFFFFF" } : { rotate: 0, y: 0, backgroundColor: "currentColor" }}
              className="w-7 h-0.5 block rounded-full transition-colors duration-300"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-7 h-0.5 bg-foreground block rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8, backgroundColor: "#FFFFFF" } : { rotate: 0, y: 0, backgroundColor: "currentColor" }}
              className="w-7 h-0.5 block rounded-full transition-colors duration-300"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-12 md:hidden px-6 h-screen w-screen overflow-hidden"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-pink/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-yellow/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="flex flex-col items-center gap-8 w-full max-w-md relative z-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="group relative text-4xl font-black tracking-tighter text-foreground/90 hover:text-primary-pink transition-all"
                >
                  <span className="relative z-10">{link.name}</span>
                  <motion.span 
                    className="absolute -bottom-2 left-0 h-1 bg-primary-yellow rounded-full z-0"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.a>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setIsOpen(false)}
              className="mt-8 px-12 py-5 bg-gradient-pw text-white text-base font-black uppercase tracking-[0.2em] rounded-full shadow-[0_20px_50px_rgba(255,128,171,0.3)] border border-white/20 hover:scale-105 active:scale-95 transition-all relative z-10"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
