import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify';
import { fetchData, createBudget, createExpense } from '../utils/helpers'
import Intro from '../components.jsx/Intro'
import AddBudgetForm from '../components.jsx/AddBudgetForm'
import AddExpenseForm from '../components.jsx/AddExpenseForm';
import BudgetItem from '../components.jsx/BudgetItem';

// loader
export const dashboardLoader = () => {
    const username = fetchData("username")
    const budgets = fetchData("budgets")
    return { username, budgets }
}

// action
export const dashboardAction = async ({ request }) => {
    const data = await request.formData()
    const {_action, ...values} = Object.fromEntries(data)

    if (_action === 'newUser') {
        try {
            localStorage.setItem("username", JSON.stringify(values.username))
            return toast.success(`Welcome, ${values.username}`)
        } catch (error) {
            return new Error('There was a problem creating your account!')
        }
    }

    if (_action === 'createBudget') {
        try {
            createBudget({ name: values.newBudget, amount: values.newBudgetAmount })
            // create budget
            return toast.success('Budget created!')
            
        } catch (error) {
            throw new Error('There was a problem creating your budget!')
        }
    }

    if (_action === 'createExpense') {
        try {
            createExpense({ 
                name: values.newExpense,
                amount: values.newExpenseAmount,
                budgetId: values.newExpenseBudget
            })
            return toast.success(`Expense ${values.newExpense} created!`)
            
        } catch (error) {
            throw new Error('There was a problem creating your expense!')
        }
    }
}

const Dashboard = () => {
  const { username, budgets } = useLoaderData()

  return (
    <>
        {
            username 
            ? 
            <div>
                <h1>Welcome back, <span>{username}</span></h1>
                <div>
                    {
                        budgets && budgets.length > 0 
                        ?
                        <div>
                            <div>
                                <AddBudgetForm />
                                <AddExpenseForm budgets={budgets} />
                            </div>
                            <h2>Existing Budgets</h2>
                            <div>
                                {budgets.map(budget =>
                                    <BudgetItem key={budget.id} budget={budget} /> 
                                )}
                            </div>
                        </div>
                        :
                        <div>
                            <p>
                                Personal budgeting is the secret to financial
                                freedom.
                            </p>
                            <p>Create a budget to get started!</p>
                            <AddBudgetForm />
                            <AddExpenseForm />
                        </div>
                    }
                </div>
            </div> 
            : 
            <Intro />
        }
        Dashboard
    </>
  )
}

export default Dashboard