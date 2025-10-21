import React from 'react'
import AboutHero from './AboutHero/AboutHero'
import OurStory from './OurStory/OurStory'
import Vision from './Vision/Vision'
import Testimonial from './Testimonial/Testimonial'
import JoinTestimonial from './Testimonial/JoinTestimonial'
import CutomerOrder from './CusOrder/CutomerOrder'
import Delivers from './Delivers/Delivers'

function About() {
  return (
    <div>
      <AboutHero/>
      <OurStory/>
      <Vision/>
      <CutomerOrder/>
      <JoinTestimonial/>
      
      <Delivers/>
    </div>
  )
}

export default About
