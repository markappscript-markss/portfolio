import { supabase } from "@/lib/supabase";
import ProjectList from "@/components/ProjectList"; 
import FadeInSection from "@/components/FadeInSection";
import NavBar from "@/components/NavBar";
import LoadingScreen from "@/components/animations/LoadingScreen";
import ContactGrid from "@/components/ContactGrid"; 
import HeroTypewriter from "@/components/animations/HeroTypewriter"; 
import PageIntro from "@/components/animations/PageIntro"; // Imported safely

export const revalidate = 60; // re-fetch from Supabase every 60s

export default async function Home() {
  const [{ data: categories }, { data: projects }] = await Promise.all([
    supabase.from("categories").select("*").order("sort_order"),
    supabase.from("projects").select("*").order("sort_order"),
  ]);

  const featuredProjects = (projects ?? []).filter((p) => p.featured);

  return (
    <>
      {/* 0. SOLID BLACK GLITCH INTRO LOADER */}
      <LoadingScreen />

      {/* 1. FIXED NAVBAR */}
      <NavBar />

      {/* 2. STICKY BACKGROUND HERO BACKGROUND INTRO */}
      <PageIntro />

      {/* 3. FOREGROUND CONTENT OVERLAY */}
      <div className="relative z-10 bg-white dark:bg-neutral-950 w-full min-h-screen">
        <div className="absolute left-0 right-0 h-40 -top-40 bg-gradient-to-b from-transparent to-white dark:to-neutral-950 pointer-events-none" />

        <main className="max-w-5xl mx-auto px-6 py-24">

          {/* 1. HERO — Asymmetric, non-clipping typography layout */}
          <section className="mb-24 max-w-3xl space-y-4 dynamic-hero-fade">
            <style>{`
              @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(16px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-up {
                animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                opacity: 0;
              }
            `}</style>

            <div className="animate-fade-up" style={{ animationDelay: "0.25s" }}>
              <h1 className="text-4xl sm:text-5xl font-black leading-[1.15] tracking-tight text-neutral-900 dark:text-neutral-50">
                Hello, my name is MARK.
                <br />
                <span className="flex flex-wrap items-center min-h-[1.2em]">
                  I am a&nbsp;
                  <span className="text-purple-600 dark:text-purple-400 inline-block">
                    <HeroTypewriter />
                  </span>
                </span>
              </h1>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
                Web, ads, and everything between — built to look intentional
              </p>
            </div>
          </section>

          {/* 2. ABOUT — pushed to the right side */}
          <FadeInSection>
            <section id="about" className="mb-32 max-w-2xl scroll-mt-20 ml-auto">
              <span className="inline-block text-xs font-medium tracking-wide uppercase text-purple-600 dark:text-purple-400 mb-4">
                About
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-6">
                From forecasting shifts to shipping products.
              </h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  My background isn't your typical computer science story. I spent years in the trenches as a Team Leader and WFM/RTA analyst—forecasting schedules, obsessing over real-time metrics, and pushing operational spreadsheets to their absolute limits. I was great at optimizing the tools we had, but eventually, I realized I'd rather just build them myself.
                </p>
                <p>
                  Today, I operate as an AI-assisted developer. I don't just write code; I orchestrate it. By pairing a rigorous, data-driven operational mindset with advanced AI workflows, I architect and ship production-ready web products significantly faster than traditional development cycles. I don't get bogged down in boilerplate—I focus on logic, architecture, and the final user experience.
                </p>
                <p>
                  My current stack runs on modern, scalable tech like Supabase, GitHub, and Vercel. When I'm not architecting web platforms, I'm directing multi-model AI workflows to produce high-end, cinematic video ads. Everything I build is engineered to look intentional and perform flawlessly.
                </p>
              </div>
            </section>
          </FadeInSection>

          {/* 3. WORK SECTION */}
          <div id="work" className="mb-32">
            {featuredProjects.length > 0 && (
              <ProjectList projects={featuredProjects} />
            )}
          </div>

          {/* 4. CONTACT */}
          <FadeInSection>
            <section id="contact" className="w-full mb-32 scroll-mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
              
              {/* LEFT SIDE: Text Content */}
              <div className="w-full md:w-1/2 flex flex-col">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-600 dark:text-purple-400 mb-4">
                  Contact
                </span>
                <h2 className="text-5xl md:text-6xl font-black text-neutral-900 dark:text-white tracking-tight mb-6">
                  Let's talk.
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md">
                  Open to hiring conversations, contract work, or just talking shop. 
                  Easiest ways to reach me below.
                </p>
              </div>

              {/* RIGHT SIDE: The Interactive Grid */}
              <div className="w-full md:w-1/2 flex justify-start md:justify-end">
                <ContactGrid />
              </div>

            </section>
          </FadeInSection>

        </main>
      </div>
    </>
  );
}
