import React from 'react'
import { useRouteError, Link, useNavigate } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  return (
    <div>
      <h1>We got a problem</h1>
      <p>{error.message || error.statusText}</p>
      <div>
        <button>
          <Link to="/">
            <span>Go Home</span>
          </Link>
        </button>
        <button onClick={() => navigate(-1)}>
          <Link to="/">
            <span>Go Back!</span>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Error