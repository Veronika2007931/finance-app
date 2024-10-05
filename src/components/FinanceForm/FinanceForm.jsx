import { ClearBtn, DateInp, FinForm, SubBtn } from "./FinanceForm.styled"

export const FinanceForm = () => {
    const categoryOptions = ['a', 'b', 'c']
    return(
        <FinForm>
            <DateInp type="date" name="date"/>
            <input type="text" name="description"/>
            <select name="category">
                {categoryOptions.map(category=>{
                    return <option value={category}>{category}</option>
                })}
            </select>
            <input  type="number" name="sum" placeholder="0,00"/>
            <SubBtn type="submit">ввести</SubBtn>
            <ClearBtn type="button">очистити</ClearBtn>
        </FinForm>
    )}