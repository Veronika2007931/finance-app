import styled from "styled-components";

export const SummaryContainer = styled.div`
  background-color: #F5F6FB;
  border: 2px solid #FFFFFF;
  border-radius: 8px;
  padding: 20px;
  width: 280px;
  margin-left: 20px; 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const SummaryTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  text-align: center;
`;

export const MonthRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const MonthName = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

export const MonthSum = styled.span`
  color: #FF751D;
  font-weight: 600;
`;

