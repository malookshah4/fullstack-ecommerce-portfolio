import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCart,
  removeItem,
  updateQuantity,
} from "../store/cartSlice";

import { FiX, FiTrash2, FiMinus, FiPlus} from "react-icons/fi";
import "./CartSidebar.css";

const CartSidebar = () => {
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state) => state.cart);
  

  const handleClose = () => {
    dispatch(toggleCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

   const handleQuantityUpdate = (id, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeItem(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };



  const subtotal = items.reduce(
  (total, item) => total + item.price.current * item.quantity,
  0
);

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? "open" : ""}`}
        onClick={handleClose}
      ></div>
      <aside className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <header className="cart-header">
          <h3>Your Cart</h3>
          <button
            onClick={handleClose}
            className="close-btn"
            aria-label="Close cart"
          >
            <FiX />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="cart-body">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.primaryImage}
                  alt={item.name}
                  className="item-image"
                />
                <div className="item-details">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">
                    ${(item.price.current * item.quantity).toFixed(2)}
                  </p>
                  <div className="item-actions">
                    <div className="quantity-control">
                    <button className="quantity-btn" onClick={() => handleQuantityUpdate(item.id, item.quantity - 1)}>
                      <FiMinus />
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => handleQuantityUpdate(item.id, item.quantity + 1)}>
                      <FiPlus />
                    </button>
                  </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="remove-btn"
                      aria-label="Remove item"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <footer className="cart-footer">
            <div className="subtotal">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </footer>
        )}
      </aside>
    </>
  );
};

export default CartSidebar;
