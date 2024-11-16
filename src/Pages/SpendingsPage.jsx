import { ExpensesSummary } from "components/FinanceCount/ExpensesSummary";
import { UserBalance } from "components/FinanceCount/UserBalance";
import { Incomes } from "components/Incomes/Incomes";
import { Spendings } from "components/Spendings/Spendings";
import { UserBalance } from "components/FinanceCount/UserBalance";
import { ExpensesSummary } from "components/FinanceCount/ExpensesSummary";
export function SpendingsPage(){
    return(
        <>
        <UserBalance/>
        <Incomes/>
        <ExpensesSummary/>
        </>
    )
    }