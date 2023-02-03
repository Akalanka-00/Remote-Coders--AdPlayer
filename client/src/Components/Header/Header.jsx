import React from 'react'
import ImageSlider from './ImageSlider'
import './Header.css'

import PIC1 from '../../Assets/Slides/pic1.jpg'

const Header = () => {

  const slides = [
    {url: {PIC1}, title: 'pic1'}
  ];
  
  return (
    <section className="cont">
      <div >
      <ImageSlider/>
      </div>
      
    </section>
  )
}

export default Header
