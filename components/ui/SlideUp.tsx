"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function SlideUp({
  children,
}: Props) {
  return (
    <motion.div
      initial={{
        y: 60,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}
