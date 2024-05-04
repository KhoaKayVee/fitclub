import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
            <div className='footer-icons'>
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={Linkedin} alt="" />
            </div>
            <img className='footer-logo' src={Logo} alt="" />

            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer