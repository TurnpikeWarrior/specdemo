import React from 'react';
import { Expense } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { format, parseISO } from 'date-fns';

interface ExpenseListProps {
  expenses: Expense[];
}

export function ExpenseList({ expenses }: ExpenseListProps) {
  if (expenses.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="p-8 text-center text-gray-500">
          No expenses recorded yet.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {expenses.map((expense) => (
            <div key={expense.id} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
              <div className="flex flex-col gap-1">
                <span className="font-medium text-gray-900">{expense.category}</span>
                <span className="text-sm text-gray-500">{format(parseISO(expense.date), 'MMM d, yyyy')}</span>
                {expense.description && <span className="text-xs text-gray-400">{expense.description}</span>}
              </div>
              <span className="font-semibold text-gray-900">
                ${expense.amount.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
