import React from 'react'
import logo from '../assets/Vector.png';
import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
      <h5>docs</h5>
    </div>
  )
}

export default Navbar