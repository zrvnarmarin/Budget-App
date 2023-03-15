import React, { useEffect, useRef } from 'react'
import { useFetcher, Form } from 'react-router-dom';

const AddExpenseForm = ({ budgets }) => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === "submittting"

    const formRef = useRef()
    const focusRef = useRef()

    useEffect(() => {
        if (!isSubmitting) {
            formRef.current.reset()
            focusRef.current.focus()
        }
    }, [!isSubmitting])

  return (
    <div>
        <h2>Add New {" "} 
            <span> {budgets.length === 1 &&
                `${budgets.map(budg => budg.name)}`} 
            </span> {" "}
            Expense
        </h2>
        <fetcher.Form method='post' ref={formRef}>
            <div>
                <div>
                    <label htmlFor="newExpense">Expense Name</label>
                    <input 
                        type="text" 
                        name='newExpense' 
                        id='newExpense' 
                        placeholder='e.g., Coffe'
                        ref={focusRef}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="newExpenseAmount">Amount</label>
                    <input 
                        type="number"
                        step="0.01"
                        inputMode='decimal' 
                        name='newExpenseAmount' 
                        id='newExpenseAmount' 
                        placeholder='e.g., 3.50'
                        required
                    />
                </div>
            </div>
            <div hidden={budgets.length === 1}>
                <label htmlFor="nexExpenseBudget">Budget Category</label>
                <select name="newExpenseBudget" id="newExpenseBudget" required>
                    {
                        budgets
                        .sort((a, b) => a.createdAt - b.createdAt)
                        .map(budget => 
                            <option 
                                key={budget.id} 
                                value={budget.id}
                            >
                                {budget.name}
                            </option>    
                        )
                    }
                </select>
            </div>
            <input type="hidden" name='_action' value="createExpense" />
            <button disabled={isSubmitting}>
                {isSubmitting ? <span>Submitting..</span> : <span>Add Expense</span> }
            </button>
        </fetcher.Form>
    </div>
  )
}

export default AddExpenseForm