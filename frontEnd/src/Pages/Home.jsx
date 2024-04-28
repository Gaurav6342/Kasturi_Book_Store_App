import React from 'react'
import Navbar from '../components/HomeComponets/Navbar'
import Banner from '../components/HomeComponets/Banner'
import Books from '../components/HomeComponets/Books'
import Footer from '../components/HomeComponets/Footer'

function Home() {
  return (
    <>
    
    <Navbar/>    {/* import Navbar componet */}
    <Banner/>    {/* import Banner component*/}
    <Books/>
    <Footer/>    {/* import Footer component*/} 

    </>
  )
}

export default Home
