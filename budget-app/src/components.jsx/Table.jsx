import React from 'react'
import ExpenseItem from './ExpenseItem'
import { tableHeadData } from '../data/recentExpensesTableHeadData'

const Table = ({ expenses }) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    {
                        tableHeadData.map((i, index) => (
                            <th key={index}>{i}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {expenses.map(expense => 
                    <tr key={expense.id}>
                        <ExpenseItem expense={expense} />
                    </tr>    
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Table