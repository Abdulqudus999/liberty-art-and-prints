import React from 'react'
import SectionsTitle from './SectionsTitle'

import huss from '../assets/hussrite.png'
import species from '../assets/spices.png'
import leadmall from '../assets/lead-mall.webp'
import theo from '../assets/hussrite.png'
import bolasat from '../assets/bolasat.png'
import citymart from '../assets/citymart.png'
import huss2 from '../assets/hussrite2.png'
import aosis from '../assets/aosis.png'
import oyee from '../assets/oyee.webp'
import dazzle from '../assets/dazzle.png'





const OurWorks = () => {


  const OurWorksData = [
    {
      img: huss,
      desc: 'Hussrite Supermarket'
    },
    {
      img: leadmall,
      desc: 'Lead Mall Supermarket'
    },
    {
      img: species,
      desc: 'Species Restaurant'
    },
    
    {
      img: theo,
      desc: 'Theo Wine'
    },
    {
      img: bolasat,
      desc: 'Bolasat Electronics'
    },
    {
      img: citymart,
      desc: 'CityMart Supermarket'
    },
    {
      img: huss2,
      desc: 'Hussrite Supermarket outdoor signage'
    },
    {
      img: oyee,
      desc: 'Oyee Gadget'
    },
    {
      img: aosis,
      desc: 'Oasis School'
    },
    {
      img: dazzle,
      desc: 'Dazzle outdoor Signage'
    },
  ]
  
  return (
    <section className='py-10  bg-purple-500/35' >
      <SectionsTitle title="Some of our works" subtitle="Browse through some of our works" />

      <div className="grid items-center justify-between container px-5 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {
            OurWorksData.map((ourwork, index)=> (
              
              <div key={index}>
                <div>
                <img src={ourwork.img} alt="" className='h-74 lg:h-82 rounded-xl object-cover' />
              </div>
              <p>
                  {ourwork.desc}
              </p>
              </div>
            ))
          }
      </div>

    </section>
  )
}

export default OurWorks
