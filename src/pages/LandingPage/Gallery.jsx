import React from 'react';
import image1 from '../../assets/mock.png'
import image2 from '../../assets/mock2.jpg';
import image3 from '../../assets/mock3.jpg';
import image4 from '../../assets/mock4.jpg';
import image5 from '../../assets/mock5.jpg';
import image6 from '../../assets/mock6.jpg';
import { useInView } from 'react-intersection-observer';
import './home.scss';

const Gallery = () => {

  const { ref: view, inView: inview } = useInView({
    threshold: 0.25,
    rootMargin: "0px 0px 0px 0px",
  });
  const { ref: views, inView: inviews} = useInView({
    threshold: 0.65,
    rootMargin: "300px 0px 0px 0px",
  });

  return (
    <div ref={view} className={`gallery__container  ${inview ? 'active':'hiddentext'}`}>
      <div ref={views} className={`gallery `}>
        <div className={`${inviews && 'animate'}`}>
          <img src={image1} alt="gallery" />
          <img src={image2} alt="gallery" />
        </div>
        <div className={`${inviews && 'animate'}`}>
          <img src={image3} alt="gallery" />
        </div>
        <div className={`${inviews && 'animate'}`}>
          <img src={image4} alt="gallery" />
          <img src={image5} alt="gallery" />
        </div>
        <div className={`${inviews && 'animate'}`}>
          <img src={image6} alt="gallery" />
        </div>
        <div className={`${inviews && 'animate'}`}>
          <img src={image4} alt="gallery" />
          <img src={image5} alt="gallery" />
        </div>
      </div>
    </div>
  )
}

export default Gallery