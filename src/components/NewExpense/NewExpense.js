import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.scss'

const NewExpense = (props) => {
    const {onAddExpense} = props;
    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}/>
        </div>
    )

};

export default NewExpense;