import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

const Signup = () => {
  return (
    <section className="signup pages container">
        <div className="form-group">
            <form action="" className='shadow rounded p-5'>
                <p className="h1">Signup</p>
                <p>Create an Account</p>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' className="form-control" />
                <label htmlFor="name">Full Name</label>
                <input type="text" className="form-control" id='name' />
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id='phone' className="form-control" />
                <label htmlFor="password">Password</label>
                <input type="password" id='password' className="form-control" />
                <button className="btn btn-dark">Sign Up</button>
                <p>Already have an account? <Link to={'/login'} style={{color: 'blue'}}>Login</Link> here</p>
            </form>
        </div>
    </section>
  )
}

export default Signup