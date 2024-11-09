import styled from 'styled-components';

export const SummaryContainer = styled.div`
  background-color: #ffffff;
  border: 2px solid #FF751D;
  border-radius: 8px;
  padding: 15px;
  width: 150px;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
    align-self: flex-start;
  }

  @media (min-width: 1200px) {
    align-self: flex-start;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  color: #000;
`;

export const MonthText = styled.span`
  font-size: 14px;
`;

export const AmountText = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
