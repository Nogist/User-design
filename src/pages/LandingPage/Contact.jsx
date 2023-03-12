import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref: ref1, inView: visible1 } = useInView({
    threshold: 0.5,
    rootMargin: "0px 0px 0px 0px",
  });
  return (
    <div ref={ref1} className={`contact ${visible1 ? 'active' : 'hiddentext'} `}>
      <span>
        <h1>let's</h1>
        <h1>Talk</h1>
      </span>
      <p>If you want a product that's both beautiful and functional, look no further. Hire me, and together we'll create something that will make people say "Wow, I need that!" (or "I want that!" or "I'm in love with that!" - whatever floats your boat).</p>
      <div>
        <p>Contact Me</p>
        <span>
          <div><AiOutlineTwitter /></div>
          <div><BsLinkedin /></div>
        </span>
      </div>
    </div>
  )
}

export default Contact