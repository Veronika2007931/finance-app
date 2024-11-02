

import { Route, Routes } from "react-router-dom";
import {HomePage} from "../Pages/HomePage"
import {RegPage} from "../Pages/RegPage"
import {LoginPage} from "../Pages/LoginPage"
import {IncomesPage} from "../Pages/IncomesPage"
import {SpendingsPage} from "../Pages/SpendingsPage"
import {FinanceFlow} from "../Pages/FinanceFlow"
import { Login } from './Header/Login/Login';
import { Modal } from "./Header/Login/Login.styled";
import { GlobalStyle } from "Styles/Global.styled";








export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route  index element={<RegPage/>}/>
        <Route path="/loginization" element={<LoginPage/>}/>
        <Route path="/spendings" element={<SpendingsPage/>}/>
        <Route path="/incomes" element={<IncomesPage/>}/> 
        <Route path="/finance-flows" element={<FinanceFlow/>}/>
      </Routes> 
      <GlobalStyle/>
    </div>
  );
}