import React from 'react';
import { useSelector } from 'react-redux';
import { selectSpendings, selectIncomes } from '../../redux/selectors';
import { BalanceContainer, BalanceText } from './FinanceBalanceStyles';

export const Balance = () => {
  const spendings = useSelector(selectSpendings);
  const incomes = useSelector(selectIncomes);

  const balance = incomes.reduce((acc, income) => acc + income.sum, 0) - 
                  spendings.reduce((acc, spending) => acc + spending.sum, 0);

  return (
    <BalanceContainer>
      <BalanceText>Balance: ${balance}</BalanceText>
    </BalanceContainer>
  );
};
