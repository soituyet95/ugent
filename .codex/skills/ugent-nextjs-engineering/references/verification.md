# Verification

## Before Editing

1. Run `git status --short` and preserve unrelated changes.
2. Search for callers, sibling implementations, types, and CSS rules with `rg`.
3. Reproduce a reported bug when feasible and record the failing behavior.

## Checks

- Run the narrow test or type check first when the project provides one.
- Run `npm.cmd run lint` only if the configured Next.js version and script support it; report configuration failures.
- Run `npm.cmd run build` for route, configuration, server/client boundary, shared type, or production bundle changes.
- Inspect interactive work in a browser when tooling is available, including console, keyboard, responsive sizing, and network failures.
- Inspect generated output for deployment-path or build-time environment issues.

Do not declare success from source inspection alone when runnable verification exists.

## Review Checklist

- Correct server/client boundary and no secret leakage.
- External data and domain variants are typed.
- Async code handles failure, stale work, and duplicate actions.
- UI covers loading, empty, error, and disabled states when applicable.
- CSS follows `cug-`, avoids inline styles, and does not leak globally.
- Accessibility works with keyboard and assistive semantics.
- React keys and graph IDs are stable for their lifecycle.
- Checks cover the behavior most likely to regress.

For reviews, list findings first by severity with file and line references. If no defect is found, say so and identify residual verification gaps.
