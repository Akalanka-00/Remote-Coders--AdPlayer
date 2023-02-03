import React from 'react'
import HeroSlider, {Slide, Slider} from 'hero-slider'
import PIC1 from '../../Assets/Slides/pic1.jpg'


const PIC12 = "https://i.imgur.com/Gu5Cznz.jpg";
const ImageSlider = () => {
  
     return (
    <HeroSlider
    slidingAnimation= "left_to_right"
    orientation = "horizontal"
    initialSlide = {1}
    onBeforeChange = {(previousSlide, nextSlide)=> {
      console.log("On Before Change", previousSlide);
      
    }}
    onChange={nextSlide=> console.log("onChange", nextSlide)}
    onAfterChange={nextSlide=> console.log("onAfterChange", nextSlide)}
    settings={{
      slideDuration:250,
      slidingDelay: 100,
      shouldAutoPlay: true,
      shouldDisplayButtons: true,
      autoplayDuration: 5000,
      height: "100vh",
      width: "50vh"
    }}
    
    >
      <Slide
      background={{
        backgroundImage: PIC1,
        backgroundAttachment: "fixed",

      }}
      />

<Slide
      background={{
        backgroundImage: PIC1,
        backgroundAttachment: "fixed",
        
      }}
      />

<Slide
      background={{
        backgroundImage: PIC1,
        backgroundAttachment: "fixed",
        
      }}
      />
    </HeroSlider>
  )
};

export default ImageSlider
