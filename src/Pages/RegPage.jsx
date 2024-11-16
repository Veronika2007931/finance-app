import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/bootstrap4/dist/PNotifyBootstrap4.css';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import {  MainText, SecondMainText, Form, 
GoogleBtn, DefText, Input, RegBtn,
Backdrop, GoogleText } from '../components/Header/Login/Login.styled'

export function RegPage(){

    const dispatch = useDispatch()
      const showNotification = () => {
         info({
          text: 'Заповність всі поля щоб зареєструватись.',
          type: 'notice', // тип повідомлення (може бути 'notice', 'info', 'success', 'error')
          styling: 'bootstrap4', // використання Bootstrap 4 стилів
          delay: 2000, // час відображення (мс)
        });
      };

      const handleInpBtn = (e) => {
        e.preventDefault()

        const form = e.currentTarget
        const objUser = {
            email: e.currentTarget.elements.email.value,
          password: e.currentTarget.elements.password.value,
            name: e.currentTarget.elements.name.value,
        }
        
        if(e.currentTarget.elements.email.value === ''){
           showNotification()
        }

        dispatch(login(objUser))
        form.reset()
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
            <DefText>Ім'я:
              <Input type="text" name="name" placeholder="name"/>
            </DefText>
            <div>
            <RegBtn type='submit' to='/loginization'>Реєстрація</RegBtn>
            </div>
          </Form>
        </Backdrop>
    )
}