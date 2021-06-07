import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const expenses = [
        { id: 1231234, name: "Shopping", cost: 50},
        { id: 1231234, name: "Holiday", cost: 300},
        { id: 1231234, name: "Transportation", cost: 50},
        { id: 1231234, name: "Fuel", cost: 80},
        { id: 1231234, name: "Eating", cost: 90},
    ]



    return (
        <ul className='list-group'>
            {expenses.map((expense) => (
                <ExpenseItem
                id={expense.id}
                name={expense.name}
                cost={expense.cost} />
            ))}
        </ul>
    )
}

export default ExpenseList;
