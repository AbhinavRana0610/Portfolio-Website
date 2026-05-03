"use client";
import { motion } from "framer-motion";

interface BackgroundSphereProps {
  color?: "pink" | "yellow" | "mixed";
  size?: number;
  className?: string;
  delay?: number;
}

export default function BackgroundSphere({ 
  color = "pink", 
  size = 600, 
  className = "",
  delay = 0 
}: BackgroundSphereProps) {
  const gradients = {
    pink: "radial-gradient(circle, rgba(255, 128, 171, 0.8) 0%, rgba(255, 128, 171, 0) 70%)",
    yellow: "radial-gradient(circle, rgba(255, 210, 43, 0.7) 0%, rgba(255, 210, 43, 0) 70%)",
    mixed: "radial-gradient(circle, rgba(255, 128, 171, 0.7) 0%, rgba(255, 210, 43, 0.6) 50%, rgba(255, 128, 171, 0) 70%)"
  };

  return (
    <motion.div
      className={`absolute pointer-events-none z-[1] blur-[100px] md:blur-[160px] mix-blend-screen ${className}`}
      style={{
        width: size,
        height: size,
        background: gradients[color],
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      animate={{
        y: [0, -60, 0],
        x: [0, 40, 0],
        rotate: [0, 20, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {/* Noise Overlay for the sphere itself */}
      <div 
        className="absolute inset-0 opacity-[0.3] mix-blend-overlay rounded-full" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} 
      />
    </motion.div>
  );
}
