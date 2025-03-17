import React from 'react';
import Navbar from './Components/Navbar';
import Display from './Components/Display';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div id='home' className='h-screen bg-[#fff]'>
        
        <Navbar/>
        
        <Display/>
        <Footer/> 
    </div>
  )
}

export default App
