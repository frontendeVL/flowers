import React, {useState} from 'react'
import './Hero.css'
import Bouquet1 from '../../assets/mixbouquets/pinkP.png'  
import Bouquet2 from '../../assets/mixbouquets/photo_2025-06-01_17-05-06-removebg-preview.png'
import Bouquet3 from '../../assets/mixbouquets/photo_2025-06-01_17-07-04-removebg-preview.png'
import Bouquet4 from '../../assets/mixbouquets/photo_2025-06-01_17-07-02-removebg-preview.png'
import Bouquet5 from '../../assets/mixbouquets/tulips.png'
const Hero = () => {

  const bouquetImages = [
    Bouquet1,
    Bouquet2,
    Bouquet3,
    Bouquet4,
    Bouquet5,
  ];
  const [currentBouquetIndex, setCurrentBouquetIndex] = useState(0);

  const handleMixClick = () => {
    setCurrentBouquetIndex((prevIndex) => (prevIndex + 1) % bouquetImages.length);
  };



   return (
    <section className="page-background ">
      <div className="background-overlay"></div> 
      <div className="hero-content">
        <div className="text-content">
          <h1>Petalia</h1>
          <h2>-Where every petal tells a story.</h2>
          <button id="nextBouquetBtn" onClick={handleMixClick}>Mix</button>
        </div>
        <div className="bouquet-image-container">
          <img id="bouquetImage" className="imgPeonies-main" src={bouquetImages[currentBouquetIndex]} alt="Bouquet" />
        </div>
      </div>
    </section>
  )
}

export default Hero