import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import TotalExpenses from './TotalExpenses';

const ExpenseDashboardPage = () => (
  <div>
    <TotalExpenses />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
