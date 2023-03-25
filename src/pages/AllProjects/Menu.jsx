import React, { useState, useEffect } from 'react';
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
import image7 from '../../assets/mock7.png';
import image8 from  '../../assets/mock8.png';
import { useInView } from 'react-intersection-observer';
import CircularText from '../../components/CircularText';
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn }from 'react-icons/fa';
import './menu.scss';
import '../LandingPage/home.scss';
import '../../components/style.scss';



const Menu = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let description = `I handle various projects across various fields, I have the ability to take a client's idea and turn it into a design masterpiece that will make their competitors green with envy. I have a black belt in brainstorming and can come up with more ideas in a minute than most people can in a day (No jokes).`
  const problem1 = 'Limited options for healthier, more diverse, and sustainable food options. With wealth of options of African cuisine that meets these needs, but often difficult for people to find authentic recipes.';
  const problem2 = 'Lack of quality education due to inadequately trained teachers and irrelevant curriculum which stunts their success. This leads to many students not receiving the required knowledge and skills they need.'
  const problem3 = 'A medical program named Medicci wants to build an application for medical students. The application would be used for hands-on training of students in their science and medical programs.' 
  const problem4 = 'With the rise of blockchain and digital assets, many enthusiasts has rode on this wave by amassing these digital assets with no real world use case or leverage. '
  const solution1 = 'Leverage the power of AI to curate and personalize African meal recommendations and planning options for users with cooking instructions for easy incorporation of African cuisine into their daily lives.'
  const solution2 = 'Providing professional and technological training and teaching resources to the teachers while personalizing each course curriculum according to the required skill needed.'
  const solution3 = 'A design system for an education application for training medical, anatomy and science students. This design system would be a guide to creating the needed application to achieve their purpose. '
  const solution4 = 'To create a mobile application where users can use their digital assets as collaterals for loans and can also rent out these digital assets to other users for passive income generation.'
  const impact = 'Making African cuisines available globally and digitally, thereby saving time and effort in searching for them.'
  const impact2 = 'Increase in quality education for the under privileged community which makes achieving the SDG4 goal much faster.'
  const impact3 = 'Improvement in the overall learning experience of the students in the program with improved retention through visualization and simulation.'
  const impact4 = 'Opens up opportunities in the blockchain industry where NFTs can be used beyond the digital metaverse and leveraged for real world use.'
  const me ='Innov8IQ is a case study template builder for UX designers. It reduces the need for templates as there is availability of pre-made templates or layout for all round customization and creativity.'
  const me2 = 'Codeviator is a smart coding devtool for developers. It helps developers write their codes, review and document their code. This platform is GPT-4 backed which includes image-to-code features.'
  const me3 = 'BAAS also known as Boyfriend-as-a-service platform where single ladies can come in to “rent” boyfriends and fiances for family gathering and events especially if they would be hassled about their singleness.'
  const me4 = 'The Awakened Woman is an NFT collection website of 5555 arts geared at helping women through empowerments, health and fitness. The site portrays in-depth arts and craft which matches the collection theme.'

  
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
      <div ref={ref1} className={`home__designer`} id='designer'>
        <Designer text1="ux" text2="design" />
      </div>
      <div className={`home__project `}>
        <div ref={view} className={`home__project__head ${inview ? 'active':'hiddentext'}`}>
          <span>
            <ProjectContext
              picture={image1}
              head= 'chowai' 
              topic='problem'
              topic2= 'solution'
              topic3= 'impact'
              text = {problem1}
              text2 = {solution1}
              text3 = {impact}
              onHeadClick={() => handleHeadClick(image1)}
              linkaddress= '/404'
            />
            <ProjectContext
              picture={image2}
              head='tutorboost'
              topic='problem'
              topic2= 'solution'
              topic3= 'impact'
              text = {problem2}
              text2 = {solution2}
              text3 = {impact2}
              onHeadClick={() => handleHeadClick(image2)}
              linkaddress1 ='/TutorBoost'
            />
          </span>
          <span>
            <ProjectContext
              picture={image3}
              head= 'medicci'
              topic='problem'
              topic2= 'solution'
              topic3= 'impact'
              text = {problem3}
              text2 = {solution3}
              text3 = {impact3}
              onHeadClick={() => handleHeadClick(image3)}
              linkaddress= '/Medicci'
            /> 
            <ProjectContext
              picture={image4}
              head= 'ntfloan'
              topic='problem'
              topic2= 'solution'
              topic3= 'impact'
              text = {problem4}
              text2 = {solution4}
              text3 = {impact4}
              onHeadClick={() => handleHeadClick(image4)}
              linkaddress ='/NftLoan'
            /> 
          </span>
        </div>
      </div>
      <div ref={ref3} className={`home__designer `}>
        <Designer text1="ui" text2="design" />
      </div>
      <div className={`home__project `}>
        <div ref={views} className={`home__project__head ${inviews ? 'active':'hiddentext'}`}>
          <span>
            <ProjectContext
              picture={image7}
              head= 'Innov8IQ'
              text3 = {me}
              onHeadClick={() => handleHeadClick(image7)}
              linkaddress= '/innov8iq'
            />
            <ProjectContext
              picture={image8}
              head= 'Codeviator'
              text3 = {me2}
              onHeadClick={() => handleHeadClick(image8)}
              linkaddress= '/innov8iq'
            />
          </span>
          <span>
            <ProjectContext
              picture={image6}
              head= 'baas'
              text3 = {me3}
              onHeadClick={() => handleHeadClick(image6)}
              linkaddress= '/Baas'
            />
            <ProjectContext
              picture={image5}
              head= 'the awakened woman'
              text3 = {me4}
              onHeadClick={() => handleHeadClick(image5)}
              linkaddress='/AwakenedWoman'
            />
          </span>
        </div>
      </div>
      <div ref={ref2}  className={`home__contact`}>
        <Contact text= <AiOutlineTwitter /> text2= <FaLinkedinIn /> />
      </div>
    </div>
  )
}

export default Menu