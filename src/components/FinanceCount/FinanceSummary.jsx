import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Tab } from '@material-ui/core';
import { ChartContainer, StyledTabs } from './SummaryStyles';

export const Summary = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: activeTab === 0 ? 'Income' : 'Expenses',
        data: activeTab === 0 ? [400, 500, 300, 700, 800, 600, 500, 400, 450, 650, 700, 800] : [300, 200, 250, 400, 500, 300, 200, 250, 300, 500, 600, 400],
        backgroundColor: activeTab === 0 ? 'rgba(255, 165, 0, 0.6)' : 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <ChartContainer>
      <StyledTabs value={activeTab} onChange={handleTabChange} aria-label="Income and Expenses">
        <Tab label="Income" />
        <Tab label="Expenses" />
      </StyledTabs>
      <Bar data={data} />
    </ChartContainer>
  );
};
