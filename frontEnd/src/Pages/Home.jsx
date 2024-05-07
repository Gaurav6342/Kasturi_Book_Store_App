import React from 'react'
import Navbar from '../components/HomeComponets/Navbar'
import Banner from '../components/HomeComponets/Banner'
import HomeBooks from "../components/HomeComponets/HomeBooks"
import Footer from '../components/HomeComponets/Footer'

function Home() {
  return (
    <>
    
    <Navbar/>    {/* import Navbar componet */}
    <Banner/>    {/* import Banner component*/}
    <HomeBooks/>
    <Footer/>    {/* import Footer component*/} 

    </>
  )
}

export default Home
