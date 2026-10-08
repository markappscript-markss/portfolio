create table categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text,
  category_id uuid references categories(id) on delete set null,
  tech_stack text[] default '{}',
  cover_image_url text,
  live_url text,
  repo_url text,
  featured boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table categories enable row level security;
alter table projects enable row level security;

create policy "Public read categories" on categories for select using (true);
create policy "Public read projects" on projects for select using (true);

insert into categories (name, slug, sort_order) values
  ('Web apps', 'web', 1),
  ('Mobile', 'mobile', 2),
  ('Design', 'design', 3);
