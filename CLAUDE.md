# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Single-page marketing site for Dr. Jandir Nicacio (a doctor). Built with Vite + React + TypeScript + shadcn/ui + Tailwind. It was originally scaffolded/edited via Lovable (see `lovable-tagger` dev plugin in `vite.config.ts` and the `lovable-agent-playwright-config` package driving Playwright). Deployed to GitHub Pages at `jandirnicacio.com` (see `public/CNAME` and `homepage` in `package.json`).

## Commands

```bash
npm run dev          # start Vite dev server (port 8080)
npm run build         # production build to dist/
npm run build:dev     # build in development mode (unminified, for debugging)
npm run lint           # ESLint over the whole repo
npm run preview        # preview the production build locally
npm run test           # run vitest once
npm run test:watch     # vitest in watch mode
npm run deploy         # build then publish dist/ to GitHub Pages (gh-pages)
```

Run a single test file: `npx vitest run src/test/example.test.ts`. Vitest is configured with `globals: true` and a `jsdom` environment (`vitest.config.ts`), so `describe`/`it`/`expect` don't need imports, and `@testing-library/jest-dom` matchers are preloaded via `src/test/setup.ts`.

There's also a Playwright setup (`playwright.config.ts`, `playwright-fixture.ts`) that wraps the `lovable-agent-playwright-config` package's fixture/config rather than defining its own — extend those files if agent-driven e2e tests are needed.

Both `bun.lock`/`bun.lockb` and `package-lock.json` are present; `npm run *` scripts are what's actually wired up (no `bunfig` or bun-specific scripts), so prefer `npm`.

## Architecture

- **Single route app**: `src/App.tsx` sets up `QueryClientProvider` (react-query is installed but not currently used for data fetching — there's no backend), `TooltipProvider`, and a router with exactly one real page (`/` → `Index`) plus a catch-all `NotFound`. `basename` comes from `import.meta.env.BASE_URL`.
- **The whole page is one stack of section components**, rendered in order in `src/pages/Index.tsx`: `Header`, `HeroSection`, `SobreSection`, `FormacaoSection`, `AtuacaoSection`, `FAQSection`, `EspecialidadesSection`, `ContatoSection`, `Footer`, plus a floating `WhatsAppButton`. Each section is a self-contained component in `src/components/` with no shared layout wrapper — new sections are added by creating a component and inserting it into this list.
- **Navigation is anchor-based, not routed**: `Header`'s nav links (`#sobre`, `#formacao`, etc.) scroll to `id`s on the section components rather than using React Router routes. Keep section `id`s in sync with `Header`'s `navLinks` array when renaming/reordering sections.
- **WhatsApp CTA is duplicated**: the phone number and prefilled message text are hardcoded independently in both `Header.tsx` and `WhatsAppButton.tsx` — update both if the number/copy changes.
- **shadcn/ui** components live in `src/components/ui/` (generated via the shadcn CLI, config in `components.json`, base color `slate`, no `rsc`). Treat these as vendored primitives — prefer composing them over hand-rolling equivalents, and regenerate via the CLI rather than hand-editing when possible.
- **Styling**: Tailwind with CSS variables for theming (`src/index.css` defines HSL custom properties for `--primary`, `--secondary`, `--background`, etc., consumed by `tailwind.config.ts`). Two custom fonts are wired up as Tailwind font families: `font-display` (Playfair Display, used for headings) and `font-body` (DM Sans, body default). Reusable section-level classes (`.section-padding`, `.section-title`, `.section-subtitle`, `.section-quotation`, `.highlight`) are defined in `@layer components` in `src/index.css` — prefer these over repeating the same utility clusters across sections.
- **Path alias**: `@/*` → `src/*` (defined in `vite.config.ts`, `vitest.config.ts`, and `tsconfig.app.json` — keep these in sync if the alias changes).
- **Content is in Portuguese** (pt-BR) — section copy, nav labels, and form/UI text should stay in Portuguese to match the rest of the site.
