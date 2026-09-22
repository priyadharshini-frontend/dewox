"use client";
import { useEffect, useRef } from "react";
import { animate, scroll, spring } from "motion";
import { ReactLenis } from "lenis/react";
import a1 from '../../assets/images/a1.jpeg'
import a2 from '../../assets/images/a2.jpeg'
import a3 from '../../assets/images/a3.jpeg'
import a4 from '../../assets/images/a4.jpeg'
import a5 from '../../assets/images/a5.jpeg'
import a6 from '../../assets/images/a6.jpeg'
import a7 from '../../assets/images/a7.jpeg'

const values = [
  {
    word: "SaaS & Technology",
    description: "Every pixel earns its place.",
    bg:a1,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop",
  },
  {
    word: "E-commerce & DTC",
    description: "Built to scale, not just to ship.",
    bg: a3,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop",
  },
  {
    word: "Healthcare & Wellness",
    description: "Agents that work while you sleep.",
    bg:a4,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
  },
  {
    word: "Finance & Fintech",
    description: "From first user to millionth.",
    bg: a2,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
  },
  {
    word: "Logistics & Operations",
    description: "On time, every time, no excuses.",
    bg:a5,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop",
  },
   {
    word: "Professional Services",
    description: "On time, every time, no excuses.",
    bg: a6,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop",
  },
   {
    word: "And More...",
    description: "On time, every time, no excuses.",
    bg:a7,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop",
  },
];

export default function ValuesScroll() {
  const sectionRef = useRef(null);
  const ulRef = useRef(null);
  const headerRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const ul = ulRef.current;
    if (!section || !ul) return;

    const items = ul.querySelectorAll("li");

    const controls = animate(
      ul,
      { transform: ["none", `translateX(-${(items.length - 1) * 100}vw)`] },
      { easing: spring() }
    );
    const cancelMain = scroll(controls, { target: section });

    const segmentLength = 1 / items.length;
    const cancelHeaders = headerRefs.current
      .filter(Boolean)
      .map((header, i) =>
        scroll(animate([header], { x: [800, -800] }), {
          target: section,
          offset: [
            [i * segmentLength, 1],
            [(i + 1) * segmentLength, 0],
          ],
        })
      );

    return () => {
      cancelMain?.();
      cancelHeaders.forEach((c) => c?.());
    };
  }, []);

  return (
    <ReactLenis root>
      <article id="values" className="hidden md:block">
        <header
          data-aos="fade-up"
          data-aos-duration="800"
          className="relative grid h-[60vh] w-full place-content-center bg-white text-[#07101f]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#346eec14_1px,transparent_1px),linear-gradient(to_bottom,#346eec14_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />


     <span
            data-aos="fade-down"
            data-aos-duration="700"
            className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[var(--primary)]  px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#9fc1ff]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]  text-[var(--primary)]"/>
            <p className="text-[var(--primary)]">
              Everywhere We've Been

            </p>
          </span>
         
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            className="relative text-center text-5xl font-bold tracking-[-0.02em] md:text-6xl"
          >
            Industries we've shaped, one project at a time
 <br />
            scroll to explore
          </h1>
        </header>

        <section ref={sectionRef} className="relative h-[500vh]">
          <ul ref={ulRef} className="sticky top-0 flex">
            {values.map((v, i) => (
              <li
                key={v.word}
                style={
                  v.bg && !v.bg.startsWith("bg-")
                    ? {
                        backgroundImage: `url(${v.bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : undefined
                }
                className={`relative flex h-screen w-screen shrink-0 flex-col items-center justify-center overflow-hidden ${
                  v.bg?.startsWith("bg-") ? v.bg : ""
                }`}
              >
                <h2
                  ref={(el) => (headerRefs.current[i] = el)}
                  className="relative bottom-5 inline-block text-[16vw] font-black leading-none tracking-[-0.02em] text-white/95 md:text-[14vw]"
                >
                  {v.word}
                </h2>
                <p className="relative z-10 mt-2 text-sm font-medium text-white/80 md:text-base">
                  {v.description}
                </p>
               
              </li>
            ))}
          </ul>
        </section>
      </article>
    </ReactLenis>
  );
}