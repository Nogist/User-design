import React, { useEffect } from 'react';
import Navbar from './../../components/Navbar'
import Designer from '../../components/Designer';
import UserProjects from './UserProjects';
import Header from './Header';
import Gallery from './Gallery';
import './home.scss';
import UserDetails from './UserDetails';
import Contact from './Contact';
import { useInView } from 'react-intersection-observer';
import image1 from  '../../assets/background.png';
import image2 from '../../assets/background2.png';
import image3 from '../../assets/logobg.png';
import image4 from '../../assets/background3.png';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageUrls = [
    image1,
    image2,
    image3,
    image4,
  ]

   // Looping through the array to preload the images
   useEffect(() => {
    imageUrls.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const screenWidth = window.innerWidth;

  const { ref: ref1, inView: visible1 } = useInView({
    threshold: 0.40,
    rootMargin: "170px 0px -300px 0px",
  });

  const { ref: refMobile, inView: visibleMobile } = useInView({
    threshold: 0.2,
    rootMargin: screenWidth < 600 ? "170px 0px -300px 0px" : "170px 0px 0px 0px",
  });

  const { ref: ref2, inView: visible2 } = useInView({
    threshold: 0.45,
    rootMargin: "0px 0px 0px 0px",
  });
    const { ref: ref3, inView: visible3 } = useInView({
    threshold: 0.49,
    rootMargin: "0px 0px 100px 0px",
  });
    const { ref: ref4, inView: visible4 } = useInView({
    threshold: 0.6,
    rootMargin: "0px 0px",
  });
 

  return (
    <div className='home'>
      <div className={`sections ${visible1 && 'active3' } ${visibleMobile && 'active3'} ${visible2 && 'active5' } ${visible3 && 'active0'} ${visible4 && 'active4'}`}></div>
      <Navbar />
      <Header text='user' text1='centered' text2='design' />
      <div ref={screenWidth < 600 ? refMobile:ref1} className={`home__designer`} id='designer'>
        <Designer text="ui" text0='ux' text2="designer" />
      </div>
      <div ref={ref2} className={`home__userdetails`}>
        <UserDetails />
      </div>
      <div className='home__gallery'>
        <Gallery />
      </div>
      <div ref={ref3} className={`home__designer`}>
        <Designer text1="selected" text2="projects" />
      </div>
      <div className={`user__projects`}>
        <UserProjects />
      </div>
      <div ref={ref4} className={`home__contact`}>
        <Contact />
      </div>
    </div>
  )
}

export default Home
