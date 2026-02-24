import React from 'react'

const SectionsTitle = ({subtitle, title}) => {
  return (
    <div className='py-2.5'>
      
      <h2 className='text-xl lg:text-2xl text-center text-[#000f38] mt-1 font-semibold mx-0 font-serif'>
        {title}
      </h2>
        <p className='text-center text-sm lg:text-base uppercase text-[#212ea0] font-semibold mx-0 mt-5 mb-6.25 font-serif'>
          {subtitle}
          </p>
    </div>
  )
}

export default SectionsTitle
