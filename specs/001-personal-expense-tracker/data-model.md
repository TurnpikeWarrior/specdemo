# Data Model: Personal Expense Tracker

## Entities

### Expense

Represents a single financial transaction record.

| Field | Type | Required | Constraints | Description |
|-------|------|----------|-------------|-------------|
| `id` | `string` (UUID) | Yes | Unique | Primary identifier. |
| `amount` | `number` | Yes | > 0 | Monetary value of the expense. |
| `date` | `string` | Yes | ISO 8601 (YYYY-MM-DD) | Date the expense occurred. |
| `category` | `string` | Yes | Predefined Set | "Food", "Transport", "Utilities", "Entertainment", "Other" |
| `description` | `string` | No | Max 500 chars | Optional details about the expense. |
| `createdAt` | `string` | Yes | ISO 8601 | Audit timestamp (system generated). |

## Predefined Lists

### Categories

- Food
- Transport
- Utilities
- Entertainment
- Other

## Storage Schema (JSON)

The `expenses.json` file will store an array of Expense objects.

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "amount": 15.50,
    "date": "2025-12-08",
    "category": "Food",
    "description": "Lunch at cafe",
    "createdAt": "2025-12-08T12:00:00Z"
  }
]
```

## Validation Rules (Zod Schema)

```typescript
const ExpenseSchema = z.object({
  id: z.string().uuid(),
  amount: z.number().positive("Amount must be positive"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  category: z.enum(["Food", "Transport", "Utilities", "Entertainment", "Other"]),
  description: z.string().max(500).optional(),
  createdAt: z.string().datetime()
});
```
