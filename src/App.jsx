import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from './redux/CartSlice';
import { useEffect } from 'react';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    dispatch({ type: 'cart/initialized' });
  }, [dispatch]);

  return (
    <div className="app">
      <header>
        <h1>🌿 Paradise Nursery</h1>
        <button onClick={() => window.location.href='/about'}>About Us</button>
      </header>

      <main>
        <section className="product-list">
          <h2>Our Plants</h2>
          <ProductList dispatch={dispatch} />
        </section>

        <section className="cart-panel">
          <h2>Shopping Cart</h2>
          <div>
            {cart.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              cart.map((item) => (
                <div key={item.id}>
                  <span>{item.name}</span>
                  <span>×{item.quantity}</span>
                  <span>${item.price}</span>
                  <button
                    onClick={() =>
                      dispatch(removeFromCart({ id: item.id }))
                    }
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
          <div>
            <span>Total: {total} items</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;