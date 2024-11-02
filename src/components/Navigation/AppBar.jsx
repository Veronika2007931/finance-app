
import { UserMenu } from "components/UserMenu/UserMenu"
import { HeaderText } from "./AppBar.styled"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Header, Logo } from "./AppBar.styled"
import logo from "../../imgs/logo.svg" 

export const AppBar= ()=>{
  // const isLoggedIn = useSelector(selectIsLogged)
   const [isLoggedIn, setIsLoggedIn] = useState(true)
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