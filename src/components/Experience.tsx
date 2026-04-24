"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Promopact Marketing Pvt. Ltd., Delhi",
    period: "Nov 2025 – Present",
    description: "Building and deploying production-ready web interfaces for real clients in a fast-paced startup environment.\n\n• Developed responsive UI/UX for multiple client websites\n• Collaborated with clients via calls and Google Meet to gather requirements and implement changes\n• Deployed websites on Vercel, Hostinger, and InfinityFree\n• Integrated SEO metadata and optimized performance\n• Designed banners and assets using Canva and AI tools\n• Debugged UI issues and improved user experience"
  },
  {
    role: "Frontend Developer Intern",
    company: "Oasis Infobyte",
    period: "2025",
    description: "• Built projects like Calculator App, To-Do App, Login System, and Landing Pages\n• Focused on responsive design and clean UI implementation"
  },
  {
    role: "Frontend Developer (Projects & Training)",
    company: "Personal Projects & Training",
    period: "2024 – 2025",
    description: "• Built a Movie Streaming App using React, Redux Toolkit, and TMDB API\n• Worked with HTML, CSS, JavaScript, Tailwind, React, and GSAP\n• Practiced API integration and state management"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Professional <span className="text-teal">Journey.</span></h2>
          <p className="text-foreground/50 uppercase tracking-[0.4em] text-xs font-bold">A timeline of my career</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-12 pb-20 last:pb-0 border-l border-white/10"
            >
              {/* Timeline marker */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-maroon shadow-[0_0_20px_rgba(126,17,15,0.8)] z-10" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="text-2xl font-black text-white">{exp.role}</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-gold px-3 py-1 bg-gold/5 border border-gold/20 rounded-full">
                  {exp.period}
                </span>
              </div>
              
              <h4 className="text-lg font-bold text-maroon mb-6">{exp.company}</h4>
              
              <p className="text-foreground/60 text-lg leading-relaxed max-w-2xl whitespace-pre-line">
                {exp.description}
              </p>

              {/* Connector line for the last item (fading out) */}
              {idx === experiences.length - 1 && (
                <div className="absolute left-[-1px] bottom-0 h-20 w-px bg-gradient-to-b from-white/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
