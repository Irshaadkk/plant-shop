import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from './redux/CartSlice';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import CartSidebar from './components/CartSidebar';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ id: product.id, name: product.name, price: product.price }));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="app">
      <div className="content">
        <Navbar />

        <header>
          <h1>🌿 Paradise Nursery</h1>
          <a href="/about" className="get-started">Get Started</a>
        </header>

        {showProducts ? (
          <div className="product-page">
            <Navbar />
            <section className="products">
              <h2 style={{ textAlign: 'center', marginBottom: 20, color: '#2c3e50' }}>
                Our Plants
              </h2>

              {Object.entries({
                indoor: [
                  { id: 1, name: 'Monstera Deliciosa', price: 45 },
                  { id: 2, name: 'Snake Plant', price: 30 },
                  { id: 3, name: 'Pothos Plant', price: 25 },
                  { id: 4, name: 'Fiddle Leaf Fig', price: 80 },
                  { id: 5, name: 'Spider Plant', price: 20 },
                  { id: 6, name: 'Rubber Plant', price: 55 },
                ],
                outdoor: [
                  { id: 7, name: 'Areca Palm', price: 65 },
                  { id: 8, name: 'Peace Lily', price: 35 },
                  { id: 9, name: 'Boston Fern', price: 30 },
                  { id: 10, name: 'Jade Plant', price: 25 },
                  { id: 11, name: 'Lavender', price: 15 },
                  { id: 12, name: 'Olive Tree', price: 70 },
                ],
              }).map(([category, plants]) => (
                <div key={category} className="category-section">
                  <h3 style={{
                    borderBottom: '1px solid #e0e0e0',
                    paddingBottom: '10px',
                    color: '#2c3e50',
                    marginBottom: '15px',
                    fontSize: '1.2rem'
                  }}>
                    {category.charAt(0).toUpperCase() + category.slice()} Plants
                  </h3>

                  <div className="product-grid">
                    {plants.map((product) => {
                      const quantity = cartItems.find(c => c.id === product.id)?.quantity || 0;
                      const isAdded = quantity > 0;
                      
                      return (
                        <div key={product.id} className="product-card">
                          <div className="product-image">🌿</div>
                          <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="category">{category}</p>
                            <p className="price">${product.price}</p>
                            <div className="add-controls">
                              <button
                                className="add-btn"
                                onClick={() => handleAddToCart(product)}
                                disabled={isAdded}
                              >
                                {isAdded ? 'Added' : 'Add to Cart'}
                              </button>
                              <span>×{quantity}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )))}
            </section>
          </div>
        ) : (
          <p style={{ margin: '40px 0', textAlign: 'center' }}>
            Welcome to Paradise Nursery! We're passionate about bringing nature home.
            Since 2010, we've been supplying healthy, thriving plants to families across the city.
            <br />
            <br />
            <a href="/about" className="get-started">Get Started</a> — Browse our plant collection
          </p>
        )}

        <main className="main-content">
          <AboutUs />

          <CartSidebar dispatch={dispatch} />
        </main>
      </div>
    </div>
  );
}

export default App;