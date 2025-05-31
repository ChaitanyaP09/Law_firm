import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';
import Nav from './navbar';
import NavMobile from './Navmob';

const Header = () => {
  const [bg, setbg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setbg(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed z-10 transition-all duration-300 flex items-center h-16 lg:h-20 ${
        bg ? 'bg-white shadow-md py-2 lg:py-4' : 'py-4 lg:py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <a href="#" className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="max-h-12 lg:max-h-16 object-contain"
          />
        </a>
        <Nav />
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
