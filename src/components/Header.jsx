import React, { useState } from 'react'
import logo from '../assets/liberty-logo.png'
import { FaAdjust, FaBaby, FaBars, FaTimes } from 'react-icons/fa'
import ParticlesBg from 'particles-bg'



const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const toggleMobileMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <header className='absolute left-0 right-0 py-5'>
      <nav className="w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
        
    <a href="#" className="text-indigo-600 z-100">
       <img src={logo} alt="" className='size-14 rounded-full'/>
    </a>

    <ul class="lg:flex hidden items-center gap-10">
        <li><a className="hover:text-gray-500/80 transition font-bold" href="#">Home</a></li>
        <li><a className="hover:text-gray-500/80 transition font-bold" href="#">Services</a></li>
        <li><a className="hover:text-gray-500/80 transition font-bold" href="#">About Us</a></li>
        <li><a className="hover:text-gray-500/80 transition font-bold" href="#">Our Works</a></li>
        <li><a className="hover:text-gray-500/80 transition font-bold" href="#">Contact Us</a></li>
    </ul>

    <button type="button" className=" text-gray-600 px-4 py-3 border border-gray-300 lg:inline hidden text-sm hover:bg-gray-50 transition-all rounded-full">
        Get started
    </button>

    <button className="lg:hidden text-3xl  text-gray-100 px-2 py-1 cursor-pointer z-100" onClick={toggleMobileMenu}>
          { openMenu ? <FaTimes /> : <FaBars />}
    </button>
</nav>
{
  openMenu && (
    <div className={`fixed top-0 left-0 w-full z-50  bg-purple-500 text-white h-screen text-base flex flex-col items-center justify-center gap-6 font-medium transition-all duration-300 ${openMenu ? "translate-x-0" : "-translate-x-full"}`}>
      <ParticlesBg type="circle" bg={true} />
      
                    <a href="#">Home</a>
                    <a href="#">Our Work</a>
                    <a href="#">Contact Us</a>
                    <a href="#">About Us</a>
                    <a href="#">Foooter</a>

                    <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                        Contact Us
                    </button>
                </div>
  )
}
    </header>
  )
}

export default Header
