"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML/CSS", "JavaScript", "React", "Redux Toolkit", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Supabase", "Firebase"]
  },
  {
    title: "Design",
    skills: ["Figma", "Canva", "Typography", "UI/UX Design"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Expertise & <span className="text-teal">Tools.</span></h2>
          <div className="w-20 h-1.5 bg-maroon mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass p-10 rounded-3xl group hover:border-gold/30 transition-all duration-500"
            >
              <h3 className="text-2xl font-black mb-8 text-maroon group-hover:text-gold transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(126, 17, 15, 0.2)" }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-foreground/70 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background numbers or text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-white/5 pointer-events-none select-none tracking-tighter -z-0">
        SKILLS
      </div>
    </section>
  );
}
