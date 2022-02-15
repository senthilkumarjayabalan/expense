import React, { useContext } from 'react';
import { TransactionContext } from '../../contexts/transactionContext';

export const IncomeExpenses = () => {
  const [state] = useContext(TransactionContext);

  const income = state.transaction.reduce(
    (a, b) => a + (b.amount > 0 ? b.amount : 0),
    0
  );
  const expense = state.transaction.reduce(
    (a, b) => a + (b.amount < 0 ? b.amount : 0),
    0
  );

  return (
    <>
      <div className='inc-exp-container'>
        <div>
          <h4>Income</h4>
          <p className='money plus'>+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className='money minus'>${expense}</p>
        </div>
      </div>
    </>
  );
};
