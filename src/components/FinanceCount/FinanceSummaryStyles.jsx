import styled from 'styled-components';

export const ChartContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const TabButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#FF751D')};
  background-color: ${({ isActive }) => (isActive ? '#FF751D' : '#ffffff')};
  border: 2px solid #FF751D;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #FF751D;
    color: #ffffff;
  }
`;
