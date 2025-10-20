import  { useRef } from "react";
import { FiHeart, FiEye } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { CounterCard } from "./CounterCard";
import "./CounterCard.css"



export default function CounterCards() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 300;
    
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div 
        ref={scrollContainerRef}
        style={{
          display: "flex",
          gap: "16px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          padding: "10px 0"
        }}
        className="cards-container"
      >
        {CounterCard.map((x, index) => (
          <div className="pc-card" key={index}>
            <div className="pc-img-wrap">
              <div className="pc-badge">-{x.off}</div>
              <img src={x.pictureLink} alt={x.name} className="pc-img" />
              <div className="pc-actions">
                <button className="pc-icon" aria-label="Add to wishlist">
                  <FiHeart />
                </button>
                <button className="pc-icon" aria-label="Quick view">
                  <FiEye />
                </button>
              </div>
              <div className="Order-now">
                <button className="buy">Add To Cart</button>
              </div>
            </div>

            <div className="pc-body">
              <h3 className="pc-title">{x.name}</h3>
              <div className="pc-price-row">
                <div className="pc-price">{x.price}</div>
                <div className="pc-cut">
                  <del>{x.cutprice}</del>
                </div>
              </div>
              <div className="pc-rating-row">
                <div className="pc-stars">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} />
                  ))}
                </div>
                <span className="pc-rating-count">({x.rating})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="btn-left-right-counter">
        <div className="btn1-arrow-left" onClick={() => handleScroll("left")}>
         
          <span style={{ fontSize: "20px" }}> <i className="fa-solid fa-arrow-left"></i></span>
        </div>
        <div className="btn1-arrow-left" onClick={() => handleScroll("right")}>
         
          <span style={{ fontSize: "20px" }}> <i className="fa-solid fa-arrow-right"></i></span>
        </div>
      </div>

    
    </div>
  );
}