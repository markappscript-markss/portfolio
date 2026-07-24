"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface IntroContextType {
  introComplete: boolean;
  setIntroComplete: (val: boolean) => void;
}

const IntroContext = createContext<IntroContextType>({
  introComplete: false,
  setIntroComplete: () => {},
});

export function useIntro() {
  return useContext(IntroContext);
}