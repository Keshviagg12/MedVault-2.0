import React from 'react'
import {Route,Routes} from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayUser from './DisplayUser'
import DisplayProfessional from './DisplayProfessional'

const Display = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<DisplayHome/>}/>
            <Route path='/user-login' element={<DisplayUser/>}/>
            <Route path='/professional-login' element={<DisplayProfessional/>}/>
        </Routes>
      
    </>
  )
}

export default Display
