import React from 'react'
import { Form, NavLink } from 'react-router-dom'
import Home from '../assets/home.svg'

const Nav = ({ username }) => {
  return (
    <nav style={{ padding: '2px', border: '1px solid black', display: 'flex'}}>
        <NavLink to='/' aria-label='Go to home'>
            <img src={Home} alt="Home Icon" />
            <span>HomeBudget</span>
        </NavLink>
        {
        username && (
            <Form method='post' action='/logout' onSubmit={e => {
                if (!confirm('Delete user and all data?')) {
                    e.preventDefault()
                }
            }}>
                
                <button type='submit'>
                    <span>Delete User</span>
                </button>
            </Form>
        )}
    </nav>
  )
}

export default Nav