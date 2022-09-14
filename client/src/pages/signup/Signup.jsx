import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import './signup.css'
import axios from 'axios'
import { setCurrentUser } from '../../redux/actions/userActions'
const Signup = () => {

  const dispatch = useDispatch()

  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [createdUser, setCreatedUser] = useState({})

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/user/new', user)
      .then(response => {
        setCreatedUser(response.data)
        dispatch(setCurrentUser(createdUser))
      })
      .catch(e => setError(e.response))
      setTimeout(() => {
        setError('')
      }, 3000)
  }


  return (
    <section className="signup pages container">
      <div className="form-group">
        <form action="" className='shadow rounded p-5' onSubmit={submitHandler}>
          {error ? <p className='warning'>Bad Request. User Already Exists.</p> : ''}
          <p className="h1">Signup</p>
          <p>Create an Account</p>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' className="form-control" name='email' onChange={onChangeHandler} />
          <label htmlFor="name">Full Name</label>
          <input type="text" className="form-control" id='name' name='fullName' onChange={onChangeHandler} />
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id='phone' className="form-control" name='phone' onChange={onChangeHandler} />
          <label htmlFor="password">Password</label>
          <input type="password" id='password' className="form-control" name='password' onChange={onChangeHandler} />
          <button className="btn btn-dark">Sign Up</button>
          <p>Already have an account? <Link to={'/login'} style={{ color: 'blue' }}>Login</Link> here</p>
        </form>
      </div>
    </section>
  )
}

export default Signup