import React, { useContext, useState } from 'react'
import { BiCart, BiUser, BiMenu } from 'react-icons/bi'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../ShopContext/ShopContext'

function Navbar() {
  const { quantety } = useContext(ShopContext)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="logo">
        <h2>Shop</h2>
      </div>

     

      {/* Menu Links */}
      <div className={`link ${menuOpen ? 'active' : ''}`}>
        <ul>
  <li>
    <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
  </li>
  <li>
    <Link to="/products" onClick={() => setMenuOpen(false)}>PRODUCTS</Link>

  </li>
  <li>
    <Link to="/Contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
  </li>
</ul>

      </div>

      {/* Icons */}
      <div className="nav_icon_wrapper">
        <Link to="/cart">
          <div className="nav_cart">
            <BiCart className="nav_icon" />
            <p className="cart_qty">{quantety}</p>
          </div>
        </Link>
        <BiUser className="nav_icon" />
        <BiMenu className="hamburger" onClick={() => setMenuOpen(!menuOpen)}/>
      </div>
    </div>
  )
}

export default Navbar
