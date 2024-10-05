import { FinanceForm } from "components/FinanceForm/FinanceForm"
import { FinanceHistory } from "components/FinanceHistory/FinanceHistory"
import { FinanceToggle } from "components/FinanceToggle/FinanceToggle"

export const FinanceBlock = () => {
    return(
        <section>
            <FinanceToggle/>
            <div>
                <FinanceForm/>
                <FinanceHistory/>
                {/* Тут має бути елемент зведення */}
            </div>
        </section>
    )
}