import React, { useState } from 'react';
import Header from '../LandingPage/Header';
import Navbar from '../../components/Navbar';
import Designer from '../../components/Designer';
import Contact from '../LandingPage/Contact';
import ProjectContext from '../../components/ProjectContext';
import PictureModal from './PictureModal';
import image1 from '../../assets/mock.png';
import image2 from '../../assets/mock2.jpg';
import image3 from '../../assets/mock3.jpg';
import image4 from '../../assets/mock4.jpg';
import image5 from '../../assets/mock5.jpg';
import image6 from  '../../assets/mock6.jpg';
import { useInView } from 'react-intersection-observer';
import CircularText from '../../components/CircularText';
import './menu.scss';
import '../LandingPage/home.scss';
import '../../components/style.scss';



const Menu = () => {

  let description = `I handle various projects across various fields, I have the ability to take a client's idea and turn it into a design masterpiece that will make their competitors green with envy. I have a black belt in brainstorming and can come up with more ideas in a minute than most people can in a day (No jokes).`
  const me = 'I am a computer programmer and a junior majoring in computer science and a self-taught developer. I am knowledgeable in Figma, Javascript, Python , Solidity and experimental knowledge of Rust. ';
  const [modal, setModal] = useState({
    isOpen: false,
    image: null,
  });
  const handleHeadClick = (image) => {
    setModal({
      isOpen: true,
      image: image,
    });
    document.body.style.overflow = 'hidden';
  }
  
  const closeModal = () => {
    setModal({
      isOpen: false,
      image: null,
    });
    document.body.style.overflow = 'auto';
  }

  const { ref: view, inView: inview } = useInView({
    threshold: 0.1,
    rootMargin: "100px 0px 70px 0px",
  });
  const { ref: views, inView: inviews } = useInView({
    threshold: 0.1,
    rootMargin: "-200px 0px -50px 0px",
  });

  const { ref: ref1, inView: visible1 } = useInView({
    threshold: 0.65,
    rootMargin: "250px 0px 150px 0px",
  });
  const { ref: ref2, inView: visible2 } = useInView({
    threshold: 0.6,
    rootMargin: "0px 0px 0px 0px",
  });
    const { ref: ref3, inView: visible3 } = useInView({
    threshold: 0.65,
    rootMargin: "280px 0px 150px 0px",
  });
   

  return (
    <div className='menu'>
      <div className={` circular-text-container ${visible2 && 'white'} ${visible1 && 'white'} ${visible3 && 'white'}`}>
        <CircularText />
      </div>
      <div className={`sections ${visible1 && 'active' } ${visible2 && 'active2'} ${visible3 && 'active3'}`}></div>
      {modal.isOpen && (
        <div className='picture__modal'>
          <PictureModal handleClick={closeModal} closeModal={closeModal} image={modal.image}/>
        </div>
      )}
      <Navbar />
      <Header text3={description}/>
      <div ref={ref1} className={`home__designer`}>
        <Designer text1="ux" text2="design" />
      </div>
      <div className={`home__project `}>
        <div ref={view} className={`home__project__head ${inview ? 'active':'hiddentext'}`}>
          <ProjectContext
            picture={image1}
            picture1={image2}
            head= 'chowai' 
            head2='tutorboost'
            topic='problem'
            topic2= 'solution'
            topic3= 'impact'
            text = {me}
            text2 = {me}
            text3 = {me}
            onHeadClick={() => handleHeadClick(image1)}
            onHeadClicks={() => handleHeadClick(image2)}
            linkaddress= '/'
            linkaddress1 ='/TutorBoost'
          />
          <ProjectContext
            picture={image3}
            picture1={image4}
            head= 'medicci'
            head2= 'ntfloan'
            topic='problem'
            topic2= 'solution'
            topic3= 'impact'
            text = {me}
            text2 = {me}
            text3 = {me}
            onHeadClick={() => handleHeadClick(image3)}
            onHeadClicks={() => handleHeadClick(image4)}
            linkaddress= '/Medicci'
            linkaddress1 ='/NftLoan'
          /> 
        </div>
      </div>
      <div ref={ref3} className={`home__designer `}>
        <Designer text1="ui" text2="design" />
      </div>
      <div className={`home__project `}>
        <div ref={views} className={`home__project__head ${inviews ? 'active':'hiddentext'}`}>
          <ProjectContext
            picture={image4}
            picture1={image5}
            head= 'ntfloan'
            head2= 'muse'
            text3 = {me}
            onHeadClick={() => handleHeadClick(image4)}
            onHeadClicks={() => handleHeadClick(image5)}
            linkaddress= '/NftLoan'
            linkaddress1 ='/*'
          />
          <ProjectContext
            picture={image6}
            picture1={image5}
            head= 'baas'
            head2= 'the awakened woman'
            text3 = {me}
            onHeadClick={() => handleHeadClick(image6)}
            onHeadClicks={() => handleHeadClick(image5)}
            linkaddress= '/Baas'
            linkaddress1='/AwakenedWoman'
          />
        </div>
      </div>
      <div ref={ref2}  className={`home__contact`}>
        <Contact />
      </div>
    </div>
  )
}

export default Menu