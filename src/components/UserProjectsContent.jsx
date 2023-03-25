import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const UserProjectsContent = (props) => {
  return (
    <div className='user__projects__content'>
      <h3>{props.text}</h3>
      <Link to ={props.linkfirst} id='first__stroke'>
          <p>{props.first}</p>
          <AiOutlineArrowRight /> 
      </Link>
      <Link to={props.linksecond}>
          <p>{props.second}</p>
          <AiOutlineArrowRight />
      </Link>
      <Link to={props.linkthird} >
        <p>{props.third}</p>
          <AiOutlineArrowRight />
      </Link>
      <Link to={props.linkfourth}>
          <p>{props.fourth}</p>
          <AiOutlineArrowRight />
      </Link>
    </div>
  )
}

export default UserProjectsContent