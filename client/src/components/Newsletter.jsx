import React from 'react'
import EmailIcon from '../assets/email-icon.svg'

const Newsletter = () => {
  return (
    <div className="letter shadow-lg rounded p-5">
        <div className="icon"><img src={EmailIcon} alt="Email" className='email-icon mb-5' /></div>
        <p className="h1">Subscribe</p>
        <p>Subscribe to get updates about our products and offers.</p>
        <form action="">
            <div className="form-group">
                <input type="text" className="form-control" />
                <button className="btn btn-dark">Subscribe</button>
            </div>
        </form>
    </div>
  )
}

export default Newsletter