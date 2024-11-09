import { useNavigate } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";
import { FinanceFlowsPeriod } from "components/FinanceFlowsPeriod/FinanceFlowsPeriod"
import { getBalance } from "./getBalance";
import styles from './FinanceFlowsNav.module.css'

export const FinanceFlowsNav = ({incomes, spendings}) => {
    const navigate = useNavigate()
    const balance = getBalance(incomes, spendings)


    return (
        <section className={styles.finance_flows_nav}>
            <div className={styles.container}>
                <div className={styles.back} onClick={(() => navigate('/'))}>
                    <FaArrowLeftLong />
                    <h4>Повернутись на головну</h4>
                </div>
                <div className={styles.balance}>
                    <h4>Баланс:</h4>
                    <div className={styles.sum}>
                        <h3>{balance} UAH</h3>
                    </div>
                </div>
                <FinanceFlowsPeriod/>
            </div>
        </section>
    )
}