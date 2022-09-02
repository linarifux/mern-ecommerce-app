import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <section className="login pages container">
        <div className="form-group">
            <form action="" className='shadow rounded p-5'>
                <p className="h1">Login</p>
                <p>Enter your Email and Password to Login</p>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' className="form-control" />
                <label htmlFor="password">Password</label>
                <input type="password" id='password' className="form-control" />
                <button className="btn btn-dark">Login</button>
                <p>New here? <Link to={'/signup'} style={{color: 'blue'}}>Sign Up</Link> to create an account.</p>
            </form>
        </div>
    </section>
  )
}

export default Login