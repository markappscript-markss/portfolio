"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const PHOTO_URL =
    "https://dvjprjyzyjekefsiujrq.supabase.co/storage/v1/object/public/Extra%20files/mememe.jpg";

const EDGE = "#0a0a0a"; 

export default function HeroPhoto() {
    const { scrollY } = useScroll();

    const opacity = useTransform(scrollY, [400, 550, 800, 950], [0, 1, 1, 0]);

    return (
        <motion.div
            style={{ opacity }}
            className="hidden md:block w-64 lg:w-80 relative overflow-hidden"
        >
            <img
                src={PHOTO_URL}
                alt="Mark"
                className="w-full h-auto object-cover object-top block"
                draggable={false}
            />
            <div className="absolute inset-y-0 left-0 w-16 pointer-events-none"
                style={{ background: `linear-gradient(to right, ${EDGE}, transparent)` }} />
            <div className="absolute inset-y-0 right-0 w-16 pointer-events-none"
                style={{ background: `linear-gradient(to left, ${EDGE}, transparent)` }} />
            <div className="absolute inset-x-0 top-0 h-20 pointer-events-none"
                style={{ background: `linear-gradient(to bottom, ${EDGE}, transparent)` }} />
            <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
                style={{ background: `linear-gradient(to top, ${EDGE}, transparent)` }} />
        </motion.div>
    );
}
