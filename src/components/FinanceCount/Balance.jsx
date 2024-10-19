import React, { useState, useEffect } from 'react';
import { BalanceContainer, BalanceText } from './BalanceStyles';

export const Balance = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const userBalance = 1200;
    setBalance(userBalance);
  }, []);

  return (
    <BalanceContainer>
      <BalanceText>Balance: ${balance}</BalanceText>
    </BalanceContainer>
  );
};