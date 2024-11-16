import styled from "styled-components"

export const FinForm = styled.form`
    margin-bottom: 60px;
    & input:not(:first-child), select{
        height: 44px;
        padding-left: 20px;
        border: solid 2px ${({theme})=>theme.color.buttGray};
    }
    & button{
        width: 125px;
        height: 44px;
        border: solid 2px ${({theme})=>theme.color.buttGray};
        border-radius: 16px;
        font-weight: 700;
        font-size: 12px;
        margin-left: 21px;
    }
`

export const DateInp = styled.input`
    border: transparent;
    margin-right: 21px;
    
`

export const SubBtn = styled.button`

        background: ${({theme})=>theme.color.buttOrTextOrange};
        color: white;
`

export const ClearBtn = styled.button`
        background: none;
        color: ${({theme})=>theme.color.blackForButtOrTxtBlack};
        padding: 12px 35px 12px 35px;
        border-radius: 16px;
`

