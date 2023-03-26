import React from 'react';
import image1 from '../../assets/gallery1.png'
import image2 from '../../assets/gallery2.png';
import image3 from '../../assets/gallery4.png';
import image4 from '../../assets/gallery3.png';
import image5 from '../../assets/gallery5.png';
import image6 from '../../assets/gallery6.png';
import image7 from '../../assets/gallery7.png';
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
          <img src={image7} alt="gallery" />
          <img src={image1} alt="gallery" />
        </div>
        <div className={`${inviews && 'animate'}`}>
          <img src={image2} alt="gallery" />
        </div>
        <div className={`${inviews && 'animate'}`}>
          <img src={image3} alt="gallery" />
          <img src={image4} alt="gallery" />
        </div>
        <div className={`${inviews && 'animate'}`}>
          <img src={image5} alt="gallery" />
        </div>
        <div className={`${inviews && 'animate'}`}>
          <img src={image6} alt="gallery" />
          <img src={image7} alt="gallery" />
        </div>
        <div className={`${inviews && 'animate'}`}>
          <img src={image1} alt="gallery" />
        </div>
        <div className={`${inviews && 'animate'}`}>
          <img src={image2} alt="gallery" />
          <img src={image3} alt="gallery" />
        </div>
        <div className={`${inviews && 'animate'}`}>
          <img src={image4} alt="gallery" />
        </div>
        <div className={`${inviews && 'animate'}`}>
        <img src={image5} alt="gallery" />
        <img src={image6} alt="gallery" />
      </div>
      </div>
    </div>
  )
}

export default Gallery