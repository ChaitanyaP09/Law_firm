import React, { useState, useEffect } from 'react';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';

const images = [image1, image2, image3, image4];

const Image = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[600px] object-fill flex justify-center items-center mt-1">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-[100%] h-full object-cover  shadow-xl transition-opacity duration-1000"
      />
    </div>
  );
};

export default Image;
