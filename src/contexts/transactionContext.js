import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [state, setState] = useState({ user: {}, transaction: [] });

  useEffect(() => {
    console.log('use Effect called ');
    const getTransactions = async () => {
      const response = await axios.get('http://localhost:8080/api/v1/expense');

      setState((prevState) => ({ ...prevState, transaction: response.data }));
    };
    getTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={[state, setState]}>
      {children}
    </TransactionContext.Provider>
  );
};
