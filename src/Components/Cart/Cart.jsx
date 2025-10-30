import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { clearCart,deleteQuantity,removeCart,addToCart } from "../CartSlice/CartSlice";


function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get items from Redux
  const items = useSelector((state) => state.cart.items);
  // console.log("Cart Items:", items);


  // Calculate total price
  const totalPrice = items.reduce((acc, item) => {
    return acc + Number(item.price) ;
  }, 0);

  // Price Qunatity
const perPrice = items.reduce((acc, curr) => {
  return acc + (Number(curr.price) * curr.quantity);  // ✅ Multiply by quantity
}, 0);

  // Final Pay
   const handleCheckout = () => {
    dispatch(clearCart());
    alert("Order placed successfully!");
    navigate("/");
  };

  // Navigate home
  const goHome = () => navigate("/");

  return (
    <div className="cart-container">
      <h1 className="cart-title" onClick={goHome}>
        Home <span>/ Cart</span>
      </h1>

      {/* Header */}
      <div className="cart-header">
        <span>Product</span>
        <span>Price</span>
        <span>Remove</span>
        <span>Subtotal</span>
      </div>

      {/* Cart Items */}
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.productid} className="cart-row">
            <div className="product">
              <img src={item.img} alt=""  width={60} height={60}/>
              <span>{item.name}</span>
              <span
              onClick={()=>dispatch(removeCart({
                      productid: item.productid,
                      name:item.name,
                      price:item.price,
                      }))}
              className="delcart1"><i className="fa-solid fa-xmark delcart"></i></span>
            </div>
            <span>₹{item.price}</span>
            <span className="removecart">
              <div className="plus"><i 
              onClick={()=>dispatch(addToCart({
                      productid: item.productid,
                      name:item.name,
                      price:item.price,
                      }))}
              className="fa-solid fa-plus"></i>
              </div>
              <div className="quantitynumber">{item.quantity}</div>
              <div className="plus"><i 
               onClick={()=>dispatch(deleteQuantity({
                      productid: item.productid,
                      name:item.name,
                      price:item.price,
                      }))}
              className="fa-solid fa-minus"></i>
              </div>
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))
      ) : (
        <p className="empty-msg">Your cart is empty.</p>
      )}

      {/* Buttons */}
      <div className="cart-buttons">
        <button className="return-btn" onClick={goHome}>
          Return To Shop
        </button>
        <button className="update-btn" onClick={goHome}>Update Cart</button>
      </div>

      {/* Coupon + Totals */}
      <div className="cart-bottom">
        <div className="coupon-box">
          <input type="text" placeholder="Coupon Code" />
          <button className="apply-btn">Apply Coupon</button>
        </div>

        <div className="cart-total">
          <h2>Cart Total</h2>
          <p>
            <span>Subtotal:</span> <span>₹{perPrice}</span>
          </p>
          <p>
            <span>Shipping:</span> <span>Free</span>
          </p>
          <p className="total">
            <span>Total:</span> <span>₹{perPrice}</span>
          </p>
          <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
