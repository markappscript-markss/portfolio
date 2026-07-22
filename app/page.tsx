import { supabase } from "@/lib/supabase";
import ProjectList from "@/components/ProjectList";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import NavBar from "@/components/NavBar";
import LoadingScreen from "@/components/animations/LoadingScreen";
import ContactGrid from "@/components/ContactGrid";
import HeroTypewriter from "@/components/animations/HeroTypewriter";
import PageIntro from "@/components/animations/PageIntro";
import MacbookShowcase from "@/components/MacbookShowcase";
import AboutSection from "@/components/AboutSection";
import HeroPhoto from "@/components/HeroPhoto";

export const revalidate = 60;

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
      <div className="relative z-10 bg-neutral-950 w-full min-h-0 md:min-h-screen">
        <div className="absolute left-0 right-0 h-40 -top-40 bg-gradient-to-b from-transparent to-neutral-950 pointer-events-none" />

        {/* --- PART 1: HERO */}
        <main id="home" className="max-w-5xl mx-auto px-6 pt-24 pb-4 md:pb-12 relative scroll-mt-[40vh]">
          <section className="mb-6 md:mb-12 max-w-3xl space-y-4 dynamic-hero-fade">
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
              <h1 className="text-4xl sm:text-5xl font-black leading-[1.15] tracking-tight text-neutral-50">
                Hello, my name is MARK.
                <br />
                <span className="flex flex-wrap items-center min-h-[1.2em]">
                  <span className="text-purple-400 inline-block">
                    <HeroTypewriter />
                  </span>
                </span>
              </h1>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-lg text-neutral-400 max-w-xl">
                Web, ads, and everything between — built to look intentional
              </p>
            </div>
          </section>

         
          <div className="absolute right-0 bottom-0">
            <HeroPhoto />
          </div>

        </main>

        {/* --- PART 2: THE GSAP DIVE */}
        <MacbookShowcase />

        {/* --- PART 3: ABOUT SECTION WITH PHOTO & GRADIENT BLENDS */}
        <AboutSection />

        {/* --- PART 4: WORK & CONTACT */}
        <main className="max-w-5xl mx-auto px-6 py-24 relative z-20 bg-neutral-950">

          {/* WORK SECTION */}
          <div id="work" className="mb-32">
            {featuredProjects.length > 0 && (
              <ProjectList projects={featuredProjects} />
            )}
          </div>

          {/* CONTACT SECTION */}
          <section id="contact" className="w-full mb-32 scroll-mt-20">
            <StaggerContainer className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

              {/* LEFT SIDE: Text Content */}
              <div className="w-full md:w-1/2 flex flex-col">
                <StaggerItem>
                  <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-400 mb-4">
                    Contact
                  </span>
                </StaggerItem>
                <StaggerItem>
                  <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
                    Let's talk.
                  </h2>
                </StaggerItem>
                <StaggerItem>
                  <p className="text-lg text-neutral-400 max-w-md">
                    Open to hiring conversations, contract work, or just talking shop.
                    Easiest ways to reach me below.
                  </p>
                </StaggerItem>
              </div>

              {/* RIGHT SIDE: The Interactive Grid */}
              <StaggerItem className="w-full md:w-1/2 flex justify-start md:justify-end">
                <ContactGrid />
              </StaggerItem>

            </StaggerContainer>
          </section>

        </main>
      </div>
    </>
  );
}
