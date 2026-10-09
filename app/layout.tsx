import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://markappscript.dev"),
  title: "MARK | Portfolio",
  description: "Build, Design, Render, Deploy.",
  openGraph: {
    title: "MARK | Portfolio",
    description: "Build, Design, Render, Deploy.",
    url: "https://markappscript.dev",
    siteName: "MARK | Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARK | Portfolio",
    description: "Build, Design, Render, Deploy.",
  },
  icons: {
    icon: [
      { url: "/images/favicon.png" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#e3e3db",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${inter.className} antialiased bg-white text-neutral-900`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}