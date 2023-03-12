import React,{ useEffect, useRef }  from 'react';
import { AiOutlineClose } from 'react-icons/ai'


const PictureModal = ({ handleClick, image, closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, closeModal]);

  return (
    <div onClick={closeModal} className='picture__modal__content'>
      <span>
        <img 
          src={image}
          alt= 'projectImage'
        />
      <div>
        <AiOutlineClose onClick={handleClick} />
      </div>
      </span>
    </div>
  )
}

export default PictureModal