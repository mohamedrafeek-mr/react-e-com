import React, { useContext, useState } from 'react';
import { ShopContext } from '../Components/ShopContext/ShopContext';
import { Link } from 'react-router-dom';
import './product.css';

function Products() {
  const { products } = useContext(ShopContext);
  const [category, setCategory] = useState('all'); // default: show all

  // Filter products based on selected category
  const filteredProducts =
    category === 'all'
      ? products
      : products.filter((item) => item.category === category);

  return (
    <div className="products-page">
      <h2>All Products</h2>

      {/* Category filter buttons */}
      <div className="category-filters">
        <button
          className={category === 'all' ? 'active' : ''}
          onClick={() => setCategory('all')}
        >
          All
        </button>
        <button
          className={category === 'kids' ? 'active' : ''}
          onClick={() => setCategory('kids')}
        >
          Kids
        </button>
        <button
          className={category === 'mens' ? 'active' : ''}
          onClick={() => setCategory('mens')}
        >
          Mens
        </button>
        <button
          className={category === 'womens' ? 'active' : ''}
          onClick={() => setCategory('womens')}
        >
          Womens
        </button>
      </div>

      <div className="product-grid">
        {filteredProducts.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="product-card"
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
