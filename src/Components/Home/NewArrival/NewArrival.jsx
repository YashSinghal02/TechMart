import "./NewArrival.css";
import ps5slim from "../../../assets/ps5slim.png";
import air from "../../../assets/air.png";
import alexa from "../../../assets/alexa.png";
import sony2 from "../../../assets/sony2.png";

function NewArrival() {
  return (
    <div className="layout-container">

      {/* Left Large Card */}
      <div className="card-newarrival large ps5">
        <div className="content-newarrival">
          <h2>PlayStation 5</h2>
          <p>Black and White version of the PS5 coming out on sale.</p>
          <button>Shop Now</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-column-newarrival">
        <div className="card-newarrival medium iphone">
          <div className="content-newarrival">
            <h2>iPhone Air</h2>
            <p>Experience the future of speed, style, and innovation.</p>
            <button>Shop Now</button>
          </div>
        </div>

        <div className="bottom-row">
          <div className="card-newarrival small speakers">
            <div className="content-newarrival">
              <h2>Speakers</h2>
              <p>Amazon wireless speakers</p>
              <button>Shop Now</button>
            </div>
          </div>

          <div className="card-newarrival small camera">
            <div className="content-newarrival">
              <h2>Camera</h2>
              <p>Freeze the Moment.</p>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default NewArrival;
