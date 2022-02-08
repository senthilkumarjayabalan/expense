import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/transactionContext';
import axios from 'axios';

export const TransactionList = () => {
  const [transactionList, setTransactionList] = useContext(TransactionContext);

  const deleteTransaction = (id) => {
    return async () => {
      await axios.delete('http://localhost:8080/api/v1/expense/' + id);
      const response = await axios.get('http://localhost:8080/api/v1/expense');
      setTransactionList(response.data);
    };
  };

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactionList.map((trx) => (
          <li className={trx.amount > 0 ? 'plus' : 'minus'} key={trx.id}>
            {trx.text}{' '}
            <span>
              {trx.amount > 0 ? '+' : '-'}${Math.abs(trx.amount)}
            </span>
            <button className='delete-btn' onClick={deleteTransaction(trx.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
