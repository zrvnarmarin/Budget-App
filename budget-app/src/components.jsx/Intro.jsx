import React from 'react'
import { Form } from 'react-router-dom'
import Ilustration from '../assets/ilustration.jpg'

const Intro = () => {
  return (
    <div>
        <div>
            <h1>Take control of <span>Your Money</span></h1>
            <p>Personal budgeting is the secret to financial freedom. Start your journey today.</p>
            <Form method='post' >
                <input 
                    type="text" 
                    autoComplete='given-name' 
                    name='username' 
                    placeholder='What is your name?' 
                    aria-label='Your name' 
                    required 
                />
                <input type="hidden" name='_action' value="newUser" />
                <button>
                    <span>Create Account</span>
                </button>
            </Form>
        </div>
        <img src={Ilustration} alt="intro ilustration" />
    </div>
  )
}

export default Intro