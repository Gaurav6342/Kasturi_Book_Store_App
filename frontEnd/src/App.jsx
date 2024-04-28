import React from 'react'

import Home from './Pages/Home'
import {  Route, Routes } from "react-router-dom"
import Courses from './Pages/Courses'
import Signup from './components/HomeComponets/Signup'

function App() {
  return (
    <>
       <div className='dark:bg-slate-900 dark:text-white '>
    <Routes>
         <Route path="/" element={<Home/>}/>
          <Route path="/course" element={<Courses/>}/>
          <Route path="/signup" element={<Signup/>}/>
         
    </Routes>
    </div>
    
    </>
  )
}

export default App