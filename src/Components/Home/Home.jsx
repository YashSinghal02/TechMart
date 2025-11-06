

import Categories from "./Categories/Categories";
import FlashSale from "./FlashSale/FlashSale";
import NewArrivalCombine from "./NewArrival/NewArrivalCombine";
import ProductCombine from "./ProductCarsouel/ProductCombine";
import SalesHeading from "./SalesCard1/SalesHeading";
import Slider from "./Slider/Slider";
import Speaker from "./Speaker/Speaker";

function Home() {
 

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
