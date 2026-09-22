"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Quote, X } from "lucide-react";
import s1 from '../../assets/images/s1.jpeg'
import s2 from '../../assets/images/s2.jpeg'
import s3 from '../../assets/images/s3.jpeg'
import s4 from '../../assets/images/s4.jpeg'
import s5 from '../../assets/images/s5.jpeg'

export const testimonials = [
  {
    id: 1,
    url:s5,
    name: "Brand identity & systems",
    role: "VP Product, Northbeam",
    quote:
      "Identity systems, UI/UX, and visual language that make your product instantly recognizable.",
  },
  {
    id: 2,
    url:s4,
    name: "Web & Product Engineering",
    role: "Founder, Solace Wellness",
    quote:
      "Performant, scalable web apps built on modern stacks — from marketing sites to full platforms.",
  },
  {
    id: 3,
    url:s3,
    name: "AI Agents & Automation",
    role: "COO, Fleet Logistics",
    quote:
      "Custom AI agents and workflows that plug into your operations and run around the clock.",
  },
  {
    id: 4,
    url: s2,
    name: "Digital Marketing",
    role: "CEO, Ledgerly",
    quote:
      "We run full-funnel marketing for teams who need pipeline, not vanity metrics — SEO, paid acquisition, content, and lifecycle campaigns built on data, not guesswork.",
  },
  {
    id: 5,
    url:s1,
    name: "AI Video Production",
    role: "Creative Director, Marrow Studio",
    quote:
      "We build AI-powered video pipelines that compress weeks of production into hours — generating on-brand, publish-ready content without sacrificing creative control.",
  },
  
];

function TrustGallery({ items, index, setIndex, setOpen }) {
  return (
    <div className="mx-auto flex w-fit gap-1 pb-4 pt-6 md:gap-2" id="services">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          onMouseEnter={() => setIndex(i)}
          onClick={() => {
            setIndex(i);
            setOpen(true);
          }}
          className={`relative h-[320px] shrink-0 cursor-pointer overflow-hidden rounded-2xl transition-[width] duration-300 ease-in-out ${
            index === i
              ? "w-[320px]"
              : "w-[14px] sm:w-[20px] md:w-[80px] xl:w-[80px]"
          }`}
        >
          <motion.img
            layoutId={`trust-${item.id}`}
            whileTap={{ scale: 0.96 }}
            src={item.url}
            alt={item.name}
            className="h-full w-full object-cover"
          />
          {/* overlay with name, only visible when expanded */}
          <AnimatePresence>
            {index === i && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: 0.1 }}
                className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07101f]/85 via-[#07101f]/20 to-transparent p-4"
              >
                <p className=" font-semibold text-white decoration-solid text-xl">
                  {item.name}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

const Trust = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    const handleKeyDown = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const active = testimonials[index];

  return (
    <section
      id="trust"
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative overflow-hidden bg-white px-5 py-24 text-[#07101f] md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          className="max-w-2xl text-center md:mx-auto"
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
          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-[#52627a] md:text-lg">
           Five disciplines, one team. Every engagement draws on design, engineering, AI, and strategy working in lockstep — not in silos.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <TrustGallery
            items={testimonials}
            index={index}
            setIndex={setIndex}
            setOpen={setOpen}
          />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-content-center bg-[#07101f]/50 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <div onClick={(e) => e.stopPropagation()} className="px-5">
              <motion.div
                layoutId={`trust-${active.id}`}
                className="relative flex w-[92vw] max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:flex-row sm:items-stretch"
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#07101f] shadow-sm transition-colors hover:bg-white"
                >
                  <X className="h-4 w-4" />
                </button>

                <img
                  src={active.url}
                  alt={active.name}
                  className="h-48 w-full object-cover sm:h-auto sm:w-40"
                />

                <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                  <Quote className="h-7 w-7 text-[#346eec]" strokeWidth={1.5} />
                  <motion.p
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="mt-4 text-base leading-6 text-[#07101f] md:text-lg"
                  >
                    {active.quote}
                  </motion.p>
                  <motion.div
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="mt-5"
                  >
                    <p className="text-sm font-semibold text-[var(--primary)] decoration-solid text-xl">
                      {active.name}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Trust;