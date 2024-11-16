
import { UserBalance } from "components/FinanceCount/UserBalance";
import { Spendings } from "components/Spendings/Spendings";
import { UserBalance } from "components/FinanceCount/UserBalance";
import { ExpensesSummary } from "components/FinanceCount/ExpensesSummary";
export function SpendingsPage(){
    return(
        <>
        <UserBalance/>
        <Spendings/>
        </>
    )
    }