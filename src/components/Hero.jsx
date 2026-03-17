import React from 'react'
import ParticlesBg from 'particles-bg'

const Hero = () => {
  return (
    <div className='top-0 left-0 right-0 h-screen relative'>
      <ParticlesBg type="circle" bg={true} />
      <div className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-center'>
        <h1 className='text-4xl lg:text-6xl font-black font-playfair mb-10 text-white uppercase animate-text-gradient' >Welcome to liberty arts and prints</h1>
        <p className='text-amber-800 font-mono text-base lg:text-lg font-bold'>Liberty Art and Print is a creative powerhouse specializing in Signage, Branding, Cladding, and General Printing. We transform ideas into bold visual expressions that command attention and elevate brands.</p>
      </div>
    </div>
  )
}

export default Hero
