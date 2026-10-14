# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Tech stack

- **Framework:** Next.js (App Router, `app/` directory)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Package manager:** npm
- **Linting/formatting:** ESLint (`next/core-web-vitals`) + Prettier
- **Hosting:** Vercel

## Commands

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # run ESLint
```

Run `npm run lint` and `npm run build` before committing to catch type and lint errors.

## Project structure

```
app/             # routes, layouts, pages (App Router)
  layout.tsx     # root layout
  page.tsx       # home page
components/      # reusable UI components
lib/             # utilities, helpers, data fetching
public/          # static assets (images, icons, fonts)
```

## Code style

- Use TypeScript everywhere; avoid `any`. Prefer `type` for props and unions, `interface` only when extending.
- Function components only. Name components in `PascalCase`, files in `kebab-case.tsx` (e.g. `components/site-header.tsx`).
- Default to **Server Components**; add `"use client"` only when a component needs state, effects, or browser APIs.
- Use named exports for components; default exports only where Next.js requires them (`page.tsx`, `layout.tsx`, etc.).
- Style with Tailwind utility classes. Avoid inline `style` props and separate CSS files except for `app/globals.css`.
- Use `next/image` for images and `next/link` for internal links.
- Use the `@/` import alias for project-root imports (e.g. `import { Button } from "@/components/button"`).
- Prettier defaults: 2-space indent, double quotes, semicolons, trailing commas.
- Keep components small and focused; extract shared logic into `lib/`.
- Write accessible markup: semantic HTML, `alt` text on images, labels on form inputs.

## Git

- Small, focused commits with imperative messages (e.g. "Add contact form").
- Never commit `.env*` files or secrets.
