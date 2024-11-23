import React from 'react';
import { useSelector } from 'react-redux';
import { selectSpendings } from '../../redux/selectors';
import { formatMonth } from './utils/monthFormatter';
import {  SummaryContainer, MonthSum, MonthName, SummaryTitle, MonthRow} from './ExpensesSummaryStyles';

export const ExpensesSummary = () => {
  const spendings = useSelector(selectSpendings);

  const monthlyExpenses = spendings.reduce((acc, spending) => {
    console.log(spending.date.split('-'));
    const month = spending.date.split('-')[1];
    console.log(month);
    acc[month] = (acc[month] || 0) + spending.sum;
    return acc;
  }, {});

  return (
    <SummaryContainer>
      <SummaryTitle>Зведення по витратам</SummaryTitle>
      {Object.entries(monthlyExpenses).map(([month, total], index) => {
        console.log(monthlyExpenses);
        console.log(month, total)
        return(
        
        <MonthRow key={index}>
          <MonthName>{formatMonth(month)}</MonthName>
          <MonthSum>{total} грн</MonthSum>
        </MonthRow>
      )})}
    </SummaryContainer>
  );
};
