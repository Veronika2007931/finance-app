import React, { useRef, useState } from 'react';
import { Backdrop, Modal, Butt, Butt1, Text, Input } from './Modal.styled.jsx';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../redux/selectors.js';
export function Goals() {
    const balance = useSelector(selectBalance)
    const [backdrop,backdropchange]=useState(false)
    const [nn,nnchange]=useState([])
    const [selectedAimin,selectedAiminchange]=useState(null)
    const input=useRef(null)
    const inv=useRef(null)
    const click=()=>{
        const mas=[input.current.value,parseFloat(inv.current.value)||0]
        nnchange([...nn,mas])
    }
    const changeBackdrop=()=>{
        backdropchange(!backdrop)
    }
    const selectAimButt=(index)=>{
        selectedAiminchange(index);
    }
    return(
        <div>
        <Butt onClick={changeBackdrop}>OP</Butt>
        <Backdrop className={backdrop ? '':'is-hidden'}>
        <Modal>
        <Butt1 onClick={changeBackdrop} data-action="close-modal">X</Butt1>
        <div>
        <Input type="text" ref={input} placeholder="Aim" />
        <Input type="number" ref={inv} placeholder="Sum" />
        <Butt1 onClick={click}>Add aim</Butt1>
        </div>
        <Text>Aims</Text>
        <ul>
        {nn.map((item,index)=>(
        <li key={index} onClick={()=>selectAimButt(index)} style={{cursor:'pointer'}}>
        <>Aim:</>{item[0]} <>Money:</>{item[1]}
        </li>
        ))}
        </ul>
        {selectedAimin!==null && (
        <div style={{marginTop: '20px'}}>
        <Text>Aim:{nn[selectedAimin][0]}</Text>
        <Text>Percent:</Text>
        <input type="range" min="0" max="100" step="1" value={nn[selectedAimin][1]} readOnly style={{width:'100%'}}/>
        <p>Meaning:<>{balance}%</></p>
        </div>
        )}
        </Modal>
        </Backdrop>
        </div>
    )
}
