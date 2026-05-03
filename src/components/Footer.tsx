"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa6";
import BackgroundSphere from "./BackgroundSphere";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding bg-background border-t border-white/5 relative overflow-hidden">
      <BackgroundSphere color="yellow" size={400} className="-left-20 -top-20 opacity-40" />
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          <div>
            <a href="#" className="text-3xl font-black tracking-tighter text-primary-pink mb-6 block">
              AR<span className="text-primary-yellow">.</span>
            </a>
            <p className="text-foreground/40 max-w-sm text-sm leading-relaxed">
              Creating digital experiences that bridge the gap between design and technology. 
              Always pushing the boundaries of what&apos;s possible on the web.
            </p>
          </div>

          <div className="flex gap-6">
            {[
              { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/AbhinavRana0610" },
              { icon: <FaLinkedinIn className="w-5 h-5" />, href: "https://www.linkedin.com/in/abhinav-singh6" },
              { icon: <FaRegEnvelope className="w-5 h-5" />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=abhinavsinghrana916@gmail.com" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#FFD22B", borderColor: "rgba(255, 210, 43, 0.5)" }}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground/60 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/30">
            &copy; {currentYear} Abhinav Rana. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/30 hover:text-primary-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/30 hover:text-primary-yellow transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Decorative text */}
      <div className="absolute -bottom-10 right-0 text-[15vw] font-black text-white/5 leading-none pointer-events-none select-none -z-0">
        ABHINAV
      </div>
    </footer>
  );
}
