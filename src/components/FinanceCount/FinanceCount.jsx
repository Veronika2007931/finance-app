import React from 'react';
import { useSelector } from 'react-redux';
import { selectSpendings, selectIncomes } from '../../redux/selectors';
import { CountContainer, CountText, CountValue } from './FinanceCountStyles';

export const Count = () => {
  const spendings = useSelector(selectSpendings);
  const incomes = useSelector(selectIncomes);

  const totalTransactions = spendings.length + incomes.length;

  return (
    <CountContainer>
      <CountText>Total Transactions:</CountText>
      <CountValue>{totalTransactions}</CountValue>
    </CountContainer>
  );
};
