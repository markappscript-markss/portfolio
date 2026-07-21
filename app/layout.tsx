import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
import SmoothScroll from "@/components/animations/SmoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark | AI-Assisted Developer",
  description: "Web, ads, and everything between — built to look intentional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: "smooth" }}>
      <body className={`${inter.className} antialiased bg-neutral-950 text-neutral-50`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <SpeedInsights />
      </body>
    </html>
  );
}