import React, { useState } from 'react';
import './Hero.css';
import Bouquet1 from '../../assets/mixbouquets/pinkP.png';
import Bouquet2 from '../../assets/mixbouquets/photo_2025-06-01_17-05-06-removebg-preview.png';
import Bouquet3 from '../../assets/mixbouquets/photo_2025-06-01_17-07-04-removebg-preview.png';
import Bouquet4 from '../../assets/mixbouquets/photo_2025-06-01_17-07-02-removebg-preview.png';
import Bouquet5 from '../../assets/mixbouquets/tulips.png';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const transition = { type: 'tween', duration: 1.5 };
  const [currentBouquetIndex, setCurrentBouquetIndex] = useState(0);

  const handleMixClick = () => {
    setCurrentBouquetIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  return (
    <section className="page-background">
      <div className='blur blur-h1'></div>
      <div className='blur blur-h2'></div>
      <div className='blur blur-h3'></div>
      <div className='blur blur-h4'></div>
      <div className="hero-content">
        <div className="text-content">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            Petalia
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ transition, duration: 2 }}
          >
            -Where every petal tells a story.
          </motion.h2>
          <motion.button
            id="nextBouquetBtn"
            onClick={handleMixClick}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ transition, duration: 2.2 }}
          >
            Mix
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {currentBouquetIndex === 0 && (
            <motion.div
              key="bouquet1"
              className="bouquet-image-container"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{transition,duration: 2}}
            >
              <img className="imgPeonies-main" src={Bouquet1} alt="Bouquet 1" />
            </motion.div>
          )}

          {currentBouquetIndex === 1 && (
            <motion.div
              key="bouquet2"
              className="bouquet-image-container"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{transition,duration: 1}}
            >
              <img className="imgPeonies-main" src={Bouquet2} alt="Bouquet 2" />
            </motion.div>
          )}

          {currentBouquetIndex === 2 && (
            <motion.div
              key="bouquet3"
              className="bouquet-image-container"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{transition,duration: 1}}
            >
              <img className="imgPeonies-main" src={Bouquet3} alt="Bouquet 3" />
            </motion.div>
          )}

          {currentBouquetIndex === 3 && (
            <motion.div
              key="bouquet4"
              className="bouquet-image-container"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{transition,duration: 1}}
            >
              <img className="imgPeonies-main" src={Bouquet4} alt="Bouquet 4" />
            </motion.div>
          )}

          {currentBouquetIndex === 4 && (
            <motion.div
              key="bouquet5"
              className="bouquet-image-container"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{transition,duration: 1}}
            >
              <img className="imgPeonies-main" src={Bouquet5} alt="Bouquet 5" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;