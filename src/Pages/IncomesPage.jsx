import { UserBalance } from "components/FinanceCount/UserBalance";
import { Goals } from "components/Goals/Goals";
import { Incomes } from "components/Incomes/Incomes";

export function IncomesPage(){
    return(
        <div>
        <UserBalance/>
        <Incomes/>
        <Goals/> 
        </div>
    )
    }