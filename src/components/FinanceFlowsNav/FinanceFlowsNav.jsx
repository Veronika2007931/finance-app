import { useNavigate } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";
import { FinanceFlowsPeriod } from "components/FinanceFlowsPeriod/FinanceFlowsPeriod"
import styles from './FinanceFlowsNav.module.css'

export const FinanceFlowsNav = () => {
    const navigate = useNavigate()

    return (
        <section className={styles.finance_flows_nav}>
            <div className={styles.container}>
                <div className={styles.back} onClick={(() => navigate('/'))}>
                    <FaArrowLeftLong />
                    <h4>Повернутись на головну</h4>
                </div>
                <FinanceFlowsPeriod/>
            </div>
        </section>
    )
}