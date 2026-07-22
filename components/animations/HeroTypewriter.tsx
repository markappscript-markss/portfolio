"use client";

import { useRef } from "react";
import Typewriter from "typewriter-effect";
import { useInView } from "framer-motion";

export default function HeroTypewriter() {
  const ref = useRef<HTMLSpanElement>(null);
  
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <span ref={ref} className="inline-block min-w-[2px] min-h-[1em]">
      {isInView && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Team Leader")
              .pauseFor(900)
              .deleteAll()
              .typeString("Real-time Analyst")
              .pauseFor(900)
              .deleteAll()
              .typeString("Workforc")
              .pauseFor(10)
              .deleteAll()
              .typeString("AI-assisted Developer.")
              .pauseFor(15000)
              .deleteAll()
              .start();
          }}
          options={{
            cursor: "|",
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 40,
          }}
        />
      )}
    </span>
  );
}
