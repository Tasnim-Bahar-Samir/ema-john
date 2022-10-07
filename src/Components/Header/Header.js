import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='header'>
        <Link to='/'><img src={logo} alt="" /></Link>
        <div className='nav-link'>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/inventory">Manage Inventory</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    </nav>
  )
}

export default Header