import { FinanceTable } from "./FinanceHistory.styled"
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
                {finanseList&&finanseList.map(item=>
                    <tr key={item.id}>
                        <td>{item.date}</td>
                        <td>{item.desciption}</td>
                        <td>{item.category}</td>
                        <td>{isSpendings&&"-"}{item.sum}</td>
                        <td><button type="button" onClick={onDelete(item.id)}><BsTrash3/></button></td>
                    </tr>
                )}
            </tbody>
        </FinanceTable>
    )}