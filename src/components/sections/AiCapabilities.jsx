"use client";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import { useEffect, useState } from "react";
import { FiChevronDown, FiLoader } from "react-icons/fi";
import { ArrowRight, Sparkles } from "lucide-react";
import { twMerge } from "tailwind-merge";

/**
  IMPORTANT: requires this CSS class for the inner glow mask:

  .ai-glow-spill-mask {
    mask-image: radial-gradient(
      ellipse 100% 100% at 50% 50%,
      transparent 50%,
      black 100%
    );
  }
*/

const AIGradientBorder = ({ children, className, duration = 3 }) => {
  const turn = useMotionValue(0);

  useEffect(() => {
    animate(turn, 1, {
      ease: "linear",
      duration,
      repeat: Infinity,
    });
  }, [duration, turn]);

  // gradient now includes dewOX blue (#346eec) alongside the accent hues
  const gradient = useMotionTemplate`conic-gradient(from ${turn}turn, transparent 0%, #346eec00 5%, #346eec 10%, #5b8ef7 18%, #818cf8 26%, #38bdf8 34%, #2dd4bf 42%, #346eec 46%, #346eec00 52%, transparent 56%)`;

  return (
    <div className={twMerge("relative p-px", className)}>
      <motion.div
        style={{ backgroundImage: gradient }}
        className="absolute inset-0 rounded-[inherit]"
      />
      <div className="relative rounded-[inherit] overflow-hidden">
        <div className="relative">{children}</div>
        <motion.div
          style={{ backgroundImage: gradient }}
          className="ai-glow-spill-mask opacity-70 blur-2xl pointer-events-none absolute inset-[-40%] z-10 overflow-hidden"
        />
      </div>
    </div>
  );
};

const queries = [
  "What's our current AI agent uptime?",
  "Draft a follow-up for the Northbeam onboarding ticket",
  "Summarize this week's dispatch anomalies",
];

const responses = [
  "Uptime is holding at 99.97% across all deployed agents this week. No incidents flagged. Want the full reliability breakdown?",
  "Drafted. It references their last support thread and proposes a 15-min sync Thursday. Ready to send whenever you are.",
  "3 anomalies flagged, all resolved automatically via reroute logic. One route change may need a manual review — flagging it now.",
];

const AICard = () => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("thinking"); // thinking -> answered

  useEffect(() => {
    setPhase("thinking");
    const t1 = setTimeout(() => setPhase("answered"), 1400);
    const t2 = setTimeout(() => {
      setIndex((i) => (i + 1) % queries.length);
    }, 4200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [index]);

  return (
    <AIGradientBorder className="mx-auto w-full max-w-sm rounded-3xl border border-white/10">
      <div className="grid gap-6 bg-[#0b1220] p-5 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#346eec]/15">
              <Sparkles className="h-4 w-4 text-[#5b8ef7]" strokeWidth={2} />
            </div>
            <span className="text-sm font-semibold text-white">
              dewOX Agent
            </span>
          </div>
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Upcoming
          </span>
        </div>

        <motion.div
          key={`q-${index}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 p-4 transition-colors hover:bg-black/20"
        >
          <img
            src="https://api.dicebear.com/8.x/lorelei/svg?seed=Riley&backgroundColor=346eec"
            alt="avatar"
            className="size-5 rounded-full"
          />
          <p className="flex-1 text-xs text-neutral-400 line-clamp-1">
            {queries[index]}
          </p>
          <FiChevronDown className="text-neutral-500" />
        </motion.div>

        {phase === "thinking" ? (
          <div className="flex items-center gap-2">
            <FiLoader className="animate-spin text-[#5b8ef7]" />
            <p className="text-xs text-neutral-500">Thinking it through…</p>
          </div>
        ) : (
          <motion.p
            key={`a-${index}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-sm leading-relaxed text-neutral-300"
          >
            {responses[index]}
          </motion.p>
        )}
      </div>
    </AIGradientBorder>
  );
};

const highlights = [
  "Trained on your docs, tickets, and workflows",
  "Runs 24/7 with human-in-the-loop escalation",
  "Plugs into the tools you already use",
];

const AICapabilities = () => {
  return (
    <section
      id="ai-agents"
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative overflow-hidden bg-[#050a14] px-5 py-24 text-white md:px-10 md:py-32"
    >
      {/* faint background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#346eec]/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="800"
        >
                   <span
            data-aos="fade-down"
            data-aos-duration="700"
            className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[var(--primary)]  px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#9fc1ff]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]  text-[var(--primary)]"/>
            <p className="text-[var(--primary)]">
              AI Agents and Automation
            </p>
          </span>
        
          <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
            Agents that actually run your operations
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/60 md:text-lg">
            We build custom AI agents wired directly into your workflows —
            not chatbots bolted onto a landing page. They answer, act, and
            escalate when it matters.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {highlights.map((item, i) => (
              <li
                key={item}
                data-aos="fade-right"
                data-aos-delay={150 + i * 80}
                data-aos-duration="600"
                className="flex items-center gap-3 text-sm text-white/75 md:text-base"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#5b8ef7]" />
                {item}
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ x: 4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#346eec] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2f5fd1]"
          >
            Talk to us about your workflow
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <AICard />
        </div>
      </div>

      <style jsx global>{`
        .ai-glow-spill-mask {
          mask-image: radial-gradient(
            ellipse 100% 100% at 50% 50%,
            transparent 50%,
            black 100%
          );
        }
      `}</style>
    </section>
  );
};

export default AICapabilities;