import React from 'react';
import { useInView } from 'react-intersection-observer';
import resume from '../../assets/resume/resume.pdf'

const UserDetails = () => {

  const download = () => {
    window.location.href = resume;
  };

  const { ref: view, inView: inview } = useInView({
    threshold: 0.35,
    rootMargin: "0px 0px 0px 0px",
  });

  return (
    <div ref={view} className={`user__details ${inview ? 'active':'hiddentext'}`}>
      <p>Hello there! I’m Rosemary, a UX designer with a background in human - computer interaction. I have a keen eye for design and a knack for turning even the most mundane products into works of art</p><br/>
      <p> I'm not just a UI/UX designer, I'm a product problem solver. I don't just design for the sake of design, I design to solve problems and create solutions that will make your life easier.</p>
      <h6>Rosemary Nwosu-Ihueze</h6>
      <div onClick={download}>
        <h1>download</h1>
        <h1>here</h1>
      </div>
    </div>
  )
}


export default UserDetails