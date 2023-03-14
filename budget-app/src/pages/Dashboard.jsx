import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify';
import { fetchData, createBudget } from '../utils/helpers'
import Intro from '../components.jsx/Intro'
import AddBudgetForm from '../components.jsx/AddBudgetForm'

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
                    {/* {budgets} */}
                    <div>
                        <div>
                            <AddBudgetForm />
                        </div>
                    </div>
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