import React from 'react'
import Navbar from '../components/HomeComponets/Navbar'
import Course from '../components/CoureseComponents/Course'
import Footer from '../components/HomeComponets/Footer'

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
