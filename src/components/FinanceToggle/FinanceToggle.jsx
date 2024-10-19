import { NavLink } from "react-router-dom"
import { ToggleList } from "./FinanceToggle.styled"

export const FinanceToggle = () => {
    return(
        <ToggleList>
            <li><NavLink to="/spendings">Витрати</NavLink></li>
            <li><NavLink to="/incomes">Дохід</NavLink></li>
        </ToggleList>
    )
}