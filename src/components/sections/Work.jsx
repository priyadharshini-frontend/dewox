"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import p1 from '../../assets/images/p1.jpeg'
import p2 from '../../assets/images/p2.jpeg'
import p3 from '../../assets/images/p3.jpeg'
import p4 from '../../assets/images/p4.jpeg'
import p5 from '../../assets/images/p5.jpeg'
import p6 from '../../assets/images/p6.png'

const projects = [
  {
    id:1,
    title: "Emdad Logistics",
    category: " Brand & Web",
    year: "2026",
    description: "Complete brand identity, built for consistency and impact.A modern website that brings the brand to life.",
    image:p1,
  },
  {
    id:2,
    title: "Healcart",
    category: "App",
    year: "2026",
    description: "High-performance e-pharmacy app built for seamless ordering.Fast, simple, and reliable.",
    image: p4,
  },
  {
    id:3,
    title: "TCU",
    category: "CRM",
    year: "2025",
    description: "Smart restaurant CRM built to manage orders, sales, and daily operations.Simple control. Complete visibility.",
    image:p3,
  },
  {
    id:4,
    title: "Shop Ease",
    category: "Billing Software",
    year: "2026",
    description: "Automated invoicing and subscription billing platform for growing SaaS teams.",
    image:p6,
  },
  {
    id:5,
    title: "AutoAxis",
    category: "Brand",
    year: "2026",
    description: "Complete brand identity and visual systems crafted for a 360° vehicle care experience.  ",
    image:p5,
  },
  {
    id:6,
    title: "Elena",
    category: "Brand",
    year: "2026",
    description: "Fashion identity, refined with a cohesive visual system.Minimal. Distinctive. Memorable.",
    image:p2,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};




const Work = () => {
 

  return (
    <section
      id="work"
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative overflow-hidden bg-white px-5 py-24 text-[#07101f] md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
        >
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="800"
            className="max-w-2xl"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#346eec]">
              Our Work
            </p>
            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
              Recently Highlighted Projects
            </h2>
            <p className="mt-5 text-base leading-7 text-[#52627a] md:text-lg">
              A sample of what happens when design, engineering, and AI work
              from the same brief.
            </p>
          </div>

      
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
               {projects.map((p)=>(
    <motion.div
  layout
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  exit={{ opacity: 0, y: -16 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  whileHover={{ y: -8 }}
  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#d9e2f2] bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_20px_60px_-15px_rgba(7,16,31,0.25)] hover:ring-1 hover:ring-[#346eec]/30"
>
  <div className="relative aspect-[4/3] w-full overflow-hidden">
    <motion.img
      src={p.image}
      alt={p.title}
      className="h-full w-full object-cover"
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />

    {/* dark overlay on hover */}
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07101f]/85 via-[#07101f]/15 to-transparent"
    />

    {/* view project pill, rises on hover */}
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      whileHover={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#07101f] shadow-lg"
    >
      View project
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.div>

    {/* category tag, top right */}
    <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#346eec] backdrop-blur-sm">
      {p.category}
    </span>

    {/* index number, top left */}
    <span className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#07101f]/40 text-[11px] font-semibold text-white backdrop-blur-sm">
      {String(p.id ?? "").padStart(2, "0")}
    </span>
  </div>

  <div className="p-6">
    <div className="flex items-start justify-between gap-4">
      <h3 className="text-xl font-bold tracking-[-0.01em] text-[#07101f] transition-colors duration-300 group-hover:text-[#346eec]">
        {p.title}
      </h3>
      <span className="shrink-0 text-sm font-medium text-[#52627a]">
        {p.year}
      </span>
    </div>
    <p className="mt-2 text-sm leading-6 text-[#52627a]">
      {p.description}
    </p>
  </div>
</motion.div>
     ))}
          
        </div>
   

       
      </div>
    </section>
  );
};

export default Work;