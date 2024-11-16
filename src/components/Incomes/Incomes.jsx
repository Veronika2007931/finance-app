import { FinanceForm } from "components/FinanceForm/FinanceForm"
import { FinanceHistory } from "components/FinanceHistory/FinanceHistory"
import { FinanceToggle } from "components/FinanceToggle/FinanceToggle"
import { useSelector } from "react-redux"
import { selectIncomes } from "../../redux/selectors"
import { addIncomes } from "../../redux/financesSlice"
import { deleteIncomes } from "../../redux/financesSlice"
import { financesCategories } from "../../redux/constants"
import { Container, Section } from "./Incomes.styled"
import { IncomesSummary } from "components/FinanceCount/IncomesSummary"

export const Incomes = () => {
    const financeList = useSelector(selectIncomes)
    return(

        <>
             <Section>
            <FinanceToggle/>
            <Container>
                <FinanceForm isSpendings={false} finAdd={addIncomes} categoryOptions={financesCategories.incomesCategories}/>
                <FinanceHistory isSpendings={false} finanseList={financeList} delfunc={deleteIncomes}/>
                <IncomesSummary/>
            </Container>
        </Section>
        </>

    )
}