import { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectSpendings, selectIncomes, selectFilters } from '../redux/selectors'
import { getFilteredFinances } from '../components/FinanceBoard/getPeriodByFilter';
import { FinanceBoard } from 'components/FinanceBoard/FinanceBoard';
import { Schedule } from 'components/Schedule/Schedule';


export function FinanceFlow(){
    const filter = useSelector(selectFilters)
    const incomes = useSelector(selectIncomes)
    const spendings = useSelector(selectSpendings)
    const [activeFinances, setActiveFinances] = useState(incomes)
    const filteredFinance = getFilteredFinances(filter, activeFinances)

    const handleSpendingsPage = () => {
        setActiveFinances(spendings)
    }

    const handleIncomesPage = () => {
        setActiveFinances(incomes)
    }

    return(
        <>
            <FinanceBoard data={filteredFinance} activeFinances={activeFinances} handleIncomesPage={handleIncomesPage} handleSpendingsPage={handleSpendingsPage}/>
            <Schedule data={filteredFinance}/>
        </>
    )
    }