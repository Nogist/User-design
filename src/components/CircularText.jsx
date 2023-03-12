import React, { useEffect, useRef, useState } from 'react';
import mouse from '../assets/mouse.png';
import './style.scss';

const CircularText = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const textRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const text = textRef.current;
    const letters = text.textContent.split('');
    text.innerHTML = '';

    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.transform = `rotate(${i * 30}deg)`;
      text.appendChild(span);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setIsScrolling(true);
        textRef.current.classList.remove('anticlockwise');
        textRef.current.classList.add('clockwise');
      } else if (currentScrollPos < prevScrollPos) {
        // Scrolling up
        setIsScrolling(true);
        textRef.current.classList.remove('clockwise');
        textRef.current.classList.add('anticlockwise');
      }
      setPrevScrollPos(currentScrollPos);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const timeoutRef = useRef(null);

  return (
    <>
      <p
        className={`text ${isScrolling ? 'animate' : ''}`}
        ref={textRef}
      >
        Scroll Down
      </p>
      <div className="mouse-container">
        <img className="mouse" src={mouse} alt="Mouse" />
      </div>
    </>
  );
};

export default CircularText;
