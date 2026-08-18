# Architecture

## App Router

- Keep `page.tsx` and `layout.tsx` server-rendered unless the route truly needs a client boundary.
- Move interactive islands into focused client components instead of marking an entire route as client-side.
- Fetch server-owned data in Server Components or server-only modules. Keep secrets and privileged calls out of client bundles.
- Pass only JSON-serializable values from Server Components to Client Components.
- Use route-level `loading.tsx`, `error.tsx`, and `not-found.tsx` when the experience needs those boundaries.
- Validate all untrusted input in route handlers and server actions.

## Module Placement

- Put route composition in `src/app/**`.
- Put shared UI in `src/share/component/control` or the closest established component folder.
- Put layouts in `src/share/component/layout` and specialized React Flow nodes in `src/share/component/module`.
- Put domain constants and types in an existing shared domain module; do not duplicate definitions in route files.
- Keep API helpers transport-focused. Do not mix rendering or browser state into them.

## React And State

- Derive values during render when possible; do not mirror props into state without a synchronization requirement.
- Use functional state updates when the next value depends on the current value.
- Memoize only when identity affects a dependency, a library contract, or measured rendering cost.
- Keep effects for synchronization with external systems and clean up subscriptions, timers, and resources.

## React Flow

- Keep `ReactFlowProvider` above hooks such as `useReactFlow`.
- Model custom node data and node types explicitly with `Node<Data, Type>`.
- Keep `nodeTypes` stable and outside render or memoized.
- Remove connected edges when deleting nodes and reject invalid graph references.
- Avoid timestamp-only IDs when persisted or rapidly created nodes need collision resistance.
