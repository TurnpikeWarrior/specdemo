---
description: "Task list template for feature implementation"
---

# Tasks: GitHub User Authentication

**Input**: Design documents from `/specs/003-github-auth/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create auth configuration directory structure (src/app/api/auth/[...nextauth], src/lib)
- [ ] T002 [P] Install next-auth@beta and lucide-react dependencies
- [ ] T003 Create .env.local template with AUTH_GITHUB_ID, AUTH_GITHUB_SECRET, AUTH_SECRET placeholders
- [ ] T004 Implement NextAuth configuration in src/lib/auth.ts with GitHub provider

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T005 Implement API route handler for Auth.js in src/app/api/auth/[...nextauth]/route.ts
- [ ] T006 [P] Create reusable LoginButton component in src/components/features/auth/LoginButton.tsx
- [ ] T007 [P] Create reusable LogoutButton component in src/components/features/auth/LogoutButton.tsx
- [ ] T008 [P] Create UserProfile component in src/components/features/auth/UserProfile.tsx to display session info

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Login with GitHub (Priority: P1) 🎯 MVP

**Goal**: Users can log in via GitHub and see their profile data.

**Independent Test**: Click login, authorize GitHub, verify redirection and profile display.

### Implementation for User Story 1

- [ ] T009 [US1] Integrate LoginButton into src/app/page.tsx (conditionally rendered if no session)
- [ ] T010 [US1] Integrate UserProfile into src/app/page.tsx (conditionally rendered if session exists)
- [ ] T011 [US1] Verify session retrieval in Server Components using `auth()` from src/lib/auth.ts

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Logout (Priority: P1)

**Goal**: Users can log out and clear their session.

**Independent Test**: Click logout, verify return to guest state.

### Implementation for User Story 2

- [ ] T012 [US2] Integrate LogoutButton into src/app/page.tsx or UserProfile component
- [ ] T013 [US2] Ensure LogoutButton calls `signOut()` server action or client method

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Session Persistence (Priority: P2)

**Goal**: Login state persists across refreshes and restarts.

**Independent Test**: Log in, refresh page, verify still logged in.

### Implementation for User Story 3

- [ ] T014 [US3] Verify JWT strategy configuration in src/lib/auth.ts (default behavior, explicit check)
- [ ] T015 [US3] (Optional) Add middleware.ts if route protection is needed (not strictly required by spec but good practice)

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T016 [P] Add error handling page for auth failures (src/app/auth/error/page.tsx)
- [ ] T017 [P] Polish UI for Login/Logout buttons using Tailwind CSS (match existing design)
- [ ] T018 Code cleanup (remove unused imports)
- [ ] T019 Run verification against quickstart.md manual test steps

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2)
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Requires LogoutButton (T007)
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Implicit in NextAuth setup

### Parallel Opportunities

- T002, T003 can run in parallel
- T006, T007, T008 can run in parallel
- T016, T017 can run in parallel

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories
