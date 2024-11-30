import { Link } from "react-router-dom";
import styled from "styled-components";

export const BalanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  /* width: 100%;
  max-width: 1060px;
  margin: 0 auto; */
`;

export const BalanceAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
`;

export const NavigateButton = styled(Link)`
  padding: 10px 15px;
  background-color: #ff751d;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #e66b1c;
  }
`;
