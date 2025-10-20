import CounterCards from './CounterCards/CounterCards'
import './FlashSale.css'
import SaleCounter from './SaleCounter'

function FlashSale() {
  return (
    <div>
      <div className="today">
        <span className="soild-block"></span>
        <span>Today</span>
      </div>

      <div className="flash-sale">
        <div className="flash-sale-txt">
            <h2>Flash Sale</h2>
        </div>
        <div className="flash-sale-counter">
       
   <SaleCounter/>

        </div>
        {/* <div className="btn-left-right-counter">
          <i class="fa-solid fa-arrow-left"></i>
          <i class="fa-solid fa-arrow-right"></i>
        </div> */}
      </div>
      <CounterCards/>


    </div>
  )
}

export default FlashSale
