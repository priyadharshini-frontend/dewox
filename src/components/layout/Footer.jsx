"use client";
import logo from '../../assets/images/logo.png'
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowUp,
  GitBranch,
  
} from "lucide-react";
import { useState } from "react";

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Careers", href: "#contact" },
  ],
  Services: [
    { label: "Brand & Design", href: "#services" },
    { label: "Web Engineering", href: "#services" },
    { label: "AI Agents", href: "#ai-agents" },
    { label: "Strategy", href: "#manifesto" },
  ],
  Connect: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter / X", href: "https://twitter.com" },
    { label: "GitHub", href: "https://github.com", icon: GitBranch },
  ],
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
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // wire this up to your actual mailing list endpoint
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer
      id="contact"
      className="relative flex h-screen flex-col justify-between overflow-hidden bg-[#050a14] px-5 pb-8 pt-20 text-white md:px-10 md:pt-24"
    >
      {/* faint grid, ties back to the values-scroll header aesthetic */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#346eec0d_1px,transparent_1px),linear-gradient(to_bottom,#346eec0d_1px,transparent_1px)] bg-size-[14px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]" />

      {/* glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#346eec]/10 blur-[140px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between">
        {/* top: CTA + newsletter */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-16 lg:flex-row lg:items-end"
        >
          <div>
            <span
              data-aos="fade-down"
              data-aos-duration="700"
              className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[var(--primary)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#9fc1ff]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] text-[var(--primary)]" />
              <p className="text-[var(--primary)]">Let's Build</p>
            </span>
            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
              Got a project in mind?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/50 md:text-base">
              Tell us where you're stuck or what you're building — we'll reply within one business day.
            </p>
          </div>

          <div className="flex w-full max-w-sm flex-col gap-4 lg:items-end">
            <motion.a
              href="mailto:hello@dewox.com"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#346eec] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#2f5fd1] md:text-base"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            {/* newsletter signup */}
            {/* <form onSubmit={handleSubscribe} className="w-full">
              {submitted ? (
                <p className="text-sm text-[#9fc1ff]">You're on the list — thanks.</p>
              ) : (
                <div className="flex w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pl-5 pr-1.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Get occasional updates"
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#07101f] transition-colors hover:bg-white/90"
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </form> */}
          </div>
        </div>

        {/* middle: link columns */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
          className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-4"
        >
          <div>
            <div className="logo flex w-fit items-center">
              <img
                src={logo}
                alt="logo"
                className="h-8 w-auto object-contain "
              />
            </div>
            <p className="mt-3 max-w-[200px] text-sm leading-6 text-white/50">
              Design, engineering, and intelligence — built as one system.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                {heading}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.icon && <link.icon className="h-3.5 w-3.5" />}
                      {link.label}
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
          <div className="relative flex items-end justify-center">
            <h3
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="800"
              className="select-none text-center text-[16vw] font-black leading-[0.8] tracking-[-0.04em] text-white/[0.06] sm:text-[13vw] md:text-[11vw]"
            >
              dewOX
            </h3>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-colors hover:border-[#346eec]/40 hover:text-white"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

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