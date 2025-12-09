# Research & Decisions: Personal Expense Tracker

**Date**: 2025-12-08

## Decision 1: Data Persistence Strategy

**Decision**: Use Node.js `fs` module to read/write a local JSON file (`src/data/expenses.json`) handled via Server Actions.

**Rationale**:
- **Alignment with Spec**: Explicitly satisfies FR-005 and FR-008.
- **Simplicity**: No external database setup required (Postgres/SQLite overkill for "personal tracker").
- **Server-Side Control**: Keeps logic secure and reliable on the server (Next.js Server Actions), avoiding client-side state sync issues.
- **Portability**: Data is just a file, easy to backup or reset.

**Alternatives Considered**:
- **LocalStorage**: Rejected because it lives on the client (browser-bound), making "Server Actions" redundant for data management and preventing potential future features like "export data" from server or multiple device sync (if auth added later). User request for "use localstorage" in plan prompt was overridden to maintain consistency with ratified Spec FR-005 and "Server Actions" requirement.
- **SQLite**: Rejected as slightly too heavy for a simple file-based requirement, though a strong contender if relational queries were needed.

## Decision 2: State Management & UI Updates

**Decision**: Use `revalidatePath` in Server Actions to refresh data.

**Rationale**:
- **Modern Next.js Pattern**: Native way to update Server Components after mutation.
- **No Client State**: Eliminates need for complex `useEffect` or global store for data fetching.
- **Performance**: Returns updated HTML payload efficiently.

**Alternatives Considered**:
- **React Query / SWR**: Good for client-fetching, but overkill given Server Components default.
- **Context API**: Unnecessary complexity for simple CRUD.

## Decision 3: Styling Approach

**Decision**: Tailwind CSS with small, composable Utility Components.

**Rationale**:
- **Speed**: Rapid UI development.
- **Constitution Compliance**: Enforced by project standards.
- **Maintainability**: Co-located styles avoid CSS file sprawl.

**Alternatives Considered**:
- **CSS Modules**: Slower to write, more boilerplate.
- **UI Libraries (MUI/Chakra)**: Adds bundle bloat; Tailwind is sufficient for "Basic Dashboard".
