import React from 'react'
import './Footer.css'
import GitHub from '../../assets/footer/github.png'
import Inst from '../../assets/footer/instagram.png'
import LD from '../../assets/footer/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr className="footer-divider-line" />

      <div className="footer-components">
        <div className="footer-links">
          <img src={GitHub} alt="Github img" />
          <img src={Inst} alt="Inst img" />
          <img src={LD} alt="Linkedin img" />
        </div>
        <div className="shop-logo">
          <img src={Logo} alt="Logo img" />
        </div>
      </div>
      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>
    </div>
  )
}

export default Footer