import React from 'react';
import { Balance } from './FinanceBalance';
import { Summary } from './FinanceSummary';
import { Count } from './FinanceCount';
import { DashboardContainer } from './DashboardStyles';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Balance />
      <Count />
      <Summary />
    </DashboardContainer>
  );
};

export default Dashboard;
