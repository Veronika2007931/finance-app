import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BalanceContainer = styled.div`
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

export const Balance = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    
    const userBalance = 1200;
    setBalance(userBalance);
  }, []);

  return (
    <BalanceContainer>
      <h2>Balance: ${balance}</h2>
    </BalanceContainer>
  );
};
