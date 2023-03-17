import React, { useState } from 'react';
import './styles.scss';

const Baas = () => {
  const myImage = 'https://res.cloudinary.com/ddgxwjgov/image/upload/q_auto,f_auto/v1678834164/Userdesign/pages/BaaS_z1zgzx.png';
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  }

  return (
    <div className='page__tutorboost'>
      {loading && <div className="spinner"></div>}
      <img
        src={myImage}
        alt="mainpage"
        className='img__page'
        onLoad={handleImageLoad}
        style={{ display: loading ? "none" : "block" }}
      />
    </div>
  )
}

export default Baas;