import React from 'react'
import './FlowerCards.css'
import ProductCard from '../ProductCard/ProductCard'
import B1 from '../../assets/bouquets/B1.jpg'
import B2 from '../../assets/bouquets/B2.jpg'
import B3 from '../../assets/bouquets/B3.jpg'
import B4 from '../../assets/bouquets/B4.jpg'
import B5 from '../../assets/bouquets/B5.jpg'
import B6 from '../../assets/bouquets/B6.jpg'
import B7 from '../../assets/bouquets/B7.jpg'
import B8 from '../../assets/bouquets/B8.jpg'
import B9 from '../../assets/bouquets/B9.jpg'
import B10 from '../../assets/bouquets/B10.jpg'
import B11 from '../../assets/bouquets/B11.jpg'
import B12 from '../../assets/bouquets/B12.jpg'

const FlowerCards = () => {

  const bouquets = [
    { id: 1, name: "Petal Pop", price: 179, image: B1 },
    { id: 2, name: "French Kiss", price: 89, image: B2 },
    { id: 3, name: "Sunrise Glow", price: 289, image: B3 },
    { id: 4, name: "Modern Muse", price: 79, image: B4 },
    { id: 5, name: "Soft Embrace", price: 79, image: B5 },
    { id: 6, name: "Satin Bloom", price: 99, image: B6 },
    { id: 7, name: "Mist and Bloom", price: 85, image: B7 },
    { id: 8, name: "Morning Dew", price: 99, image: B8 },
    { id: 9, name: "Zen Petal", price: 89, image: B9 },
    { id: 10, name: "Aqua Blush", price: 129, image: B10 },
    { id: 11, name: "Plum Glow", price: 69, image: B11 },
    { id: 12, name: "Lush Spray", price: 119, image: B12 },
  ];


  return (
     <section className="flower-cards">
      <div className="grid-container">
        {bouquets.map((bouquet) => (
          <ProductCard
            key={bouquet.id}
            image={bouquet.image}
            name={bouquet.name}
            price={bouquet.price}
          />
        ))}
      </div>
    </section>
  )
}

export default FlowerCards