import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIncomes, selectSpendings } from '../../redux/selectors';
import { Bar } from 'react-chartjs-2';
import { ChartContainer, TabButton, TabContainer } from './FinanceSummaryStyles';

export const Summary = () => {
  const [activeTab, setActiveTab] = useState(0);
  const incomes = useSelector(selectIncomes);
  const spendings = useSelector(selectSpendings);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: activeTab === 0 ? 'Income' : 'Expenses',
        data: activeTab === 0 ? incomes.map((item) => item.sum) : spendings.map((item) => item.sum),
        backgroundColor: activeTab === 0 ? 'rgba(255, 165, 0, 0.6)' : 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <ChartContainer>
      <TabContainer>
        <TabButton isActive={activeTab === 0} onClick={() => handleTabChange(0)}>
          Income
        </TabButton>
        <TabButton isActive={activeTab === 1} onClick={() => handleTabChange(1)}>
          Expenses
        </TabButton>
      </TabContainer>
      <Bar data={data} />
    </ChartContainer>
  );
};
