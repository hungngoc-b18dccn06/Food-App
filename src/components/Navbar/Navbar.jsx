<<<<<<< HEAD
import { useState } from 'react'
=======
import React, { useState } from 'react'
>>>>>>> 74fd0d7b0ad0a9c34128107e2019003bc00f5e3f
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
const Navbar = () => {

    const [menu,setMenu] = useState("home")

    return (
        <div className='navbar'>
            <img src={assets.logo_2} alt="" className="logo" />   
            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")}  className={menu === "home" ? "active" : ""}>Home</li>    
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>    
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</li>    
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact-us</li>    
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" className="" />   
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" className="" />    
                    <div className="dot">
                    </div>
                </div> 
                <button className='navbar-button'>Sign in</button>
            </div> 
        </div>   
    )
}

export default Navbar