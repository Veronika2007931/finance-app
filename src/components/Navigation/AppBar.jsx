
import { UserMenu } from "components/UserMenu/UserMenu"
import { HeaderText } from "./AppBar.styled"
import { Outlet } from "react-router-dom"
import { Header, Logo } from "./AppBar.styled"
import logo from "../../imgs/logo.svg" 
import { useSelector } from "react-redux"
import { selectAuth } from "../../redux/selectors"

export const AppBar= ()=>{
  const isLoggedIn = useSelector(selectAuth)
  //  const [isLoggedIn, setIsLoggedIn] = useState(true)
   console.log(Logo)
return(   
 <> 
  <Header>
    <Logo src={logo} alt="logo"/>
   
  <HeaderText>INVESTIQ</HeaderText>
    {isLoggedIn && <UserMenu/> }     
</Header>
  <Outlet/>
</>
    )
}  