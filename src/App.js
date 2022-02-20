import './App.css';
import React from 'react';

import { Menu } from './components/Menu';
import { Expense } from './components/expense/Expense';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignUp from './components/user/SignUp';
import { SignIn } from './components/user/SignIn';
import { TransactionProvider } from './contexts/transactionContext';

function App() {
  return (
    <TransactionProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='signup/signin' element={<SignIn />} />
          <Route path='/expense' element={<Expense />} />
        </Routes>
      </BrowserRouter>
    </TransactionProvider>
  );
}

export default App;
