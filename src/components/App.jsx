

import { Route, Routes } from "react-router-dom";
import {HomePage} from "../Pages/HomePage"
import {RegPage} from "../Pages/RegPage"
import {LoginPage} from "../Pages/LoginPage"
import {IncomesPage} from "../Pages/IncomesPage"
import {SpendingsPage} from "../Pages/SpendingsPage"
import {FinanceFlow} from "../Pages/FinanceFlow"
import { GlobalStyle } from "Styles/Global.styled";
import { RestrictedRout } from "./RestrictedRout/RestrictedRout";

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route  index element={<RegPage/>}/>
        <Route path="/loginization" element={<RestrictedRout element={<LoginPage/>} redirectTo="/incomes"/>}/>
        <Route path="/spendings" element={<SpendingsPage/>}/>
        <Route path="/incomes" element={<IncomesPage/>}/> 
        <Route path="/finance-flows" element={<FinanceFlow/>}/>
      </Routes> 
      <GlobalStyle/>
    </div>
  );
}