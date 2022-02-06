import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { TransactionProvider } from './contexts/transactionContext';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <TransactionProvider>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </TransactionProvider>
      </div>
    </div>
  );
}

export default App;
