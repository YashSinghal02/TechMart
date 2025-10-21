import "./CutomerOrder.css"
import { MdOutlineStorefront } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineAutoGraph } from "react-icons/md";
import { useState, useEffect } from "react";



function CutomerOrder() {
  // Counter state variables
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  // Counter animation functions
  useEffect(() => {
    // Counter 1: 10.5k (10500)
    let c1 = 0;
    let interval1 = setInterval(() => {
      if (c1 < 10500) {
        c1 += 50; // Increment by 50 for faster animation
        setCounter1(c1);
      } else {
        setCounter1(10500);
        clearInterval(interval1);
      }
    }, 4);

    // Counter 2: 33k (33000)
    let c2 = 0;
    let interval2 = setInterval(() => {
      if (c2 < 33000) {
        c2 += 100; // Increment by 100 for faster animation
        setCounter2(c2);
      } else {
        setCounter2(20000);
        clearInterval(interval2);
      }
    }, 1);

    // Counter 3: 45.5k (45500)
    let c3 = 0;
    let interval3 = setInterval(() => {
      if (c3 < 45500) {
        c3 += 200; // Increment by 200 for faster animation
        setCounter3(c3);
      } else {
        setCounter3(45500);
        clearInterval(interval3);
      }
    }, 3);

    // Counter 4: 25k (25000)
    let c4 = 0;
    let interval4 = setInterval(() => {
      if (c4 < 25000) {
        c4 += 80; // Increment by 80 for faster animation
        setCounter4(c4);
      } else {
        setCounter4(25000);
        clearInterval(interval4);
      }
    }, 3);

    // Cleanup function
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  // Format numbers with commas and k notation
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
<div className="w-full py-8">
      <div
        className="
          text-center
          cutomer-main
        "
      >
        <div 
          className={`cutomer-order1 flex flex-col items-center justify-center `}
       
        >
         <div className="cutomer-icon-main">
             <MdOutlineStorefront  className="cutomer-icons " />
         </div>
          <div className="cutomer-txt1">
            <h3 className="count-num1">{formatNumber(counter1)}</h3>
          <h4>Sallers active our site</h4>
          </div>
        </div>

        <div 
          className={`cutomer-order1 flex flex-col items-center justify-center `}
          
        >
            <div className="cutomer-icon-main">
          <MdOutlineAutoGraph  className="cutomer-icons " />
          </div>
           <div className="cutomer-txt1">
            <h3 className="count-num2">{formatNumber(counter2)}</h3>
          <h4>Monthly Produduct Sale</h4>
          </div>
        </div>

        <div 
          className={`cutomer-order1 flex flex-col items-center justify-center `}
         
        >
            <div className="cutomer-icon-main">
          <BsBag  className="cutomer-icons " />
          </div>
           <div className="cutomer-txt1">
            <h3 className="count-num3">{formatNumber(counter3)}</h3>
          <h4>Customer active in our site</h4>
          </div>
        </div>

<div 
          className={`cutomer-order1 flex flex-col items-center justify-center `}
         
        >
            <div className="cutomer-icon-main">
          <BsGraphUpArrow   className="cutomer-icons " />
          </div>
           <div className="cutomer-txt1">
            <h3 className="count-num4">{formatNumber(counter4)}</h3>
          <h4>Anual gross sale in our site</h4>
          </div>
        </div>
        
      </div>
     
    </div>
  )
}

export default CutomerOrder
