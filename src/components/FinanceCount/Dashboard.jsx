import React from 'react';
import { UserBalance } from './UserBalance';
// import { MonthlySummary } from './MonthlySummary';
import { DashboardContainer } from './DashboardStyles';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <UserBalance />
      {/* <MonthlySummary /> */}
    </DashboardContainer>
  );
};

export default Dashboard;
