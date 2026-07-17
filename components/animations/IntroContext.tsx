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

export function IntroProvider({ children }: { children: ReactNode }) {
  const [introComplete, setIntroComplete] = useState(false);
  return (
    <IntroContext.Provider value={{ introComplete, setIntroComplete }}>
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  return useContext(IntroContext);
}