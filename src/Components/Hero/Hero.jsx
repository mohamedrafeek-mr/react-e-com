import React from 'react'
import hero_img from '../../assets/cloth13.jpg'
import './Hero.css'
import { useNavigate } from 'react-router-dom'

function Hero() {
    const navigate = useNavigate()
  return (
    <div>
    <div className="hero">
        <div className="hero_left">
            <h2>Unleash Premium Clothing Quality</h2>
            <p> corporate, kids casual, and men’s wear crafted with high-quality fabrics for superior comfort and durability. Our designs combine modern style and performance to keep you confident every day.</p>
            <button onClick={() => navigate('/products')}>
            Shop Our Collection
          </button>
        </div>
        <div className="hero_right">
            <img src={hero_img} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Hero
