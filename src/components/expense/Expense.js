import React from 'react';
import { AddTransaction } from './AddTransaction';
import { Balance } from './Balance';
import { Header } from './Header';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';

export const Expense = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
};
