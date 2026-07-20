"use client";

import { motion } from "framer-motion";

export function StaggerContainer({ children, className = "", viewportMargin = "-100px" }: { children: React.ReactNode; className?: string; viewportMargin?: string }) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: viewportMargin }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.18, // Gap between each element's slide-in
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 100, damping: 16 }
                },
            }}
        >
            {children}
        </motion.div>
    );
}
