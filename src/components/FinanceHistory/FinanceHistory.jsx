import { DelCol, FinanceTable } from "./FinanceHistory.styled"
import { BsTrash3 } from "react-icons/bs";
import { useDispatch } from "react-redux";

export const FinanceHistory = ({isSpendings, finanseList, delfunc}) => {
    const dispatch = useDispatch()
    const onDelete = (id) => {
        dispatch(delfunc(id))
    }
    return(
        <FinanceTable>
            <thead>
                <tr>
                  <th>Дата</th>
                  <th>Опис</th>
                  <th>Категорія</th>
                  <th>Сума</th>
                  <th></th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(finanseList)&&finanseList.map(item=>
                    <tr key={item.id}>
                        <td>{item.date}</td>
                        <td>{item.description}</td>
                        <td>{item.category}</td>
                        <td style={{fontWeight: 700,color: isSpendings?'#E7192E':'rgba(64, 121, 70, 1)'}}>{isSpendings&&"-"}{item.sum}</td>
                        <DelCol><button type="button" onClick={()=>{onDelete(item.id)}}><BsTrash3/></button></DelCol>
                    </tr>
                )}
            </tbody>
        </FinanceTable>
    )}