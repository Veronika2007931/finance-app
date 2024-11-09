import React from 'react';
import { useSelector } from 'react-redux';
import { selectSpendings, selectIncomes } from '../../redux/selectors';
import { SummaryContainer, SummaryItem, MonthText, AmountText } from './MonthlySummaryStyles';

export const MonthlySummary = () => {
  const spendings = useSelector(selectSpendings);
  const incomes = useSelector(selectIncomes);

  const monthlySummary = spendings.map((spending, index) => ({
    month: spending.date.split('.')[1], 
    spending: spending.sum,
    income: incomes[index]?.sum || 0
  }));

  return (
    <SummaryContainer>
      {monthlySummary.map((item, index) => (
        <SummaryItem key={index}>
          <MonthText>{item.month}</MonthText>
          <AmountText>Витрати: {item.spending} грн, Дохід: {item.income} грн</AmountText>
        </SummaryItem>
      ))}
    </SummaryContainer>
  );
};
