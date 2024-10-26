import { useSelector } from "react-redux"
import { ExitBtn, UserNameText, UMDiv, UserNameEl, PhotoDiv } from "./UserMenu.styled"
import { selectUser } from "../../redux/selectors"


export function UserMenu(){
    const user = useSelector(selectUser)
   
    
    return(
        <UMDiv>
         <PhotoDiv>{user && user.name.slice(0,1) }</PhotoDiv>
        <UserNameText> {user ? user.name : "Hello"} </UserNameText>
        <UserNameEl>| </UserNameEl>
        <ExitBtn>Вийти</ExitBtn>
     </UMDiv>
  )
  }