import React, {useState} from "react";
import './ExpenseFormActions.scss'

const ExpenseFormActions = (props) => {
    const {onSwitchForm} = props;
    const [shown, setShown] = useState(false);
    const clickHandler = (event) => {
        if(event.target.className === 'new-btn') {
            setShown(true);
            onSwitchForm(true);
        } else { // cancel-btn
            setShown(false);
            onSwitchForm(false);
        }

    }


    if (shown) {
        return (
            <div className="expense-form-actions__shown">
                <button className="cancel-btn" onClick={clickHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>

        )
    }
    return (
        <div className="expense-form-actions__not_shown">
            <button className="new-btn" onClick={clickHandler}>Add New Expense</button>
        </div>
    )


}

export default ExpenseFormActions;