"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Web", "Branding", "AI Agents"];

const projects = [
  {
    title: "Northbeam Analytics",
    category: "Web",
    year: "2025",
    description: "Real-time analytics dashboard for e-commerce teams.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Solace Wellness",
    category: "Branding",
    year: "2024",
    description: "Full identity system and packaging for a wellness brand.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Fleet Copilot",
    category: "AI Agents",
    year: "2025",
    description: "Autonomous agent handling logistics dispatch at scale.",
    image:
      "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Ledgerly",
    category: "Web",
    year: "2024",
    description: "Modern accounting platform for freelancers and studios.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Marrow Studio",
    category: "Branding",
    year: "2023",
    description: "Identity and web presence for a design-led furniture studio.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Assist AI",
    category: "AI Agents",
    year: "2025",
    description: "Customer support agent trained on your product docs.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&auto=format&fit=crop&q=60",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#d9e2f2] bg-white"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* dark overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07101f]/80 via-[#07101f]/10 to-transparent"
        />

        {/* view project pill, rises on hover */}
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#07101f]"
        >
          View project
          <ArrowUpRight className="h-3.5 w-3.5" />
        </motion.div>

        {/* category tag, top right */}
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#346eec] backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold tracking-[-0.01em] text-[#07101f]">
            {project.title}
          </h3>
          <span className="shrink-0 text-sm font-medium text-[#52627a]">
            {project.year}
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-[#52627a]">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
              Selected projects
            </h2>
            <p className="mt-5 text-base leading-7 text-[#52627a] md:text-lg">
              A sample of what happens when design, engineering, and AI work
              from the same brief.
            </p>
          </div>

          {/* category filter */}
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-duration="800"
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300"
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-[#346eec]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    activeCategory === cat ? "text-white" : "text-[#52627a]"
                  }`}
                >
                  {cat}
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;