import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

// Assets
import footer_logo from '../Assets/Logo.png'
import instagram_icon from '../Assets/instagram.png'
import whatsapp_icon from '../Assets/whatsapp.png'
import facebook_icon from '../Assets/facebook.png'
import linkedin_icon from '../Assets/linkedin.png'
import youtube_icon from '../Assets/youtube.png'
import pinterest_icon from '../Assets/pinterest.png'

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="footer-top">
        {/* Logo + About */}
        <div className="footer-section about">
          <div className="footer-logo">
            <img src={footer_logo} alt="SnapCart Logo" />
            <p className="brand-name">SnapCart</p>
          </div>
          <p className="footer-description">
            Your ultimate shopping destination for quality products at great prices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mens">Men's Fashion</Link></li>
            <li><Link to="/womens">Women's Fashion</Link></li>
            <li><Link to="/t-shirt">T-Shirts</Link></li>
            <li><Link to="/watch">Watches</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-section customer-service">
          <h4>Customer Service</h4>
          <ul>
            <li><Link to="/cart">Shopping Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
            <li><Link to="/login">My Account</Link></li>
            <li><a href="#size-guide">Size Guide</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>Contact Information</h4>
          <p>📞 +1 (555) 123-4567</p>
          <p>📧 support@snapcart.com</p>
          <p>📍 123 Commerce St, City, State 12345</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="footer-social">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon-container">
          <img src={instagram_icon} alt="Instagram" />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="footer-icon-container">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon-container">
          <img src={facebook_icon} alt="Facebook" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon-container">
          <img src={linkedin_icon} alt="LinkedIn" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-icon-container">
          <img src={youtube_icon} alt="YouTube" />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="footer-icon-container">
          <img src={pinterest_icon} alt="Pinterest" />
        </a>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 SnapCart. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
