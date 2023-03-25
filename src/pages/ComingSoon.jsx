import React from 'react';
import Designer from '../components/Designer';
import './styles.scss';
import logo from '../assets/Vector1.png';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className='coming__soon'>
      <Link to= '/'>
        <img src={logo} alt="logo" />
      </Link>
      <Designer text1='coming' text2='soon'  />
    </div>
  )
}

export default ComingSoon;