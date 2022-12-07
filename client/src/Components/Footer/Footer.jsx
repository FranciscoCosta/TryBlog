import React from 'react'
import logo from '../../assets/tryblog.png'
import './Footer.scss'

export const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer__logo'>
        <img src={logo} alt="logo tryblog" />
      </div>
        <span>Made by : Francisco Costa T24A</span>
    </footer>
  )
}
