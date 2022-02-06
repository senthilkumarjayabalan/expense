import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/transactionContext';

export const TransactionList = () => {
  const [transactionList, setTransactionList] = useContext(TransactionContext);

  const deleteTransaction = (text) => {
    return () => {
      const output = transactionList.filter((trx) => {
        return trx.text.localeCompare(text) === 0 ? false : true;
      });
      setTransactionList(output);
    };
  };

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactionList.map((trx) => (
          <li className='minus'>
            {trx.text} <span>${trx.amount}</span>
            <button
              className='delete-btn'
              onClick={deleteTransaction(trx.text)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
