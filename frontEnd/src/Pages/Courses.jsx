import React from 'react'
import Navbar from '../components/HomeComponets/Navbar'
import Footer from '../components/HomeComponets/Footer'
import Course from '../components/CoureseComponents/Course'

function Courses() {
    
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Course/>
    </div>
    <Footer/>
    </>
  )
}

export default Courses
