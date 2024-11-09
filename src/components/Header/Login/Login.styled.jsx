// import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { Link } from "react-router-dom"



export const MainText = styled.h1`
   color: #000000;
   font-size: 102px;

   width: 385px;
   height: 120px;
   margin-left: 270px;
   margin-top: 200px;
   margin-bottom: 0px;
`

export const SecondMainText = styled.h3`
    color: #52555F;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    text-align: left;

    width: 159px;
    height: 19px;
    margin-left: 400px;
`

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 20px;
   position: absolute;
   background-color: white;
  top: 173px;
  left: 734px;

  padding: 50px 40px;
  border-radius: 16px;
`

export const GoogleBtn = styled.button`
  background-color: #e0e0e0;
  font-weight: 700;
    font-size: 12px;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  box-shadow: 5px, 5px, 0px, #aab2c533;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
`

export const DefText = styled.p`
  color: #000000;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Input = styled.input` 
    background-color: #e8e8e8;
    border-radius: 10px;
    border: none;
    padding: 5px;
    width: 220px;
`

export const LogInBtn = styled.button`
    border: none;
    font-weight: 700;
    font-size: 12px;
    border-radius: 16px;
    background-color: #FF6B08;
    box-shadow: 5px, 5px, 0px, #FF6B0859;
    padding: 12px 34px;
    color: white;
    margin-right: 15px;
`

export const RegisterBtn = styled(Link)`
  background-color: #e4e4e4;
  font-weight: 700;
  font-size: 12px;
  border: none;
  border-radius: 16px;
  box-shadow: 5px, 5px, 0px, #aab2c533;
  padding: 12px 15px;
  color: grey;
`

export const Backdrop = styled.div`
   display: flex;
   align-items: center;

    background: #0000003a;
    backdrop-filter: blur(4px);
    background-color: #efefef;
    z-index: 10;
`

export const GoogleText = styled.p`
  color: #52555F;
`