import React from "react";
import { BalanceContainer, BalanceAmount, NavigateButton } from "./UserBalanceStyles";
import { useSelector } from "react-redux";
import { selectBalance } from "../../redux/selectors";
import { Link } from "react-router-dom";

export const UserBalance = () => {
  const balance = useSelector(selectBalance)
  return (
    <BalanceContainer>
      <BalanceAmount>Баланс: {balance.toFixed(2)} грн</BalanceAmount>
      <NavigateButton to="/finance-flows">Перейти до розрахунків</NavigateButton>
    </BalanceContainer>
  );
};

export default UserBalance;