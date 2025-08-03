import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ onClose }) => {
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);
  const discountCode = "PETALIA15";

  const handleUnlockClick = () => {
    setShowDiscountPopup(true);
  };

  return (
    <div className="popup-overlay active">
      <div className="popup-content">
        <span className="close-popup-btn" onClick={onClose}>&times;</span>
        
        
        <div className="main-popup-content">
          <div className="popup-header">
            <h2>Step Into a World of Blooms</h2>
            <h3>A Whisper from Petalia Awaits You.</h3>
          </div>
          <p className="popup-text">
            Step into a world where every bloom holds a secret,
            and every arrangement tells an untold tale. As a special
            invitation, enjoy an exclusive <span className="discount">15% off</span> your first journey
            with us. Discover the artistry that transforms petals into poetry.
          </p>
          <button className="popup-btn" onClick={handleUnlockClick}>Unlock Your Secret</button>
          <p className="popup-footer">The Petalia Journey</p>
        </div>

        
        {showDiscountPopup && (
          <div className="discount-popup-overlay">
            <div className="discount-popup-content">
              <span className="discount-close-btn" onClick={() => setShowDiscountPopup(false)}>&times;</span>
              <p className="discount-text">Your discount:</p>
              <p className="discount-code">{discountCode}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;