import styled from "styled-components"

export const FinanceTable = styled.table`
    border: solid 2px ${({theme})=>theme.color.buttGray};
    border-collapse: collapse;
    & td, th{
        border-bottom: solid 2px ${({theme})=>theme.color.buttGray};
        width: 175px;
        height: 40px;
        padding-left: 20px;
        text-align: left;
        &:last-child{
            width: 60px;
        }
    }
    & tbody{
        max-height: 344px; 
        overflow-y: auto;
    }
    & th{
        background: ${({theme})=>theme.color.buttGray};
        position: sticky;
        z-index: 1;
    }
    thead{    
        border-radius: 30px 30px 0 0;
    }
    
    @media screen and (min-width: 1200px) {
        width: 760px;
    }
`
export const DelCol = styled.td`
    button{
        padding: 7px;
        height: 32px;
        color: black;
        border: none;
        background-size: 18px;
        background: none;
        border-radius: 50%;
        transition: all 150ms ease-in-out;
        &:hover, &:focus{
            background:  ${({theme})=>theme.color.buttGray};
            transform: scale(1.1);
        }
        svg{
            width: 18px;
            height: 18px;
        }}
        `