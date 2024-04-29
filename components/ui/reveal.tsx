"use client"

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  duration?: "0.2" | "0.4" | "0.6" | "0.8";
  delay?: number;
  x?: number;
  y?: number;
}

export const Reveal = ({ children, width = "fit-content", delay, x, y }: Props) => {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: true})

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView])

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: x, y: y },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.2, delay: delay}}
      >
        {children}
      </motion.div>
    </div>
  );
};
