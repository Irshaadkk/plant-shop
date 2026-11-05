import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const products = [
  { id: 1, name: 'Monstera Deliciosa', price: 45, category: 'indoor', image: '🌿' },
  { id: 2, name: 'Snake Plant', price: 30, category: 'indoor', image: '🪴' },
  { id: 3, name: 'Pothos Plant', price: 25, category: 'indoor', image: '🍃' },
  { id: 4, name: 'Fiddle Leaf Fig', price: 80, category: 'indoor', image: '🎻' },
  { id: 5, name: 'Spider Plant', price: 20, category: 'indoor', image: '🕷️' },
  { id: 6, name: 'Areca Palm', price: 65, category: 'outdoor', image: '🌴' },
  { id: 7, name: 'Rubber Plant', price: 55, category: 'indoor', image: '🌳' },
  { id: 8, name: 'Peace Lily', price: 35, category: 'indoor', image: '🌸' },
];

function ProductList({ dispatch }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <span className="product-image">{product.image}</span>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button
            onClick={() => dispatch(addToCart({ id: product.id, name: product.name, price: product.price }))}
            className="add-to-cart"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;