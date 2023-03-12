import React from 'react';
import CircularText from '../../components/CircularText';
import './home.scss';

const Header = () => {
  return (
    <div className='headers'>
      <div className='header'>
        <h1>user</h1>
        <h1>Centered</h1>
        <h1>Design</h1>
      </div>
      <div className='circular-text-container'>
        <CircularText />
      </div>
  </div>
  )
}

export default Header