import { warning, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { HeaderText, MainText, SecondMainText, Form, 
GoogleBtn, DefText, Input, LogInBtn,
Backdrop, Modal, GoogleText, RegisterBtn } from "./Login.styled"

defaultModules.set(PNotifyMobile, {});

export function Login(){

    warning({
        text: 'Заповніть усі поля перед тим, як реєструватись.'
    })
    

    const handleInpBtn = (e) => {
        e.preventDefault()
        if(e.currentTarget.elements.name.value === ''){
            
        }
    }

    return(
        <Backdrop>
          <HeaderText>INVESTIQ</HeaderText>
          <MainText>InvestIQ</MainText>
          <SecondMainText>SMART FINANCE</SecondMainText>
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
        </Backdrop>
    )
}