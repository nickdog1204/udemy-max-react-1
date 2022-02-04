import React, {useState} from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.scss'
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log('Component function called')
    const clickHandler = () => {
        setTitle('UPDATED!!!!!')
        console.log(title);
    }
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/*<button onClick={clickHandler}>變換標題</button>*/}
            </Card>
        </li>
    );
}

export default ExpenseItem;