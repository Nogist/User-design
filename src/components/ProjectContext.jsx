import React from 'react';
import { Link } from 'react-router-dom';

const ProjectContext = (props) => {
  return (
    <div className='projects__context'>
      <span>
        <img 
          src={props.picture}
          alt='Ui design'
        />
      </span>
      <span className='projects__context__buttons'>
        <button className='button__overlay' >{props.head}</button>
        <button onClick={props.onHeadClick}> {props.head} </button>
      </span>
      <div>
        {props.topic &&  <span>
          {props.topic && <p>{props.topic}</p>}
          {props.text && <h6>{props.text}</h6>}
        </span>}
        {props.topic &&  <span>
          {props.topic && <p>{props.topic}</p>}
          {props.text && <h6>{props.text}</h6>}
        </span>}
        <span>
          {props.topic3 && <p>{props.topic3}</p>}
          {props.text3 && <h6>{props.text3}</h6>}
        </span>
        {props.linkaddress && <Link to={props.linkaddress}>
          <button>view project</button>
        </Link>}
      </div>
    </div>
  )
}

export default ProjectContext