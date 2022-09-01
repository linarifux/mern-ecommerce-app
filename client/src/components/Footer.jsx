import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="first-col">
                        <a href="#blog">Blog</a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Our Story</a>
                        <a href="">Careers</a>
                    </div>
                    <div className="second-col">
                        <a href="">Gift Cards</a>
                        <a href="">Shipping & Returns</a>
                        <a href="">Order Status</a>
                        <a href="">Contact Us</a>
                    </div>
                    <div className="third-col social-icons">
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaLinkedin /></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <hr/>
                    <p>&copy;Copyright 2022 VOID PRODUCTIONS</p>
                </div>
            </div>
        </section>
    )
}

export default Footer