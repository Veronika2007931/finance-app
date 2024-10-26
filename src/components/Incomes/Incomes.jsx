import { FinanceForm } from "components/FinanceForm/FinanceForm"
import { FinanceHistory } from "components/FinanceHistory/FinanceHistory"
import { FinanceToggle } from "components/FinanceToggle/FinanceToggle"
import { useSelector } from "react-redux"
import { selectIncomes } from "../../redux/selectors"
import { addIncomes } from "../../redux/userSlice"

export const Incomes = () => {
    const financeList = useSelector(selectIncomes) 
    return(
        <section>
            <FinanceToggle/>
            <div>
                <FinanceForm isSpendings={false} finAdd={addIncomes}/>
                <FinanceHistory finanseList={financeList}/>
                {/* Тут має бути елемент зведення */}
            </div>
        </section>
    )
}