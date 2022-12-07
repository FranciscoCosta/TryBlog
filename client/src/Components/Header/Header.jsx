import React from 'react'
import './Header.scss'
import logo from '../../assets/tryblog.png'
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div className='Header'>
      <div className='Header__container'>
        <div className='Header__logo'>
          <img src={logo} alt="tryblog-logo" />
        </div>
        <div className='Header__links'>
          <Link className='link' to="/?cat=projects">
            <h6>Projects</h6>
          </Link>
          <Link className='link' to="/?cat=technology">
            <h6>Technology</h6>
          </Link>
          <Link className='link' to="/?cat=discussions">
            <h6>Discussions</h6>
          </Link>
          <Link className='link' to="/?cat=questions">
            <h6>Questions</h6>
          </Link>
          <span>
            Xico
          </span>
          <span>
            Logout
          </span>
          <span className='Header__write'>
            <Link to="/write" className='link'>
                Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
