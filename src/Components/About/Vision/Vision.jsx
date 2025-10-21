import "./Vision.css"
import welcome from "../../../assets/welcome.jpg";

function Vision() {
  return (
    <div>

        <div className="vision-main">
     
     <div className="vision-txt-left">
        <h2>Welcome to Tech <span style={{color:"#00A2E7"}}>Mart</span> </h2>
        <h3>Power Up Your World with TechMart.</h3>
        <div className="vision-img">
            <img src={welcome} alt="" />
        </div>
     </div>

      <div className="vision-txt-right">
        <h2>Our Vision</h2>
        <p>At TechMart, we envision becoming India’s most trusted destination for innovative technology.
We strive to make premium gadgets accessible, reliable, and affordable for everyone.
Our goal is to redefine the online tech shopping experience with quality and transparency.
We believe technology should inspire, connect, and empower everyday life.
Through innovation and trust, we aim to shape the future of smart living.</p>

<div className="why-choose">
<h3>Why Choose Us</h3>
<ul className="why-ul">
    <li className="why-li">Wide range of genuine, high-quality tech products</li>
    <li className="why-li">Competitive pricing and regular deals</li>
    <li className="why-li">Fast, reliable, and secure delivery</li>
    <li className="why-li">Dedicated customer support team</li>
    <li className="why-li">Trusted by thousands of happy customers</li>
</ul>
</div>

      </div>

      

        </div>
      
    </div>
  )
}

export default Vision
