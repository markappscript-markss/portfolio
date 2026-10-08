"use client";

import Magnetic from "@/components/animations/Magnetic";

export default function Header() {
  return (
    <header id="header-nav" className="fixed top-0 left-0 right-0 z-20 w-full h-20 bg-transparent px-6 sm:px-12 flex items-center justify-between pointer-events-none opacity-0">
      <div className="pointer-events-auto">
        <Magnetic strength={0.2}>
          <div className="flex items-baseline select-none">
            <span className="font-bold tracking-tight text-sm sm:text-base text-black">
              markappscript
            </span>
            <span className="font-bold tracking-tight text-sm sm:text-base text-purple-600">
              .dev
            </span>
          </div>
        </Magnetic>
      </div>

      <div className="pointer-events-auto flex items-center gap-6 text-sm text-neutral-700">
      </div>
    </header>
  );
}
