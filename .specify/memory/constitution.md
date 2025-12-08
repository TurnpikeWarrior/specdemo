<!--
Sync Impact Report:
- Version Change: 0.0.0 -> 1.0.0
- Principles Established: Clean & Modular Architecture, Modern Next.js Standards, Type Safety, Component Reusability, Performance First.
- Templates Status: ✅ All compatible.
-->
# specdemo Constitution

## Core Principles

### I. Clean & Modular Architecture
Code must be organized by feature or domain, avoiding monolithic structures. Functions and components should have a single responsibility. Business logic should be separated from UI concerns using hooks or service layers.

### II. Modern Next.js Standards
Adhere to Next.js App Router paradigms. Prefer Server Components by default; use Client Components only for interactivity. Use Server Actions for mutations. Avoid `useEffect` for data fetching.

### III. Type Safety (NON-NEGOTIABLE)
Strict TypeScript usage is mandatory. No explicit `any` types allowed. Zod or similar validation libraries must be used for external data boundaries (API responses, form inputs).

### IV. Component Reusability
Build small, composable UI components. Avoid hardcoding styles; utilize Tailwind CSS utility classes efficiently. Follow a consistent file structure (e.g., `components/ui` vs `components/features`).

### V. Performance First
Prioritize Core Web Vitals. Optimize images using `next/image`. Minimize client-side JavaScript bundles. Ensure accessibility (a11y) standards are met in markup.

## Additional Constraints

### Technology Stack
- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript (Strict)
- **State Management**: React Context or URL state (Nuqs/Search Params) preferred over global stores for simple cases.

## Development Workflow

### Code Quality Gates
- All code must pass `eslint` and `tsc` checks before commit.
- Prettier formatting is enforced.
- Unused imports and dead code must be removed.

## Governance

This Constitution supersedes all other practices. Amendments require documentation in this file, approval from the core team, and a migration plan for existing code. All PRs must be reviewed against these principles.

**Version**: 1.0.0 | **Ratified**: 2025-12-08 | **Last Amended**: 2025-12-08