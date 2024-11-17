import React from 'react';
import { useSelector } from 'react-redux';
import { selectSpendings } from '../../redux/selectors';
import { formatMonth } from './utils/monthFormatter';
import { SummaryContainer } from './ExpensesSummaryStyles';

export const ExpensesSummary = () => {
  const spendings = useSelector(selectSpendings);

  const monthlyExpenses = spendings.reduce((acc, spending) => {
    const month = spending.date.split('-')[1];
    acc[month] = (acc[month] || 0) + spending.sum;
    return acc;
  }, {});

  return (
    <SummaryContainer>
      <h2>Зведення по витратам</h2>
      {Object.entries(monthlyExpenses).map(([month, total], index) => (
        <li key={index}>
          <p>{formatMonth(month)}</p>
          <p>{total} грн</p>
        </li>
      ))}
    </SummaryContainer>
  );
};
