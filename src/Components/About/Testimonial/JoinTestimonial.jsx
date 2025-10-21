import "./Testimonial.css"
import Testimonial from './Testimonial'

function JoinTestimonial() {
  return (
    <div>
  <div className="today">
        <span className="soild-block"></span>
        <span>Customer</span>
        <div className="flash-sale-txt " style={{margin:"20px 0"}}>
            <h2 style={{color:"black"}}>Testimonial</h2>
        </div>
      </div>

      <Testimonial/>
    </div>
  )
}

export default JoinTestimonial
