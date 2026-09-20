"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Enterprise Clients' },
  { value: '24/7', label: 'AI Agent Uptime' },
  { value: '5+', label: 'Years of Combined Expertise' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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

// Splits "50+" -> { number: 50, prefix: "", suffix: "+" }
// Splits "24/7" -> treated as a non-numeric string, animates via a simple fade/tick instead
const parseStat = (raw) => {
  const match = raw.match(/^(\D*)(\d+)(.*)$/);
  if (!match) return null; // e.g. "24/7" has two numbers, skip counting
  const [, prefix, number, suffix] = match;
  return { prefix, number: parseInt(number, 10), suffix };
};

const CountUp = ({ value, duration = 1.6 }) => {
  const parsed = parseStat(value);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(parsed ? parsed.prefix + "0" + parsed.suffix : value);

  useEffect(() => {
    if (!parsed || !isInView) return;
    const controls = animate(motionValue, parsed.number, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplay(`${parsed.prefix}${Math.round(latest)}${parsed.suffix}`);
      },
    });
    return controls.stop;
  }, [isInView, parsed, motionValue, duration]);

  // Non-numeric values (like "24/7") just get a quick fade/scale pop instead of counting
  if (!parsed) {
    return (
      <motion.span
        ref={ref}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {value}
      </motion.span>
    );
  }

  return <span ref={ref}>{display}</span>;
};

const About = () => {
  return (
    <section
      id="about"
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative overflow-hidden bg-white px-5 py-24 text-[#07101f] md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] md:items-end md:gap-20">
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
              Who We Are
            </p>
          </span>
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
            Where design, engineering, and intelligence meet
          </h2>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="800"
          className="max-w-xl text-base leading-7 text-[#52627a] md:text-lg"
        >
          <p>
            We&apos;re not a design shop that dabbles in tech, or a dev shop
            that bolts on AI as an afterthought. dewOX is built around one
            idea: your digital presence, your product, and your operations
            should run on the same coherent system - one that looks as sharp
            as it performs.
          </p>
          <p className="mt-6">
            From the first sketch of your brand identity to the last line of
            code powering your AI agent, our teams work as one, so nothing
            gets lost in translation between design and delivery.
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
        className="mx-auto mt-20 grid max-w-7xl grid-cols-2 border-y border-[#d9e2f2] md:grid-cols-4"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            data-aos="zoom-in"
            data-aos-delay={300 + idx * 100}
            data-aos-duration="600"
            whileHover={{ y: -4 }}
            className="group relative cursor-default overflow-hidden border-[#d9e2f2] px-4 py-7 first:border-l-0 md:border-l md:px-8 md:py-9"
          >
            {/* soft glow that appears on hover */}
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(120px circle at 50% 0%, rgba(52,110,236,0.08), transparent 70%)",
              }}
              transition={{ duration: 0.3 }}
            />

            <p className="relative text-3xl font-bold text-[var(--primary)] transition-transform duration-300 group-hover:-translate-y-0.5 md:text-5xl">
              <CountUp value={stat.value} />
            </p>
            <p className="relative mt-2 text-sm leading-5 text-[var(--primary)] md:text-base">
              {stat.label}
            </p>

            {/* animated underline on hover */}
            <motion.span
              className="pointer-events-none absolute bottom-0 left-4 right-4 h-[2px] origin-left scale-x-0 bg-[#346eec] transition-transform duration-300 ease-out group-hover:scale-x-100 md:left-8 md:right-8"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;