import { useSelector, useDispatch } from 'react-redux';
import {  selectFilters } from '../../redux/selectors'
import { setDateRange } from '../../redux/filtersSlice';
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { getCurrentDate } from 'Pages/FinanceFlow';
import styles from './FinanceFlowsPeriod.module.css'

function formatDate(dateStr) {
    const months = [
      'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
      'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
    ];
    
    const [month, year] = dateStr.split('.');
    const monthName = months[parseInt(month) - 1];
    
    return `${monthName} ${year}`;
}

export const FinanceFlowsPeriod = () => {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilters)
    const activePeriod = formatDate(filter.dateRange)
    const currentPeriod = getCurrentDate()

    const handleIncreaseDateRange = () => {
        const [month, year] = filter.dateRange.split('.');
        const paddedMonth = (Number(month) + 1).toString().padStart(2, '0')
        if (Number(paddedMonth) > 12) {
            dispatch(setDateRange(`1.${Number(year) + 1}`))
        } else {
            dispatch(setDateRange(`${paddedMonth}.${year}`))
        }
    }

    const handleDecreaseDateRange = () => {
        const [month, year] = filter.dateRange.split('.');
        const paddedMonth = (Number(month) - 1).toString().padStart(2, '0')
        if (Number(paddedMonth) < 1) {
            dispatch(setDateRange(`12.${Number(year) - 1}`))
        } else {
            dispatch(setDateRange(`${paddedMonth}.${year}`))
        }
    }

    const setCurrentDateRange = () => [
        dispatch(setDateRange(currentPeriod))
    ] 

    
    return (
        <div className={styles.date_range_slider}>
            <IoMdArrowDropleft className={styles.prev} onClick={() => handleDecreaseDateRange()}/>
            <div className={styles.date_range}>
                {currentPeriod !== filter.dateRange ? <h4 onClick={setCurrentDateRange} className={styles.current_range}>Поточний період</h4> : null}
                <h3>{activePeriod}</h3>
            </div>
            <IoMdArrowDropright className={styles.next} onClick={() => handleIncreaseDateRange()}/>
        </div>
    )
}