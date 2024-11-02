
import { useSelector } from 'react-redux';
import { selectSpendings, selectIncomes } from '../../redux/selectors'
import { FinanceFlowsList } from 'components/FinanceFlowsList/FinanceFlowsList';
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import styles from './FinanceBoard.module.css'



export const FinanceBoard = ({filteredFinancesByPeriod, activeFinances,  handleSpendingsPage, handleIncomesPage}) => {
    const incomes = useSelector(selectIncomes)
    const spendings = useSelector(selectSpendings)
    const flowsCategory = activeFinances === incomes ? 'incomes' : 'spendings'

    return (
        <section className={styles.finances}>
            <div className={styles.container}>
                <div className={styles.title}>
                    {activeFinances === spendings && <IoMdArrowDropleft className={styles.prev} onClick={() => handleIncomesPage()}/>}
                    <h3>{activeFinances === incomes ? 'Доходи' : 'Витрати'}</h3>
                    {activeFinances === incomes && <IoMdArrowDropright className={styles.next} onClick={() => handleSpendingsPage()}/>}
                </div>
                <FinanceFlowsList data={filteredFinancesByPeriod} flowsCategory={flowsCategory}/>
            </div>
        </section>
    )
}