import styles from './FinanceFlowsList.module.css'

export const FinanceFlowsList = ({data}) => {
    return (
        <ul className={styles.list}>
            {data.map(({category}) => (
                <li><h4>{category}</h4></li>
            ))}
        </ul>
    )
}