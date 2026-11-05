import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from './redux/CartSlice';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartMap = useSelector((state) => {
    const map = {};
    state.forEach(item => { map[item.id] = item.quantity; });
    return map;
  });

  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div className="app">
      <header>
        <h1>🌿 Paradise Nursery</h1>
        <nav>
          <ul>
            <li onClick={handleGetStarted}>Get Started</li>
          </ul>
        </nav>
      </header>

      {showProducts ? (
        <section className="product-page">
          <h2>Our Plants</h2>
          <ProductList dispatch={dispatch} cartMap={cartMap} />
          <CartSidebar />
        </section>
      ) : (
        <main>
          <p>
            Welcome to Paradise Nursery! We're passionate about bringing nature home.
            Since 2010, we've been supplying healthy, thriving plants to families across
            the city. Whether you're looking for indoor greenery or outdoor landscaping,
            we have the perfect plant for every space.
          </p>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={handleGetStarted} style={{ 
              padding: '10px 20px', 
              backgroundColor: '#e74c3c', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer' 
            }}>
              Get Started
            </button>
          </div>
        </main>
      )}

      < AboutUs />
    </div>
  );
}

export default App;