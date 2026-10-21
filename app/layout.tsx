import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mark Poticar",
  url: "https://markappscript.dev",
  jobTitle: "Creative Technologist & Full Stack Developer",
  sameAs: [
    "https://github.com/markappscript-markss",
    "https://www.linkedin.com/in/mark-poticar/",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://markappscript.dev"),
  title: {
    default: "MARK | Portfolio",
    template: "%s | MARK",
  },
  description: "Build, Design, Render, Deploy.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MARK | Portfolio",
    description: "Build, Design, Render, Deploy.",
    url: "https://markappscript.dev",
    siteName: "MARK | Portfolio",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "MARK | Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARK | Portfolio",
    description: "Build, Design, Render, Deploy.",
    images: ["/hero.png"],
  },
  icons: {
    icon: [
      { url: "/images/favicon.png" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${inter.className} antialiased bg-white text-neutral-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}