import React from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../redux/selectors';
import { BalanceContainer, BalanceText, BalanceValue, ConfirmButton } from './UserBalanceStyles';

export const UserBalance = () => {
  const balance = useSelector(selectBalance);

  return (
    <BalanceContainer>
      <BalanceText>Баланс:</BalanceText>
      <BalanceValue>{balance} UAH</BalanceValue>
      <ConfirmButton>Підтвердити</ConfirmButton>
    </BalanceContainer>
  );
};
