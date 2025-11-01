import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

import Categories from "./Categories/Categories";
import FlashSale from "./FlashSale/FlashSale";
import NewArrivalCombine from "./NewArrival/NewArrivalCombine";
import ProductCombine from "./ProductCarsouel/ProductCombine";
import SalesHeading from "./SalesCard1/SalesHeading";
import Slider from "./Slider/Slider";
import Speaker from "./Speaker/Speaker";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      
    }, 1200); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column"
      }}>
        <Triangle
          visible={true}
          height="100"
          width="220"
          color="#00A2E7"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <h2>loading...</h2>
      </div>
    );
  }

  return (
    <div>
      <Slider />
      <SalesHeading />
      <FlashSale />
      <Categories />
      <Speaker />
      <ProductCombine />
      <NewArrivalCombine />
    </div>
  );
}

export default Home;
