import styled from 'styled-components';

export const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  border: 2px solid #FF751D;
  border-radius: 8px;
  gap: 10px;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 20px;
  }

  @media (min-width: 1200px) {
    grid-column: span 2;
    justify-content: flex-start;
  }
`;

export const BalanceText = styled.span`
  font-size: 18px;
  color: #000;
`;

export const BalanceValue = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const ConfirmButton = styled.button`
  padding: 5px 10px;
  background-color: #FF751D;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e06514;
  }
`;
