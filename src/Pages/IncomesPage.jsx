import Dashboard from "components/FinanceCount/Dashboard";
import { IncomesSummary } from "components/FinanceCount/IncomesSummary";
import { UserBalance } from "components/FinanceCount/UserBalance";
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