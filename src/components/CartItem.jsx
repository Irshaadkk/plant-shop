import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/CartSlice';

function CartItem({ item, dispatch }) {
  const quantity = item.quantity;
  const price = item.price;
  const total = price * quantity;

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <img 
          src="https://images.unsplash.com/photo-1556909114-f6e048d6d545?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
          alt={item.name} 
          className="cart-item-image" 
        />
        <div className="cart-item-desc">
          <span>{item.name}</span>
          <span>×{quantity}</span>
        </div>
      </div>

      <span className="cart-item-price">${price}</span>

      <div className="cart-item-controls">
        <button
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: quantity - 1 }))}
          disabled={quantity <= 1}
          className="qty-btn">
          -
        </button>
        <span className="qty-display">{quantity > 1 ? quantity - 1 : ''}</span>
        <button
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: quantity + 1 }))}
          className="qty-btn">
          +
        </button>
      </div>

      <span className="cart-item-subtotal">${total}</span>

      <button
        onClick={() => dispatch(removeFromCart({ id: item.id }))}
        className="remove-btn">
        Remove
      </button>
    </div>
  );
}

export default CartItem;