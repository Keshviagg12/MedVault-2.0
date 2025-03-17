import React, { useState } from 'react';
import logo from '../assets/triangle.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons

import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    
    <div className='flex items-center justify-between pl-[1rem] bg-gray-800'>
      <div className='w-[60%] flex text-[1.8rem] text-[white] text-center'>Med
        <img className='h-[2.2rem] rounded-full' src={logo} alt="Logo" />
      </div>
      
      {/* Hamburger Icon for smaller screens */}
      <div className='md:hidden' onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <FaTimes className='text-white text-2xl' />
        ) : (
          <FaBars className='text-white text-2xl' />
        )}
      </div>

      {/* Menu items */}
      <div className={`md:flex md:items-center md:justify-between w-[45%] ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <Link to='/' className='text-white text-sm px-4 m-4  hover:bg-white hover:text-black rounded-md transition-all '>
          <a href='#home'>HOME</a>
        </Link>
        <div className='text-white text-sm px-4 m-4  hover:bg-white hover:text-black rounded-xl transition-all '>
          <a href='#login'>LOGIN</a>
        </div>
        <a href='#aboutus' className='text-white text-sm px-4 m-4  hover:bg-white hover:text-black rounded-xl transition-all '>
          ABOUT US
        </a>
        <a href='#partners' className='text-white text-sm px-4 m-4  hover:bg-white hover:text-black rounded-xl transition-all '>
          PARTNERS
        </a>
        <a href='#contactus' className='text-white text-sm px-4 m-4  hover:bg-white hover:text-black rounded-xl transition-all '>
           FEEDBACK
        </a>
      </div>
    </div>
    
  );
};

export default Navbar;
