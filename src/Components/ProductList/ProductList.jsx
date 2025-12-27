import React, { useContext, useState } from 'react'; // Added useState import
import { ShopContext } from '../../Components/ShopContext/ShopContext';
import './ProductList.css';
import { Link } from 'react-router-dom';

function ProductList() {
  const { products, addToCart } = useContext(ShopContext);
  const [visibleCount, setVisibleCount] = useState(20); // show 20 products initially

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 20); // show 20 more on each click
  };

  return (
    <div>
      <div className="product-list">
        <h2>Our Elegant Collection</h2>
        <div className="product-grid">
          {products.slice(0, visibleCount).map((product) => { // slice to visibleCount
            const { id, image, title, price } = product;

            return (
              <div className="product-card" key={id}>
                <Link to={`/product/${id}`}>
                  <img src={image} alt={title} className="product-img" />
                  <div className="product-info">
                    <h4>{title}</h4>
                    <p>${price}</p>
                  </div>
                </Link>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>

        {/* Show More button */}
        {visibleCount < products.length && (
          <div className="show-more">
            <button onClick={handleShowMore}>Show More</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
