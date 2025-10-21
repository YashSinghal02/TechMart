import { FaTruck, FaHeadset, FaShieldAlt } from "react-icons/fa";
import "./Delivers.css";

function Delivers() {
  return (
    <div className="features-container">
      <div className="feature-card">
        <div className="feature-icon">
          <FaTruck />
        </div>
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders above ₹200</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">
          <FaHeadset />
        </div>
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">
          <FaShieldAlt />
        </div>
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </div>
    </div>
  );
}

export default Delivers;
