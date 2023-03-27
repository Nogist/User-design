import React from 'react';
import { useInView } from 'react-intersection-observer';


const Designer = (props) => {

  const { ref: ref1, inView: visible1 } = useInView({
    threshold: 0.60,
    rootMargin: "300px 0px -155px 0px",
  });
  const { ref: ref2, inView: visible2 } = useInView({
    threshold: 0.47,
    rootMargin: "20px 0px 20px 0px",
  });

  return (
    <div ref={ref2} className={`designers__header ${visible2 ? 'active':'hiddentext'}`}>
      <div ref={ref1} className='designers'>
        {props.text && !visible1 ? (
          <h1>{props.text}</h1>
        ) : (
          <h1 id='swapping'>{props.text0}</h1>
        )}
        {props.text1 && <h1>{props.text1}</h1>}
        {props.text2 && <h1>{props.text2}</h1>}
      </div>
    </div>
  )
}


export default Designer