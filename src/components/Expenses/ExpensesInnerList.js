import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesInnerList.scss'

const ExpensesInnerList = props => {
    const {items} = props;

    if (items.length === 0) {
        return <p className="expenses-inner-list__fallback">沒有東西</p>
    }

    return (
        <ul className="expenses-inner-list">
            {items
                .map(expenseData =>
                    <ExpenseItem
                        key={expenseData.id}
                        title={expenseData.title}
                        amount={expenseData.amount}
                        date={expenseData.date}/>)}
        </ul>
    )

}

export default ExpensesInnerList;