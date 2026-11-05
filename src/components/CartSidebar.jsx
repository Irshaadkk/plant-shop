import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function CartSidebar({ dispatch }) {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const cartTotal = useSelector((state) => {
    let total = 0;
    state.items.forEach(item => {
      const product = {
        1: 45, 2: 30, 3: 25, 4: 80, 5: 20, 6: 55,
        7: 65, 8: 35, 9: 30, 10: 25, 11: 15, 12: 70
      }[item.id] || 0;
      total += product * item.quantity;
    });
    return total;
  });

  return (
    <div className="cart-sidebar">
      <h3>Shopping Cart</h3>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} dispatch={dispatch} />
          ))}
        </div>
      )}

      <div className="cart-summary">
        <div>Total: {totalQuantity} items</div>
        <div>Subtotal: ${cartTotal}</div>
        <button className="checkout-btn" style={{ width: '100%', marginTop: '10px' }}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartSidebar;