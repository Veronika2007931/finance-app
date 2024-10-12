import { NavLink } from "react-router-dom"
import { ToggleList } from "./FinanceToggle.styled"

export const FinanceToggle = () => {
    return(
        <ToggleList>
            <li><NavLink to='vytraty'>Витрати</NavLink></li>
            <li><NavLink to='dohid'>Дохід</NavLink></li>
        </ToggleList>
    )
}