import styled from "styled-components"

export const ToggleList = styled.ul`
    a{
        width: 138px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        border-radius: 16px 16px 0 0;
        text-decoration: none;
        font-weight: 700;
        color: black;
        background: ${({theme})=>theme.color.buttGray};
        border-radius: 20px 20px 0 0;
        &.active{
            background-color: white;
            color: ${({theme})=>theme.color.buttOrTextOrange};
        }
    }
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`