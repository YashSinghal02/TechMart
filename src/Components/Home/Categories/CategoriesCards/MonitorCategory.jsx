import { MonitorCategory12 } from "./MonitorCategory12";
import "./CategoriesCrdMain.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../CartSlice/CartSlice";

function MonitorCategory() {
    const dispatch=useDispatch()
  return (
    <div>
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {MonitorCategory12.map((x,id) => {
            return (
              <div className="deal-card1" key={id}>
                <div className="deal-card-img">
                  <div className="sale-badge">
                    <p>{x.off} OFF</p>
                  </div>
                  <div className="heart-badge">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <img src={x.pictureLink} alt={x.name} />
                </div>

                <div className="deal-card-txt">
                  <h3>{x.name}</h3>
                  <h5>
                    ₹{x.price}{" "}
                    <span className="cut-price-sale">
                      <del>{x.cutprice}</del>
                    </span>
                  </h5>
                  <div className="save-line">
                    <h5>Save - {x.save}</h5>
                  </div>
                </div>

                <div className="Order-now">
                  <button 
                   onClick={()=>dispatch(addToCart({
                   productid:x.id,
                  name:x.name,
                  price:x.price,
                  img:x.pictureLink,
                }))}className="buy">Add To Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MonitorCategory;
