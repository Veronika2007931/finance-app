import styled from 'styled-components';

export const BalanceContainer = styled.div`
  margin-bottom: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #FF751D;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

export const BalanceText = styled.h2`
  color: #333;
  font-size: 1.8rem;
`;
