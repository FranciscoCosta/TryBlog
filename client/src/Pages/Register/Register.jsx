import React from 'react'
import { Link } from 'react-router-dom'
import './Register.scss'

export const Register = () => {
  return (
    <div className='Register auth'>
      <h1>Register</h1>
      <form>
        <input  required type="text" placeholder='username'/>
        <input  required type="email" placeholder='email'/>
        <input  required type="password" placeholder='password'/>
        <button>Register</button>
        <p>Error!</p>
        <div className='Login__no-acount'>
        <span>Do you have an account ?</span><Link to="/login" className='link'>Login</Link>
        </div>
        
      </form>
    </div>
  )
}
