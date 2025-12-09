'use server'

import { revalidatePath } from 'next/cache';
import { v4 as uuidv4 } from 'uuid';
import { readExpenses, writeExpenses } from '../server/db';
import { Expense, ExpenseSchema } from '../lib/types';

export async function addExpense(formData: FormData): Promise<{ success: boolean; error?: string }> {
  try {
    const rawData = {
      amount: parseFloat(formData.get('amount') as string),
      date: formData.get('date'),
      category: formData.get('category'),
      description: formData.get('description') || undefined,
    };

    // Validate using Zod, handling the case where ID and createdAt are not in the form
    const validationResult = ExpenseSchema.omit({ id: true, createdAt: true }).safeParse(rawData);

    if (!validationResult.success) {
        return { success: false, error: validationResult.error.errors.map(e => e.message).join(', ') };
    }

    const newExpense: Expense = {
      id: uuidv4(),
      ...validationResult.data,
      createdAt: new Date().toISOString(),
    };

    const expenses = await readExpenses();
    expenses.push(newExpense);
    await writeExpenses(expenses);

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Failed to add expense:', error);
    return { success: false, error: 'Failed to add expense' };
  }
}
