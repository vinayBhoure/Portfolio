"use client";

import type { ReactNode } from 'react';
import { useRef } from "react";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";


interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string | number | { top?: number | string; right?: number | string; bottom?: number | string; left?: number | string };
  blur?: string;
}
//helper function
const convertMarginToString = (
  margin: string | number | { top?: number | string; right?: number | string; bottom?: number | string; left?: number | string }
): string => {
  if (typeof margin === "string" || typeof margin === "number") {
    return margin.toString();
  }
  const { top = 0, right = 0, bottom = 0, left = 0 } = margin;
  return `${top}px ${right}px ${bottom}px ${left}px`;
};

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Convert the inViewMargin to a string.
  const marginString = convertMarginToString(inViewMargin);

  const inViewResult = useInView(ref, { once: true, margin: marginString as any });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BlurFade;