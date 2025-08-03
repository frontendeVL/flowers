import React from 'react'
import './ProductCard.css'
const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <img className="product-card-img" src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p className="priceB">Price: ${price}</p>
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard