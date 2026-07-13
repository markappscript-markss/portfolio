import { supabase } from "@/lib/supabase";
import ProjectGrid from "@/components/ProjectGrid";

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
          Mark<span className="text-accent">.dev</span>
        </div>
        <div className="flex gap-6 text-sm text-neutral-600">
          <span>Work</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </nav>

      <section className="rounded-2xl p-8 mb-8 bg-orange-100">
        <h1 className="text-3xl font-medium leading-tight text-orange-950">
          {featured ? featured.title : "Building products that don't look like everyone else's"}
        </h1>
        <p className="text-orange-900/80 mt-2">
          {featured?.description ?? "Full-stack developer — web, mobile, and everything between"}
        </p>
      </section>

      <ProjectGrid categories={categories ?? []} projects={projects ?? []} />
    </main>
  );
}
