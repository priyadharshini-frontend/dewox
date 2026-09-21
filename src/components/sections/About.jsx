"use client";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useScroll,
  animate,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import about from '../../assets/images/about.jpeg'

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Enterprise Clients" },
  { value: "24/7", label: "AI Agent Uptime" },
  { value: "5+", label: "Years of Combined Expertise" },
];

const tags = ["Design Systems", "Web Engineering", "AI Agents", "Strategy"];

// Splits "50+" -> { number: 50, prefix: "", suffix: "+" }
const parseStat = (raw) => {
  const match = raw.match(/^(\D*)(\d+)(.*)$/);
  if (!match) return null;
  const [, prefix, number, suffix] = match;
  return { prefix, number: parseInt(number, 10), suffix };
};

const CountUp = ({ value, duration = 1.6 }) => {
  const parsed = parseStat(value);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(
    parsed ? parsed.prefix + "0" + parsed.suffix : value
  );

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const About = () => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  // subtle parallax: image drifts slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-5 py-24 text-[#07101f] md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center md:gap-16">
        {/* left: copy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--primary)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--primary)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
            Who We Are
          </motion.span>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-5 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl"
          >
            Where design, technology, and AI converge.

          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6 max-w-xl text-base leading-7 text-[#52627a] md:text-lg"
          >
            <p>
             dewOX is a digital solutions focused on building strong brands, digital products, and intelligent technology solutions.

            </p>
            <p className="mt-4">
              We bring design, engineering, and AI together through a unified approach—ensuring every digital touchpoint is consistent, purposeful, and built to perform.
            </p>
            <p className="mt-4">From brand identity and UI/UX design to websites, applications, and AI-powered solutions, we work across the entire digital ecosystem to transform ideas into scalable, high-quality experiences.</p>
        <p className="mt-4">Our approach is simple: strategy informs design, design guides technology, and technology creates measurable value.</p>
          </motion.div>

          {/* interactive tag list */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ y: -2, backgroundColor: "var(--primary)", color: "#fff" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="cursor-default rounded-full border border-[#d9e2f2] px-4 py-2 text-xs font-medium text-[#52627a]"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.a
            href="#work"
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ x: 4 }}
            className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
          >
            See how we work
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>

        {/* right: image with clip-path reveal + parallax + floating badge */}
        <div ref={imageRef} className="relative">
          <motion.div
            
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] md:aspect-[]"
          >
            <motion.img
              style={{ y: imageY }}
              src={about}
              alt="dewOX team at work"
              className="h-[120%] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07101f]/30 via-transparent to-transparent" />
          </motion.div>

          {/* floating stat badge, overlapping the image */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            whileHover={{ y: -4 }}
            className="absolute -bottom-6 -left-6 flex items-center gap-4 rounded-2xl border border-[#d9e2f2] bg-white px-6 py-5 shadow-xl shadow-[#07101f]/10 md:-left-10"
          >
            <div className="flex -space-x-3">
              {["#346eec", "#2f5fd1", "#5b8ef7"].map((c, i) => (
                <span
                  key={i}
                  style={{ backgroundColor: c }}
                  className="h-9 w-9 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-[#07101f]">One team</p>
              <p className="text-xs text-[#52627a]">Design · Eng · AI</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* stat cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="mx-auto mt-24 grid max-w-7xl grid-cols-2 border-y border-[#d9e2f2] md:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="group relative cursor-default overflow-hidden border-[#d9e2f2] px-4 py-7 first:border-l-0 md:border-l md:px-8 md:py-9"
          >
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
            <p className="relative mt-2 text-sm leading-5 text-[#52627a] md:text-base">
              {stat.label}
            </p>

            <motion.span className="pointer-events-none absolute bottom-0 left-4 right-4 h-[2px] origin-left scale-x-0 bg-[var(--primary)] transition-transform duration-300 ease-out group-hover:scale-x-100 md:left-8 md:right-8" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;