import { AddExpenseForm } from '@/components/features/expenses/AddExpenseForm';
import { ExpenseList } from '@/components/features/expenses/ExpenseList';
import { DashboardStats } from '@/components/features/expenses/DashboardStats';
import { getExpenses, getDashboardStats } from '@/app/actions';
import { auth } from "@/lib/auth";
import { LoginButton } from "@/components/features/auth/LoginButton";
import { UserProfile } from "@/components/features/auth/UserProfile";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const session = await auth();
  const expenses = await getExpenses();
  const stats = await getDashboardStats();

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-gray-50/50">
      <div className="z-10 w-full max-w-2xl items-center justify-between font-mono text-sm flex flex-col gap-8">
        <div className="w-full flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-gray-900">Personal Expense Tracker</h1>
          {session ? <UserProfile /> : <LoginButton />}
        </div>
        
        <DashboardStats totalAmount={stats.totalAmount} count={stats.count} />
        
        <AddExpenseForm />
        
        <ExpenseList expenses={expenses} />
      </div>
    </main>
  );
}

