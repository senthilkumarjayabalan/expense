import React, { useContext } from 'react';
import { TransactionContext } from '../../contexts/transactionContext';
import '../.././App.css';
export const Balance = () => {
  const [state] = useContext(TransactionContext);

  const balance = state.transaction.reduce((a, b) => a + b.amount, 0);
  return (
    <div className='balance'>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </div>
  );
};
