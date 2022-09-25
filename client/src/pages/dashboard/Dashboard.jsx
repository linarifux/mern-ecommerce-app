import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { setCurrentUser } from '../../redux/actions/userActions'

const Dashboard = () => {

    const dispatch = useDispatch()
    const { productId } = useParams()

    const currentUser = useSelector(state => state.setCurrentUserReducer)
    console.log(currentUser);

    useEffect(() => {
        const user = axios.get(`http://localhost:8000/user/${productId}`)
        dispatch(setCurrentUser(user))
    }, [productId])
    return (
        <section className="pages dashboard container">
            Dashboard
        </section>
    )
}

export default Dashboard