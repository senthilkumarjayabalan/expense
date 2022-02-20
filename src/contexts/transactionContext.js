import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [state, setState] = useState({ user: {}, transaction: [] });

  useEffect(() => {
    console.log('Transaction Context use Effect called ... ');
    if (state.user.token) {
      const getTransactions = async () => {
        const response = await axios.get(
          'http://localhost:8080/api/v1/expense',
          {
            headers: { Authorization: `Bearer ${state.user.token}` },
          }
        );

        setState((prevState) => ({ ...prevState, transaction: response.data }));
      };
      getTransactions();
    }
  }, [state.user.token]);

  return (
    <TransactionContext.Provider value={[state, setState]}>
      {children}
    </TransactionContext.Provider>
  );
};
