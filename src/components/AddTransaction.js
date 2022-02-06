import React, { useContext, useState } from 'react';
import { TransactionContext } from '../contexts/transactionContext';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [transactionList, setTransactionList] = useContext(TransactionContext);

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const addTransactionHandler = (e) => {
    e.preventDefault();
    setTransactionList([
      ...transactionList,
      { text: text, amount: parseInt(amount) },
    ]);
    setText('');
    setAmount('');
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            onChange={textHandler}
            value={text}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={amountHandler}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn' onClick={addTransactionHandler}>
          Add transaction
        </button>
      </form>
    </>
  );
};
