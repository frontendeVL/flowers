import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SectionDivider  from './components/SectionDivider/SectionDivider'
import Popup  from './components/Popup/Popup'
import FlowerCards  from './components/FlowerCards/FlowerCards'
import Footer  from './components/Footer/Footer'
const App = () => {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 15000); 

    return () => clearTimeout(timer);
  }, []); 

  const handleClosePopup = () => {
    setShowPopup(false);
  };



  return (
    <div className='App'>
    <Header/>
    <Hero/>
    <SectionDivider/>
     {showPopup && <Popup onClose={handleClosePopup} />}
    <FlowerCards/>
    <Footer/>
    </div>
  )
}

export default App