import React from 'react'
import SectionsTitle from './SectionsTitle'


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import gridImage1 from '../assets/about-img1.png'
import gridImage2 from '../assets/about-img2.png'
import gridImage3 from '../assets/about-img3.png'
import gridImage4 from '../assets/about-img4.png'
import gridImage5 from '../assets/about-img7.webp'
import gridImage6 from '../assets/about-img5.png'
import gridImage7 from '../assets/about-img6.png'


import { EffectCube, Pagination , Autoplay } from 'swiper/modules';

const AboutUs = () => {
  return (
    <section className='py-10  bg-purple-500/50'>
      <SectionsTitle title="About Us" subtitle="Know More About Us" />
      <div className='flex flex-col lg:flex-row items-center justify-between px-4 gap-5 overflow-hidden container mx-auto'>
        <div className=''>
          <p className='text-lg lg:text-xl'>
            Liberty Art and Print is a creative powerhouse specializing in Signage, Branding, Cladding, and General Printing. We transform ideas into bold visual expressions that command attention and elevate brands. From striking outdoor signs to premium print materials and stylish wall claddings, we deliver quality, precision, and style that speak louder than words. At Liberty Art and Print, your brand's image is our canvas — and excellence is our signature.
          </p>
        </div>
        <div>
          <Swiper
          loop={true}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        autoplay={
        {
          delay: 1500,
        }
      }
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={gridImage1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gridImage2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gridImage3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gridImage4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gridImage5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gridImage6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gridImage7} />
        </SwiperSlide>
      </Swiper>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
