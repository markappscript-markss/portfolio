import { IntroProvider } from "@/components/animations/IntroContext";
import SmoothScroll from "@/components/animations/SmoothScroll";
import "./globals.css";

export const metadata = {
  title: "Mark — Portfolio",
  description: "AI-assisted developer — web, ads, and everything between",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs before paint to avoid a flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var stored = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var dark = stored ? stored === 'dark' : prefersDark;
                if (dark) document.documentElement.classList.add('dark');
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">
        <SmoothScroll>
          <IntroProvider>
            {children}
          </IntroProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
