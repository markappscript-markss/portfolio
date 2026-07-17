import { supabase } from "@/lib/supabase";
import ProjectGrid from "@/components/ProjectGrid";
import FadeInSection from "@/components/FadeInSection";
import TextReveal from "@/components/animations/TextReveal";
import PageIntro from "@/components/animations/PageIntro";
import NavBar from "@/components/NavBar";
import SpringButton from "@/components/animations/SpringButton";

export const revalidate = 60; 

export default async function Home() {
  const [{ data: categories }, { data: projects }] = await Promise.all([
    supabase.from("categories").select("*").order("sort_order"),
    supabase.from("projects").select("*").order("sort_order"),
  ]);

  const featured = (projects ?? []).find((p) => p.featured);

  return (
    <>
      <NavBar />
      <PageIntro />

      <div className="relative z-10 bg-white dark:bg-neutral-950 w-full min-h-screen">
        <div className="absolute left-0 right-0 h-40 -top-40 bg-gradient-to-b from-transparent to-white dark:to-neutral-950 pointer-events-none" />
        
        <main className="max-w-5xl mx-auto px-6 py-24">
          
          <section className="mb-20 max-w-3xl">
            <TextReveal delay={0}>
              <span className="inline-block text-xs font-medium tracking-wide uppercase text-purple-600 dark:text-purple-400 mb-4">
                AI-assisted developer
              </span>
            </TextReveal>

            <TextReveal delay={0.15}>
              <h1 className="text-4xl sm:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 dark:text-neutral-50 mb-6">
                {featured ? (
                  featured.title
                ) : (
                  <>
                    WFM/RTA. Team Leader. I excel...wait, no.
                    <br className="hidden sm:block" />{" "}
                    <span className="text-purple-600 dark:text-purple-400">
                      Building products that don't look like everyone else's.
                    </span>
                  </>
                )}
              </h1>
            </TextReveal>

            <TextReveal delay={0.3}>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mb-8">
                {featured?.description ??
                  "Web, ads, and everything between — built to look intentional, not templated."}
              </p>
            </TextReveal>

            <TextReveal delay={0.45}>
              <div className="flex gap-3">
                <SpringButton
                  href="#work"
                  className="px-5 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-purple-600 dark:text-white text-sm font-medium"
                >
                  See the work
                </SpringButton>
                <SpringButton
                  href="#contact"
                  className="px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
                >
                  Let's talk
                </SpringButton>
              </div>
            </TextReveal>
          </section>

          <div id="work" className="mb-24">
            <ProjectGrid categories={categories ?? []} projects={projects ?? []} />
          </div>

          <FadeInSection>
            <section id="about" className="mb-24 max-w-2xl scroll-mt-20">
              <span className="inline-block text-xs font-medium tracking-wide uppercase text-purple-600 dark:text-purple-400 mb-4">
                About
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-6">
                From Team Leader to "wait, no."
              </h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  I started out as a Team Leader, then got moved into RTA/WFM when the business
                  needed it — forecasting shifts, staring at real-time dashboards, living the
                  "excel...wait, no" bit from the headline above. Then life happened, the kind that
                  makes you reconsider things, and I figured I'd try coding to make ends meet.
                </p>
                <p>
                  Turns out I actually like this. There've been plenty of hours lost with an
                  AI pair-programmer, both of us equally stuck on the same bug — but there's
                  nothing like the moment it finally clicks and the thing just <em>works</em>.
                </p>
                <p>
                  Right now I'm AI-assisted and still learning how the code actually works under
                  the hood, not just shipping what runs. Building with Supabase, GitHub, and
                  Vercel, and leveling up in AI video ad production on the side.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section id="contact" className="mb-10 max-w-2xl scroll-mt-20">
              <span className="inline-block text-xs font-medium tracking-wide uppercase text-purple-600 dark:text-purple-400 mb-4">
                Contact
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-6">
                Let's talk.
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg">
                Open to hiring conversations, contract work, or just talking shop.
                Easiest ways to reach me below.
              </p>
              <div className="flex flex-wrap gap-3">
                <SpringButton
                  href="mailto:poticarmark@gmail.com"
                  className="px-5 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-purple-600 dark:text-white text-sm font-medium"
                >
                  Email me
                </SpringButton>
                <SpringButton
                  href="https://ph.linkedin.com/in/mark-bryan-poticar-7954041b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
                >
                  LinkedIn
                </SpringButton>
                <SpringButton
                  href="https://github.com/markappscript-markss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
                >
                  GitHub
                </SpringButton>
                <SpringButton
                  href="https://v2.onlinejobs.ph/jobseekers/info/4228954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
                >
                  OnlineJobsPH
                </SpringButton>
              </div>
            </section>
          </FadeInSection>
        </main>
      </div>
    </>
  );
}