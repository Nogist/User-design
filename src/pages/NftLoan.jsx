import React, { useState } from 'react';
import './styles.scss';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const NftLoan = () => {
  const myImage = 'https://res.cloudinary.com/ddgxwjgov/image/upload/q_auto,f_auto/v1678833591/Userdesign/pages/UX-Case_study1_mmsgw3.png';
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

export default NftLoan;
