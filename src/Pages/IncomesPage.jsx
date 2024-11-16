import { UserBalance } from "components/FinanceCount/UserBalance";
import { IncomesSummary } from "components/FinanceCount/IncomesSummary";
import { Incomes } from "components/Incomes/Incomes";

export function IncomesPage(){
    return(
        <>
        <UserBalance/>
        <Incomes/>
        <IncomesSummary/>
        </>
    )
    }