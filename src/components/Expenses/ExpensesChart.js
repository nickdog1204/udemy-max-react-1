import React from "react";
import Chart from "../Chart/Chart";
const ExpensesChart = props => {
    const {listOfExpenses} = props;

    const expenseDataPoints = [
        {label: '一月', value: 0},
        {label: '二月', value: 0},
        {label: '三月', value: 0},
        {label: '四月', value: 0},
        {label: '五月', value: 0},
        {label: '六月', value: 0},
        {label: '七月', value: 0},
        {label: '八月', value: 0},
        {label: '九月', value: 0},
        {label: '十月', value: 0},
        {label: '11月', value: 0},
        {label: '12月', value: 0},
    ]
    listOfExpenses.forEach((expense) => {
        const index = expense.date.getMonth();
        expenseDataPoints[index].value += expense.amount;
    })

    return  <Chart dataPointList={expenseDataPoints}/>
}

export default ExpensesChart;