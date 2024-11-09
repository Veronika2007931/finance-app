import { FinanceForm } from "components/FinanceForm/FinanceForm"
import { FinanceHistory } from "components/FinanceHistory/FinanceHistory"
import { FinanceToggle } from "components/FinanceToggle/FinanceToggle"
import { useSelector } from "react-redux"
import { selectSpendings } from "../../redux/selectors"
import { addSpendings } from "../../redux/financesSlice"
import { deleteSpendings } from "../../redux/financesSlice"
import { financesCategories } from "../../redux/constants"
import { Container, Section } from "components/Incomes/Incomes.styled"

export const Spendings = () => {
    const financeList = useSelector(selectSpendings) 
    return(
        <Section>
            <FinanceToggle/>
            <Container>
                <FinanceForm isSpendings={true} finAdd={addSpendings} categoryOptions={financesCategories.spendingsCategories}/>
                <FinanceHistory isSpendings={true}  finanseList={financeList} delfunc={deleteSpendings}/>
                {/* Тут має бути елемент зведення */}
            </Container>
        </Section>
    )
}