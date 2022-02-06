import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/transactionContext';
import '.././App.css';
export const Balance = () => {
  const [transactionList] = useContext(TransactionContext);

  const balance = transactionList.reduce((a, b) => a + b.amount, 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  );
};
