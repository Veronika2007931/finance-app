
import { UserMenu } from "components/UserMenu/UserMenu"
import {Header} from "../Header/Header"
import { useState } from "react"

export const AppBar= ()=>{
//   const isLoggedIn = useSelector(selectIsLogged)
   const [isLoggedIn, setIsLoggedIn] = useState(true)
return(
   
  <header>
    <Header/>
    {isLoggedIn && <UserMenu/> }
     
   
 
  </header>
    )
}  