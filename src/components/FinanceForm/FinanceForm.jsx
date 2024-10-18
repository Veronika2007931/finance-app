import { useState } from "react"
import { ClearBtn, DateInp, FinForm, SubBtn } from "./FinanceForm.styled"

export const FinanceForm = () => {
    // const [categoryOptions] = useState(['a', 'b', 'c'])
    const somevalue=true
    return(
        <FinForm>
            <DateInp type="date" name="date"/>
            <input type="text" name="description" placeholder={`Опис ${somevalue?"товару":"продукту"}`}/>
            <select name="category" >
                <option key='none' disabled selected hidden value=''>{`Категорія ${somevalue?"товару":"продукту"}`}</option>
                {/* {categoryOptions.map(category=>{
                    return <option key={category} value={category}>{category}</option>
                })} */}
            </select>
            <input  type="number" name="sum" placeholder="0,00"/>
            <SubBtn type="submit">ввести</SubBtn>
            <ClearBtn type="button">очистити</ClearBtn>
        </FinForm>
    )}