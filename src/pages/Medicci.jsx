import React, { useState } from 'react';
import './styles.scss';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Baas = () => {
  const myImage = 'https://res.cloudinary.com/ddgxwjgov/image/upload/q_auto,f_auto/v1678833519/Userdesign/pages/Slides_sfl4md.png';
  const [loading, setLoading] = useState(true);

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
    </div>
  )
}

export default Baas;