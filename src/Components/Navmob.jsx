import React, { useState, useEffect } from 'react';
import BarsIcon from '../assets/img/bars.png';
import CloseIcon from '../assets/img/close.png';
import { navigation } from '../data';
import { Link } from 'react-scroll';

const Navmob = () => {
  const [isOpen, setIsopen] = useState(false);

  // Disable background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className="lg:hidden relative z-50">
      {/* Open menu button */}
      <button
        onClick={() => setIsopen(true)}
        aria-label="Open Menu"
        className="focus:outline-none"
      >
        <img src={BarsIcon} alt="Open Menu" />
      </button>

      {/* Slide-in mobile menu */}
      <ul
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed top-0 w-full h-screen bg-blue-950 text-white transition-all duration-300 ease-in-out flex flex-col justify-center items-center space-y-8 text-lg`}
      >
        {/* Close menu button */}
        <button
          onClick={() => setIsopen(false)}
          className="absolute top-6 left-6"
          aria-label="Close Menu"
        >
          <img src={CloseIcon} alt="Close Menu" />
        </button>

        {/* Navigation links */}
        {navigation.map((item, index) => (
          <li key={index}>
            <Link
              to={item.href}
              activeClass="active"
              spy={true}
              offset={-200}
              smooth={true}
              duration={500}
              className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
              onClick={() => setIsopen(false)}  // Close on click
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navmob;
