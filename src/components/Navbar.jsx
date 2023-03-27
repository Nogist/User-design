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
      <Link to= '/404'>
        <h5>docs</h5>
      </Link>
    </div>
  )
}

export default Navbar