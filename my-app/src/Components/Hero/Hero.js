import React from 'react'
import "./Hero.css"
import img from "../Image/hero-banner.jpg"

export default function Hero() {
  return (
    <div className='hero'>
    <img src= {img}alt="not found hero-banner" />
    <h3>MD JOBAYER HOSSAIN CHOWDHURY</h3>
    <p>AR/VR and Web Developer</p>
    </div>
  

  )
}
