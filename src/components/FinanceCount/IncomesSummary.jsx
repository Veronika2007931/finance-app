import React from 'react';
import { useSelector } from 'react-redux';
import { selectIncomes } from '../../redux/selectors';
import { formatMonth } from './utils/monthFormatter';
import { SummaryContainer, SummaryItem, MonthText, AmountText } from './IncomesSummaryStyles';

export const IncomesSummary = () => {
  const incomes = useSelector(selectIncomes);

  const monthlyIncomes = incomes.reduce((acc, income) => {
    const month = income.date.split('.')[1];
    acc[month] = (acc[month] || 0) + income.sum;
    return acc;
  }, {});

  return (
    <SummaryContainer>
      <h2>Зведення по доходам</h2>
      {Object.entries(monthlyIncomes).map(([month, total], index) => (
        <SummaryItem key={index}>
          <MonthText>{formatMonth(month)}</MonthText>
          <AmountText>{total} грн</AmountText>
        </SummaryItem>
      ))}
    </SummaryContainer>
  );
};
