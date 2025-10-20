import googleplay from "../../assets/googleplay.png";
import apple from "../../assets/apple.png";
import Qr from "../../assets/Qr.png";
import './Footer.css'
import { Link } from "react-router";


function Footer() {
  return (
    <>


      <footer className="footer-container">
        <div className="footer-content">
          {/* Exclusive Section */}
          <div className="footer-section footer-exclusive">
            <h3 className="text-white">Tech <span style={{color:"#00a2e7"}}>Mart</span></h3>
            <p className="subscribe-text">Subscribe</p>
            <p className="discount-text">Get 10% off your first order</p>
            <div className="email-input-wrapper">
              <input type="email" placeholder="Enter your email" />
              <button className="email-submit-btn">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="footer-section footer-support">
            <h3>Support</h3>
            <p>Rajpur Road, Dehradun,</p>
            <p>techmart@gmail.com</p>
            <p>+123-456-9999</p>
          </div>

          {/* Account Section */}
          <div className="footer-section footer-links">
            <h3>Account</h3>
            <ul>
              <li><Link to="/form">My Account</Link></li>
              <li><Link to="/form">Login / Register</Link></li>
              <li><Link to="">Cart</Link></li>
              <li><Link to="">Wishlist</Link></li>
              <li><Link to="">Shop</Link></li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="footer-section footer-links">
            <h3>Quick Link</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="footer-section footer-download">
            <h3>Download App</h3>
            <p className="save-text">Save 5% with App New User Only</p>
            <div className="app-download-box">
              {/* <div className="qr-code">
                <img src={Qr} alt="" />
              </div> */}
              <div className="app-store-buttons">
                <a href="https://github.com/YashSinghal02" target="_blank">
                    <div><img src={googleplay} className="ios-width" alt="" /></div>
                  <div>
                    <div>GET IT ON</div>
                  <div className="store-name">Google Play</div>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/yashsinghal-fullstackdeveloper/" target="_blank">
                    <div><img src={apple} className="ios-width" alt="" /></div>
                  <div>
                    <div>Download on </div>
                  <div className="store-name">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073C0 18.062 4.388 23.027 10.125 23.927v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105 13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985a9.935 9.935 0 00-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div> */}
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; Copyright Yash 2025. All right reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
