import { AddExpenseForm } from '@/components/features/expenses/AddExpenseForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col gap-8">
        <h1 className="text-4xl font-bold mb-8">Personal Expense Tracker</h1>
        
        <AddExpenseForm />
        
        <div className="mt-12 w-full text-center text-gray-500">
           {/* Placeholder for Dashboard and List */}
           <p>Dashboard and Recent Expenses will appear here.</p>
        </div>
      </div>
    </main>
  );
}
