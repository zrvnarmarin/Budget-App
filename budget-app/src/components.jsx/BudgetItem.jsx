import React from 'react'
import { calculateSpentByBudget, formatCurrency, formatPercentage } from '../utils/helpers'

const BudgetItem = ({ budget }) => {
  const { id, name, amount, color } = budget
  const spent = calculateSpentByBudget(id)

  return (
    <div style={{ "--accent": color}}>
        <div>
            <h3>{name}</h3>
            <p>{formatCurrency(amount)} Budgeted</p>
            <progress max={amount} value={spent}>
                {formatPercentage(spent / amount)}
            </progress>
            <div>
                <small> {formatCurrency(spent)} spent </small>
                <small> {formatCurrency(amount - spent)} remaining </small>
            </div>
        </div>
    </div>
  )
}

export default BudgetItem