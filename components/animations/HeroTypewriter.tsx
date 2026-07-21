"use client";

import { useRef } from "react";
import Typewriter from "typewriter-effect";
import { useInView } from "framer-motion";

export default function HeroTypewriter() {
  const ref = useRef<HTMLSpanElement>(null);
  
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              // NEW: Hold on the final phrase for 15 seconds
              .pauseFor(15000)
              // NEW: Delete it so the loop can start fresh
              .deleteAll()
              .start();
          }}
          options={{
            cursor: "|",
            autoStart: true,
            // CHANGED: Set to true so it runs forever
            loop: true,
            delay: 60,
            deleteSpeed: 40,
          }}
        />
      )}
    </span>
  );
}
