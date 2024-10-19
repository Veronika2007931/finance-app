
import { UserMenu } from "components/UserMenu/UserMenu"
import { HeaderText } from "../Header/Login/Login.styled"
import { useState } from "react"
import { Outlet } from "react-router-dom"

export const AppBar= ()=>{
  // const isLoggedIn = useSelector(selectIsLogged)
   const [isLoggedIn, setIsLoggedIn] = useState(true)
return(
   
 <>
  <header>
  <HeaderText>INVESTIQ</HeaderText>
    {isLoggedIn && <UserMenu/> }
     
</header>
  <Outlet/>
</>
    )
}  