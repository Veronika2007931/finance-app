import { useDispatch, useSelector } from "react-redux"
import { ExitBtn, UserNameText, UMDiv, UserNameEl, PhotoDiv } from "./UserMenu.styled"
import { selectUser } from "../../redux/selectors"
import { logout } from "../../redux/authSlice"


export function UserMenu(){
    const user = useSelector(selectUser)
   const dispatch = useDispatch()
    console.log(user);
    return(
        <UMDiv>
         <PhotoDiv>{user.name?.slice(0,1)}</PhotoDiv>
        <UserNameText> {user ? user.name : "Hello"} </UserNameText>
        <UserNameEl>|</UserNameEl>
        <ExitBtn onClick={()=>{
            dispatch(logout())
        }}>Вийти</ExitBtn >
     </UMDiv>
  )
  }