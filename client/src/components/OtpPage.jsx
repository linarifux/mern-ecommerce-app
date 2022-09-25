import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { setCurrentUser } from '../redux/actions/userActions'

const OtpPage = () => {
    const userValue = useSelector(state => state.setCurrentUserReducer)
    const otpValue = useSelector(state => state.setOtpReducer)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [user, setUser] = useState({})
    const [otp, setOtp] = useState('')

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const [userInput, setUserInput] = useState('')

    const onChangeHandler = (e) => {
        setUserInput(e.target.value)
    }

    useEffect(() => {
        setUser(userValue)
        setOtp(otpValue)
    }, [otpValue, userValue])


    // limit the error showing time
    setTimeout(() => {
        setError('')
    }, 3000)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(userInput){
            setLoading(true)
            if(userInput === otp.toString()){
                const newUser = await axios.post(`http://localhost:8000/user/new`, user )
                if(newUser){
                    const updatedUser = await axios.put(`http://localhost:8000/user/${newUser._id}`, {verified: true})
                    // console.log(updatedUser);
                    dispatch(setCurrentUser(newUser))
                    setLoading(false)
                    navigate('/')
                }else{
                    setError('Something Went Wrong!, Please, try again!')
                    setLoading(false)
                }
            }else{
                setError('Invalid OTP!')
                setLoading(false)
            }
        }else{
            setError('Enter the OTP please!')
        }
    }

    return (
        <section className="pages container otp-page">
            <div className="section-title">OTP</div>
            <div className="otp-box w-50 m-auto text-center">
                {loading && <div className="spinner"></div>}
                {error && <p className='warning'>{error}</p>}
                <p>Please, enter the code we sent to your email.</p>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" className="form-control" name='otp' onChange={onChangeHandler}/>
                    <button className="btn btn-large btn-dark">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default OtpPage