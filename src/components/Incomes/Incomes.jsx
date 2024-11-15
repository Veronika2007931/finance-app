import { FinanceForm } from "components/FinanceForm/FinanceForm"
import { FinanceHistory } from "components/FinanceHistory/FinanceHistory"
import { FinanceToggle } from "components/FinanceToggle/FinanceToggle"
import { useSelector } from "react-redux"
import { selectIncomes } from "../../redux/selectors"
import { addIncomes } from "../../redux/financesSlice"
import { deleteIncomes } from "../../redux/financesSlice"
import { financesCategories } from "../../redux/constants"
import { Container, Section } from "./Incomes.styled"
import styles from './Incomes.module.css'

export const Incomes = () => {
    const financeList = useSelector(selectIncomes)
    return(

        <>
             <Section>
            <FinanceToggle/>
            <Container>
                <FinanceForm isSpendings={false} finAdd={addIncomes} categoryOptions={financesCategories.incomesCategories}/>
                <FinanceHistory isSpendings={false} finanseList={financeList} delfunc={deleteIncomes}/>
                {/* Тут має бути елемент зведення */}
            </Container>
        </Section>

        <section className={styles.incomes_section}>
            <div className={styles.container}>
                <FinanceToggle/>
                <div className={styles.actions_container}>
                    <FinanceForm isSpendings={false} finAdd={addIncomes}/>
                    <FinanceHistory isSpendings={false} finanseList={financeList} delfunc={deleteIncomes}/>
                    {/* Тут має бути елемент зведення */}
                </div>
            </div>
        </section>
        </>

    )
}