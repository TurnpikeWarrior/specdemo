# Research & Decisions: GitHub User Authentication

**Date**: 2025-12-08

## Decision 1: Authentication Library

**Decision**: Use `next-auth` (Auth.js v5 beta).

**Rationale**:
- **Standard**: De-facto standard for Next.js authentication.
- **Simplicity**: Handles GitHub OAuth complexity (handshake, token exchange, state protection) out of the box.
- **Next.js Integration**: Native support for App Router and Server Components.
- **Security**: Built-in CSRF protection and secure cookie handling.

**Alternatives Considered**:
- **Manual OAuth Implementation**: Rejected due to high security risk and maintenance burden.
- **Clerk/Auth0**: Rejected to avoid external vendor lock-in and keep the "personal tracker" self-contained (except for the GitHub identity provider).

## Decision 2: Session Persistence

**Decision**: Use JWT (JSON Web Token) Strategy.

**Rationale**:
- **Stateless**: No need to set up a new database table or file for sessions right now.
- **Spec Compliance**: Meets FR-004 (secure cookies) and FR-003 (store user info - inside the token).
- **Simplicity**: The app currently uses a simple JSON file for expenses. Adding a full database for sessions is overkill for MVP. User profile data is small enough to fit in the session cookie.

**Alternatives Considered**:
- **Database Sessions**: Rejected as it requires a database adapter (e.g., Prisma, TypeORM) which is not yet present in the project (currently using raw `fs` for JSON).

## Decision 3: Environment Variables

**Decision**: Require `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`, and `AUTH_SECRET`.

**Rationale**:
- **Standard Practice**: Secure way to store credentials.
- **NextAuth Requirement**: These are the standard variable names for V5.
