import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | MARK",
  description: "Privacy policy for markappscript.dev portfolio website.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-12 sm:px-12 md:px-20 font-sans selection:bg-[#ff2222] selection:text-white">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <div className="flex justify-end border-b border-white/10 pb-6">
          <Link
            href="/"
            className="font-mono text-xs sm:text-sm text-white/60 hover:text-[#ff2222] transition-colors inline-flex items-center gap-2"
          >
            [Close ✕]
          </Link>
        </div>

        <header className="flex flex-col gap-2 border-b border-white/10 pb-6">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs sm:text-sm text-white/50">
            Last Updated: November 2026
          </p>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-white tracking-wide">
            1. Overview
          </h2>
          <p className="text-sm leading-relaxed text-white/75">
            This portfolio website (markappscript.dev) is maintained by Mark Poticar. This policy outlines how information is handled when you visit the site.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-white tracking-wide">
            2. Information Collection
          </h2>
          <p className="text-sm leading-relaxed text-white/75">
            This website does not require registration, login, account creation, or payment processing. No personal financial information is ever collected or stored.
          </p>
          <p className="text-sm leading-relaxed text-white/75">
            The site utilizes Google Analytics to aggregate anonymous usage statistics, which may include browser type, device information, operating system, approximate geographic location, referral source, and pages viewed.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-white tracking-wide">
            3. Cookies and Analytics
          </h2>
          <p className="text-sm leading-relaxed text-white/75">
            Google Analytics places first-party cookies (such as _ga) in your browser to differentiate unique sessions and visitors.
          </p>
          <p className="text-sm leading-relaxed text-white/75">
            You can choose whether to accept or decline analytics cookies using the on-site cookie banner or through your browser settings. Declining analytics does not affect your ability to browse and explore the portfolio.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-white tracking-wide">
            4. Third-Party Services
          </h2>
          <p className="text-sm leading-relaxed text-white/75">
            Analytics data is processed by Google LLC in accordance with Google&apos;s privacy practices. You can learn more at{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 hover:text-[#ff2222] transition-colors"
            >
              policies.google.com/privacy
            </a>
            .
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-white tracking-wide">
            5. Contact
          </h2>
          <p className="text-sm leading-relaxed text-white/75">
            For questions regarding this policy or the website, contact{" "}
            <a
              href="mailto:markappscript@gmail.com"
              className="text-white underline underline-offset-4 hover:text-[#ff2222] transition-colors"
            >
              markappscript@gmail.com
            </a>
            .
          </p>
        </section>

        <div className="pt-8 border-t border-white/10 flex justify-between items-center text-xs font-mono text-white/50">
          <span>markappscript.dev</span>
        </div>
      </div>
    </main>
  );
}
