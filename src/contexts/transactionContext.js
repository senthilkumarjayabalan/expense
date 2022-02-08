import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      const response = await axios.get('http://localhost:8080/api/v1/expense');
      setTransactionList(response.data);
    };
    getTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={[transactionList, setTransactionList]}>
      {children}
    </TransactionContext.Provider>
  );
};
