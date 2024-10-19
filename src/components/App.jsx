// import { error, defaultModules } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import * as PNotifyMobile from '@pnotify/mobile';
// import '@pnotify/mobile/dist/PNotifyMobile.css';
// import { FinanceBlock } from "./FinanceBlock/FinanceBlock";

// import { Login } from './Header/Login/Login';
// import { Header } from './Header/Header'
// import { Modal } from "./Header/Login/Login.styled";
// import { Form, GoogleText, GoogleBtn, DefText, Input, LogInBtn, RegisterBtn } from "./Header/Login/Login.styled";
// defaultModules.set(PNotifyMobile, {});
import { Route, Routes } from "react-router-dom";
import {HomePage} from "../Pages/HomePage"
import {RegPage} from "../Pages/RegPage"
import {LoginPage} from "../Pages/LoginPage"
import {FinanceFlow} from "../Pages/FinanceFlow"
import { IncomesPage } from "Pages/IncomesPage";
import { SpendingsPage } from "Pages/SpendingsPage";
import { AppBar } from './Navigation/AppBar';

export const App = () => {
 return (
    <div>
         <AppBar/>
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/registration" index element={<RegPage/>}/>
        <Route path="/loginization" element={<LoginPage/>}/>
        <Route path="/spendings" element={<SpendingsPage/>}/>
        <Route path="/incomes" element={<IncomesPage/>}/>
        <Route path="/finance-flows" element={<FinanceFlow/>}/>
      </Routes>
    </div>
  );
};