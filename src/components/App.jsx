

import { Route, Routes } from "react-router-dom";
import {HomePage} from "../Pages/HomePage"
import {RegPage} from "../Pages/RegPage"
import {LoginPage} from "../Pages/LoginPage"
import {IncomesPage} from "../Pages/IncomesPage"
import {SpendingsPage} from "../Pages/SpendingsPage"
import {FinanceFlow} from "../Pages/FinanceFlow"
import { GlobalStyle } from "Styles/Global.styled";
import { RestrictedRout } from "./RestrictedRout/RestrictedRout";
import { PrivatRout } from "./RestrictedRout/PrivatRout";
import { AppBar } from "./Navigation/AppBar";


export const App = () => {

  return (
    <div style={{ background: 'rgba(242, 245, 252, 1)', width: '100%' }}>
      <AppBar/>
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route  index element =  {<RestrictedRout element={<LoginPage/>} redirectTo="/incomes" />}/>
        <Route path="/register" element={<RestrictedRout element={<RegPage/>} redirectTo="/incomes" />}/>
        <Route path="/spendings" element={ <PrivatRout element={<SpendingsPage/>} redirectTo="/"/>}/>
        <Route path="/incomes" element={<PrivatRout element={<IncomesPage/>} redirectTo="/"/>}/> 
        <Route path="/finance-flows" element={<PrivatRout element={<FinanceFlow/>} redirectTo="/"/>}/>
      </Routes> 
      <GlobalStyle/>

    </div>
  );
}