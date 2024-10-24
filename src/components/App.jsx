import { error, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

import { Login } from './Header/Login/Login';
import { Header } from './Header/Header'
import { Modal } from "./Header/Login/Login.styled";
import { Form, GoogleText, GoogleBtn, DefText, Input, LogInBtn, RegisterBtn } from "./Header/Login/Login.styled";
defaultModules.set(PNotifyMobile, {});
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Navigation/Layout";
import {HomePage} from "../Pages/HomePage"
import {RegPage} from "../Pages/RegPage"
import {LoginPage} from "../Pages/LoginPage"
import {Incomes} from "../Pages/Incomes"
import {Spendings} from "../Pages/Spendings"
import {FinanceFlow} from "../Pages/FinanceFlow"


export const App = () => {

  error({
    text: 'Заповніть усі поля перед тим, як реєструватись.'
  })

const handleInpBtn = (e) => {
  e.preventDefault()
<<<<<<< Updated upstream
  if(e.currentTarget.elements.name.value === ''){
    
=======
  if(e.currentTarget.elements.email.value === ''){
    showNotification()
>>>>>>> Stashed changes
  }
}
  return (
    <div>

      <Login/>
      <Header/>
      <Modal>
      <Form noValidate onSubmit={handleInpBtn}>
            <GoogleText>Ви можете авторизуватися за допомогою акаунта Google.</GoogleText>
            <GoogleBtn type="submit">Google</GoogleBtn>
            <GoogleText>Або увійти за допомогою ел. пошти та паролю після реєстрації.</GoogleText>
            <DefText>Електронна пошта:</DefText> 
            <Input type="text" name="email" placeholder="your@email.com" />
            <DefText>Пароль:</DefText>
            <Input type="text" name="password" placeholder="password"/>
            <LogInBtn type="submit">Увійти</LogInBtn>
            <RegisterBtn>Реєстрація</RegisterBtn>
          </Form>
      </Modal>
      <Layout/>
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