"use client";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import BackgroundSphere from "./BackgroundSphere";

export default function Contact() {
  return (
    <section id="contact" className="section-padding noise-bg relative overflow-hidden">
      <BackgroundSphere color="pink" size={800} className="-right-40 -bottom-40 opacity-80" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Let&apos;s start a <br />
              <span className="text-primary-pink">conversation.</span>
            </h2>
            <p className="text-xl text-foreground/60 mb-12 max-w-md leading-relaxed">
              Have a project in mind? Or just want to say hi? I&apos;m always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-pink/50 transition-colors">
                  <Mail className="text-primary-pink w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">Email</p>
                  <p className="text-lg font-bold">abhinavsinghrana916@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-yellow/50 transition-colors">
                  <MapPin className="text-primary-yellow w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">Location</p>
                  <p className="text-lg font-bold">New Delhi, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-10 md:p-12 rounded-[2.5rem] shadow-2xl"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-foreground/50 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary-pink/50 transition-colors text-white placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-foreground/50 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary-pink/50 transition-colors text-white placeholder:text-white/10"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-foreground/50 ml-1">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary-pink/50 transition-colors text-white resize-none placeholder:text-white/10"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255, 128, 171, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient-pw text-white font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-primary-pink/20 transition-all border border-white/10"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
