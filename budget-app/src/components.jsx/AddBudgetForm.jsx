import React from 'react'
import { Form } from 'react-router-dom'

const AddBudgetForm = () => {
  return (
    <div>
        <h2>Create Budget</h2>
        <Form method='post' >
            <div>
                <label htmlFor="newBudget">New Budget</label>
                <input 
                    type="text" 
                    name='newBudget' 
                    id='newBudget' 
                    placeholder='e.g., Groceries' 
                    required 
                />
            </div>
            <div>
            <label htmlFor="newBudgetAmount">Amount</label>
                <input 
                    type="number" 
                    step='0.01'
                    name='newBudgetAmount' 
                    id='newBudgetAmount' 
                    placeholder='e.g., $350' 
                    required 
                    inputMode='decimal'
                />
            </div>
            <input type="hidden" name='_action' value='createBudget' />
            <button>
                <span>Create Budget</span>
            </button>
        </Form>
    </div>
  )
}

export default AddBudgetForm