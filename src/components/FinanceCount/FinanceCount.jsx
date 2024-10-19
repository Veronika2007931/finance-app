import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Balance } from './Balance';
import { Summary } from './Summary';
import { FinanceCountContainer } from './FinanceCountStyles';

const FinanceCount = () => {
  return (
    <FinanceCountContainer>
      <h1>FinanceCount Dashboard</h1>
      <Balance />
      <Summary />
      <ToastContainer />
    </FinanceCountContainer>
  );
};

export default FinanceCount;
