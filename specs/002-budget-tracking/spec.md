# Feature Specification: Budget Tracking

**Feature Branch**: `002-budget-tracking`
**Created**: 2025-12-08
**Status**: Draft
**Input**: User description: "Add a budget tracking feature to this app."

## User Scenarios & Testing

### User Story 1 - Set Category Budget (Priority: P1)

As a user, I want to set a maximum spending limit for specific categories (e.g., Food, Transport) so that I can plan my monthly finances.

**Why this priority**: Defines the core "budget" data. Without setting a limit, there is nothing to track against.

**Independent Test**: Open the app, navigate to a new "Budgets" section or modal, select "Food", enter "500", save. Verify the budget persists on reload.

**Acceptance Scenarios**:

1.  **Given** I am on the budget settings screen, **When** I select a category and enter a positive amount, **Then** the system saves this as the monthly budget for that category.
2.  **Given** an existing budget, **When** I update the amount, **Then** the new amount immediately replaces the old one.
3.  **Given** I want to remove a budget, **When** I set it to 0 or clear it, **Then** the category is no longer tracked as budgeted.

### User Story 2 - View Budget Progress on Dashboard (Priority: P1)

As a user, I want to see a visual indicator of how much I have spent versus my budget for each category so that I know if I am overspending.

**Why this priority**: Delivers the value of "tracking". Data entry (US1) is useless without visualization (US2).

**Independent Test**: Set a budget of $100 for Food. Add a $50 Food expense. Verify dashboard shows 50% progress. Add another $60 Food expense. Verify dashboard shows over-budget status (e.g., red color or >100%).

**Acceptance Scenarios**:

1.  **Given** I have a budget of $100 for Food and have spent $40 this month, **When** I view the dashboard, **Then** I see a progress bar showing 40% usage.
2.  **Given** I have exceeded my budget, **When** I view the dashboard, **Then** the indicator visualizes the overage (e.g., different color or warning icon).
3.  **Given** a new month starts, **When** I view the dashboard, **Then** the "Spent" amount resets to $0 for the current month view (assuming current month view is default).

### Edge Cases

*   **Logic**: What happens if I change the category of an existing expense? *Assumption: The budget progress recalculates immediately.*
*   **Logic**: Does the budget roll over? *Assumption: No, simple monthly reset.*
*   **UI**: What if I have expenses in a category with no budget? *Assumption: It just doesn't show a progress bar, or shows "Unbudgeted". MVP: Only show progress for categories WITH budgets.*

## Requirements

### Functional Requirements

*   **FR-001**: System MUST allow users to define a monthly monetary limit for each available Category.
*   **FR-002**: System MUST persist budget configurations between sessions (using the same local JSON mechanism as expenses).
*   **FR-003**: System MUST calculate total expenses for the *current month* per category to compare against the defined budget.
*   **FR-004**: Dashboard MUST display a "Budget vs Actual" visualization for all categories that have a non-zero budget set.
*   **FR-005**: System MUST NOT prevent adding expenses that exceed the budget (Passive tracking only).

### Key Entities

*   **Budget**: Represents a spending limit rule.
    *   Category: The category this rule applies to (Unique per category).
    *   Amount: The maximum target spending (Monthly).
    *   *Note: Could be a separate JSON file `budgets.json` or part of a new structure.*

## Success Criteria

### Measurable Outcomes

*   **SC-001**: Users can set a budget for a category in under 3 clicks/actions.
*   **SC-002**: Budget progress visualization updates instantly (< 200ms) when a new expense is added.
*   **SC-003**: "Budget Status" is clearly visible on the main dashboard without scrolling (for top 3 categories).