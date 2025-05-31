import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaChevronUp } from 'react-icons/fa';

const BackToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="flex justify-center items-center bg-blue-700 hover:bg-blue-800 text-white w-12 h-12 fixed z-10 right-8 bottom-16 lg:bottom-8 rounded-2xl cursor-pointer text-sm transition-all"
      >
        <FaChevronUp />
      </button>
    )
  );
};

export default BackToTopBtn;
