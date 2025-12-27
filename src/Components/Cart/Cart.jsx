import React, { useContext, useState } from 'react';
import { ShopContext } from '../ShopContext/ShopContext';
import { FiTrash2 } from 'react-icons/fi';
import CartDetails from './CartDetails';
import './Cart.css';

function Cart() {
  const { cart, total, quantity, clearCart } = useContext(ShopContext);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setOrderConfirmed(true);
    clearCart(); // optionally clear the cart after checkout
    setTimeout(() => setOrderConfirmed(false), 3000); // hide after 3 seconds
  };

  return (
    <div className="cart_container">
      {/* Left Section */}
      <div className="cart_left">
        <div className="cart_header_top">
          <h1>Shopping Cart</h1>
          <h2>Items: ({quantity})</h2>
          <FiTrash2 onClick={clearCart} className="delete-cart" title="Clear Cart" />
        </div>

        <div className="cart_table_header">
          <span>Product Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>

        <div className="cart_detail">
          {cart.length > 0 ? (
            cart.map((item) => <CartDetails key={item.id} item={item} />)
          ) : (
            <p className="empty_cart_message">Your cart is empty</p>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="cart_right">
        <h2>Cart Summary</h2>

        <div className="summary_item">
          <span>Items:</span>
          <span>{quantity}</span>
        </div>

        <div className="cartsummary">
          <div className="summary_item">
            <span>Subtotal:</span>
            <span>${isNaN(total) ? 0 : total}</span>
          </div>

          <div className="summary_item">
            <span>Shipping Fees:</span>
            <span>Free</span>
          </div>

          <div className="summary_item">
            <span>Promo Code:</span>
            <span>No code</span>
          </div>

          <div className="summary_item total_cost">
            <span>Total Cost:</span>
            <span>${isNaN(total) ? 0 : total}</span>
          </div>

          <button className="checkout" onClick={handleCheckout}>
            CHECKOUT
          </button>

          {/* Confirmation Message */}
          {orderConfirmed && (
            <p className="order_confirmed">🎉 Your order is confirmed!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
