import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import "./InfoSection.css"; // import the CSS file

function InfoSection() {
  return (
    <div className="info-container">
      <div className="info-row">
        {/* Address */}
        <div className="info-col">
          <div className="info-box">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <h4>Address</h4>
            <p>123 Tech Street<br />Bangalore</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="info-col">
          <div className="info-box">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>
            <h4>Contact Info</h4>
            <p>+1 63-6589-9654<br />techmart.com</p>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="info-col">
          <div className="info-box">
            <div className="info-icon">
              <FaClock />
            </div>
            <h4>Opening Hours</h4>
            <p className="opening-hours">
              Mon to Sat: 6AM - 8PM<br />
              <span>Sunday Closed</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
