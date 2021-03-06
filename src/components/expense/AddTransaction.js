import React, { useContext, useState } from 'react';
import { TransactionContext } from '../../contexts/transactionContext';
import axios from 'axios';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [state, setState] = useContext(TransactionContext);

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const addTransactionHandler = async (e) => {
    e.preventDefault();
    await axios.post(
      'http://localhost:8080/api/v1/expense',
      {
        id: Math.floor(Math.random() * 100000) + 1,
        text: text,
        amount: parseInt(amount),
      },
      { headers: { Authorization: `Bearer ${state.user.token}` } }
    );
    const response = await axios.get('http://localhost:8080/api/v1/expense', {
      headers: { Authorization: `Bearer ${state.user.token}` },
    });
    setState((prevState) => ({ ...prevState, transaction: response.data }));
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
