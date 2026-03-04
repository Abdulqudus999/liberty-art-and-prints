import React from 'react'
import SectionsTitle from './SectionsTitle'
import signage from '../assets/signage.jpg'
import cladding from '../assets/cladding.jpg'
import branding from '../assets/brandimg.jpg'
import generalPrinting from '../assets/general-printing.jpg'
import gPrinting from '../assets/g-printing.jpg'


const servicesData = [
  {
    idx: 0,
    image1: signage,
    text1: 'Signage'
  },
  {
    idx: 1,
    image1: cladding,
    text1: 'Cladding'
  },
  {
    idx: 2,
    image1: branding,
    text1: 'Branding'
  },
  {
    idx: 3,
    image1: generalPrinting,
    text1: 'General Printing'
  },
  {
    idx: 4,
    image1: gPrinting,
    text1: 'Clothing Customization'
  },
  {
    idx: 5,
    image1: signage,
    text1: 'Signage'
  },
  {
    idx: 6,
    image1: cladding,
    text1: 'Cladding'
  },
  {
    idx: 7,
    image1: branding,
    text1: 'Branding'
  },
  {
    idx: 8,
    image1: generalPrinting,
    text1: 'General Printing'
  },
  {
    idx: 9,
    image1: gPrinting,
    text1: 'Clothing Customization'
  },
  {
    idx: 0,
    image1: signage,
    text1: 'Outdoor Signage'
  },
  {
    idx: 1,
    image1: cladding,
    text1: 'Outdoor Cladding'
  },
  {
    idx: 2,
    image1: branding,
    text1: 'Outdoor signage'
  },
  {
    idx: 3,
    image1: generalPrinting,
    text1: 'General Printing'
  },
  {
    idx: 4,
    image1: gPrinting,
    text1: 'Clothing Customization'
  },
  
]

const Services = () => {
  return (
    <section className='static'>
      <SectionsTitle title="Our Services" subtitle="We offer expertise in these range of services" />

      <div className='overflow-hidden whitespace-nowrap my-10 relative'>
        <div className='animate-marquee flex w-max gap-8'>
          {
            servicesData.map((item, idx) => (
              <div key={idx} className='px-5 py-3 flex flex-col gap-1.5'>
                <div >
                  <img src={item.image1} alt="" className='h-64 lg:h-72 rounded-xl' />
                </div>
                <p className='text-base lg:text-lg text-center font-bold text-blue-600'>{item.text1}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services
