import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectSpendings, selectIncomes, selectFilters } from '../redux/selectors'
import { setCategory, setDateRange } from '../redux/filtersSlice';
import { getFilteredFinances, getFinancesByPeriod } from '../components/FinanceBoard/getFilteredFinances';
import { FinanceBoard } from 'components/FinanceBoard/FinanceBoard';
import { Schedule } from 'components/Schedule/Schedule';
import { FinanceFlowsNav } from 'components/FinanceFlowsNav/FinanceFlowsNav';
import { FinanceFlowsBar } from 'components/FinanceFlowsBar/FinanceFlowsBar';
import { financesCategories } from '../redux/constants';

export const getCurrentDate = () => {
    const currentDate = new Date();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();

    return `${month}-${year}`
}

export function FinanceFlow(){
    const dispatch = useDispatch()
    const filter = useSelector(selectFilters)
    const incomes = useSelector(selectIncomes)
    const spendings = useSelector(selectSpendings)
    const [activeFinances, setActiveFinances] = useState(incomes)
    const filteredFinance = getFilteredFinances(filter, activeFinances)
    const filteredFinancesByPeriod = getFinancesByPeriod(filter.dateRange, activeFinances)
    
    
    useEffect(() => {
        const currentDate = getCurrentDate()
        dispatch(setDateRange(currentDate))
    }, [])
    
    const handleSpendingsPage = () => {
        setActiveFinances(spendings)
        dispatch(setCategory(financesCategories.spendingsCategories[0].value))
    }

    const handleIncomesPage = () => {
        setActiveFinances(incomes)
        dispatch(setCategory(financesCategories.incomesCategories[0].value))
    }



    if (incomes && spendings) {
        return (
            <>
                <FinanceFlowsNav />
                <FinanceFlowsBar  />
                <FinanceBoard filteredFinancesByPeriod={filteredFinancesByPeriod} activeFinances={activeFinances} handleIncomesPage={handleIncomesPage} handleSpendingsPage={handleSpendingsPage}/>
                <Schedule data={filteredFinance}/>
            </>
        )
    } else {
        return (
            <div>
                <h2>Не вдалося отримати данні</h2>
            </div>
        )
    }
}