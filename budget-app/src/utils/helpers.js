// Local storage functions
export const fetchData = key => {
    return JSON.parse(localStorage.getItem(key))
}

// delete item
export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key)
}

export const createBudget = ({ name, amount }) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        color: generateRandomColor()
    }

    const existingBudgets = fetchData("budgets") ?? []

    return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]))
}

export const createExpense = ({ name, amount, budgetId }) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        budgetId: budgetId
    }

    const existingExpenses = fetchData("expenses") ?? []

    return localStorage.setItem("expenses", JSON.stringify([...existingExpenses, newItem]))
}

const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0
    return `${existingBudgetLength * 34} 65% 50%`
}

export const wait = () => {
    new Promise(res => setTimeout(res, Math.random() * 2000))
}

export const calculateSpentByBudget = budgetId => {
    const expenses = fetchData("expenses") ?? []

    const budgetSpent = expenses.reduce((acc, expense) => {
        // check if expense.id equals budget.id
        if (expense.budgetId !== budgetId) return acc

        // add the current amount to total
        return acc += expense.amount
    }, 0)

    return budgetSpent
}

// Formatting functions
export const formatCurrency = (amount) => {
    return amount.toLocaleString(undefined, {
        style: "currency",
        currency: "USD"
    })
}

export const formatPercentage = amount => {
    return amount.toLocaleString(undefined, {
        style: "percent",
        minimumFractionDigits: 0
    })
}

export const formatDateToLocaleString = epoch => {
    return new Date(epoch).toLocaleDateString()
}