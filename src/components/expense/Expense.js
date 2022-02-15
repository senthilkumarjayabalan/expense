import React from 'react';
import { TransactionProvider } from '../../contexts/transactionContext';
import { AddTransaction } from './AddTransaction';
import { Balance } from './Balance';
import { Header } from './Header';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';

export const Expense = () => {
  return (
    <TransactionProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </TransactionProvider>
  );
};
