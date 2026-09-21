"use client";

import Earth from '../uilayouts/Earth'
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Mouse-reactive connecting-particle canvas, styled to match the dewOX
// blue palette (#3273ff / #5d91ff) instead of the original purple.
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null, radius: 180 };

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= forceDirectionX * force * 4;
            this.y -= forceDirectionY * force * 4;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.height * canvas.width) / 11000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 1.6 + 0.8;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const directionX = Math.random() * 0.3 - 0.15;
        const directionY = Math.random() * 0.3 - 0.15;
        const color = 'rgba(93, 145, 255, 0.6)'; // matches --primary-ish blue
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      init();
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance =
            (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y);

          if (distance < (canvas.width / 8) * (canvas.height / 8)) {
            const opacityValue = 1 - distance / 24000;
            ctx.strokeStyle = `rgba(50, 115, 255, ${Math.max(opacityValue, 0) * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      connect();
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60"
    />
  );
};

// Staggered entrance, same pattern as the Aether Flow hero's fadeUpVariants,
// driven by framer-motion instead of data-aos.
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15 + 0.1,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-[#071629]">
        <div className="pointer-events-none absolute inset-0 z-0" />

        <ParticleCanvas />

        {/* <Earth
          className="pointer-events-none absolute left-1/2 top-[58%] z-0 h-[min(82vw,680px)] w-[min(82vw,680px)] -translate-x-1/2 -translate-y-1/2 opacity-50 md:top-[56%]"
        /> */}

        <article className="relative z-10 mx-auto grid max-w-5xl gap-5 px-5 pt-20 text-center text-white md:pt-28">

          <motion.span
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[#3273ff]/40 bg-[#0f1c35]/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#9fc1ff]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#5d91ff] shadow-[0_0_12px_#5d91ff]" />
            Built for what is next
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="font-heading mx-auto max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.02em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] md:text-7xl"
          >
            Engineering the{' '}
            <span className="text-[var(--primary)]">
              digital backbone
            </span>{' '}
            of tomorrow&apos;s businesses
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="font-body mx-auto max-w-[60ch] text-center text-base leading-7 text-slate-200 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] md:text-lg"
          >
            dewOX designs distinctive brands, builds scalable web and mobile
            products, and deploys autonomous AI agents that work for you
            around the clock.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-3 pt-2"
          >
            <motion.a
              href="mailto:contact@dewox.com"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              whileTap={{ scale: 0.97 }}
              className="group relative flex w-fit items-center gap-3 overflow-hidden rounded-full bg-white py-1.5 pl-1.5 pr-6 text-sm font-medium text-white"
            >
              {/* expanding white fill, sweeps from the circle outward on hover */}
              <motion.span
                initial={{ scale: 0 }}
                animate={hovered ? { scale: 100 } : { scale: 0 }}
                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                className="pointer-events-none absolute left-[22px] top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)]"
              />

              {/* icon circle */}
              <motion.span
                animate={hovered ? { rotate: 45 } : { rotate: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white group-hover:bg-white group-hover:text-black"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </motion.span>

              {/* label, inverts color once the fill sweeps under it */}
              <motion.span
                animate={{ color: "#0a0a0a" }}
                transition={{ duration: 0.3, delay: hovered ? 0.15 : 0 }}
                className="relative z-10"
              >
                Let's Build Together
              </motion.span>
            </motion.a>
          </motion.div>

        </article>
      </div>
    </>
  )
}

export default Hero
