import React from 'react';
import Navbar from './../../components/Navbar'
import Designer from '../../components/Designer';
import UserProjects from './UserProjects';
import Header from './Header';
import './home.scss';
import CircularText from '../../components/CircularText';
import UserDetails from './UserDetails';
import Contact from './Contact';
import { useInView } from 'react-intersection-observer';

const Home = () => {

  const { ref: ref1, inView: visible1 } = useInView({
    threshold: 0.49,
    rootMargin: "0px 0px -60px 0px",
  });
  const { ref: ref2, inView: visible2 } = useInView({
    threshold: 0.4,
    rootMargin: "300px 0px 240px 0px",
  });
    const { ref: ref3, inView: visible3 } = useInView({
    threshold: 0.49,
    rootMargin: "0px 0px 20px 0px",
  });
    const { ref: ref4, inView: visible4 } = useInView({
    threshold: 0.6,
    rootMargin: "0px 0px",
  });
 

  return (
    <div className='home'>
      <div className={` circular-text-container ${visible1 && 'white'} ${visible2 && 'white'} ${visible3 && 'white'} ${visible4 && 'white'}`}>
        <CircularText />
      </div>
      <div className={`sections ${visible1 && 'active3' } ${visible2 && 'active4' } ${visible3 && 'active0'} ${visible4 && 'active5'}`}></div>
      <Navbar />
      <Header text='user' text1='centered' text2='design' />
      <div ref={ref1} className={`home__designer`}>
        <Designer text="ui" text0='ux' text2="designer" />
      </div>
      <div ref={ref2} className={`home__userdetails`}>
        <UserDetails />
      </div>
      <div className='home__gallery'>
        
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