import React from 'react';
import Logo from '../../assets/logobg.png';
import { useInView } from 'react-intersection-observer';

const UserDetails = () => {

  const { ref: view, inView: inview } = useInView({
    threshold: 0.2,
    rootMargin: "-270px 0px 0px 0px",
  });

  return (
    <div ref={view} className={`user__details ${inview ? 'active':'hiddentext'}`}>
      <p>Hello there! I’m Rosemary, a UX designer with a background in human - computer interaction. I have a keen eye for design and a knack for turning even the most mundane products into works of art</p><br/>
      <p> I'm not just a UI/UX designer, I'm a product problem solver. I don't just design for the sake of design, I design to solve problems and create solutions that will make your life easier.</p>
      <h6>Rosemary Nwosu-Ihueze</h6>
      <div>
        <h1>download</h1>
        <h1>here</h1>
      </div>
      <span>
        <img src={Logo} alt="logo" />
      </span>
    </div>
  )
}


export default UserDetails