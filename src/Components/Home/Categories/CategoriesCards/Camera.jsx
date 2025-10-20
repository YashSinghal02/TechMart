import { CameraCategor } from "./CameraCategory12";
import "./CategoriesCrdMain.css";

function Camera() {
  return (
    <div>
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {CameraCategor.map((x, index) => {
            return (
              <div className="deal-card1" key={index}>
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
                    {x.price}{" "}
                    <span className="cut-price-sale">
                      <del>{x.cutprice}</del>
                    </span>
                  </h5>
                  <div className="save-line">
                    <h5>Save - {x.save}</h5>
                  </div>
                </div>

                <div className="Order-now">
                  <button className="buy">Add To Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Camera;
