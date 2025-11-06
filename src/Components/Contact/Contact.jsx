import React from 'react'
import ContactHero from './ContactHero/ContactHero'
import InfoSection from './InfoCard/InfoSection'
import ContactForm from './ContactForm/ContactForm'
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      
    }, 700); // 2 seconds delay
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
        <h2 className='text-black'>loading...</h2>
      </div>
    );
  }
  return (
    <div>
      <ContactHero/>
      <InfoSection/>
      <ContactForm/>
    </div>
  )
}

export default Contact
