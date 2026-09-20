"use client";
import ReactLenis from "lenis/react";
import { useTransform, motion, useScroll } from "motion/react";
import { useRef } from "react";
import {
  MessageSquareText,
  Compass,
  PenTool,
  Rocket,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    step: "Step 01",
    title: "Discovery",
    description:
      "We dig into your business, users, and goals to understand what actually needs solving — not just what was asked.",
    icon: MessageSquareText,
    color: "#346eec",
  },
  {
    step: "Step 02",
    title: "Strategy",
    description:
      "A clear roadmap connecting design, engineering, and AI decisions to measurable business outcomes.",
    icon: Compass,
    color: "#2f5fd1",
  },
  {
    step: "Step 03",
    title: "Design & Build",
    description:
      "Our design and engineering teams work in parallel, not in sequence — so nothing gets lost in handoff.",
    icon: PenTool,
    color: "#274fb3",
  },
  {
    step: "Step 04",
    title: "Launch",
    description:
      "We ship with confidence: tested, performant, and ready to scale from day one.",
    icon: Rocket,
    color: "#1f4096",
    },
  {
    step: "Step 05",
    title: "Iterate",
    description:
      "Post-launch, we monitor, learn, and refine — your product keeps improving long after go-live.",
    icon: RefreshCw,
    color: "#17307a",
  },
];

export default function Process() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main ref={container} className="bg-white">
        <section
          id="process"
          className="relative w-full bg-white px-5 pb-10 pt-24 text-[#07101f] md:px-10 md:pt-32"
        >
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="mx-auto max-w-4xl text-center"
          >
               <span
            data-aos="fade-down"
            data-aos-duration="700"
            className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[var(--primary)]  px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#9fc1ff]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]  text-[var(--primary)]"/>
            <p className="text-[var(--primary)]">
              How We Work
            </p>
          </span>
            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
              A process built for clarity
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#52627a] md:text-lg">
              No black boxes. Every engagement follows the same five stages,
              so you always know what&apos;s happening and why.
            </p>
          </div>

          {steps.map((step, i) => {
            const targetScale = 1 - (steps.length - i) * 0.05;
            return (
              <Card
                key={step.title}
                i={i}
                step={step.step}
                title={step.title}
                description={step.description}
                Icon={step.icon}
                color={step.color}
                progress={scrollYProgress}
                range={[i * 0.2, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

const Card = ({
  i,
  step,
  title,
  description,
  Icon,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const iconScale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative flex h-[440px] w-full max-w-4xl origin-top flex-col overflow-hidden rounded-2xl p-8 shadow-xl shadow-black/10 sm:p-10 lg:p-12"
      >
        {/* ghosted step number, background decoration */}
        <span className="pointer-events-none absolute -right-6 -top-10 text-[220px] font-bold leading-none text-white/[0.06]">
          {String(i + 1).padStart(2, "0")}
        </span>

        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          {step}
        </span>

        <div className="mt-auto flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold tracking-[-0.01em] text-white md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/80 md:text-base">
              {description}
            </p>

            <span className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline">
              Learn more
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>

          <motion.div
            style={{ scale: iconScale }}
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm md:h-28 md:w-28"
          >
            <Icon className="h-10 w-10 text-white md:h-12 md:w-12" strokeWidth={1.5} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};