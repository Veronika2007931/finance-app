import { HeaderText, MainText, SecondMainText, Form, 
GoogleBtn, DefText, Input, LogInBtn, RegisterBtn,
Backdrop} from "./Login.styled"

function Login({closeModal}){

    const handleCloseOnEsc = (e) => {
        if(e.code === 'Escape'){
            closeModal()
            window.removeEventListener('keydown', handleCloseOnEsc)
        }
    }

    window.addEventListener('keydown', handleCloseOnEsc)
    const handleClosing = (e) => {
        e.target === e.currentTarget && closeModal()
        window.removeEventListener('keydown', handleCloseOnEsc)
    }

    return(
        <Backdrop onClick={handleClosing}>
          <HeaderText>INVESTIQ</HeaderText>
          <MainText>InvestIQ</MainText>
          <SecondMainText>SMART FINANCE</SecondMainText>
          <container>
            <Form>
            <p>Ви можете авторизуватися за допомогою акаунта Google.</p>
            <GoogleBtn type="submit">Google</GoogleBtn>
            <p>Або увійти за допомогою ел. пошти та праолю після реєстрації.</p>
            <DefText>Електронна пошта:</DefText> 
            <input type="text" name="email" placeholder="your@email.com" />
            <DefText>Пароль:</DefText>
            <Input type="text" name="password" placeholder="password"/>
            <LogInBtn type="submit" onSubmit={handleBtnInp}>Увійти</LogInBtn>
            <RegisterBtn type="submit">Реєстрація</RegisterBtn>
          </Form>
          </container>
        </Backdrop>
    )
}