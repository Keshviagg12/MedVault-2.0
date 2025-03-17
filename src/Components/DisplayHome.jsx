import React from 'react'
import Introduction from './Introduction';
import Login from './Login';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Partners from './Partners';

const DisplayHome = () => {
  return (
    <>
        <div className='h-[35rem]'>
        <Introduction/>
        </div>
        <Login/>
        <AboutUs/>
        <Partners/>
        <ContactUs />
    </>
    
  )
}

export default DisplayHome
