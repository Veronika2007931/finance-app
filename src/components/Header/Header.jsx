import { ExitBtn, UserNameText } from "./Header.styled"
import { HeaderText } from "./Login/Login.styled"

export function Header(){
  return(
      <div>
      <HeaderText>INVESTIQ</HeaderText>
      <UserNameText>User name |</UserNameText>
      <ExitBtn>Вийти</ExitBtn>
   </div>
)
}
   