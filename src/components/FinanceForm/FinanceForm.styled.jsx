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
`

export const ClearBtn = styled.button`
`