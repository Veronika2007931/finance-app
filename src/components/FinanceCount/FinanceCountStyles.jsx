import styled from 'styled-components';

export const FinanceCountContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
  }

  h1 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 5px;
  }
`;
