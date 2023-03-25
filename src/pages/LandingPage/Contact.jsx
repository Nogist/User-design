import React from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = (props) => {
  const { ref: ref1, inView: visible1 } = useInView({
    threshold: 0.5,
    rootMargin: "0px 0px 0px 0px",
  });
  return (
    <div ref={ref1} className={`contact ${visible1 ? 'active' : 'hiddentext'} `}>
      <span className='contact__talk'>
        <h1>let's</h1>
        <h1>Talk</h1>
      </span>
      <p>If you want a product that's both beautiful and functional, look no further. Hire me, and together we'll create something that will make people say "Wow, I need that!" (or "I want that!" or "I'm in love with that!" - whatever floats your boat).</p>
      <div>
        <a id='contact__mail' href='mailto:Nwosunneoma@gmail.com'>Contact Me</a>
        {props.text && <span>
          <a href='https://twitter.com/adaihueze'  target="_blank" rel="noreferrer">{props.text}</a>
          <a href='https://www.linkedin.com/in/rosemary-nwosu-ihueze'  target="_blank" rel="noreferrer">{props.text2}</a>
        </span>}
      </div>
    </div>
  )
}

export default Contact