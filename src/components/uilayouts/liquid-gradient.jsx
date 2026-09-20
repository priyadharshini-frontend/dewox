"use client";
import { AnimatePresence, motion } from "motion/react";
const svgOrder = ["svg1", "svg2", "svg3", "svg4", "svg3", "svg2", "svg1"];
const createStopsArray = (svgStates, svgOrder, maxStops) => {
  const stopsArray = [];
  for (let i = 0; i < maxStops; i++) {
    const stopConfigurations = svgOrder.map((svgKey) => {
      const svg = svgStates[svgKey];
      return svg.stops[i] || svg.stops[svg.stops.length - 1];
    });
    stopsArray.push(stopConfigurations);
  }
  return stopsArray;
};
const Colors = {
  color1: '#FFFFFF',
  color2: '#1E10C5',
  color3: '#9089E2',
  color4: '#FCFCFE',
  color5: '#F9F9FD',
  color6: '#B2B8E7',
  color7: '#0E2DCB',
  color8: '#0017E9',
  color9: '#4743EF',
  color10: '#7D7BF4',
  color11: '#0B06FC',
  color12: '#C5C1EA',
  color13: '#1403DE',
  color14: '#B6BAF6',
  color15: '#C1BEEB',
  color16: '#290ECB',
  color17: '#3F4CC0',
};
const GradientSvg = ({ className, isHovered }) => {
  const svgStates = {
    svg1: {
      gradientTransform:
        "translate(287.5 280) rotate(-29.0546) scale(689.807 1000)",
      stops: [
        { offset: 0, stopColor: Colors.color1 },
        { offset: 0.188423, stopColor: Colors.color2 },
        { offset: 0.260417, stopColor: Colors.color3 },
        { offset: 0.328792, stopColor: Colors.color4 },
        { offset: 0.328892, stopColor: Colors.color5 },
        { offset: 0.328992, stopColor: Colors.color1 },
        { offset: 0.442708, stopColor: Colors.color6 },
        { offset: 0.537556, stopColor: Colors.color7 },
        { offset: 0.631738, stopColor: Colors.color1 },
        { offset: 0.725645, stopColor: Colors.color8 },
        { offset: 0.817779, stopColor: Colors.color9 },
        { offset: 0.84375, stopColor: Colors.color10 },
        { offset: 0.90569, stopColor: Colors.color1 },
        { offset: 1, stopColor: Colors.color11 },
      ],
    },
    svg2: {
      gradientTransform:
        "translate(126.5 418.5) rotate(-64.756) scale(533.444 773.324)",
      stops: [
        { offset: 0, stopColor: Colors.color1 },
        { offset: 0.104167, stopColor: Colors.color12 },
        { offset: 0.182292, stopColor: Colors.color13 },
        { offset: 0.28125, stopColor: Colors.color1 },
        { offset: 0.328792, stopColor: Colors.color4 },
        { offset: 0.328892, stopColor: Colors.color5 },
        { offset: 0.453125, stopColor: Colors.color6 },
        { offset: 0.515625, stopColor: Colors.color7 },
        { offset: 0.631738, stopColor: Colors.color1 },
        { offset: 0.692708, stopColor: Colors.color8 },
        { offset: 0.75, stopColor: Colors.color14 },
        { offset: 0.817708, stopColor: Colors.color9 },
        { offset: 0.869792, stopColor: Colors.color10 },
        { offset: 1, stopColor: Colors.color1 },
      ],
    },
    svg3: {
      gradientTransform:
        "translate(264.5 339.5) rotate(-42.3022) scale(946.451 1372.05)",
      stops: [
        { offset: 0, stopColor: Colors.color1 },
        { offset: 0.188423, stopColor: Colors.color2 },
        { offset: 0.307292, stopColor: Colors.color1 },
        { offset: 0.328792, stopColor: Colors.color4 },
        { offset: 0.328892, stopColor: Colors.color5 },
        { offset: 0.442708, stopColor: Colors.color15 },
        { offset: 0.537556, stopColor: Colors.color16 },
        { offset: 0.631738, stopColor: Colors.color1 },
        { offset: 0.725645, stopColor: Colors.color17 },
        { offset: 0.817779, stopColor: Colors.color9 },
        { offset: 0.84375, stopColor: Colors.color10 },
        { offset: 0.90569, stopColor: Colors.color1 },
        { offset: 1, stopColor: Colors.color11 },
      ],
    },
    svg4: {
      gradientTransform:
        "translate(860.5 420) rotate(-153.984) scale(957.528 1388.11)",
      stops: [
        { offset: 0.109375, stopColor: Colors.color11 },
        { offset: 0.171875, stopColor: Colors.color2 },
        { offset: 0.260417, stopColor: Colors.color13 },
        { offset: 0.328792, stopColor: Colors.color4 },
        { offset: 0.328892, stopColor: Colors.color5 },
        { offset: 0.328992, stopColor: Colors.color1 },
        { offset: 0.442708, stopColor: Colors.color6 },
        { offset: 0.515625, stopColor: Colors.color7 },
        { offset: 0.631738, stopColor: Colors.color1 },
        { offset: 0.692708, stopColor: Colors.color8 },
        { offset: 0.817708, stopColor: Colors.color9 },
        { offset: 0.869792, stopColor: Colors.color10 },
        { offset: 1, stopColor: Colors.color11 },
      ],
    },
  };
  const maxStops = Math.max(
    ...Object.values(svgStates).map((svg) => svg.stops.length),
  );
  const stopsAnimationArray = createStopsArray(svgStates, svgOrder, maxStops);
  const gradientTransform = svgOrder.map(
    (svgKey) => svgStates[svgKey].gradientTransform,
  );
  const variants = {
    hovered: {
      gradientTransform: gradientTransform,
      transition: {
        duration: 50,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
    notHovered: {
      gradientTransform: gradientTransform,
      transition: {
        duration: 10,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  };
  return (
    <svg
      className={className}
      width="1030"
      height="280"
      viewBox="0 0 1030 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        width="1030"
        height="280"
        rx="140"
        fill="url(#paint0_radial_905_231)"
      />
      <defs>
        <motion.radialGradient
          id="paint0_radial_905_231"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          animate={isHovered ? variants.hovered : variants.notHovered}>
          {stopsAnimationArray.map((stopConfigs, index) => (
            <AnimatePresence key={index}>
              <motion.stop
                initial={{
                  offset: stopConfigs[0].offset,
                  stopColor: stopConfigs[0].stopColor,
                }}
                animate={{
                  offset: stopConfigs.map((config) => config.offset),
                  stopColor: stopConfigs.map((config) => config.stopColor),
                }}
                transition={{
                  duration: 0,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </AnimatePresence>
          ))}
        </motion.radialGradient>
      </defs>
    </svg>
  );
};
export const Liquid = ({ isHovered,  buttonType }) => {
  return (
    <>
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={index}
          className={`absolute ${index < 3 ? "w-[443px] h-[121px]" : "w-[756px] h-[207px]"} ${
            index === 0
              ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
              : index === 1
                ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[164.971deg] mix-blend-difference"
                : index === 2
                  ? "top-1/2 left-1/2 -translate-x-[53%] -translate-y-[53%] rotate-[-11.61deg] mix-blend-difference"
                  : index === 3
                    ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-[57%] rotate-[-179.012deg] mix-blend-difference"
                    : index === 4
                      ? "top-1/2 left-1/2 -translate-x-[57%] -translate-y-1/2 rotate-[-29.722deg] mix-blend-difference"
                      : index === 5
                        ? "top-1/2 left-1/2 -translate-x-[62%] -translate-y-[24%] rotate-[160.227deg] mix-blend-difference"
                        : "top-1/2 left-1/2 -translate-x-[67%] -translate-y-[29%] rotate-180 mix-blend-hard-light"
          }`}>
          <GradientSvg
            className="w-full h-full"
            isHovered={isHovered}
            Colors={Colors}
          />
        </div>
      ))}
    </>
  );
};