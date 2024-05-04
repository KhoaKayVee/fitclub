import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <img className='header-logo' src={logo} alt="logo" />
        <ul className='header-items'>
            <li className='header-item'>Home</li>
            <li className='header-item'>Programs</li>
            <li className='header-item'>Why us</li>
            <li className='header-item'>Plans</li>
            <li className='header-item'>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header