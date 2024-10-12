import { FinanceBlock } from "./FinanceBlock/FinanceBlock";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Navigation/Layout";
import {HomePage} from "../Pages/HomePage"
import {RegPage} from "../Pages/RegPage"
import {LoginPage} from "../Pages/LoginPage"
import {Incomes} from "../Pages/Incomes"
import {Spendings} from "../Pages/Spendings"
import {FinanceFlow} from "../Pages/FinanceFlow"

export const App = () => {
  return (
    <div>
      {/* <FinanceBlock/>  */}
      <Layout/>
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/registration" element={<RegPage/>}/>
        <Route path="/loginization" element={<LoginPage/>}/>
        <Route path="/incomes" element={<Incomes/>}/>
        <Route path="/spendings" element={<Spendings/>}/>
        <Route path="/finance-flows" element={<FinanceFlow/>}/>
      </Routes>
      
      
      
    </div>
  );
};
