import { useDispatch, useSelector } from 'react-redux'
import {  selectFilters } from '../../redux/selectors'
import { setCategory } from '../../redux/filtersSlice'
import { financesCategories } from '../../redux/constants'
import { getCategorySum } from './getCategorySum'
import { ReactSVG } from "react-svg";



import styles from './FinanceFlowsList.module.css'

export const FinanceFlowsList = ({data, flowsCategory}) => {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilters)
    const handleChangeCategory = (category) => {
        dispatch(setCategory(category))
    }
    
   console.log(financesCategories);
    
    return (
        <ul className={styles.list}>
            {flowsCategory === 'incomes' ? financesCategories.incomesCategories.map(({value, label, img}) => {
                const categorySum = getCategorySum(data, value)
                console.log(img);
                
                
                return <li className={styles.item} onClick={() => handleChangeCategory(value)}>
                    <h4>{categorySum}</h4>
                    <div className={`${filter.category === value ? styles.active_icon : ''} ${styles.wrapper_icon}`}>
                        <ReactSVG  className={styles.icon} src={img.default}/>
                        <div className={styles.icon_bg}></div>
                    </div>
                    <h4>{label}</h4>
                </li>
            }) : financesCategories.spendingsCategories.map(({value, label, img}) => {
                const categorySum = getCategorySum(data, value)
                return <li className={styles.item} onClick={() => handleChangeCategory(value)}>
                    <h4>{categorySum}</h4>
                    <div className={`${filter.category === value ? styles.active_icon : ''} ${styles.wrapper_icon}`}>
                        <ReactSVG  className={styles.icon} src={img.default}/>
                        <div className={styles.icon_bg}></div>
                    </div>
                    <h4>{label}</h4>
                </li>
            })}
        </ul>
    )
}