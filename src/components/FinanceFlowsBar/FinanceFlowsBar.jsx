import { useSelector } from 'react-redux';
import { selectSpendings, selectIncomes, selectFilters } from '../../redux/selectors'
import { getFinancesByPeriod } from 'components/FinanceBoard/getFilteredFinances';
import styles from './FinanceFlowsBar.module.css'

export const FinanceFlowsBar = () => {
    const filter = useSelector(selectFilters)
    const incomes = useSelector(selectIncomes)
    const spendings = useSelector(selectSpendings)

    const getIncomesSum = () => {
        let incomesSum = 0

        getFinancesByPeriod(filter.dateRange, incomes).map(({sum}) => {
            incomesSum += sum
        })

        return `+ ${incomesSum} грн.`
    }

    const getSpendingsSum = () => {
        let spendingsSum = 0

        getFinancesByPeriod(filter.dateRange, spendings).map(({sum}) => {
            
            spendingsSum += sum
        })

        return `- ${spendingsSum} грн.`
    }


    let incomesSum = getIncomesSum()
    let spendingsSum = getSpendingsSum()
    return (
        <section className={styles.finance_flows_bar}>
            <div className={styles.container}> 
                <div>
                    <h3>Витрати: </h3>
                    <h3 className={styles.spendings}>{spendingsSum}</h3>
                </div>
                <div className={styles.line}></div>
                <div>
                    <h3>Доходи: </h3>
                    <h3 className={styles.incomes}> {incomesSum}</h3>
                </div>
            </div>
        </section>
    )
}