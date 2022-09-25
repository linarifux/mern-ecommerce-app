import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentUser, setOtp } from '../../redux/actions/userActions'
import './signup.css'
import axios from 'axios'
const Signup = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialValue = {
    email: '',
    fullName: '',
    phone: '',
    password: ''
  }
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(initialValue)
  const [error, setError] = useState('')

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  setTimeout(() => {
    setError('')
  }, 3000)

  const submitHandler = async (e) => {
    const url = 'http://localhost:8000'
    e.preventDefault()
    const { email, fullName, phone, password } = user
    if (email && fullName && phone && password) {
      setLoading(true)
      const userExisted = await axios.get(`${url}/user/${user.email}`)
      if (userExisted.status === 200) {
        const { email } = user
        const otp = await axios.post(`${url}/user/otp`, { email })
        if(otp){
          dispatch(setCurrentUser(user))
          dispatch(setOtp(otp.data.code))
          navigate('/user/otp')
        }else{
          setError('Something went wrong!')
        }
      }
    }
  }


  return (
    <section className="signup pages container">
      <div className="form-group">
        <form action="" className='shadow rounded p-5' onSubmit={submitHandler}>
          {error ? <p className='warning'>Bad Request. User Already Exists.</p> : ''}
          {loading && <div className='spinner'></div>}
          <p className="h1">Signup</p>
          <p>Create an Account</p>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' className="form-control" name='email' onChange={onChangeHandler} value={user.email} />
          <label htmlFor="name">Full Name</label>
          <input type="text" className="form-control" id='name' name='fullName' onChange={onChangeHandler} value={user.fullName} />
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id='phone' className="form-control" name='phone' onChange={onChangeHandler} value={user.phone} />
          <label htmlFor="password">Password</label>
          <input type="password" id='password' className="form-control" name='password' onChange={onChangeHandler} value={user.password} />
          <button className="btn btn-dark">Sign Up</button>
          <p>Already have an account? <Link to={'/login'} style={{ color: 'blue' }}>Login</Link> here</p>
        </form>
      </div>
    </section>
  )
}

export default Signup