import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        {/* Branding */}
        <div className="footer_brand">
          <h2>Shop</h2>
          <p>Your one-stop store for kids, mens & womens fashion.</p>
        </div>

        {/* Quick Links */}
        <div className="footer_links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer_social">
          <h4>Follow Us</h4>
          <div className="social_icons">
            <a href="#" target="_blank" rel="noreferrer"><FaFacebook className='icon-footer'/></a>
            <a href="#" target="_blank" rel="noreferrer"><FaInstagram className='icon-footer'/></a>
            <a href="#" target="_blank" rel="noreferrer"><BsTwitterX className='icon-footer'/></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer_bottom">
        <p>© 2025 <a href="https://mohamed-rafeek-portfolio.netlify.app/" target="_blank" rel="noreferrer">Mohamed Rafeek</a>. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
