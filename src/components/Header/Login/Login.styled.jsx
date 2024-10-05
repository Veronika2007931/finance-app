import styled from "styled-components"

export const HeaderText = styled.h3`
  color: #000000;
  size: 16px;
  font-family: 'Roboto';
  line-height: 18.75px;

  width: 77px;
  height: 19px;
  top: 21px;
  left: 48px;
  gap: 0px;
  opacity: 0px;
`

export const MainText = styled.h1`
   color: #000000;
   font-family: 'Roboto';
   font-size: 102px;
   font-weight: 900;
   line-height: 119.53px;
   text-align: left;
   size: 102px;

   width: 385px;
   height: 120px;
   top: 364px;
   left: 230px;
   gap: 0px;
   opacity: 0px;
`

export const SecondMainText = styled.h3`
    color: #52555F;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    letter-spacing: 0.18em;
    text-align: left;

    width: 159px;
    height: 19px;
    top: 484px;
    left: 302px;
    gap: 0px;
    opacity: 0px;
`

export const Form = styled.form`
   width: 436px;
   height: 535px;
   top: 173px;
   left: 734px;
   gap: 0px;
   opacity: 0px;

   color: white;
`

export const GoogleBtn = styled.button`
  background-color: #F6F7FB;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  box-shadow: 5px, 5px, 0px, #aab2c533;
`

export const DefText = styled.p`
  color: #000000;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Input = styled.input`
    background-color: #F6F7FB;
    border-radius: 10px;
`

export const LogInBtn = styled.button`
    border: none;
    border-radius: 16px;
    background-color: #FF6B08;
    box-shadow: 5px, 5px, 0px, #FF6B0859;
`

export const RegisterBtn = styled.button`
  background-color: #F5F6FB;
  border: none;
  border-radius: 16px;
  box-shadow: 5px, 5px, 0px, #aab2c533;
`

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0000003a;
    backdrop-filter: blur(4px);
    z-index: 10;
`