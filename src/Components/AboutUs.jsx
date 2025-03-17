import React from 'react';
import handshake from '../assets/handshake.jpg'

const AboutUs = () => {
  return (
    <div 
      id='aboutus' 
      className='bg-cover bg-center h-auto md:h-[35rem] flex items-center justify-center p-4' 
      style={{ backgroundImage: `url(${handshake})` }}
    >
      <div className='bg-[#203955] flex flex-col w-full max-w-[75rem] p-6 md:p-[3rem] opacity-90'>
        <div className='text-4xl sm:text-5xl md:text-6xl text-white pb-4 md:pb-[1rem]'>
          About Us..
        </div>
        <div className='h-[0.1rem] bg-white flex w-[12rem] sm:w-[18rem] md:w-[22rem] mb-4 md:mb-[1rem] rounded-sm'></div>
        <div className='text-sm sm:text-base md:text-xl text-white'>
        Our dedicated team is composed of passionate professionals who bring a wealth of experience in healthcare and technology. Each member is committed to ensuring that MedVault Resonates provides a user-friendly and effective solution for managing medical histories. <br/>Our collaborative culture drives us to achieve excellence in everything we do.
      <br/><br/>Connect With Us
We would love to hear from you. Visit our Website or connect us on [Medvault@gmail.com]. Don’t forget to sign up for our newsletter to stay updated on the latest news and offers
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
