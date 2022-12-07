import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

export const Login = () => {
  return (
    <div className='Login auth'>
      <h1>Login</h1>
      <form>
        <input  required type="text" placeholder='username'/>
        <input  required type="password" placeholder='password'/>
        <button>LogIn</button>
        <p>Error!</p>
        <div className='Login__no-acount'>
        <span>Don't have an account ?</span><Link to="/register">Register</Link>
        </div>
        
      </form>
    </div>
  )
}
