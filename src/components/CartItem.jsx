import React from 'react';

function CartItem({ item, dispatch }) {
  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <span>×{item.quantity}</span>
      <span>${item.price * item.quantity}</span>
      <button
        onClick={() => dispatch({ type: 'cart/removeItem', payload: { id: item.id } })}
        className="remove-btn"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;