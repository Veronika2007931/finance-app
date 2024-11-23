import { useDispatch } from "react-redux"
import { ClearBtn, DateInp, FinForm, SubBtn } from "./FinanceForm.styled"
import { nanoid } from "nanoid"
import { useState } from "react"

export const FinanceForm = ({isSpendings, finAdd, categoryOptions}) => {
    const dispatch = useDispatch()
    const [formData, dataChange] = useState({date:'',description:'',sum:''})
    const handleClear = () => {
        dataChange({date:'',description:'',sum:''})
    }
    const onHandleChange = (e) => {
        e.preventDefault()
        dataChange((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
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
            <DateInp required type="date" onChange={onHandleChange} value={formData.date} name="date"/>
            <input required type="text" onChange={onHandleChange} value={formData.description} name="description" placeholder={`Опис ${isSpendings?"товару":"продукту"}`}/>
            <select name="category" placeholder="">
                {categoryOptions && categoryOptions.map(category=>{
                    return <option key={category.value} value={category.value}>{category.label}</option>
                })}
            </select>
            <input required  type="number" onChange={onHandleChange} value={formData.sum} name="sum" placeholder="0,00"/>
            <SubBtn type="submit">ввести</SubBtn>
            <ClearBtn type="button" onClick={handleClear}>очистити</ClearBtn>
        </FinForm>
    )}