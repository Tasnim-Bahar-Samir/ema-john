import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userAuth } from '../../Contexts/UserContext'
import './SignIn.css'

const SignIn = () => {
  const {user} = useContext(userAuth);

  const handleSignIn = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  }

  return (
    <div className='form-container'>
        <div className="form">
          <h3 className='form-title'>Login</h3>
        <form onSubmit={handleSignIn}>
          <label className='label-text' htmlFor='email'>Email</label>
          <input type="email" name="email"  required/>
          <label className='label-text' htmlFor='password'>Password</label>
          <input type="password" name="password"  required/>
          <button type="submit" className='btn-submit'>Sign In</button>
        </form>
        <p>New To Ema-John? <Link to='/signup' style={{color:'rgba(255, 153, 0, 1)'}}>Create New Account</Link></p>
        </div>
    </div>
  )
}

export default SignIn