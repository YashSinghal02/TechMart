import { useState,useEffect } from "react";
import "./Slider.css";
import nothing from "../../../assets/nothing-accordion.webp";
import motrola from "../../../assets/motrola-accordion.webp";
import heroimg from "../../../assets/heroimg-accordion.webp";
import cmf from "../../../assets/cmf-accordion.webp";

const images = [heroimg, nothing, cmf, motrola];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

    useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Cleanup on component unmount or index change
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel w-full overflow-hidden" >
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
        ))}
      </div>

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button onClick={prevSlide} className="btn btn-circle">❮</button>
        <button onClick={nextSlide} className="btn btn-circle">❯</button>
      </div>
    </div>
  );
}

export default Slider;
