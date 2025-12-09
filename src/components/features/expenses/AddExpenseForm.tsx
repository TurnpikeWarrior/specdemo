'use client';

import React, { useState } from 'react';
import { Category } from '@/lib/types';
import { addExpense } from '@/app/actions';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export function AddExpenseForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await addExpense(formData);

    if (result.success) {
      // Reset form on success
      (event.target as HTMLFormElement).reset();
    } else {
      setError(result.error || 'Something went wrong');
    }
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Add New Expense</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            name="amount" 
            type="number" 
            label="Amount" 
            placeholder="0.00" 
            step="0.01" 
            required 
            min="0.01"
            aria-label="Amount"
          />
          <Input 
            name="date" 
            type="date" 
            label="Date" 
            required 
            aria-label="Date"
          />
          <div className="flex flex-col gap-1.5">
            <label htmlFor="category" className="text-sm font-medium leading-none">Category</label>
            <select 
              id="category" 
              name="category" 
              required
              defaultValue=""
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Category"
            >
              <option value="" disabled>Select a category</option>
              {Object.values(Category).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <Input 
            name="description" 
            type="text" 
            label="Description (Optional)" 
            placeholder="e.g., Lunch at cafe"
            aria-label="Description" 
          />
          
          {error && <div className="text-red-500 text-sm" role="alert" aria-live="polite">{error}</div>}
          
          <Button type="submit" disabled={isLoading} className="w-full" aria-label="Add Expense">
            {isLoading ? 'Adding...' : 'Add Expense'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
