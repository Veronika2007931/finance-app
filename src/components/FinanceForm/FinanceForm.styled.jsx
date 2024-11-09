import styled from "styled-components"

export const FinForm = styled.form`
    & input, select{
        height: 40px;
        padding-left: 20px;
        border: solid 2px ${({theme})=>theme.color.buttGray};
        &::placeholder{
            color: ${({theme})=>theme.color.buttGray};
        }
    }
`

export const DateInp = styled.input`
`

export const SubBtn = styled.button`
    background-color: #FF751D;
    padding: 12px 35px 12px 35px;
    color: white;
    border-radius: 16px;
    text-transform: uppercase;
    border: 2px solid #FF751D;
`

export const ClearBtn = styled.button`
    color: black;
    border: 2px solid #F5F6FB;
    padding: 12px 35px 12px 35px;
    border-radius: 16px;
    text-transform: uppercase;
`