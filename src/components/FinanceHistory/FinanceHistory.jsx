import { FinanceTable } from "./FinanceHistory.styled"
import { nanoid } from "nanoid"
import { BsTrash3 } from "react-icons/bs";

export const FinanceHistory = ({finanseList}) => {

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
                {finanseList.map(item=>
                    <tr key={nanoid()}>
                        <td>{item.date}</td>
                        <td>{item.desciption}</td>
                        <td>{item.category}</td>
                        <td>{item.sum}</td>
                        <td><button type="button"><BsTrash3/></button></td>
                    </tr>
                )}
            </tbody>
        </FinanceTable>
    )}