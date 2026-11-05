import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import CartSidebar from './CartSidebar';

const plantsByCategory = {
  indoor: [
    { id: 1, name: 'Monstera Deliciosa', price: 45, image: 'https://images.unsplash.com/photo-1556909114-f6e048d6d545?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Snake Plant', price: 30, image: 'https://images.unsplash.com/photo-1556673457-d10d8ee93c0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Pothos Plant', price: 25, image: 'https://images.unsplash.com/photo-1594923262040-3170c3b49f15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Fiddle Leaf Fig', price: 80, image: 'https://images.unsplash.com/photo-1600754123232-f2a3969973a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 5, name: 'Spider Plant', price: 20, image: 'https://images.unsplash.com/photo-1606668791467-91bb4e6155b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 6, name: 'Rubber Plant', price: 55, image: 'https://images.unsplash.com/photo-1566802610516-18cddb10c223?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  ],
  outdoor: [
    { id: 7, name: 'Areca Palm', price: 65, image: 'https://images.unsplash.com/photo-1556909349-efd5c13056be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 8, name: 'Peace Lily', price: 35, image: 'https://images.unsplash.com/photo-1598762842108-9ae21748cm21?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 9, name: 'Boston Fern', price: 30, image: 'https://images.unsplash.com/photo-1600668927303-5297cbb3cf01?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 10, name: 'Jade Plant', price: 25, image: 'https://images.unsplash.com/photo-1596414357080-9d7a5df7801f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 11, name: 'Lavender', price: 15, image: 'https://images.unsplash.com/photo-1600036755300-a68f8502a550?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 12, name: 'Olive Tree', price: 70, image: 'https://images.unsplash.com/photo-1598099181007-f1b710b4e76b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  ],
  flowering: [
    { id: 13, name: 'Rose Bush', price: 35, image: 'https://images.unsplash.com/photo-1595780376960-6f40d5e39e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 14, name: 'Hydrangea', price: 45, image: 'https://images.unsplash.com/photo-1600723274575-223e7d3ee1e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 15, name: 'Peony', price: 50, image: 'https://images.unsplash.com/photo-1591010940691-211a380bb7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 16, name: 'Tulip Bulb', price: 18, image: 'https://images.unsplash.com/photo-1573662420261-fb7fb6c3613b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 17, name: 'Sunflower', price: 22, image: 'https://images.unsplash.com/photo-1572569511145-b566767f0130?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 18, name: 'Lily', price: 30, image: 'https://images.unsplash.com/photo-1599577222275-a939b22bae55?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  ],
};

function ProductList({ dispatch, cartMap }) {
  return (
    <div className="product-page">
      <nav className="product-nav">
        <ul>
          <li><a href="#indoor">Indoor Plants</a></li>
          <li><a href="#outdoor">Outdoor Plants</a></li>
          <li><a href="#flowering">Flowering Plants</a></li>
        </ul>
        <div style={{ textAlign: 'right', marginTop: '10px' }}>
          <span>Cart: {useSelector ? '3' : '0'} items</span>
        </div>
      </nav>

      <section className="product-categories">
        {Object.entries(plantsByCategory).map(([category, plants]) => (
          <div key={category} className="category-section">
            <h3>{category.charAt(0).toUpperCase() + category.slice()} Plants</h3>
            <div className="product-grid">
              {plants.map((product) => {
                const quantity = cartMap ? (cartMap[product.id] || 0) : 0;
                const isAdded = quantity > 0;
                
                return (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p className="price">${product.price}</p>
                      <button
                        className="add-btn"
                        onClick={() => dispatch(addToCart({ id: product.id, name: product.name, price: product.price }))}
                        disabled={isAdded}
                      >
                        {isAdded ? 'Added' : 'Add to Cart'}
                      </button>
                      <span className="quantity-badge">×{quantity}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <CartSidebar />
    </div>
  );
}

export default ProductList;