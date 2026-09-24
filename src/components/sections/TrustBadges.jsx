"use client";
import { motion } from "motion/react";
import { ShieldCheck, Award, Lock, BadgeCheck,CheckCircle2,Star,Zap} from "lucide-react";

const clients = [
  "Aara Accessories",
  "Emdad Logistics",
  "LPTS ",
  "TCU",
  "Elena",
  "AutoAxis",
  "Lensify",
  "HealCart",
  "Aral trading desert",
  "Brewora",
  "Panda garments"
];

const badges = [
 
  {
    icon: ShieldCheck,
    label: "HIPAA",
    sublabel: "Compliant",
  },
  {
    icon: Star,
    label: "4.8/5",
    sublabel: "Customer satisfaction",
  },
  {
    icon: Zap,
    label: "99.9%",
    sublabel: "System uptime",
  },
];

const Marquee = ({ items, reverse = false, speed = 28 }) => {
  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex shrink-0 items-center gap-16 pr-16"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="shrink-0 whitespace-nowrap text-2xl font-bold tracking-[-0.01em] text-[#07101f]/25 transition-colors duration-300 hover:text-[#346eec] md:text-3xl"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const TrustBadges = () => {
  return (
    <section
      id="trust-badges"
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative overflow-hidden bg-white px-5 py-24 text-[#07101f] md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          className="mx-auto max-w-2xl text-center"
        >
               <span
            data-aos="fade-down"
            data-aos-duration="700"
            className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[var(--primary)]  px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#9fc1ff]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]  text-[var(--primary)]"/>
            <p className="text-[var(--primary)]">
              Backed By Results
            </p>
          </span>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
            Trusted by teams who can't afford downtime
          </h2>
        </div>

        {/* logo marquee, two rows scrolling opposite directions */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          className="relative mt-16 flex flex-col gap-6"
        >
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent md:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent md:w-40" />

          <Marquee items={clients} speed={30} />
          <Marquee items={clients} reverse speed={36} />
        </div>

        {/* trust badges strip */}
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="800"
          className="mt-20 grid grid-cols-2 gap-4 border-t border-[#d9e2f2] pt-16 sm:grid-cols-3"
        >
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                data-aos="zoom-in"
                data-aos-delay={250 + i * 100}
                data-aos-duration="600"
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center gap-3 rounded-2xl px-4 py-6 text-center transition-colors duration-300 hover:bg-[#346eec]/[0.04]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#346eec]/10 text-[#346eec] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#07101f] md:text-xl">
                    {badge.label}
                  </p>
                  <p className="text-xs text-[#52627a] md:text-sm">
                    {badge.sublabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;