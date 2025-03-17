import React from 'react';
import doctors from '../assets/doctors.jpg'

const Introduction = () => {
  return (
    <div className='bg-cover bg-center h-full flex items-center justify-center p-4' style={{ backgroundImage: `url(${doctors})` }}>
      <div className='bg-[#203955] flex flex-col md:flex-row items-center justify-between h-auto md:h-[25rem] w-full md:w-[85rem] opacity-85 p-6 md:p-0'>
        <div className='w-full md:w-[48%] text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white flex items-center justify-center text-center md:text-left'>
          MED<br/>VAULT
        </div>
        <div className='w-[0.2%] bg-white flex h-0 md:h-[23rem] md:block hidden'></div>
        <div className='w-full md:w-[51%] text-sm sm:text-base md:text-xl p-2 sm:p-6 md:p-[3rem] text-white text-center md:text-left'>
        MedVault resonates is a website designed to record and manage individual medical histories. It empowers both patients and healthcare providers by offering detailed patient information essential for informed treatment decisions. 
        <br/>The project fosters collaboration among hospitals and creates a community for the patients. By prioritising security and privacy, MedVault aims to positively impact society by enhancing the accessibility and accuracy of medical records, ultimately improving healthcare outcomes
        </div>
      </div>
    </div>
  );
}

export default Introduction;
