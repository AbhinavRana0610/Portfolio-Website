"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import BackgroundSphere from "./BackgroundSphere";

const projects = [
  {
    title: "CyberSentry",
    description: "A digital intelligence platform developed for the Ministry of Cyber Affairs, providing real-time security briefings, threat monitoring, and policy intelligence.",
    image: "/cybersentry.png",
    tech: ["Python", "TensorFlow", "React"],
    link: "https://cybersentry-687004561094.us-central1.run.app/",
    github: "#",
    position: "object-left"
  },
  {
    title: "NCERT RAG CHATBOX",
    description: "An AI-powered digital tutor specifically optimized for NCERT Physical Education. It uses advanced RAG technology to retrieve and summarize accurate information directly from textbooks.",
    image: "/ncert-rag.png",
    tech: ["Next.js", "Gemini AI", "FAISS", "LangChain"],
    link: "#",
    github: "#",
    position: "object-top"
  },
  {
    title: "StrikeCric - Premium Cricket Scoreboard",
    description: "A real-time cricket scoring and analytics platform featuring live match updates, player statistics, and interactive scorecards.",
    image: "/strikecric.png",
    tech: ["React", "Firebase", "Framer Motion"],
    link: "https://strikecric.web.app/",
    github: "#",
    position: "object-top"
  },
  {
    title: "Spendly - Smart Finance Tracker",
    description: "A high-performance financial analytics dashboard with real-time data visualization and predictive modeling.",
    image: "/spendly.png",
    tech: ["Next.js", "D3.js", "Tailwind"],
    link: "https://spendly-app-e08.web.app/",
    github: "#",
    position: "object-left-top"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding noise-bg relative overflow-hidden">
      <BackgroundSphere color="yellow" size={800} className="-right-60 top-1/4 opacity-70" />
      <BackgroundSphere color="pink" size={600} className="-left-40 bottom-0 opacity-70" delay={3} />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Featured <span className="text-primary-pink">Projects.</span></h2>
          <p className="text-foreground/50 max-w-xl text-lg uppercase tracking-widest font-bold">Selection of recent works</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center group`}
            >
              <div className="w-full lg:w-3/5 overflow-hidden rounded-3xl shadow-2xl relative bg-black/5 border border-white/10 group-hover:border-primary-pink/30 transition-all duration-500">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="aspect-video relative"
                >
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className={`object-cover ${project.position || "object-center"} transition-all duration-700 group-hover:brightness-110`}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-primary-pink/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="w-full lg:w-2/5">
                <div className="flex gap-4 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-yellow border border-primary-yellow/30 px-3 py-1 rounded-full bg-primary-yellow/5">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 group-hover:text-primary-pink transition-colors">
                  {project.title}
                </h3>
                <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-6">
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:text-primary-yellow transition-colors"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:text-primary-yellow transition-colors"
                  >
                    Source <FaGithub className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
