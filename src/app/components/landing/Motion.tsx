import { motion } from 'motion/react';
import { ReactNode } from 'react';

// A simple wrapper to make using motion easier and cleaner in other components
// avoiding "use client" issues or import confusion if structure changes
interface MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const FadeInUp = ({ children, delay = 0, className = "" }: MotionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({ children, delay = 0, className = "" }: MotionProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className={className}
  >
    {children}
  </motion.div>
);
