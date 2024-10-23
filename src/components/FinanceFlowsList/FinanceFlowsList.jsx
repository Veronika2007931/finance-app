import { useDispatch } from 'react-redux'
import { setDateRange } from '../../redux/filtersSlice'
import styles from './FinanceFlowsList.module.css'

export const FinanceFlowsList = ({data}) => {
    const dispatch = useDispatch()

    const handleChangeCategory = (category) => {
        dispatch(setDateRange(category))
    }

    return (
        <ul className={styles.list}>
            {data.map(({category}) => (
                <li onClick={() => handleChangeCategory(category)}><h4>{category}</h4></li>
            ))}
        </ul>
    )
}