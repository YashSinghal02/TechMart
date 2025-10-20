import NewArrival from "./NewArrival"
import "./NewArrival.css"
function NewArrivalCombine() {
  return (
    <div>
        <div className="today">
        <span className="soild-block"></span>
        <span>Featured</span>
        <div className="flash-sale-txt " style={{margin:"20px 0"}}>
            <h2 style={{color:"black"}}>New Arrival</h2>
        </div>
      </div>
      <NewArrival/>
      
    </div>
  )
}

export default NewArrivalCombine
