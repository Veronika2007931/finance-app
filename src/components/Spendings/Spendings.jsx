import { FinanceForm } from "components/FinanceForm/FinanceForm"
import { FinanceHistory } from "components/FinanceHistory/FinanceHistory"
import { FinanceToggle } from "components/FinanceToggle/FinanceToggle"
import { useSelector } from "react-redux"
import { selectSpendings } from "../../redux/selectors"
import { addSpendings } from "../../redux/financesSlice"
import { deleteSpendings } from "../../redux/financesSlice"

export const Spendings = () => {
    const financeList = useSelector(selectSpendings) 
    return(
        <section>
            <FinanceToggle/>
            <div>
                <FinanceForm isSpendings={true} finAdd={addSpendings}/>
                <FinanceHistory isSpendings={true}  finanseList={financeList} delfunc={deleteSpendings}/>
                {/* Тут має бути елемент зведення */}
            </div>
        </section>
    )
}