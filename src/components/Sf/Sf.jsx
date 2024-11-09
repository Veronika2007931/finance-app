import React, { useRef,useState } from 'react';
import { Backdrop, Modal,Butt,Butt1,Text,Input } from './Sf.styled.jsx';
export function Sf(){
    const [backdrop, backdropchange]=useState(false)
    const [nn,nnchange]=useState([])
    const input=useRef(null)
    const inv=useRef(null)
    const click=()=>{
        const mas=[input.current.value,inv.current.value]
        nnchange([...nn,mas])
        
    }
    const changeBackdrop=()=>{
        backdropchange(!backdrop)
    }
    return(
        <div>
        <Butt onClick={changeBackdrop}>OP</Butt>
        <Backdrop className={backdrop?'':'is-hidden'}>
          <Modal>
            <Butt1 onClick={changeBackdrop} data-action="close-modal">X</Butt1>
            <div>
            <Input type="text" ref={input} />
            <Input type="text" ref={inv} />
            <Butt1 onClick={click}>add aim</Butt1>
            </div>
            <Text>Aims</Text>

            <ul>
            {nn.map((item, index) => (
              <li key={index}>
                <strong>Aim:</strong> {item[0]}, <strong>Money:</strong> {item[1]}
              </li>
            ))}
            </ul>
          </Modal>
        </Backdrop>
      </div>
      )
}