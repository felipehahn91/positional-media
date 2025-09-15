"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import React from "react";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hidden: { opacity: 0, y: 40, scale: 0.98 },
};

const AnimatedDiv = ({ children, delay = 0, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { ...variants.visible, transition: { ...variants.visible.transition, delay } },
        hidden: variants.hidden,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;