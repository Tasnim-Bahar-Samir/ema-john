import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { userAuth } from '../../Contexts/UserContext';

const Header = () => {
  const {user,userSignout} = useContext(userAuth);
  return (
    <nav className='header'>
        <Link to='/'><img src={logo} alt="" /></Link>
        <div className='nav-link'>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/inventory">Manage Inventory</NavLink>
            <NavLink to="/about">About</NavLink>
            {
              user?.uid? 
              <button onClick={userSignout} className='btn-signout'>Sign Out</button>
              :
              <>
                <NavLink to="/signin">Sign In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
              </>
            }
        </div>
    </nav>
  )
}

export default Header