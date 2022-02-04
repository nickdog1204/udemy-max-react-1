import React, {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.scss';
import Card from "../UI/Card";
import ExpensesInnerList from "./ExpensesInnerList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020')
    const {itemList} = props;
    const filteredList = itemList.filter(expenseData => {
        return expenseData.date.getFullYear() === +selectedYear
    });
    const filterExpensesHandler = year => {
        setSelectedYear(year);
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onFilterExpenses={filterExpensesHandler}/>
            <ExpensesChart listOfExpenses={filteredList}/>
            <ExpensesInnerList items={filteredList}/>

            {/*{filteredList.length === 0 && <p>No Expenses here</p>}*/}
            {/*{filteredList.length > 0 && filteredList.map(expenseData =>*/}
            {/*    <ExpenseItem*/}
            {/*        key={expenseData.id}*/}
            {/*        title={expenseData.title}*/}
            {/*        amount={expenseData.amount}*/}
            {/*        date={expenseData.date}*/}
            {/*    />)}*/}





            {/*{filteredList.length === 0 ? <p>No Expenses here</p> : filteredList.map(expenseData =>*/}
            {/*    <ExpenseItem*/}
            {/*        key={expenseData.id}*/}
            {/*        title={expenseData.title}*/}
            {/*        amount={expenseData.amount}*/}
            {/*        date={expenseData.date}*/}
            {/*    />)}*/}
        </Card>

    )

}

export default Expenses;