import { error, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

import { Route, Routes } from "react-router-dom";
import {HomePage} from "../Pages/HomePage"
import {RegPage} from "../Pages/RegPage"
import {LoginPage} from "../Pages/LoginPage"
import {IncomesPage} from "../Pages/IncomesPage"
import {SpendingsPage} from "../Pages/SpendingsPage"
import {FinanceFlow} from "../Pages/FinanceFlow"
import { Login } from './Header/Login/Login';
import { Modal } from "./Header/Login/Login.styled";
defaultModules.set(PNotifyMobile, {});






export const App = () => {



const handleInpBtn = (e) => {
  e.preventDefault()
  if(e.currentTarget.elements.email.value === ''){
    // showNotification()
  }
}

  return (
    <div>

      {/* <Login/> */}

      <Modal/>

   

  
      {/* <Layout/> */}

      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        {/* <Route path="/registration" index element={<RegPage/>}/>
        <Route path="/loginization" element={<LoginPage/>}/>
        <Route path="/spendings" element={<SpendingsPage/>}/>
        <Route path="/incomes" element={<IncomesPage/>}/> 
        <Route path="/finance-flows" element={<FinanceFlow/>}/> */}
      </Routes> 
      
      
      

    </div>
  );
}