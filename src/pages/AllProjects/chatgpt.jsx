import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Section1 = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const text = document.querySelector('.section1 .text');
    if (inView) {
      text.classList.add('inview');
    } else {
      text.classList.remove('inview');
    }
  }, [inView]);

  return (
    <section ref={ref} className="section1">
      <div className="text">
        <h1>Section 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </section>
  );
};

const Section2 = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const text = document.querySelector('.section2 .text');
    const background = document.querySelector('.section2 .background');
    if (inView) {
      text.classList.add('inview');
      background.classList.add('inview');
    } else {
      text.classList.remove('inview');
      background.classList.remove('inview');
    }
  }, [inView]);

  return (
    <section ref={ref} className="section2">
      <div className="text">
        <h1>Section 2</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="background"></div>
    </section>
  );
};

const Section3 = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const text = document.querySelector('.section3 .text');
    const background = document.querySelector('.section3 .background');
    if (inView) {
      text.classList.add('inview');
      background.classList.add('inview');
    } else {
      text.classList.remove('inview');
      background.classList.remove('inview');
    }
  }, [inView]);

  return (
    <section ref={ref} className="section3">
      <div className="text">
        <h1>Section 3</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="background"></div>
    </section>
  );
};

const App = () => {
  return (
    <div className="menu">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default App;



// .section1 .text {
//   opacity: 0;
//   transform: translateY(100%);
//   transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
// }

// .section1 .text.inview {
//   opacity: 1;
//   transform: translateY(0);
// }

// .section2 .text {
//   opacity: 0;
//   transform: translateY(50%);
//   transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
// }

// .section2 .text.inview {
//   opacity: 1;
//   transform: translateY(0);
// }

// .section2 .background {
//   opacity: 0;
//   transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
//   background-image: url('your-background-image-url');
//   }
  
//   .section2 .background.inview {
//   opacity: 1;
//   }
  
//   .section3 .text {
//   opacity: 0;
//   transform: translateY(100%);
//   transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
//   }
  
//   .section3 .text.inview {
//   opacity: 1;
//   transform: translateY(0);
//   }
  
//   .section3 .background {
//   opacity: 0;
//   transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
//   background-image: url('your-background-image-url');
//   }
  
//   .section3 .background.inview {
//   opacity: 1;
//   }
  
//   This CSS code should give you the same animation and transition effect as the website you mentioned. You can replace 'your-background-image-url' with your desired background image URLs for section 2 and section 3.
