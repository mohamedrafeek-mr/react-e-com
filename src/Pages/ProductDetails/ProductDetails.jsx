import React, { useContext } from 'react';
import './ProductDetails.css';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../../Components/ShopContext/ShopContext';

function ProductDetails() {
  const { products, addToCart } = useContext(ShopContext);
  const { id } = useParams(); 
  const numericId = parseInt(id, 10);

  // Find main product
  const product = products.find((p) => p.id === numericId);

  if (!product) {
    return <h2 style={{ padding: '80px', textAlign: 'center' }}>Product not found</h2>;
  }

  // Related products
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 7);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="product-details">

      {/* Product image */}
      <div className="details-left">
        <img src={product.image} alt={product.title} />
      </div>

      {/* Product info */}
      <div className="details-right">
        <h3>{product.title}</h3>
        <p className="product_price">${product.price}</p>
        <p className="desc">{product.description}</p>
        <button onClick={() => addToCart(product)}>ADD TO CART</button>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h4>Related {capitalize(product.category)} Products</h4>
          <div className="related-grid">
            {relatedProducts.map((item) => (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className="related-item"
              >
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <span>${item.price}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default ProductDetails;
