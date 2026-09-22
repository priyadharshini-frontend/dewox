"use client";

import logo from "../../assets/images/logo2.png";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Our Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],

  Services: [
    { label: "Brand & Design", href: "#services" },
    { label: "Web Engineering", href: "#services" },
    { label: "AI Agents", href: "#ai-agents" },
    { label: "Digital Marketing", href: "#services" },
  ],
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedin,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: FaGithub,
  },
];

const StickyFooter = () => {
  return (
    <div className="relative z-0 min-h-screen">
      <div className="sticky top-0 min-h-screen">
        <Footer />
      </div>
    </div>
  );
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#030712] px-5 py-6 text-white md:px-8 lg:px-12"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(52,110,236,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(52,110,236,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      />

      {/* Main glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#346eec]/10 blur-[160px]" />

      {/* Small glow */}
      <div className="pointer-events-none absolute bottom-0 right-[-150px] h-[400px] w-[400px] rounded-full bg-[#346eec]/5 blur-[130px]" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative mx-auto flex min-h-[calc(100vh-48px)] w-full max-w-[1450px] flex-col">
        {/* ================= TOP BAR ================= */}

        <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
          <a href="#" className="group">
            <img
              src={logo}
              alt="dewOX"
              className="h-8 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80 md:h-9"
            />
          </a>

          <div className="flex items-center gap-2 text-xs text-white/40">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#346eec] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#346eec]" />
            </span>

            Available for new projects
          </div>
        </div>

        {/* ================= HERO CTA ================= */}

        <div className="relative flex flex-1 flex-col justify-center py-16 md:py-24 lg:py-28">
          <div className="max-w-5xl">
            {/* Label */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#346eec]/30 bg-[#346eec]/5 px-4 py-2"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#6f9cff]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9fc1ff]">
                Let&apos;s build something
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl "
            >
             
              <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
               Turn your idea into reality.
            </h2>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-xl text-sm leading-7 text-white/45 md:text-base"
            >
              From strategy and design to engineering and AI — we build
              digital products that are designed to perform, scale and last.
            </motion.p>

            {/* CTA */}

            <motion.a
              href="mailto:info@dewoxsolution.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#346eec] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(52,110,236,0.18)] transition-all duration-300 hover:bg-[#467cf0] md:px-7 md:py-4 md:text-base"
            >
              Start a conversation

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
          </div>
        </div>

        {/* ================= LINKS ================= */}

        <div className="grid grid-cols-2 gap-x-10 gap-y-12 border-t border-white/[0.08] py-12 md:grid-cols-4 lg:py-14">
          {/* Brand */}

          <div className="col-span-2 md:col-span-1">
            <img
              src={logo}
              alt="dewOX"
              className="h-7 w-auto object-contain opacity-90"
            />

            <p className="mt-5 max-w-[230px] text-sm leading-6 text-white/35">
              Design, engineering and intelligence — built together as one
              digital system.
            </p>

            <a
              href="mailto:info@dewoxsolution.com"
              className="mt-6 inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" />
              info@dewoxsolution.com
            </a>
          </div>

          {/* Link columns */}

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                {heading}
              </p>

              <ul className="mt-5 space-y-3.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}

                      <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Connect
            </p>

            <div className="mt-5 flex flex-col gap-3.5">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" />

                    {social.label}

                    <ArrowUpRight className="ml-0.5 h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= GIANT WORDMARK ================= */}

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030712] to-transparent" />

          <motion.h3
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="select-none whitespace-nowrap text-center text-[25vw] font-black leading-[0.72] tracking-[-0.08em] text-white/[0.035] sm:text-[20vw] md:text-[16vw]"
          >
            dewOX
          </motion.h3>
        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="relative flex flex-col items-center justify-between gap-5 border-t border-white/[0.08] py-6 sm:flex-row">
          <p className="text-[11px] text-white/30">
            © {new Date().getFullYear()} dewOX. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[11px] text-white/30 transition-colors hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[11px] text-white/30 transition-colors hover:text-white"
            >
              Terms
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/40 transition-all duration-300 hover:border-[#346eec]/40 hover:bg-[#346eec]/10 hover:text-white"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StickyFooter;