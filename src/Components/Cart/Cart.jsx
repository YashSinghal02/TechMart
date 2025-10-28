import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { clearCart } from "../CartSlice/CartSlice";
// import { removeCart } from "../counterSlice/cartSlice";


function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get items from Redux
  const items = useSelector((state) => state.cart.items);
  console.log("Cart Items:", items);

  // Calculate total price
  const totalPrice = items.reduce((acc, item) => {
    return acc + Number(item.price) ;
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
            </div>
            <span>₹{item.price}</span>
            <span className="removecart">
              <div className="plus"><i class="fa-solid fa-plus"></i></div>
              <div className="quantitynumber">1</div>
              <div className="plus"><i class="fa-solid fa-minus"></i></div>
            </span>
            <span>₹{Number(item.price)}</span>
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
            <span>Subtotal:</span> <span>₹{totalPrice}</span>
          </p>
          <p>
            <span>Shipping:</span> <span>Free</span>
          </p>
          <p className="total">
            <span>Total:</span> <span>₹{totalPrice}</span>
          </p>
          <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
