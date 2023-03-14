import React from 'react'
import { useLoaderData, Outlet } from 'react-router-dom'
import { fetchData } from '../utils/helpers'
import Wave from '../assets/wave.svg'
import Nav from './../components.jsx/Nav';

// loader
export const mainLoader = () => {
    const username = fetchData("username")
    return { username }
}

const Main = () => {
  const { username } = useLoaderData()

  return (
    <div>
        <Nav username={username} />
        <main>
            <Outlet />
        </main>
        <img src={Wave} alt="wave image" />
    </div>
  )
}

export default Main