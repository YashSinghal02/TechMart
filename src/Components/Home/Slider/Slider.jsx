import "./Slider.css";
import nothing from "../../../assets/nothing-accordion.webp";
import motrola from "../../../assets/motrola-accordion.webp";
import heroimg from "../../../assets/heroimg-accordion.webp";
import cmf from "../../../assets/cmf-accordion.webp";

function Slider() {
  return (
    <div className="carousel w-full" style={{marginTop:"75px"}}>
      <div id="slide1" className="carousel-item relative w-full">
        <img src={heroimg} alt="Hero" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={nothing} alt="Nothing" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={cmf} alt="CMF" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img src={motrola} alt="Motorola" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
}

export default Slider;
