import { useState } from "react"
import { FinanceTable } from "./FinanceHistory.styled"
import { nanoid } from "nanoid"
import { BsTrash3 } from "react-icons/bs";

export const FinanceHistory = () => {
    const [someValue]=useState(true)
    const [finHistory] = useState({
        spendings:[
            {date:"02.02.2010", desciption:"paracetamol", category:"meds", sum:2233},
            {date:"23.08.2021", desciption:"cheeze", category:"food", sum:45}
        ],
        incomes:[
            {date:"05.01.2024", desciption:"kolyadka", category:"beggary", sum:500},
            {date:"31.06.2047", desciption:"sallary", category:"job", sum:45000}
        ]
    })
    const [listContent] = useState(someValue?finHistory.spendings:finHistory.incomes)
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
                {listContent.map(item=>
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