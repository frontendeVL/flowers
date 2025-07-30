import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
     <header className="header">
      <div className="logo">
        <img src={Logo} alt="Flower Shop Logo" />
      </div>
      <nav>
        <ul className="header-nav-list">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Social Media</a></li>
          <li><a href="#">Contact Info</a></li>
          <li><a href="#">Language</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header