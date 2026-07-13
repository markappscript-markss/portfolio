import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Category = {
  id: string;
  name: string;
  slug: string;
  sort_order: number;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  category_id: string | null;
  tech_stack: string[];
  cover_image_url: string | null;
  live_url: string | null;
  repo_url: string | null;
  featured: boolean;
  sort_order: number;
};
