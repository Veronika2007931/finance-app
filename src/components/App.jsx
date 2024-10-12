import { warning, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { FinanceBlock } from "./FinanceBlock/FinanceBlock";
import { Login } from './Header/Login/Login';
import { Header } from './Header/Header'
import { Modal } from "./Header/Login/Login.styled";
import { Form, GoogleText, GoogleBtn, DefText, Input, LogInBtn, RegisterBtn } from "./Header/Login/Login.styled";

defaultModules.set(PNotifyMobile, {});

export const App = () => {
  
  warning({
    text: 'Заповніть усі поля перед тим, як реєструватись.'
  })

const handleInpBtn = (e) => {
  e.preventDefault()
  if(e.currentTarget.elements.name.value === ''){
      warning()
  }
}
  return (
    <div>
      <Login/>
      <Header/>
      <Modal>
      <Form noValidate>
            <GoogleText>Ви можете авторизуватися за допомогою акаунта Google.</GoogleText>
            <GoogleBtn type="submit">Google</GoogleBtn>
            <GoogleText>Або увійти за допомогою ел. пошти та паролю після реєстрації.</GoogleText>
            <DefText>Електронна пошта:</DefText> 
            <Input type="text" name="email" placeholder="your@email.com" />
            <DefText>Пароль:</DefText>
            <Input type="text" name="password" placeholder="password"/>
            <LogInBtn type="submit" onSubmit={handleInpBtn}>Увійти</LogInBtn>
            <RegisterBtn>Реєстрація</RegisterBtn>
          </Form>
      </Modal>
      <FinanceBlock/> 
    </div>
  );
};
