# AGENTS.md

## Project Overview

Portfolio — Turborepo monorepo (pnpm workspace) with a single Vite + React 19 + TypeScript web app. TanStack Router for routing, TanStack Query for data fetching, Tailwind CSS v4 for styling, shadcn/ui (new-york style) for primitives, GSAP + Framer Motion for animations.

## Commands

```sh
# Dev
pnpm dev           # start all workspaces via turbo
pnpm dev:web       # web app only (port 3001)

# Build & check
pnpm build         # build all
pnpm check-types   # tsc --noEmit across all workspaces
pnpm -F web check-types  # typecheck web app only

# Note: No test framework is set up. No ESLint/Prettier configs exist.
```

## Code Conventions

### Formatting & Syntax

- **Indent**: tabs
- **Semicolons**: required on all statements
- **Quotes**: double quotes in JS/TS (`"`); single quotes only in CSS `@import url('...')`
- **JSX quotes**: double quotes for all JSX string props
- **Line length**: soft limit, let it wrap naturally

### Imports

- Use `import { name }` (named) over default where possible
- `import type` / `export type` for type-only imports (required by `verbatimModuleSyntax`)
- Group: third-party first, then `@/` aliases, then relative imports
- Path alias: `@/` → `./src/`. Use for all cross-directory imports within `src/`
- Relative imports (`./`) only for sibling files
- No barrel files (`index.ts` re-exports)

### Components

Two patterns, use consistently by context:

**UI library (shadcn/ui) — function declaration, named export:**
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

function Button({ className, ...props }: React.ComponentProps<"button">) {
  return <button data-slot="button" className={cn(className)} {...props} />;
}
export { Button };
```

**Section/page components — arrow function, default export:**
```tsx
const About = () => {
  return <section>...</section>;
};
export default About;
```

**Simple components — function declaration, inline default export:**
```tsx
export default function Header() { ... }
```

**Route components — named function, exported via Route definition:**
```tsx
function HomeComponent() { ... }
export const Route = createFileRoute("/")({ component: HomeComponent });
```

### TypeScript

- `strict: true`, `verbatimModuleSyntax: true`, `noUncheckedIndexedAccess: true`
- `noUnusedLocals: true`, `noUnusedParameters: true` — remove unused code
- Prefer `React.ComponentProps<"element">` for extending HTML element props
- Use CVA `VariantProps` for component variants (shadcn pattern)
- Avoid `any`. Prefer `unknown` + narrowing when type is uncertain
- Use `interface` for public API contracts, `type` for unions/computed types

### Naming

| Thing | Convention | Examples |
|-------|-----------|----------|
| Components | PascalCase | `About`, `Button`, `ThemeProvider` |
| Files (components) | PascalCase | `About.tsx`, `Projects.tsx` |
| Files (non-component) | kebab-case | `mode-toggle.tsx`, `theme-provider.tsx` |
| Functions | camelCase | `scrollToSection`, `handleAnimationComplete` |
| Constants | camelCase or SCREAMING_SNAKE | `TITLE_TEXT`, `API_BASE` |
| Props | camelCase | `onAnimationComplete`, `splitType` |
| CSS classes | kebab-case | `section-padding`, `container-custom` |

### Styling

- Tailwind CSS v4 (`@import "tailwindcss"` in CSS files, no `tailwind.config.js`)
- Use `cn()` utility (`clsx` + `tailwind-merge`) from `@/lib/utils` for conditional classes
- Custom utility classes via `@apply` in `index.css`
- Dark mode via `.dark` class: `dark:bg-gray-950`
- Prefer Tailwind utilities over custom CSS

### Animation

- GSAP (with ScrollTrigger) for scroll-driven animations
- Framer Motion for simple mount/unmount/presence animations
- Don't add both to the same component — pick the right tool

### Error Handling

- Guard DOM element access: `document.getElementById(id)` → check for null
- Error boundaries for top-level route segments if needed
- `throw new Error("message")` in critical init paths (e.g., missing root element)

### File Organization

```
apps/web/src/
  components/       # React components (ui/ for shadcn primitives)
  routes/           # TanStack Router route files
  lib/              # Utilities (utils.ts)
  main.tsx          # Entry point
  index.css         # Global styles + Tailwind imports
```

### Misc

- `export { useTheme } from "next-themes"` re-export pattern is fine (thin wrappers)
- Destructure props inline, not in a separate interface for simple cases
- Self-close tags without children: `<Header />`, not `<Header></Header>`
- Remove commented-out code blocks before committing

## Tech Stack

- **Framework**: React 19 + Vite 6
- **Router**: TanStack Router v1
- **Data fetching**: TanStack Query v5
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- **UI primitives**: shadcn/ui (new-york style), radix-ui, lucide-react icons
- **Animation**: GSAP (ScrollTrigger) + Framer Motion
- **Package manager**: pnpm 10
- **Monorepo**: Turborepo 2
