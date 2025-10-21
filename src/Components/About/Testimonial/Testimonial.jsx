import "./Testimonial.css"
import React, { useState, useEffect } from "react";
import per1 from "../../../assets/per1.png";
import per2 from "../../../assets/per2.png";
import per3 from "../../../assets/per3.png";
import per4 from "../../../assets/per4.png";
import per5 from "../../../assets/per5.png";
import per6 from "../../../assets/per6.png";
import per7 from "../../../assets/per7.png";
import per8 from "../../../assets/per8.png";
import per9 from "../../../assets/per9.png";


function Testimonial()  {
  const cards = [
    
    {
      id: 1,
      brand: "Amit Verma",
    //   logo: apple,
      image: per1,
      bg: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)",
      textColor: "#ffffff",
      tagBg: "rgba(255, 255, 255, 0.15)",
      text:"TechMart always delivers high-quality products with amazing service!",
    //   fname:"Rohan Mehta",
    },
    {
      id: 2,
      brand: "Riya Sharma",
    //   logo: Realme,
      image: per2,
      bg: "linear-gradient(135deg, #fff9e6 0%, #ffebb3 100%)",
      textColor: "#1a1a1a",
      tagBg: "rgba(255, 193, 7, 0.2)",
      logoBg: "#FFC107",
      text:"I love shopping at TechMart for all electronics needs!",
    //   fname:"Rohan Mehta",
    },
    {
      id: 3,
      brand: "Rahul Mehta",
    //   logo: mi,
      image: per6,
      bg: "linear-gradient(135deg, #ffe6e6 0%, #ffcccc 100%)",
      textColor: "#1a1a1a",
      tagBg: "rgba(255, 152, 0, 0.2)",
      logoBg: "#FF6600",
      text:"Fast delivery and excellent products—TechMart never disappoints me!",
    //   fname:"Rohan Mehta",
    },
    
    {
      id: 4,
      brand: "Vikram Rao",
    //   logo: apple,
      image: per8,
      bg: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)",
      textColor: "#ffffff",
      tagBg: "rgba(255, 255, 255, 0.15)",
      text:"Excellent customer support and top-notch electronics at TechMart!",
    //   fname:"Rohan Mehta",
    },
    {
      id: 5,
      brand: "Amit Bhatt",
    //   logo: Realme,
      image: per9,
      bg: "linear-gradient(135deg, #fff9e6 0%, #ffebb3 100%)",
      textColor: "#1a1a1a",
      tagBg: "rgba(255, 193, 7, 0.2)",
      logoBg: "#FFC107",
      text:"I love shopping at TechMart for all electronics needs!",
    //   fname:"Rohan Mehta",
    },
    {
      id: 6,
      brand: "Priya Singh",
    //   logo: mi,
      image: per7,
      bg: "linear-gradient(135deg, #ffe6e6 0%, #ffcccc 100%)",
      textColor: "#1a1a1a",
      tagBg: "rgba(255, 152, 0, 0.2)",
      logoBg: "#FF6600",
      text:"TechMart always delivers high-quality products with amazing service!",
    //   fname:"Rohan Mehta",
    },
    
  ];

  const [current, setCurrent] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <div className="carousel-container2">
      <div className="carousel-wrapper2">
        <div
          className="carousel-track2"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="carousel-page2">
              {cards
                .slice(pageIndex * cardsPerPage, (pageIndex + 1) * cardsPerPage)
                .map((card) => (
                  <div
                    key={card.id}
                    className="carousel-card2"
                    style={{
                      background: card.bg,
                      color: card.textColor,
                    }}
                  >
                    <div className="card-content2">
                      <div className="card-left2">
                        <span
                          className="brand-tag2"
                          style={{
                            background: card.tagBg,
                          }}
                        >
                          {card.brand}
                        </span>
                        <div className="brand-info2">
                          {/* <div
                            className="logo-circle2"
                            style={{
                              background:
                                card.logoBg || "rgba(255, 255, 255, 0.2)",
                            }}
                          >
                        
                          </div> */}
                        </div>
                        <h5>{card.fname}</h5>
                        <p className="offer-text2">{card.text}</p>
                      </div>
                      <div className="card-right2">
                        <img
                          src={card.image}
                          alt={card.brand}
                          className="product-image2"
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="dots-container">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`dot ${index === current ? "dot-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial
