import React from 'react';
import man from '../assets/man.png';
import medicalteam from '../assets/medical-team.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div id='login' className='bg-white py-8 px-4 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8'>
      <Link 
        to="/user-login" 
        className='w-full md:w-[30%] h-[4rem] bg-[#a4d0de] flex items-center justify-between px-4 md:px-8 font-bold rounded-md hover:h-[4.2rem] hover:w-full md:hover:w-[31%] hover:text-md transition-all'
      >
        <span className='flex-1 text-center'>USER/PERSONAL LOGIN</span>
        <img src={man} className='h-[3.5rem] md:h-[4.5rem] ml-2 md:ml-4' alt='User Icon' />
      </Link>

      <Link 
        to="/professional-login" 
        className='w-full md:w-[30%] h-[4rem] bg-[#a4d0de] flex items-center justify-between px-4 md:px-8 font-bold rounded-md hover:h-[4.2rem] hover:w-full md:hover:w-[31%] hover:text-md transition-all'
      >
        <img src={medicalteam} className='h-[3.5rem] md:h-[4.5rem] mr-2 md:mr-4' alt='Professional Icon' />
        <span className='flex-1 text-center'>PROFESSIONAL LOGIN</span>
      </Link>
    </div>
  );
}

export default Login;
