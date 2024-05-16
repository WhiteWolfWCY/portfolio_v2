"use client";

import { AnimatePresence, motion } from "framer-motion";
import Stairs from "./Stairs";

const StairTransition = () => {
  return (
    <>
      <AnimatePresence mode="wait">
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
