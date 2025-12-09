import { z } from "zod";

export const ExpenseSchema = z.object({
  id: z.string().uuid(),
  amount: z.number().positive("Amount must be positive"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  category: z.enum(["Food", "Transport", "Utilities", "Entertainment", "Other"]),
  description: z.string().max(500).optional(),
  createdAt: z.string().datetime()
});

export type Expense = z.infer<typeof ExpenseSchema>;

export enum Category {
    Food = "Food",
    Transport = "Transport",
    Utilities = "Utilities",
    Entertainment = "Entertainment",
    Other = "Other"
}
