import { FinanceForm } from "components/FinanceForm/FinanceForm"
import { FinanceHistory } from "components/FinanceHistory/FinanceHistory"
import { FinanceToggle } from "components/FinanceToggle/FinanceToggle"
import { useSelector } from "react-redux"
import { selectSpendings } from "../../redux/selectors"
import { addSpendings } from "../../redux/financesSlice"
import { deleteSpendings } from "../../redux/financesSlice"
import styles from './Spendings.module.css'

export const Spendings = () => {
    const financeList = useSelector(selectSpendings) 
    return(
        <section className={styles.spendings_section}>
            <div className={styles.container}>
                <FinanceToggle/>
                <div className={styles.actions_container}>
                    <FinanceForm isSpendings={true} finAdd={addSpendings}/>
                    <FinanceHistory isSpendings={true}  finanseList={financeList} delfunc={deleteSpendings}/>
                    {/* Тут має бути елемент зведення */}
                </div>
            </div>
        </section>
    )
}