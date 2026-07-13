import { supabase } from "@/lib/supabase";
import ProjectGrid from "@/components/ProjectGrid";
import ThemeToggle from "@/components/ThemeToggle";

export const revalidate = 60; // re-fetch from Supabase every 60s

export default async function Home() {
  const [{ data: categories }, { data: projects }] = await Promise.all([
    supabase.from("categories").select("*").order("sort_order"),
    supabase.from("projects").select("*").order("sort_order"),
  ]);

  const featured = (projects ?? []).find((p) => p.featured);

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <nav className="flex justify-between items-center mb-8">
        <div className="text-xl font-medium">
          markappscript<span className="text-accent">.dev</span>
        </div>
        <div className="flex gap-6 text-sm text-neutral-600 dark:text-neutral-400 items-center">
          <span>Work</span>
          <span>About</span>
          <span>Contact</span>
          <ThemeToggle />
        </div>
      </nav>

      <section className="rounded-2xl p-8 mb-8 bg-orange-100 dark:bg-orange-950/40">
        <h1 className="text-3xl font-medium leading-tight text-orange-950 dark:text-orange-100">
          {featured ? featured.title : "WFM/RTA. Team Leader. I excel...wait, no. Building products that don't look like everyone else's"}
        </h1>
        <p className="text-orange-900/80 dark:text-orange-200/70 mt-2">
          {featured?.description ?? "AI-assisted developer — web, ads, and everything between"}
        </p>
      </section>

      <ProjectGrid categories={categories ?? []} projects={projects ?? []} />
    </main>
  );
}
