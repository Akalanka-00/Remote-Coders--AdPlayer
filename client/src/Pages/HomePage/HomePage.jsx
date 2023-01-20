import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Header from '../../Components/Header/Header'
import About from '../../Components/About Us/AboutUs'
import Developer from '../../Components/Game Developer/GameDeveloper'
import Customer from '../../Components/Customer/Customer'
import Experience from '../../Components/Experience/Experience'
import Contact from '../../Components/Contact/Contact'

const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <About/>
      <Developer/>
      <Customer/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default HomePage
