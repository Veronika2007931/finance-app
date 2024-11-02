
import { UserMenu } from "components/UserMenu/UserMenu"
import { HeaderText } from "../Header/Login/Login.styled"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./AppBar.styled"
import Logo from "../../imgs/logo.svg  "

export const AppBar= ()=>{
  // const isLoggedIn = useSelector(selectIsLogged)
   const [isLoggedIn, setIsLoggedIn] = useState(true)
   console.log(Logo)
return(
   
 <>
 
  <Header>
    <svg>{Logo}</svg>
   
  <HeaderText>INVESTIQ</HeaderText>
    {isLoggedIn && <UserMenu/> }
     
</Header>
  <Outlet/>
</>
    )
}  