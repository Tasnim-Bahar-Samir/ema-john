import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userAuth } from '../../Contexts/UserContext';
import './Signup.css'


const Signup = () => {
  const {createUser} = useContext(userAuth);
  const[error,setError] = useState('');
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  const handleSubmit = (e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email,password,confirm)
    if(password.length < 6){
      setError('Password should be more than 6 characters.')
      return;
    }
    if(password !== confirm){
      setError("Confirm password didn't match.");
      return;
    }

    createUser(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      navigate(from,{replace:true})
      form.reset()
    })
    .catch(err => console.error(err))
  }
  return (
    <div className='form-container'>
        <div className="form">
          <h3 className='form-title'>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <label className='label-text' htmlFor='email'>Email</label>
          <input type="email" name="email"  required/>
          <label className='label-text' htmlFor='password'>Password</label>
          <input type="password" name="password"  required/>
          <label className='label-text' htmlFor='confirm'>Confirm Password</label>
          <input type="password" name="confirm"  required/>
          <small className='err-msg'>{error}</small>
          <button type="submit" className='btn-submit'>Sign Up</button>
        </form>
        <p>Already Have An Account? <Link to='/signin' style={{color:'rgba(255, 153, 0, 1)'}}>Login</Link></p>
        </div>
    </div>
  )
}

export default Signup;