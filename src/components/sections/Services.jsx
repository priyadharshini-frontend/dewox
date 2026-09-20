"use client";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Palette,
  Code2,
  Bot,
  LineChart,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand & Design",
    description:
      "Identity systems, UI/UX, and visual language that make your product instantly recognizable.",
    tags: ["Identity", "UI/UX", "Design Systems"],
  },
  {
    icon: Code2,
    title: "Web & Product Engineering",
    description:
      "Performant, scalable web apps built on modern stacks — from marketing sites to full platforms.",
    tags: ["Frontend", "Backend", "DevOps"],
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "Custom AI agents and workflows that plug into your operations and run around the clock.",
    tags: ["LLM Agents", "Automation", "Integrations"],
  },
  {
    icon: LineChart,
    title: "Growth & Strategy",
    description:
      "Data-informed strategy that connects design and engineering decisions to business outcomes.",
    tags: ["Analytics", "Positioning", "Roadmapping"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      data-aos="fade-up"
      data-aos-delay={100 + index * 100}
      data-aos-duration="700"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-[#d9e2f2] bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#346eec]/10"
    >
      {/* animated gradient corner */}
      <motion.div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#346eec]/10 blur-2xl"
        animate={hovered ? { scale: 1.4, opacity: 1 } : { scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* index number, ghosted in the background */}
      <span className="absolute right-6 top-6 text-5xl font-bold text-[#07101f]/[0.04] transition-colors duration-300 group-hover:text-[#346eec]/[0.08]">
        {String(index + 1).padStart(2, "0")}
      </span>

      <motion.div
        className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#346eec]/10 text-[#346eec]"
        animate={hovered ? { rotate: -8, scale: 1.08 } : { rotate: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Icon className="h-7 w-7" strokeWidth={1.75} />
      </motion.div>

      <h3 className="relative mt-6 text-xl font-bold tracking-[-0.01em] text-[#07101f] md:text-2xl">
        {service.title}
      </h3>

      <p className="relative mt-3 text-sm leading-6 text-[#52627a] md:text-base">
        {service.description}
      </p>

      {/* tag pills */}
      <div className="relative mt-5 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#d9e2f2] px-3 py-1 text-xs font-medium text-[#52627a] transition-colors duration-300 group-hover:border-[#346eec]/30 group-hover:text-[#346eec]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* learn more link, slides in on hover */}
      <motion.div
        className="relative mt-6 flex items-center gap-1.5 text-sm font-semibold text-[#346eec]"
        animate={hovered ? { x: 4 } : { x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        Learn more
        <motion.span
          animate={hovered ? { x: 4, y: -4 } : { x: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <ArrowUpRight className="h-4 w-4" />
        </motion.span>
      </motion.div>

      {/* bottom border reveal */}
      <motion.span
        className="pointer-events-none absolute bottom-0 left-0 h-[3px] bg-[#346eec]"
        initial={{ width: "0%" }}
        animate={hovered ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />
    </motion.div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative overflow-hidden bg-white px-5 py-24 text-[#07101f] md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          className="max-w-2xl"
        >
           <span
            data-aos="fade-down"
            data-aos-duration="700"
            className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[var(--primary)]  px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#9fc1ff]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]  text-[var(--primary)]"/>
            <p className="text-[var(--primary)]">
            What We Do
            </p>
          </span>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
            Services built to move together
          </h2>
          <p className="mt-5 text-base leading-7 text-[#52627a] md:text-lg">
            Four disciplines, one team. Every engagement draws on design,
            engineering, AI, and strategy working in lockstep — not in silos.
          </p>
        </div>

        <div
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;