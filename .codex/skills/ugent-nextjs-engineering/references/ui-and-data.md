# UI And Data

## Styling And Components

- Follow `blueprint.md`: every authored class starts with `cug-` and styles live in CSS files.
- Reuse existing design tokens and classes before adding new rules.
- Do not introduce dynamic Tailwind class fragments that the scanner cannot discover.
- Avoid global selectors that alter third-party widgets such as React Flow.
- Check responsive layout, overflow, focus indicators, reduced motion, and contrast.
- Prefer semantic HTML, give inputs accessible labels, and set `type="button"` for non-submit buttons.
- Represent pending actions and prevent duplicate submissions.

## Data Access

- Define request and response types at the domain boundary and reuse them across callers.
- Check `response.ok`; parse expected error payloads defensively and preserve useful context.
- Support cancellation for client requests that can become stale.
- Use `NEXT_PUBLIC_*` only for values safe to ship to browsers.
- Select caching and revalidation behavior explicitly for mutable or user-specific fetches.
- Keep mock data separate from production transport.

## Errors And Security

- Treat route params, form data, API responses, and persisted flow JSON as untrusted.
- Validate node types, edge references, URLs, HTTP methods, and execution values before use.
- Do not render raw HTML unless it is trusted and sanitized.
- Do not leak tokens, stack traces, internal URLs, or sensitive payloads into client logs or UI errors.
