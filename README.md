# Portfolio setup

## 1. Supabase
1. Create a project at supabase.com.
2. Open the SQL editor, paste in `supabase/schema.sql`, and run it.
3. Go to Project Settings → API and copy the Project URL and anon public key.

## 2. Local setup
```bash
npm install
cp .env.local.example .env.local
# paste your Supabase URL + anon key into .env.local
npm run dev
```
Visit http://localhost:3000 — it'll be empty until you add rows to `projects`
in the Supabase table editor (or build an admin form later).

## 3. GitHub
```bash
git init
git add .
git commit -m "Initial scaffold"
gh repo create portfolio --public --source=. --push
# or create the repo manually on github.com and:
# git remote add origin https://github.com/yourname/portfolio.git
# git push -u origin main
```

## 4. Vercel
1. Import the GitHub repo at vercel.com/new.
2. Add the same two env vars (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) in
   Project Settings → Environment Variables.
3. Deploy. Every push to `main` auto-deploys after this.

## Adding a project
Add a row to the `projects` table in Supabase with a `category_id`
matching one of the seeded categories. Card color is auto-assigned
per category in `lib/colors.ts` — edit the palette there to change it.
