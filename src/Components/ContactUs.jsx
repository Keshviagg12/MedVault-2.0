import React from 'react';
import contactus from '../assets/Contact us.jpg'

const ContactUs = () => {
  return (
    <div 
      id='contactus' 
      className='bg-cover bg-center h-auto md:h-[35rem] flex items-center justify-center p-4' 
      style={{ backgroundImage: `url(${contactus})` }}
    >
      <div className='bg-[#203955] h-auto md:h-[28rem] w-full max-w-[75rem] p-6 md:p-[3rem] opacity-85'>
        <div className='text-3xl sm:text-4xl md:text-5xl text-white pb-4'>Contact Us..</div>
        <div>
          <form action='' className='flex flex-col gap-4'>
            <input 
              type='text' 
              name='email' 
              placeholder='Your Email' 
              className='w-full md:w-[15rem] h-[2.5rem] rounded-md p-[1rem] text-base sm:text-lg'
            />
            <input 
              type='text' 
              name='name' 
              placeholder='Your Name' 
              className='w-full md:w-[15rem] h-[2.5rem] rounded-md p-[1rem] text-base sm:text-lg'
            />
            <textarea 
              name='message' 
              placeholder='Feedback' 
              className='w-full md:w-[30rem] h-[8rem] rounded-md p-[1rem] text-base sm:text-lg resize-none'
            />
            <button 
              type='submit' 
              className='h-[2.5rem] w-[6rem] bg-white font-medium rounded-md hover:bg-[#A4D0DE] hover:h-[2.7rem] hover:w-[6.2rem] transition-all'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
