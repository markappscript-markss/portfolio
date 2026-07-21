"use client";

import { forwardRef } from "react";

interface RollupTextProps {
    className?: string;
}

export const RollupText = forwardRef<HTMLDivElement, RollupTextProps>(({ className = "" }, ref) => {
    return (
        <div
            ref={ref}
            className={`absolute inset-x-0 z-40 flex flex-col items-center justify-center p-1 md:p-2 text-center pointer-events-none space-y-0.5 md:space-y-1 ${className}`}
        >
            <h2 className="text-[0.14vw] sm:text-[0.16vw] md:text-[0.18vw] font-bold tracking-wider text-blue-950 uppercase">
                From forecasting shifts to shipping products.
            </h2>
            <h3 className="text-[0.25vw] sm:text-[0.30vw] md:text-[0.35vw] font-black tracking-tight text-slate-900 leading-snug">
                Automate the boring. <br /> Elevate the big picture.
            </h3>
        </div>
    );
});

RollupText.displayName = "RollupText";
