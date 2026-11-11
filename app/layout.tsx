import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mark Poticar",
  alternateName: "Mark Portfolio",
  url: "https://markappscript.dev",
  jobTitle: [
    "AI Assisted Developer",
    "AI Developer",
    "AI Web Designer",
    "Web Designer",
    "Creative Technologist"
  ],
  description: "Mark Poticar's portfolio — AI assisted and AI powered web developer & designer creating high-performance web applications, 3D interactive experiences, and AI video ads.",
  knowsAbout: [
    "AI assisted",
    "AI powered",
    "AI developer",
    "AI assisted developer",
    "AI video ads",
    "AI Web designer",
    "Web designer",
    "Mark Portfolio"
  ],
  sameAs: [
    "https://github.com/markappscript-markss",
    "https://www.linkedin.com/in/mark-poticar/",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://markappscript.dev"),
  title: {
    default: "Mark Portfolio — AI Assisted Developer & AI Web Designer",
    template: "%s | Mark Portfolio",
  },
  description: "Mark Poticar's portfolio — AI assisted and AI powered web developer & designer creating high-performance web applications, 3D interactive experiences, and AI video ads.",
  keywords: [
    "AI assisted",
    "AI powered",
    "AI developer",
    "AI assisted developer",
    "AI video ads",
    "AI Web designer",
    "Web designer",
    "Mark Portfolio",
    "Mark Poticar"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mark Portfolio — AI Assisted Developer & AI Web Designer",
    description: "Mark Poticar's portfolio — AI assisted and AI powered web developer & designer creating high-performance web applications, 3D interactive experiences, and AI video ads.",
    url: "https://markappscript.dev",
    siteName: "Mark Portfolio",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Mark Portfolio — AI Assisted Developer & AI Web Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Portfolio — AI Assisted Developer & AI Web Designer",
    description: "Mark Poticar's portfolio — AI assisted and AI powered web developer & designer creating high-performance web applications, 3D interactive experiences, and AI video ads.",
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
                gtag('consent', 'default', {
                  'analytics_storage': 'denied'
                });
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <CookieBanner />
      </body>
    </html>
  );
}
