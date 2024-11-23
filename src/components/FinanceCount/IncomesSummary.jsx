import React from 'react';
import { useSelector } from 'react-redux';
import { selectIncomes } from '../../redux/selectors';
import { formatMonth } from './utils/monthFormatter';
import { SummaryContainer, MonthSum, MonthName, SummaryTitle, MonthRow } from './IncomesSummaryStyles';


export const IncomesSummary = () => {
  const incomes = useSelector(selectIncomes);

  const monthlyIncomes = incomes.reduce((acc, income) => {
    const month = income.date.split('.')[1];
    acc[month] = (acc[month] || 0) + income.sum;
    return acc;
  }, {});

  return (
    <SummaryContainer>
      <SummaryTitle>Зведення по доходам</SummaryTitle>
      {Object.entries(monthlyIncomes).map(([month, total], index) => (
        <MonthRow key={index}>
          <MonthName>{formatMonth(month)}</MonthName>
          <MonthSum>{total} грн</MonthSum>
        </MonthRow>
      ))}
    </SummaryContainer>
  );
};
