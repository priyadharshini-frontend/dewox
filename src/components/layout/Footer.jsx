import logo from '../../assets/images/logo.png'
import { motion } from "motion/react";
import {
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  Company: ["About", "Work", "Process", "Careers"],
  Services: ["Brand & Design", "Web Engineering", "AI Agents", "Strategy"],
  Resources: ["Blog", "Case Studies", "FAQ", "Contact"],
};

const StickyFooter = () => {
  return (
    <div className="relative z-0 h-screen">
      <div className="sticky top-0 h-screen">
        <Footer />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative flex h-screen flex-col justify-between overflow-hidden bg-[#050a14] px-5 pb-8 pt-20 text-white md:px-10 md:pt-24">
      {/* faint glow, ties back to the AI section aesthetic */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#346eec]/10 blur-[140px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between">
        {/* top: CTA */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-16 md:flex-row md:items-end"
        >
          <div>
               <span
            data-aos="fade-down"
            data-aos-duration="700"
            className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[var(--primary)]  px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#9fc1ff]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]  text-[var(--primary)]"/>
            <p className="text-[var(--primary)]">
            Let's Build
            </p>
          </span>
            <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
              Got a project in mind?
            </h2>
          </div>

          <motion.a
            href="mailto:hello@dewox.com"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="group flex shrink-0 items-center gap-3 rounded-full bg-[#346eec] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#2f5fd1] md:text-base"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        {/* middle: link columns */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
          className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-4"
        >
          <div>
            <div className="logo flex items-center rounded-lg bg-white/5 p-2 shadow-[0_0_18px_rgba(255,255,255,0.08)]">
                    <img src={logo} alt="logo" className="h-8 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] brightness-110 contrast-125" />
            
                </div>
            <p className="mt-3 max-w-[180px] text-sm leading-6 text-white/50">
              Design, engineering, and intelligence — built as one system.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div
              key={heading}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                {heading}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link}
                      <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom: giant wordmark + meta row */}
        <div className="mt-auto">
          <h3
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="800"
            className="select-none text-center text-[16vw] font-black leading-[0.8] tracking-[-0.04em] text-white/[0.06] sm:text-[13vw] md:text-[11vw]"
          >
            dewOX
          </h3>

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="800"
            className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row"
          >
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} dewOX. All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-xs text-white/40">
              <a href="#" className="hover:text-white/70">
                Privacy
              </a>
              <a href="#" className="hover:text-white/70">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StickyFooter;