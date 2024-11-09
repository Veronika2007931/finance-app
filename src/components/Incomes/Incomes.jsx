import { FinanceForm } from "components/FinanceForm/FinanceForm"
import { FinanceHistory } from "components/FinanceHistory/FinanceHistory"
import { FinanceToggle } from "components/FinanceToggle/FinanceToggle"
import { useSelector } from "react-redux"
import { selectIncomes } from "../../redux/selectors"
import { addIncomes } from "../../redux/financesSlice"
import { deleteIncomes } from "../../redux/financesSlice"

export const Incomes = () => {
    const financeList = useSelector(selectIncomes) 
    return(
        <section>
            <FinanceToggle/>
            <div>
                <FinanceForm isSpendings={false} finAdd={addIncomes}/>
                <FinanceHistory isSpendings={false} finanseList={financeList} delfunc={deleteIncomes}/>
                {/* Тут має бути елемент зведення */}
            </div>
        </section>
    )
}