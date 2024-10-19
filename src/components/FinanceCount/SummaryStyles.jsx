import styled from 'styled-components';
import { Tabs } from '@material-ui/core';

export const ChartContainer = styled.div`
  margin-top: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #FF751D;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

export const StyledTabs = styled(Tabs)`
  .MuiTab-root {
    color: #333;
  }

  .Mui-selected {
    color: #ffffff;
    background-color: #FF751D;
    border-radius: 8px;
  }

  .MuiTabs-indicator {
    background-color: #FF751D;
  }
`;
