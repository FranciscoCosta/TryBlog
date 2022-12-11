import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Register.scss'

export const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  const handleChange =(event)=>{
    setInputs(oldstate=>({...oldstate, [event.target.name]: event.target.value }))
  }
  console.log(inputs)
  return (
    <div className='Register auth'>
      <h1>Register</h1>
      <form>
        <input  required type="text" placeholder='username' name='username' onChange={handleChange}/>
        <input  required type="email" placeholder='email' name="email" onChange={handleChange}/>
        <input  required type="password" placeholder='password' name="password" onChange={handleChange}/>
        <button>Register</button>
        <p>Error!</p>
        <div className='Login__no-acount'>
        <span>Do you have an account ?</span><Link to="/login" className='link'>Login</Link>
        </div>
        
      </form>
    </div>
  )
}
