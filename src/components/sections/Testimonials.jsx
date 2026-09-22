"use client";
import { motion, AnimatePresence, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import b1 from '../../assets/images/b1.jpeg'
import b2 from '../../assets/images/b2.jpeg'
import b3 from '../../assets/images/b3.jpeg'
import b4 from '../../assets/images/b4.png'
import b5 from '../../assets/images/b5.png'



const testimonials = [
  {
    id: 1,
    name: "Wazeem",
    role: "Operation-director",
    company: "Emdad Logistics",
    rating: 5,
    quote:
      "Working with dewOX was a smooth and professional experience. Their team was responsive, technically strong, and committed to delivering quality work on time. We are highly satisfied with the results and look forward to continuing our partnership.",
    avatar:b3,
     location:"Dammam,KSA",
  },
  {
    id: 2,
    name: "Elena",
    role: "VP Product",
    company: "Elena",
    rating: 5,
    quote:
      "dewOX rebuilt our entire onboarding flow in six weeks. Design and engineering felt like one team from day one — we never had to translate between them.",
    avatar:b2,
    location:"TamilNadu,India",
  },
  {
    id: 3,
    name: "Marcus Webb",
    role: "Founder",
    company: "AutoAxis",
    rating: 5,
    quote:
      "Fast, sharp, and genuinely invested in the outcome — not just the deliverable. They pushed back when it mattered.",
    avatar:b1,
     location:"TamilNadu,India",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "Brightwave Media",
    rating: 5,
    quote:
      "They understood our brand voice from day one. The turn around was fast without cutting corners, and the results spoke for themselves.",
    avatar: b4,
    location: "Chennai, India",
  },
  {
    id: 5,
    name: "David Chen",
    role: "Co-Founder",
    company: "Nimbus Logistics",
    rating: 5,
    quote:
      "Working with this team felt like having an extension of our own. They caught issues we hadn't even flagged and delivered ahead of schedule.",
    avatar: b5,
    location: "Karnataka, India",
  },
  
  
];

const SWIPE_THRESHOLD = 120;

const TestimonialCard = ({ item, isFront, onSwipe }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  const opacity = useTransform(x, [-200, 0, 200], [0.4, 1, 0.4]);

  return (
    <motion.div
      style={{ x, rotate, opacity }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.6}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > SWIPE_THRESHOLD) {
          onSwipe(info.offset.x > 0 ? "right" : "left");
        }
      }}
      initial={{ scale: 0.94, y: 16, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={(direction) => ({
        x: direction === "right" ? 400 : -400,
        opacity: 0,
        rotate: direction === "right" ? 20 : -20,
        transition: { duration: 0.35, ease: "easeIn" },
      })}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileTap={isFront ? { cursor: "grabbing" } : {}}
      className={`absolute inset-0 flex flex-col justify-between rounded-3xl border border-[#d9e2f2] bg-white p-6 shadow-xl shadow-[#07101f]/5 md:p-10 ${
        isFront ? "cursor-grab" : "pointer-events-none"
      }`}
    >
      <div>
        <Quote className="h-8 w-8 text-[#346eec]" strokeWidth={1.5} />
        <p className="mt-4 break-words text-base leading-7 text-[#07101f] md:mt-6 md:text-xl md:leading-8">
          {item.quote}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 md:mt-8 md:flex-nowrap">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={item.avatar}
            alt={item.name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#07101f]">
              {item.name}
            </p>
            <p className="break-words text-xs text-[#52627a]">
              {item.role}, {item.company}
            </p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-[#346eec] text-[#346eec]"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const InteractiveTestimonials = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("left");

  const advance = (dir) => {
    setDirection(dir);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const goTo = (index) => {
    setDirection(index > active ? "left" : "right");
    setActive(index);
  };

  // build a stack of the next 3 cards, front to back
  const stack = [0, 1, 2].map((offset) => {
    const idx = (active + offset) % testimonials.length;
    return { ...testimonials[idx], stackIndex: offset };
  });

  return (
    <section
      id="reviews"
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative overflow-hidden bg-[#f7f9fd] px-5 py-24 text-[#07101f] md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="800"
        >
              <span
            data-aos="fade-down"
            data-aos-duration="700"
            className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[var(--primary)]  px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#9fc1ff]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]  text-[var(--primary)]"/>
            <p className="text-[var(--primary)]">
              Client Voices
            </p>
          </span> 
        
          <h2 className="max-w-md text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
            Don't take our word for it
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-[#52627a] md:text-lg">
            Drag the card, or use the arrows below, to hear from the teams
            we've worked with.
          </p>

          {/* controls */}
          <div className="mt-10 flex items-center gap-4">
            <button
              onClick={() => advance("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9e2f2] text-[#07101f] transition-colors hover:border-[#346eec] hover:text-[#346eec]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => advance("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#346eec] text-white transition-colors hover:bg-[#2f5fd1]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* dot indicators */}
            <div className="ml-2 flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="relative h-2 w-2 rounded-full bg-[#d9e2f2]"
                >
                  {active === i && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute inset-0 rounded-full bg-[#346eec]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* card stack */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="800"
          className="relative h-[470px] w-full sm:h-[400px] md:h-[380px]"
        >
          {stack
            .slice()
            .reverse()
            .map((item) => (
              <div
                key={item.id}
                className="absolute inset-0"
                style={{
                  transform: `scale(${1 - item.stackIndex * 0.05}) translateY(${item.stackIndex * 14}px)`,
                  zIndex: 10 - item.stackIndex,
                }}
              >
                <AnimatePresence custom={direction} mode="popLayout">
                  {item.stackIndex === 0 ? (
                    <TestimonialCard
                      key={item.id}
                      item={item}
                      isFront
                      onSwipe={advance}
                    />
                  ) : (
                    <TestimonialCard key={item.id} item={item} isFront={false} onSwipe={() => {}} />
                  )}
                </AnimatePresence>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveTestimonials;