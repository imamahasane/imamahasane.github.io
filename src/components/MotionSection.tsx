"use client";

import { motion, useReducedMotion } from "framer-motion";

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export default function MotionSection({
  children,
  className,
  index = 0,
}: MotionSectionProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {children}
    </motion.div>
  );
}
