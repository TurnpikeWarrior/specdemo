# API Contracts (Server Actions)

**Note**: Since this feature uses Next.js Server Actions, traditional REST API endpoints are replaced by asynchronous server functions exported from `src/app/actions.ts`.

## Expense Actions

### `getExpenses`

Retrieves all expenses, sorted by date (descending).

- **Input**: None
- **Output**: `Promise<Expense[]>`
- **Error Behavior**: Throws error if file read fails (should be caught by error boundary).

### `addExpense`

Creates a new expense record.

- **Input**: `FormData` (or raw object if called programmatically) containing:
  - `amount`: number
  - `date`: string (YYYY-MM-DD)
  - `category`: string (enum)
  - `description`: string (optional)
- **Output**: `Promise<{ success: boolean; error?: string }>`
- **Side Effects**:
  - Validates input using Zod.
  - Appends to `expenses.json`.
  - Calls `revalidatePath('/')` to refresh dashboard.

### `deleteExpense`

Removes an expense by ID.

- **Input**: `id: string`
- **Output**: `Promise<{ success: boolean; error?: string }>`
- **Side Effects**:
  - Removes item from `expenses.json`.
  - Calls `revalidatePath('/')` to refresh dashboard.

### `getDashboardStats`

Calculates total spending.

- **Input**: None (Derived from `getExpenses`)
- **Output**: `Promise<{ totalAmount: number; count: number }>`
