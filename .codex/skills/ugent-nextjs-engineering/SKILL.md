---
name: ugent-nextjs-engineering
description: Implement, debug, refactor, and review production-quality Next.js features in the Ugent repository. Use for App Router pages and layouts, React Server and Client Components, TypeScript models, API and data access, React Flow UI, Tailwind or CSS styling, accessibility, performance, build failures, and code reviews that must follow Ugent's local conventions.
---

# Ugent Next.js Engineering

## Workflow

1. Read the requested files and their callers before editing.
2. Inspect `package.json`, `tsconfig.json`, `next.config.*`, and nearby modules when the task touches configuration or architecture.
3. Search for existing components, types, API helpers, CSS classes, and naming patterns with `rg` before creating new ones.
4. Choose the smallest change that completes the user-visible behavior. Preserve unrelated work in the tree.
5. Keep server code, client code, and serialized props on the correct side of the App Router boundary.
6. Implement loading, empty, error, and disabled states when the workflow can reach them.
7. Validate the narrowest relevant checks, then run the project build for changes that affect routing, boundaries, configuration, or shared types.
8. Report changed behavior and the exact checks run. State any check that could not run.

## Project Rules

- Treat `blueprint.md` and existing code as project policy.
- Use TypeScript strict types. Avoid `any`, unsafe assertions, and duplicated domain types.
- Resolve internal modules through `@/*` when that matches nearby code.
- Default to Server Components. Add `"use client"` only where browser APIs, event handlers, React state, context, or client-only libraries require it.
- Keep client boundaries narrow; pass serializable data into client components.
- Put reusable UI under `src/share/component`, shared API access under `src/share/api`, and route entry points under `src/app`, following existing ownership.
- Prefix every project CSS class with `cug-`.
- Do not add inline `style` attributes or CSS-in-JS. Put styles in CSS files.
- Preserve accessibility semantics: labels, keyboard access, button types, focus behavior, and meaningful headings.
- Use `npm.cmd` for npm commands on this Windows workspace.

## References

- Read [architecture.md](references/architecture.md) for App Router boundaries, component placement, and React Flow guidance.
- Read [ui-and-data.md](references/ui-and-data.md) for styling, forms, data access, errors, and accessibility.
- Read [verification.md](references/verification.md) before final validation, debugging, or review work.

Load only the references relevant to the current request.
