import { useState } from 'react'
import { FinanceFlowList } from 'components/FinanceFlowList/FinanceFlowList';
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import styles from './FinanceBoard.module.css'


export const IncomesData = {financeFlow: 'Доходи', categories: [{category: 'Зп', items: []}, {category: 'Дод. дохід', items: []}]}
export const ExpensesData = {financeFlow: 'Витрати', categories: [{category: 'Напої', items: [{price: 4000, item: "Сік"}, {price: 4000, item: "Вода"}]}, {category: 'Продукти', items: [{price: 6300, item: "Products"}, {price: 5900, item: "Fish"}, {price: 4000, item: "Meat"}, {price: 3200, item: "Vegetables"}, {price: 2900, item: "Fruits"}, {price: 300, item: "Spices"}]}]}
const data  = [IncomesData, ExpensesData]

export const FinanceBoard = () => {
    const [page, setPage] = useState(0)
    const [activeFinanceFlows, setActiveFinanceFlows] = useState(data[0])
    
    const handlePrevPage = () => {
        setPage(page - 1)
        setActiveFinanceFlows(data[page - 1])
    }

    const handleNextPage = () => {
        setPage(page + 1)
        setActiveFinanceFlows(data[page + 1])
    }
    
    return (
        <section className={styles.finances}>
            <div className={styles.container}>
                <div className={styles.title}>
                    {page !== 0 && <IoMdArrowDropleft className={styles.prev} onClick={() => handlePrevPage()}/>}
                    <h3>{activeFinanceFlows.financeFlow}</h3>
                    {page !== (data.length - 1) && <IoMdArrowDropright className={styles.next} onClick={() => handleNextPage()}/>}
                </div>
                <FinanceFlowList data={activeFinanceFlows.categories}/>
            </div>
        </section>
    )
}