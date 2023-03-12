import React from 'react';
import { useInView } from 'react-intersection-observer';

const Designer = (props) => {

  const { ref: ref1, inView: visible1 } = useInView({
    threshold: 0.6,
    rootMargin: "00px -130px 0px 0px",
  });

  return (
    <div ref={ref1} className='designers'>
      {props.text1 && !visible1 ? (
        <h1>{props.text1}</h1>
      ) : (
        <h1 id='swapping'>ux</h1>
      )}
      {props.text2 && <h1>{props.text2}</h1>}
    </div>
  )
}


export default Designer