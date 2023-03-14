import React, { useRef, useEffect } from 'react'
import { Form, useFetcher } from 'react-router-dom'

const AddBudgetForm = () => {
  const fetcher = useFetcher()
  const isSubmitting = fetcher.state === "submitting"

  const formRef = useRef()
  const focusRef = useRef()

  useEffect(() => {
    if (!isSubmitting) {
        formRef.current.reset()
        focusRef.current.focus()
    }
  }, [isSubmitting])

  console.log(isSubmitting)

  return (
    <div>
        <h2>Create Budget</h2>
        <fetcher.Form method='post' ref={formRef} >
            <div>
                <label htmlFor="newBudget">New Budget</label>
                <input 
                    type="text" 
                    name='newBudget' 
                    id='newBudget' 
                    placeholder='e.g., Groceries' 
                    required 
                    ref={focusRef}
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
            <button disabled={isSubmitting}>
                {isSubmitting ? <span>Submitting..</span> : <span>Create budget</span> }
            </button>
        </fetcher.Form>
    </div>
  )
}

export default AddBudgetForm