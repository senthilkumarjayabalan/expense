import { createContext, useState } from 'react';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactionList, setTransactionList] = useState([]);

  return (
    <TransactionContext.Provider value={[transactionList, setTransactionList]}>
      {children}
    </TransactionContext.Provider>
  );
};
