import { useDispatch } from "react-redux"
import { ClearBtn, DateInp, FinForm, SubBtn } from "./FinanceForm.styled"

export const FinanceForm = ({isSpendings, finAdd}) => {
    const dispatch = useDispatch()
    const handleAdd = (e) => {
        e.preventDefault()
        const form = e.target.elements
        const finItem = {
            date: form.date.value,
            desciption:form.desciption.value,
            category:form.category.value,
            sum:form.sum.value
        }
        dispatch(finAdd(finItem))

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