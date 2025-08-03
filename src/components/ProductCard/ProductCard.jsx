import React from 'react'
import './ProductCard.css'
import { motion } from 'framer-motion'
const ProductCard = ({ image, name, price }) => {
  return (
  <motion.div className='product-card'
  initial={{opacity: 0}}
  whileInView={{opacity: 1}}
  transition={{duration: 1}}
  
  >
      <img className="product-card-img" src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p className="priceB">Price: ${price}</p>
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </motion.div>
  )
}

export default ProductCard