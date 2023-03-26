import React, { useState } from 'react';
import './styles.scss';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const TutorBoost = () => {

  const myImage = 'https://res.cloudinary.com/ddgxwjgov/image/upload/q_auto,f_auto/v1678833497/Userdesign/pages/TutorBoost_h7jbzc.png';
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const backClick = () => {
    navigate(-1); 
  };

  const handleImageLoad = () => {
    setLoading(false);
  }

  return (
    <div className='page__tutorboost'>
      {loading && 
        (<div>
          <ClimbingBoxLoader 
            size={25}
            color={'#82c8e6'} 
            loading={loading}
          />
          </div>
        )}
      <img
        src={myImage}
        alt="mainpage"
        className='img__page'
        style={{ display: loading ? "none" : "block" }}
        onLoad={handleImageLoad}
      />
      {!loading && 
        <span onClick={backClick} style={{color: 'white'}}>
          <BsArrowLeft />
          <p>Back</p>
        </span>
      }
    </div>
  )
}

export default TutorBoost;
