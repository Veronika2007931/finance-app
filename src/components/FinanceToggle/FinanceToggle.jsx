import { ToggleList } from "./FinanceToggle.styled"

export const FinanceToggle = () => {
    return(
        <ToggleList>
            <li><button type="button">Витрати</button></li>
            <li><button type="button">Дохід</button></li>
        </ToggleList>
    )
}