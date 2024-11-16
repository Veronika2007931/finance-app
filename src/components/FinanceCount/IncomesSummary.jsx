import React from 'react';
import { useSelector } from 'react-redux';
import { formatMonth } from '../FinanceCount/utils/monthFormatter';
import { SummaryContainer, SummaryItem, MonthText, AmountText } from './IncomesSummaryStyles';
import { selectIncomes } from '../../redux/selectors';

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
