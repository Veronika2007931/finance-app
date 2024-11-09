// import { Notification } from 'react-pnotify';
import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/bootstrap4/dist/PNotifyBootstrap4.css';
import { HeaderText, MainText, SecondMainText, Form, 
GoogleBtn, DefText, Input, LogInBtn,
Backdrop, GoogleText, RegisterBtn } from "./Login.styled"

export function Login(){
  
      //   <Notification
      //     type='notice'
      //     title='Попередження!'
      //     text='Заповніть усі поля щоб увійти.'
      //     delay={2000}
      //     shadow={false}
      //     hide={false}
      //     nonblock={true}
      //     desktop={true}
      //  />

      const showNotification = () => {
         info({
          text: 'Заповність всі поля щоб увійти.',
          type: 'notice', // тип повідомлення (може бути 'notice', 'info', 'success', 'error')
          styling: 'bootstrap4', // використання Bootstrap 4 стилів
          delay: 2000, // час відображення (мс)
        });
      };

    const handleInpBtn = (e) => {
        e.preventDefault()
        if(e.currentTarget.elements.email.value === ''){
           showNotification()
        }
    }

    return(
        <Backdrop>
       
       <div>
          <MainText>InvestIQ</MainText>
          <SecondMainText>SMART FINANCE</SecondMainText>
       </div>
            <Form noValidate onSubmit={handleInpBtn}>
            <GoogleText>Ви можете авторизуватися за допомогою акаунта Google.</GoogleText>
            <GoogleBtn type="submit">Google</GoogleBtn>
            <GoogleText>Або увійти за допомогою ел. пошти та паролю після реєстрації.</GoogleText>
            <DefText>Електронна пошта:
              <Input type="text" name="email" placeholder="your@email.com" />
            </DefText> 
            <DefText>Пароль:
              <Input type="text" name="password" placeholder="password"/>
            </DefText> 
            <div>
              <LogInBtn type="submit">Увійти</LogInBtn>
              <RegisterBtn to='/loginization'>Реєстрація</RegisterBtn>
            </div>
          </Form>
        </Backdrop>
    )
}