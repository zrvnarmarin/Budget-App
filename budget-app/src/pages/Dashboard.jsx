import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../utils/helpers'

// loader
export const dashboardLoader = () => {
    const username = fetchData("username")
    return { username }
}

const Dashboard = () => {
  const { username } = useLoaderData()

  return (
    <div>
        <h1>{username}</h1>
        Dashboard
    </div>
  )
}

export default Dashboard