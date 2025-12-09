# Quickstart: Personal Expense Tracker

## Prerequisites

- Node.js 18+
- npm/pnpm/yarn

## Setup

1. **Clone & Install**
   ```bash
   git checkout 001-personal-expense-tracker
   npm install
   ```

2. **Initialize Data File**
   Ensure the data directory exists (handled by code, but good to check):
   ```bash
   mkdir -p src/data
   echo "[]" > src/data/expenses.json
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Access App**
   Open `http://localhost:3000`.

## Testing

Run the test suite (if configured):
```bash
npm test
```

## Manual Verification

1. **Add Expense**:
   - Fill form: Amount `50`, Date `2025-12-08`, Category `Food`.
   - Click "Add".
   - Verify Total increases by 50.
   - Verify entry appears in list.

2. **Persistence**:
   - Reload page.
   - Verify data remains.

3. **Delete Expense**:
   - Click "Delete" on the entry.
   - Verify Total decreases.
   - Verify entry disappears.
