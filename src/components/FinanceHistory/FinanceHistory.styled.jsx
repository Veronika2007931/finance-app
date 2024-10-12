import styled from "styled-components"

export const FinanceTable = styled.table`
    button{
        padding: 7px;
        height: 32px;
        color: black;
        border: none;
        background-size: 18px;
        border-radius: 50%;
        &:hover, &:focus{
            color: #E7192E;
            transform: scale(1.1);
        }
        svg{
            width: 18px;
            height: 18px;
        }
    }
`