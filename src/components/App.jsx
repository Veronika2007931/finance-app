import { Route, Routes } from "react-router-dom";
import {HomePage} from "../Pages/HomePage"
import {RegPage} from "../Pages/RegPage"
import {LoginPage} from "../Pages/LoginPage"
import {Incomes} from "../Pages/Incomes"
import {Spendings} from "../Pages/Spendings"
import {FinanceFlow} from "../Pages/FinanceFlow"
import { AppBar } from './Navigation/AppBar';



export const App = () => {
 return (
    <div>
         <AppBar/>
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/registration" index element={<RegPage/>}/>
        <Route path="/loginization" element={<LoginPage/>}/>
        <Route path="/incomes" element={<Incomes/>}/>
        <Route path="/spendings" element={<Spendings/>}/>
        <Route path="/finance-flows" element={<FinanceFlow/>}/>
      </Routes>
      
   </div>
  );
};