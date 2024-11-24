import React from 'react';
import { useSelector } from 'react-redux';
import { selectIncomes } from '../../redux/selectors';
import { formatMonth } from './utils/monthFormatter';
import { SummaryContainer, SummaryTitle, MonthRow,  MonthName, MonthSum } from './IncomesSummaryStyles';


export const IncomesSummary = () => {
  const incomes = useSelector(selectIncomes);

  const monthlyIncomes = incomes.reduce((acc, income) => {
    const month = income.date.split('-')[1];
    acc[month] = (acc[month] || 0) + Number(income.sum);
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
