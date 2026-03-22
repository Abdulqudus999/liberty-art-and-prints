import React from 'react'
import ParticlesBg from 'particles-bg'

const Hero = () => {
  return (
    <div className='top-0 left-0 right-0 h-screen relative -z-10'>
      <ParticlesBg type="circle" bg={true} />
      <div className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-center'>
        <h1 className='text-4xl lg:text-6xl font-black font-playfair mb-10 text-white uppercase animate-text-gradient' >Welcome to <span className='text-red-500/85'>
          liberty arts and prints
          </span></h1>
        <p className='text-white font-mono text-base lg:text-lg font-bold'>Liberty Art and Print is a creative powerhouse specializing in Signage, Branding, Cladding, and General Printing. We transform ideas into bold visual expressions that command attention and elevate brands.</p>
      </div>
    </div>
  )
}

export default Hero
