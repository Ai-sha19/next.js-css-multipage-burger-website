import Link from 'next/link'
import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import "../../style/about.css";
import Image from 'next/image';

const About = () => {
  return (
    <main className='main'>
      {/* Left */}
      <div className='left'>
        <Image className='image' src="/about.jpg" alt='about' width={550} height={300} />
      </div>
      {/* Right */}
      <div className='right'>
        <div className="heading-container">
          <h4 className="h4">Welcome to Foodies Haven</h4>
          <h1 className="h1">About Us</h1>
        </div>

        <p className="para">
          At Foodies Haven, we are passionate about creating mouth-watering burgers that food lovers crave. With a commitment to quality ingredients and bold flavors, we aim to deliver a memorable dining experience. From our signature juicy burgers to freshly prepared sides, every item on our menu is crafted to satisfy and delight.
        </p>

        <div>
          <button className="btn">
            <Link className="link" href="/contact">
              Get in Touch
            </Link>
            <span><FaRegArrowAltCircleRight className='contactIcon' /></span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default About 
