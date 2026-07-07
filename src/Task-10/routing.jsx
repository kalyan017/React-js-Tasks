import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Profile from './Profile'
import './Routing.css'
import profilePic from "../assets/image.jpeg";

export default function Routing() {
    return (
        <div>
            <BrowserRouter>
                <div className="header">
                    <div> 
                        <img src={profilePic} alt="Logo"/>
                    </div>
                    <div className='sub-header'>
                        <Link to={"/"} className='nav-link'>Home</Link>
                        <Link to={"/About"} className='nav-link'>About</Link>
                        <Link to={"/Services"} className='nav-link'>Services</Link>
                        <Link to={"/Contact"} className='nav-link'>Contact</Link>
                        <Link to={"/Profile"} className='nav-link'>Profile</Link>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Services' element={<Services />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Profile' element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
