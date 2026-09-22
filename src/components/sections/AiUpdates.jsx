"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cpu,
  Sparkles,
  Globe2,
  ExternalLink,
} from "lucide-react";

const aiUpdates = [
  {
    id: 1,
    date: "Sep 22, 2026",
    category: "AI",
    title: "The biggest AI developments happening around the world",
    description:
      "A daily snapshot of the latest developments in artificial intelligence, including new models, products, agents, research, and major industry announcements.",
    source: "dewOX AI Desk",
    sourceUrl: "#",
    icon: Sparkles,
  },
  {
    id: 2,
    date: "Sep 22, 2026",
    category: "AI Agents",
    title: "AI agents are moving from chat to real-world workflows",
    description:
      "The AI industry continues shifting toward systems that can reason through tasks, use tools, interact with software, and complete multi-step workflows.",
    source: "AI Intelligence",
    sourceUrl: "#",
    icon: Bot,
  },
  {
    id: 3,
    date: "Sep 21, 2026",
    category: "Technology",
    title: "AI infrastructure continues to reshape computing",
    description:
      "New developments across chips, cloud infrastructure, and AI-focused computing are changing how organizations build and deploy increasingly capable AI systems.",
    source: "Technology Desk",
    sourceUrl: "#",
    icon: Cpu,
  },
  {
    id: 4,
    date: "Sep 20, 2026",
    category: "Global AI",
    title: "AI adoption expands across industries worldwide",
    description:
      "Companies across software, healthcare, finance, education, manufacturing, and creative industries are integrating AI into everyday operations.",
    source: "Global AI Report",
    sourceUrl: "#",
    icon: Globe2,
  },
];

const AUTO_PLAY_TIME = 6000;

const AIUpdates = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeUpdate = aiUpdates[activeIndex];

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === aiUpdates.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? aiUpdates.length - 1 : current - 1
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_TIME);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="ai-updates"
      className="relative overflow-hidden bg-[#f8faff] px-5 py-24 text-[#07101f] md:px-10 md:py-32"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =====================================================
          LIGHT PREMIUM BACKGROUND
      ====================================================== */}

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(rgba(52,110,236,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(52,110,236,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 20%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 20%, black 20%, transparent 100%)",
        }}
      />

      {/* Main blue glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-300px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#346eec]/[0.08] blur-[140px]" />

      {/* Left glow */}
      <div className="pointer-events-none absolute left-[-200px] top-[35%] h-[400px] w-[400px] rounded-full bg-[#6f9cff]/[0.06] blur-[120px]" />

      {/* Right glow */}
      <div className="pointer-events-none absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-[#346eec]/[0.05] blur-[130px]" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#346eec]/20 bg-[#346eec]/[0.06] px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#346eec] opacity-50" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#346eec]" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#346eec]">
                Live AI Intelligence
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#07101f] md:text-6xl lg:text-7xl"
            >
              AI is moving fast.
              <br />

              <span className="text-[#8b98aa]">
                We keep watching.
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="mt-6 max-w-2xl text-sm leading-7 text-[#52627a] md:text-base"
            >
              Daily updates on artificial intelligence, emerging technology,
              AI agents, models, research, products, and the companies shaping
              the future.
            </motion.p>
          </div>

          {/* Desktop controls */}

          <div className="hidden items-center gap-3 md:flex">

            <button
              onClick={previousSlide}
              aria-label="Previous AI update"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce5f3] bg-white text-[#52627a] shadow-sm transition-all duration-300 hover:border-[#346eec]/40 hover:bg-[#346eec] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next AI update"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce5f3] bg-white text-[#52627a] shadow-sm transition-all duration-300 hover:border-[#346eec]/40 hover:bg-[#346eec] hover:text-white"
            >
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>
        </div>

        {/* =====================================================
            FEATURED AI NEWS CARD
        ====================================================== */}

        <div className="mt-14 md:mt-20">

          <AnimatePresence mode="wait">

            <motion.article
              key={activeUpdate.id}
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -40,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-[28px] border border-[#dce5f3] bg-white shadow-[0_20px_70px_rgba(24,55,100,0.07)]"
            >

              {/* Card glow */}

              <div className="pointer-events-none absolute right-[-100px] top-[-150px] h-[450px] w-[450px] rounded-full bg-[#346eec]/[0.06] blur-[100px]" />

              <div className="relative grid min-h-[430px] lg:grid-cols-[1.05fr_0.95fr]">

                {/* =================================================
                    LEFT CONTENT
                ================================================== */}

                <div className="flex flex-col justify-between p-7 md:p-10 lg:p-14">

                  <div>

                    {/* Meta */}

                    <div className="flex flex-wrap items-center gap-3">

                      <span className="rounded-full border border-[#346eec]/20 bg-[#346eec]/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#346eec]">
                        {activeUpdate.category}
                      </span>

                      <span className="text-xs text-[#7c8ba1]">
                        {activeUpdate.date}
                      </span>

                    </div>

                    {/* Title */}

                    <h3 className="mt-7 max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#07101f] md:text-5xl lg:text-6xl">
                      {activeUpdate.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-6 max-w-2xl text-sm leading-7 text-[#52627a] md:text-base">
                      {activeUpdate.description}
                    </p>

                  </div>

                  {/* Bottom content */}

                  <div className="mt-10 flex flex-wrap items-center gap-5">

                    <a
                      href={activeUpdate.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 rounded-full bg-[#346eec] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(52,110,236,0.2)] transition-all duration-300 hover:bg-[#2f5fd1] hover:shadow-[0_10px_30px_rgba(52,110,236,0.3)]"
                    >
                      Read the story

                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>

                    <div className="flex items-center gap-2 text-xs text-[#7c8ba1]">
                      <ExternalLink className="h-3.5 w-3.5" />

                      Source: {activeUpdate.source}
                    </div>

                  </div>

                </div>

                {/* =================================================
                    RIGHT VISUAL
                ================================================== */}

                <div className="relative hidden overflow-hidden border-l border-[#dce5f3] bg-[#f8faff] lg:flex lg:items-center lg:justify-center">

                  {/* Background gradient */}

                  <div className="absolute inset-0 bg-gradient-to-br from-[#346eec]/[0.07] via-transparent to-transparent" />

                  {/* Decorative circles */}

                  <div className="absolute h-[300px] w-[300px] rounded-full border border-[#346eec]/10" />

                  <div className="absolute h-[230px] w-[230px] rounded-full border border-[#346eec]/15" />

                  <div className="absolute h-[160px] w-[160px] rounded-full border border-[#346eec]/20" />

                  {/* Center icon */}

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative flex h-28 w-28 items-center justify-center rounded-[28px] border border-[#346eec]/20 bg-white text-[#346eec] shadow-[0_20px_60px_rgba(52,110,236,0.15)]"
                  >
                    <activeUpdate.icon
                      className="h-12 w-12"
                      strokeWidth={1.3}
                    />
                  </motion.div>

                  {/* Floating label */}

                  <div className="absolute right-10 top-10 rounded-full border border-[#dce5f3] bg-white/80 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.2em] text-[#7c8ba1] shadow-sm backdrop-blur-md">
                    AI / 24H
                  </div>

                  <div className="absolute bottom-10 left-10 rounded-full border border-[#dce5f3] bg-white/80 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.2em] text-[#7c8ba1] shadow-sm backdrop-blur-md">
                    Intelligence
                  </div>

                  {/* Decorative dots */}

                  <div className="absolute left-12 top-16 h-1.5 w-1.5 rounded-full bg-[#346eec]/40" />

                  <div className="absolute bottom-20 right-20 h-2 w-2 rounded-full bg-[#346eec]/30" />

                  <div className="absolute right-24 top-32 h-1 w-1 rounded-full bg-[#346eec]/50" />

                </div>

              </div>

            </motion.article>

          </AnimatePresence>

        </div>

        {/* =====================================================
            MOBILE CONTROLS
        ====================================================== */}

        <div className="mt-6 flex items-center justify-between md:hidden">

          {/* Dots */}

          <div className="flex items-center gap-2">

            {aiUpdates.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to update ${index + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-[#346eec]"
                    : "w-2 bg-[#cbd6e5]"
                }`}
              />
            ))}

          </div>

          {/* Buttons */}

          <div className="flex gap-2">

            <button
              onClick={previousSlide}
              aria-label="Previous AI update"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce5f3] bg-white text-[#52627a] shadow-sm"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next AI update"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce5f3] bg-white text-[#52627a] shadow-sm"
            >
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

        </div>

        {/* =====================================================
            DESKTOP PROGRESS
        ====================================================== */}

        <div className="mt-8 hidden items-center gap-5 md:flex">

          <div className="h-px flex-1 overflow-hidden bg-[#dce5f3]">

            <motion.div
              className="h-full bg-[#346eec]"
              animate={{
                width: `${((activeIndex + 1) / aiUpdates.length) * 100}%`,
              }}
              transition={{
                duration: 0.4,
              }}
            />

          </div>

          <span className="min-w-[50px] text-right font-mono text-xs text-[#7c8ba1]">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(aiUpdates.length).padStart(2, "0")}
          </span>

        </div>

        {/* =====================================================
            OTHER NEWS CARDS
        ====================================================== */}

        <div className="mt-8 grid gap-3 md:grid-cols-3">

          {aiUpdates
            .filter((_, index) => index !== activeIndex)
            .slice(0, 3)
            .map((update) => {

              const Icon = update.icon;

              const originalIndex = aiUpdates.findIndex(
                (item) => item.id === update.id
              );

              return (
                <button
                  key={update.id}
                  onClick={() => setActiveIndex(originalIndex)}
                  className="group flex min-h-[120px] flex-col justify-between rounded-2xl border border-[#dce5f3] bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#346eec]/30 hover:shadow-[0_12px_30px_rgba(24,55,100,0.07)]"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f3f6fb] text-[#7c8ba1] transition-colors group-hover:bg-[#346eec]/10 group-hover:text-[#346eec]">
                      <Icon className="h-4 w-4" />
                    </div>

                    <ArrowUpRight className="h-3.5 w-3.5 text-[#a5b1c2] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#346eec]" />

                  </div>

                  <div>

                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#9aa7b8]">
                      {update.category}
                    </p>

                    <p className="mt-1 line-clamp-1 text-sm font-medium text-[#52627a] transition-colors group-hover:text-[#07101f]">
                      {update.title}
                    </p>

                  </div>

                </button>
              );
            })}

        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-[#dce5f3] pt-7 sm:flex-row sm:items-center">

          <div className="flex items-center gap-2 text-xs text-[#7c8ba1]">
            <Globe2 className="h-3.5 w-3.5 text-[#346eec]" />

            Tracking AI developments worldwide
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-xs font-medium text-[#52627a] transition-colors hover:text-[#346eec]"
          >
            Want AI built into your business?

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default AIUpdates;