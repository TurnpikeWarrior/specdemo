---
description: "Task list template for feature implementation"
---

# Tasks: Personal Expense Tracker

**Input**: Design documents from `/specs/001-personal-expense-tracker/`
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

- [x] T001 Create project directories per plan in src/app, src/components, src/server, src/lib, src/data
- [x] T002 Initialize empty expenses.json file in src/data/expenses.json
- [x] T003 [P] Install dependencies (zod, date-fns, tailwindcss) if not present

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create shared types in src/lib/types.ts (Expense interface, Category enum)
- [x] T005 [P] Create validation schema in src/lib/types.ts (ExpenseSchema with Zod)
- [x] T006 Implement db layer in src/server/db.ts (read/write logic for expenses.json)
- [x] T007 [P] Create reusable UI components in src/components/ui/ (Button, Input, Card)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Add New Expense (Priority: P1) 🎯 MVP

**Goal**: Users can log a new expense with amount, date, category, and description.

**Independent Test**: Open app, fill form, submit, verify success message or form clear.

### Implementation for User Story 1

- [x] T008 [P] [US1] Implement `addExpense` server action in src/app/actions.ts
- [x] T009 [P] [US1] Create AddExpenseForm component in src/components/features/expenses/AddExpenseForm.tsx
- [x] T010 [US1] Integrate AddExpenseForm into src/app/page.tsx
- [x] T011 [US1] Add error handling and loading states to AddExpenseForm

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - View Dashboard & Recent Expenses (Priority: P1)

**Goal**: Users can see total spending and a list of recent transactions.

**Independent Test**: Add expenses, verify Dashboard totals match sum and list is sorted by date.

### Implementation for User Story 2

- [x] T012 [P] [US2] Implement `getExpenses` and `getDashboardStats` server actions in src/app/actions.ts
- [x] T013 [P] [US2] Create ExpenseList component in src/components/features/expenses/ExpenseList.tsx
- [x] T014 [P] [US2] Create DashboardStats component in src/components/features/expenses/DashboardStats.tsx
- [x] T015 [US2] Integrate ExpenseList and DashboardStats into src/app/page.tsx
- [x] T016 [US2] Implement date sorting logic (descending) in `getExpenses`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Delete Expense (Priority: P2)

**Goal**: Users can remove an incorrect or unwanted expense entry.

**Independent Test**: Create expense, find in list, delete, verify removal from list and total.

### Implementation for User Story 3

- [x] T017 [P] [US3] Implement `deleteExpense` server action in src/app/actions.ts
- [x] T018 [US3] Add delete button/action to ExpenseList items in src/components/features/expenses/ExpenseList.tsx
- [x] T019 [US3] Handle UI updates after deletion (revalidatePath)

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T020 [P] Ensure responsive design for mobile views
- [x] T021 [P] Verify accessibility (aria-labels on form inputs and buttons)
- [x] T022 Code cleanup and refactoring (remove unused imports/styles)
- [x] T023 Run verification against quickstart.md manual test steps

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

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - May integrate with US1 (data creation) but technically independent reader
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Ideally after US2 (view list) to have UI for deletion, but action is independent

### Parallel Opportunities

- T003, T005, T007 can run in parallel with other foundational tasks
- T008, T009 can run in parallel within US1
- T012, T013, T014 can run in parallel within US2

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
