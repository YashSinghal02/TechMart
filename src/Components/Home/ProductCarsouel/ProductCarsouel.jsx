import React, { useState, useEffect } from "react";
import "./ProductCarsouel.css";
import mi11 from "../../../assets/mi17.png";
import narzo from "../../../assets/gt7.png";
import mi from "../../../assets/mi-icon.png";
import apple from "../../../assets/apple.png";
import Realme from "../../../assets/Realme-icon.png";
import one from "../../../assets/one-icon.png";
import sam from "../../../assets/sam-icon.png";
import vivo from "../../../assets/vivo.png";
import x200 from "../../../assets/x200.png";
import one13s from "../../../assets/13ss.png";
import sam25 from "../../../assets/sam25.png";
import i16 from "../../../assets/i16.png";

const BrandCarousel = () => {
  const cards = [
    
    {
      id: 1,
      brand: "IPHONE",
      logo: apple,
      image: i16,
      bg: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)",
      textColor: "#ffffff",
      tagBg: "rgba(255, 255, 255, 0.15)",
    },
    {
      id: 2,
      brand: "REALME",
      logo: Realme,
      image: narzo,
      bg: "linear-gradient(135deg, #fff9e6 0%, #ffebb3 100%)",
      textColor: "#1a1a1a",
      tagBg: "rgba(255, 193, 7, 0.2)",
      logoBg: "#FFC107",
    },
    {
      id: 3,
      brand: "XIAOMI",
      logo: mi,
      image: mi11,
      bg: "linear-gradient(135deg, #ffe6e6 0%, #ffcccc 100%)",
      textColor: "#1a1a1a",
      tagBg: "rgba(255, 152, 0, 0.2)",
      logoBg: "#FF6600",
    },
    {
      id: 4,
      brand: "SAMSUNG",
      logo: sam,
      image: "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/313337_0_fabi1f.png",
      bg: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
      textColor: "#1a1a1a",
      tagBg: "rgba(33, 150, 243, 0.2)",
      logoBg: "rgb(255 255 255)",
    },
    {
      id: 5,
      brand: "ONEPLUS",
      logo: one,
      image: one13s,
      bg: "linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)",
      textColor: "#1a1a1a",
      tagBg: "rgba(244, 67, 54, 0.2)",
      logoBg: "rgb(255 234 232)",
    },
    {
      id: 6,
      brand: "VIVO",
      logo: vivo,
      image: x200,
      bg: "linear-gradient(135deg,  rgb(224 235 255) 0%, rgb(186 231 255)  100%)",
      textColor: "#1a1a1a",
      tagBg: "white",
      logoBg: "rgb(226 243 255)",
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
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="carousel-page">
              {cards
                .slice(pageIndex * cardsPerPage, (pageIndex + 1) * cardsPerPage)
                .map((card) => (
                  <div
                    key={card.id}
                    className="carousel-card"
                    style={{
                      background: card.bg,
                      color: card.textColor,
                    }}
                  >
                    <div className="card-content">
                      <div className="card-left">
                        <span
                          className="brand-tag"
                          style={{
                            background: card.tagBg,
                          }}
                        >
                          {card.brand}
                        </span>
                        <div className="brand-info">
                          <div
                            className="logo-circle"
                            style={{
                              background:
                                card.logoBg || "rgba(255, 255, 255, 0.2)",
                            }}
                          >
                            <img
                              src={card.logo}
                              alt={card.brand}
                              className="logo-icon"
                            />
                          </div>
                        </div>
                        <p className="offer-text">UP to 80% OFF</p>
                      </div>
                      <div className="card-right">
                        <img
                          src={card.image}
                          alt={card.brand}
                          className="product-image"
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

export default BrandCarousel;