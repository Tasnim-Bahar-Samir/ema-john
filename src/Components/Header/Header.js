import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='header'>
        <img src={logo} alt="" />
        <div className='nav-link'>
            <NavLink to="/">Shop</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/inventory">Manage Inventory</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    </nav>
  )
}

export default Header