import Categories from "./Categories/Categories"
import FlashSale from "./FlashSale/FlashSale"
import NewArrival from "./NewArrival/NewArrival"
import NewArrivalCombine from "./NewArrival/NewArrivalCombine"
import ProductCarsouel from "./ProductCarsouel/ProductCarsouel"
import ProductCombine from "./ProductCarsouel/ProductCombine"

import SalesHeading from "./SalesCard1/SalesHeading"
import Slider from "./Slider/Slider"
import Speaker from "./Speaker/Speaker"


function Home() {
  return (
    <div>
        <Slider/>
        <SalesHeading/>
       
        <FlashSale/>
        <Categories/>
        <Speaker/>
        {/* <ProductCarsouel/> */}
        <ProductCombine/>
        {/* <NewArrival/> */}
        <NewArrivalCombine/>
    
    </div>
  )
}

export default Home
