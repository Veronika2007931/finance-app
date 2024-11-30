import { UserBalance } from "components/FinanceCount/UserBalance";
import { Goals } from "components/Goals/Goals";
import { Incomes } from "components/Incomes/Incomes";
import { Container } from "components/UserMenu/UserMenu.styled";

export function IncomesPage(){
    return(
        <Container>
        <UserBalance/>
        <Incomes/>
        <Goals/> 
        </Container>
    )
    }