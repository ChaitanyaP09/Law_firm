import React from 'react'
import { navigation } from '../data';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='lg:flex space-x-6 font-body font-semibold text-sm text-primary'>
        {navigation.map((item ,index)=> {
          return (
            <li key={index}>
              <Link to={item.href} smooth={true} offset={-120} active='active' spy={true}
                className='hover:text-accent-hover transition-all duration-300 cursor-pointer'
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
