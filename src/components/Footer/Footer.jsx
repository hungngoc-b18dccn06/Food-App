import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" className="" />
                    <p>Craving delicious flavors? Satisfy your taste buds at Hung Food! From fresh ingredients to mouth-watering dishes, we bring you the best of culinary delights. Visit us today and experience the joy of great food!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" className="" />
                        <img src={assets.twitter_icon} alt="" className="" />
                        <img src={assets.linkedin_icon} alt="" className="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>03987122447</li>
                        <li>hungngoc73@gmail.conm</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">
                Copyright 2024 hungngoc73
            </p>
        </div>
    )
}

export default Footer