import { Backdrop, Modal } from "../Login/Login.styled"

export function ModalWindow(){
    return(
       <Backdrop>
          <Modal>{this.props.children}</Modal>
       </Backdrop>
    )
}