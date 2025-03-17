import React from 'react';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import googleplus from '../assets/google-plus.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';

const Footer = () => {
  return (
    <div className='bg-[#203955] py-6 flex flex-col items-center'>
      <div className='w-full max-w-[1200px] text-white flex flex-col items-center'>
        {/* Social Media Icons */}
        <div className='flex flex-wrap justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 py-4'>
          <img src={facebook} className='h-[2rem] sm:h-[2.5rem] md:h-[2.5rem] lg:h-[2.8rem] hover:h-[2.5rem] md:hover:h-[3rem] lg:hover:h-[3.25rem] transition-all' alt='Facebook' />
          <img src={instagram} className='h-[2rem] sm:h-[2.5rem] md:h-[2.5rem] lg:h-[2.8rem] hover:h-[2.5rem] md:hover:h-[3rem] lg:hover:h-[3.25rem] transition-all' alt='Instagram' />
          <img src={googleplus} className='h-[2rem] sm:h-[2.5rem] md:h-[2.5rem] lg:h-[2.8rem] hover:h-[2.5rem] md:hover:h-[3rem] lg:hover:h-[3.25rem] transition-all' alt='Google Plus' />
          <img src={twitter} className='h-[2rem] sm:h-[2.5rem] md:h-[2.5rem] lg:h-[2.8rem] hover:h-[2.5rem] md:hover:h-[3rem] lg:hover:h-[3.25rem] transition-all' alt='Twitter' />
          <img src={youtube} className='h-[2rem] sm:h-[2.5rem] md:h-[2.5rem] lg:h-[2.8rem] hover:h-[2.5rem] md:hover:h-[3rem] lg:hover:h-[3.25rem] transition-all' alt='YouTube' />
        </div>
        
        {/* Navigation Links */}
        <div className='w-full flex flex-wrap justify-center space-x-2 sm:space-x-4 text-xs sm:text-sm md:text-base lg:text-lg py-4'>
          <a href='#home' className='hover:text-sm sm:hover:text-base md:hover:text-lg lg:hover:text-[1.2rem] transition-all'>Home</a>
          <a href='#news' className='hover:text-sm sm:hover:text-base md:hover:text-lg lg:hover:text-[1.2rem] transition-all'>News</a>
          <a href='#contactus' className='hover:text-sm sm:hover:text-base md:hover:text-lg lg:hover:text-[1.2rem] transition-all'>Contact Us</a>
          <a href='#ourteam' className='hover:text-sm sm:hover:text-base md:hover:text-lg lg:hover:text-[1.2rem] transition-all'>Our Team</a>
        </div>
        
        {/* Copyright Text */}
        <div className='text-center text-xs sm:text-sm md:text-base lg:text-lg py-4'>
          Copyright &copy;2024, Designed for your comfort 🫀🫀
        </div>
      </div>
    </div>
  );
}

export default Footer;
