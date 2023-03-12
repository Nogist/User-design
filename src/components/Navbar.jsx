import React from 'react'
import logo from '../assets/Vector.png';
import './style.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <h5>docs</h5>
    </div>
  )
}

export default Navbar