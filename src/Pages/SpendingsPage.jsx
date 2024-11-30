import { UserBalance } from "components/FinanceCount/UserBalance";
import { Spendings } from "components/Spendings/Spendings";
import { Goals } from "components/Goals/Goals";
import { Container } from "components/UserMenu/UserMenu.styled";
export function SpendingsPage(){
    return(
        <Container>
        <UserBalance/>
            <Spendings />
            <Goals/>
        </Container>
    )
    }
