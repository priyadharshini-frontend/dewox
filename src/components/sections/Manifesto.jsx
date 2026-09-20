"use client";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "motion/react";
import { useRef } from "react";

const Manifesto = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["45deg", "-45deg"]
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -2400]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section
      ref={targetRef}
      id="manifesto"
      className="relative h-[350vh] bg-white text-[#07101f]"
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-5">
               <span
            data-aos="fade-down"
            data-aos-duration="700"
            className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[var(--primary)]  px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#9fc1ff] mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]  text-[var(--primary)]"/>
            <p className="text-[var(--primary)]">
              Who We Believe
            </p>
          </span>
       
        <motion.p
          style={{ skewX, x }}
          className="origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] tracking-[-0.02em] md:text-7xl md:leading-[0.85]"
        >
          Design without engineering is decoration.
          <span className="text-[#346eec]"> Engineering without design is friction. </span>
          We build the two as one system, so your product looks as sharp as it performs, end to end, every single time.
        </motion.p>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-[#52627a]"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-6 w-[1px] bg-[#52627a]/40"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;