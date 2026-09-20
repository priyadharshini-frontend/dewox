"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Quote, X } from "lucide-react";

export const testimonials = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    name: "Elena Marsh",
    role: "VP Product, Northbeam",
    quote:
      "dewOX rebuilt our entire onboarding flow in six weeks. Design and engineering felt like one team from day one — we never had to translate between them.",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    name: "Marcus Webb",
    role: "Founder, Solace Wellness",
    quote:
      "The brand system they delivered didn't just look sharp, it actually shipped. Every touchpoint from packaging to web felt considered.",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    name: "Priya Nathan",
    role: "COO, Fleet Logistics",
    quote:
      "Our dispatch agent now runs 24/7 with zero manual intervention. dewOX understood the operational constraints better than our own team did.",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    name: "Daniel Ostrow",
    role: "CEO, Ledgerly",
    quote:
      "Fast, sharp, and genuinely invested in the outcome — not just the deliverable. They pushed back when it mattered.",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop",
    name: "Sofia Reyes",
    role: "Creative Director, Marrow Studio",
    quote:
      "Rare to find a partner that treats design and code as one discipline. The handoff friction we were used to just disappeared.",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    name: "Tomas Berg",
    role: "Head of AI, Assist AI",
    quote:
      "They shipped an agent trained on our docs that actually resolves tickets, not just deflects them. Support load dropped 40% in a month.",
  },
];

function TrustGallery({ items, index, setIndex, setOpen }) {
  return (
    <div className="mx-auto flex w-fit gap-1 pb-4 pt-6 md:gap-2">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          onMouseEnter={() => setIndex(i)}
          onClick={() => {
            setIndex(i);
            setOpen(true);
          }}
          className={`relative h-[220px] shrink-0 cursor-pointer overflow-hidden rounded-2xl transition-[width] duration-300 ease-in-out ${
            index === i
              ? "w-[220px]"
              : "w-[14px] sm:w-[20px] md:w-[30px] xl:w-[46px]"
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
                <p className="text-sm font-semibold text-white">
                  {item.name}
                </p>
                <p className="text-xs text-white/75">{item.role}</p>
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
              Trusted By
            </p>
          </span>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
            Teams who need more than a vendor
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-[#52627a] md:text-lg">
            Hover to preview, click to read what it's actually like working
            with us.
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
                    <p className="text-sm font-semibold text-[#07101f]">
                      {active.name}
                    </p>
                    <p className="text-xs text-[#52627a]">{active.role}</p>
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