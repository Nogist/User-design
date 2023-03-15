import React from 'react';
import './home.scss';
import CircularText from '../../components/CircularText';

const Header = (props) => {
  return (
    <div className='headers'>
      <div className='header'>
        {props.text && <h1>{props.text}</h1>}
        {props.text1 && <h1>{props.text1}</h1>}
        {props.text3 && <h1 className='header__content'>{props.text3}</h1>}
        {props.text2 && <h1>{props.text2}</h1>}
      </div>
      <a href='#designer' className={`circular-text-container`}>
        <CircularText />
      </a>
    </div>
  )
}

export default Header