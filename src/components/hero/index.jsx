import React from 'react'
import heroImg from '../../assets/hero-img.png'
import './hero.css'
export default function Hero() {
  return (
    <div className="hero">
        <div className="hero-texts">
        <h2 className='hero-title'>
        Build your own wall of sound.
        </h2>
        <p className='hero-description'>Winners aren’t made overnight. Over 50 years of sound and design expertise has been distilled into each and every Marshall speaker, bringing that big stage presence home for your listening enjoyment.</p>
        <button className='hero-button'>
        View All Products
        </button>
        </div>
        <div className="hero-img">
            <img src={heroImg} height='650' alt="Hero img" />
        </div>
    </div>
  )
}
