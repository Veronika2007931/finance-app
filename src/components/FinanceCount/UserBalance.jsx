import React from "react";
import { BalanceContainer, BalanceAmount, NavigateButton } from "./UserBalance.styled";

const UserBalance = ({ balance }) => {
  return (
    <BalanceContainer>
      <BalanceAmount>Баланс: {balance.toFixed(2)} грн</BalanceAmount>
      <NavigateButton onClick={() => (window.location.href = "/finance-flows")}>
        Перейти до розрахунків
      </NavigateButton>
    </BalanceContainer>
  );
};

export default UserBalance;