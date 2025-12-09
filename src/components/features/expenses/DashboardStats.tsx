import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

interface DashboardStatsProps {
  totalAmount: number;
  count: number;
}

export function DashboardStats({ totalAmount, count }: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Total Spending</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalAmount.toFixed(2)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Total Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{count}</div>
        </CardContent>
      </Card>
    </div>
  );
}
