import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const plantsByCategory = {
  indoor: [
    { id: 1, name: 'Monstera Deliciosa', price: 45, image: '🌿', category: 'indoor' },
    { id: 2, name: 'Snake Plant', price: 30, image: '🪴', category: 'indoor' },
    { id: 3, name: 'Pothos Plant', price: 25, image: '🍃', category: 'indoor' },
    { id: 4, name: 'Fiddle Leaf Fig', price: 80, image: '🎻', category: 'indoor' },
    { id: 5, name: 'Spider Plant', price: 20, image: '🕷️', category: 'indoor' },
    { id: 6, name: 'Rubber Plant', price: 55, image: '🌳', category: 'indoor' },
  ],
  outdoor: [
    { id: 7, name: 'Areca Palm', price: 65, image: '🌴', category: 'outdoor' },
    { id: 8, name: 'Peace Lily', price: 35, image: '🌸', category: 'outdoor' },
    { id: 9, name: 'Boston Fern', price: 30, image: '🌿', category: 'outdoor' },
    { id: 10, name: 'Jade Plant', price: 25, image: '💎', category: 'outdoor' },
    { id: 11, name: 'Lavender', price: 15, image: '💜', category: 'outdoor' },
    { id: 12, name: 'Olive Tree', price: 70, image: '🌳', category: 'outdoor' },
  ],
};

function ProductList({ dispatch }) {
  const cart = useSelector((state) => state.cart.items);
  const cartMap = useSelector((state) => {
    const map = {};
    state.forEach(item => { map[item.id] = item.quantity; });
    return map;
  });

  return (
    <div className="product-page">
      <Navbar />

      <section className="products">
        <h2 style={{ textAlign: 'center', marginBottom: 20, color: '#2c3e50' }}>
          Our Plants
        </h2>

        {Object.entries(plantsByCategory).map(([category, plants]) => (
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
                const quantity = cartMap[product.id] || 0;
                const isAdded = quantity > 0;
                
                return (
                  <div key={product.id} className="product-card">
                    <div className="product-image">{product.image}</div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p className="category">{product.category}</p>
                      <p className="price">${product.price}</p>
                      <div className="add-controls">
                        <button
                          className="add-btn"
                          onClick={() => dispatch(addToCart({ id: product.id, name: product.name, price: product.price }))}
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
        ))}
      </section>
    </div>
  );
}

export default ProductList;