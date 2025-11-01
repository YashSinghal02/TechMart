import React from 'react'
import AboutHero from './AboutHero/AboutHero'
import OurStory from './OurStory/OurStory'
import Vision from './Vision/Vision'
import Testimonial from './Testimonial/Testimonial'
import JoinTestimonial from './Testimonial/JoinTestimonial'
import CutomerOrder from './CusOrder/CutomerOrder'
import Delivers from './Delivers/Delivers'
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      
    }, 1000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column"
      }}>
        <Triangle
          visible={true}
          height="100"
          width="220"
          color="#00A2E7"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <h2  className='text-black'>loading...</h2>
      </div>
    );
  }
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
