import { useDispatch } from "react-redux"
import { ClearBtn, DateInp, FinForm, SubBtn } from "./FinanceForm.styled"
import { nanoid } from "nanoid"

export const FinanceForm = ({isSpendings, finAdd}) => {
    const dispatch = useDispatch()
    const handleAdd = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const finItem = {
            date: form.elements.date.value,
            description:form.elements.description.value,
            category:form.elements.category.value,
            sum:form.elements.sum.value,
            id:nanoid()
        }
        dispatch(finAdd(finItem))
        form.reset()
    }
    return(
        <FinForm onSubmit={handleAdd}>
            <DateInp type="date" name="date"/>
            <input type="text" name="description" placeholder={`Опис ${isSpendings?"товару":"продукту"}`}/>
            <select name="category" >
                <option key='none' disabled selected hidden value=''>{`Категорія ${isSpendings?"товару":"продукту"}`}</option>
                {/* {categoryOptions.map(category=>{
                    return <option key={category} value={category}>{category}</option>
                })} */}
            </select>
            <input  type="number" name="sum" placeholder="0,00"/>
            <SubBtn type="submit">ввести</SubBtn>
            <ClearBtn type="button">очистити</ClearBtn>
        </FinForm>
    )}