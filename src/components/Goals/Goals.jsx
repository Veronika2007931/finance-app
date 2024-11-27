import React, { useRef, useState } from 'react';
import { Backdrop, Modal, Butt, Butt1, Text, Input,Diva,Butt2 } from './Modal.styled';
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
        console.log(nn);
        input.current.value=''
        inv.current.value=''    
    }
    const changeBackdrop=()=>{
        backdropchange(!backdrop)
    }
    const selectAimButt=(index)=>{
        selectedAiminchange(index);
    }
    return(
        <div>
        <Butt onClick={changeBackdrop}>Цілі</Butt>
        <Backdrop className={backdrop ? '':'is-hidden'}>
        <Modal>
        <Diva>
        <Butt2 onClick={changeBackdrop} data-action="close-modal">X</Butt2>
        <div>
        <Input type="text" ref={input} placeholder="Ціль" />
        <Input type="number" ref={inv} placeholder="Сума" />
        <Butt1 onClick={click}>Додати ціль</Butt1>
        </div>
        </Diva>
        <Text>Цілі</Text>
        <ul style={{listStyle:'unset'}}>
        {nn.map((item,index)=>(
        <li key={index} onClick={()=>selectAimButt(index)} style={{cursor:'pointer'}}>
        <strong>Ціль: </strong>{item[0]}, <strong>Гроші: </strong>{item[1]}
        </li>
        ))}
        </ul>
        {selectedAimin!==null && (
        <div style={{marginTop: '20px'}}>
        <Text>Ціль:{nn[selectedAimin][0]}</Text>
        <Text>Відсоток:</Text>
        <input type="range" min="0" max="100" step="1" value={Math.round(100/balance*nn[selectedAimin][1])} readOnly style={{width:'100%'}}/>
        <p>Відсоткове співвідношення:<>{Math.round(100/balance*nn[selectedAimin][1])}%</></p>
        </div>
        )}
        </Modal>
        </Backdrop>
        </div>
    )
}