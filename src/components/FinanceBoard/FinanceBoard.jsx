
import { useSelector } from 'react-redux';
import { selectSpendings, selectIncomes } from '../../redux/selectors'
import { FinanceFlowsList } from 'components/FinanceFlowsList/FinanceFlowsList';
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import styles from './FinanceBoard.module.css'



export const FinanceBoard = ({filteredFinance, activeFinances,  handleSpendingsPage, handleIncomesPage}) => {
    const incomes = useSelector(selectIncomes)
    const spendings = useSelector(selectSpendings)

    return (
        <section className={styles.finances}>
            <div className={styles.container}>
                <div className={styles.title}>
                    {activeFinances === incomes && <IoMdArrowDropleft className={styles.prev} onClick={() => handleSpendingsPage()}/>}
                    <h3>{activeFinances === incomes ? 'Доходи' : 'Витрати'}</h3>
                    {activeFinances === spendings && <IoMdArrowDropright className={styles.next} onClick={() => handleIncomesPage()}/>}
                </div>
                {activeFinances === incomes ? (
                    <FinanceFlowsList data={filteredFinance}/>
                ) : (
                    <FinanceFlowsList data={filteredFinance}/>
                )}
            </div>
        </section>
    )
}