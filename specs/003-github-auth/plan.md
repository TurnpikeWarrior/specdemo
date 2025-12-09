# Implementation Plan: GitHub User Authentication

**Branch**: `003-github-auth` | **Date**: 2025-12-08 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/003-github-auth/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implement user authentication via GitHub OAuth using `next-auth` (Auth.js v5). The system will persist user sessions via secure cookies (JWT strategy) and provide UI components for Login/Logout. User profile data (name, email, avatar) will be retrieved from GitHub and accessible in the session context.

## Technical Context

**Language/Version**: TypeScript (Strict), Next.js 16 (App Router)
**Primary Dependencies**: `next-auth@beta` (v5), `lucide-react` (icons)
**Storage**: JWT-based session persistence (Stateless)
**Testing**: Manual verification via GitHub OAuth flow
**Target Platform**: Web (Desktop/Mobile responsive)
**Project Type**: Web Application
**Performance Goals**: < 100ms session validation overhead
**Constraints**: No dedicated user database (using JWT for MVP profile storage)
**Scale/Scope**: Single provider (GitHub), standard OAuth flow

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Clean & Modular Architecture**: Auth logic centralized in `src/auth.ts` and `src/app/api/auth`.
- [x] **Modern Next.js Standards**: Uses App Router API routes and Server Components for session access.
- [x] **Type Safety**: Fully typed auth config and session objects.
- [x] **Component Reusability**: Login/Logout buttons as reusable UI components.
- [x] **Performance First**: Minimal client-side JavaScript; server-side session handling.

## Project Structure

### Documentation (this feature)

```text
specs/003-github-auth/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts     # Auth API Route Handler
│   └── page.tsx                 # Update to show Login/User state
├── components/
│   └── features/
│       └── auth/
│           ├── LoginButton.tsx  # Client Component
│           ├── LogoutButton.tsx # Client Component
│           └── UserProfile.tsx  # Server Component
├── lib/
    └── auth.ts                  # NextAuth Configuration
```

**Structure Decision**: Next.js App Router structure with distinct separation of Server Logic (`src/lib/auth.ts`, `src/app/api`), UI Components (`src/components/features/auth`), and Page Routing (`src/app`).

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | | |