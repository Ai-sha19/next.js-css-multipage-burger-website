
import React from 'react'
import "../style/hero.css";
import Link from 'next/link';
import Image from 'next/image';


const Hero = () => {
    return (
        <main className='main'>
            {/* left */}
            <div className='left'>
                <h2 className='welcome'>Welcome to</h2>
                <h1 className='foodies'>Foodies Haven</h1>
                <h2 className='h2'>Home of Juicy Burgers</h2>
                <p className='para'>
                    At Burger Haven, we are passionate about serving the best, juiciest burgers around! Made with the freshest ingredients and crafted with love, our burgers offer an unforgettable taste experience. Come hungry and leave happy!
                </p>


                <div className='btn2Container'>
                    <Link href="../contact">
                        <button className="btn2">Order Now</button></Link>
                </div>
            </div>
            {/* Right */}
            <div className='right'>
                <div>
                    <Image src="/burger.png" alt="about" width={500} height={300} />

                </div>
            </div>
        </main>
    )
}

export default Hero
