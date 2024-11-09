import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FinanceFlowsPeriod } from "components/FinanceFlowsPeriod/FinanceFlowsPeriod"
import { selectBalance } from "../../redux/selectors";
import styles from './FinanceFlowsNav.module.css'

export const FinanceFlowsNav = () => {
    const navigate = useNavigate()
    const balance = useSelector(selectBalance)


    return (
        <section className={styles.finance_flows_nav}>
            <div className={styles.container}>
                <div className={styles.back} onClick={(() => navigate(-1))}>
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