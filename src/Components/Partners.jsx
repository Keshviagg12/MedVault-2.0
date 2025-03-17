import React from 'react';
import institution1 from '../assets/institution1.png';
import institution2 from '../assets/institution2.png';
import institution3 from '../assets/institution3.png';
import institution4 from '../assets/institution4.png';
import institution5 from '../assets/institution5.png';
import plus from '../assets/plus.png';

const Partners = () => {
  return (
    <div id='partners' className='py-8 px-4 md:px-[5rem] lg:px-[10rem]'>
      <div className='bg-white h-full text-[#203955] p-4'>
        <div className='text-3xl sm:text-4xl md:text-5xl pl-2 pb-2'>Our Partners</div>
        <div className='text-base sm:text-lg md:text-xl pl-2 pb-4'>They trust so that you can trust...</div>
        <div className='flex flex-wrap items-center justify-start space-x-4 space-y-4'>
          <img src={institution1} className='h-[3rem] sm:h-[4rem] md:h-[5rem]'></img>
          <img src={institution2} className='h-[3rem] sm:h-[4rem] md:h-[5rem] rounded-full'></img>
          <img src={institution3} className='h-[3rem] sm:h-[4rem] md:h-[5rem]'></img>
          <img src={institution4} className='h-[3rem] sm:h-[4rem] md:h-[5rem]'></img>
          <img src={institution5} className='h-[3rem] sm:h-[4rem] md:h-[5rem]'></img>
          <img src={institution1} className='h-[3rem] sm:h-[4rem] md:h-[5rem]'></img>
          <img src={institution2} className='h-[3rem] sm:h-[4rem] md:h-[5rem]'></img>
          <img src={institution4} className='h-[3rem] sm:h-[4rem] md:h-[5rem]'></img>
          <img src={plus} alt='see more' className='h-[1rem] sm:h-[1.5rem] md:h-[2rem] hover:h-[1.25rem] sm:hover:h-[1.75rem] md:hover:h-[2.25rem] transition-all'></img>
        </div>   
      </div>
    </div>
  )
}

export default Partners;
