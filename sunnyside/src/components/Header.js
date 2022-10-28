import React from 'react'
import arrow from "../assets/icon-arrow-down.svg"
import headerDesktop from "../assets/desktop/image-header.jpg"
import headerMobile from "../assets/mobile/image-header.jpg"

function Header() {
  return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <h1 className='text-white text-[40px] w-[320px] font-black uppercase text-center tracking-[6px] md:w-full md:text-[56px] md:-mt-36'>We are creatives</h1>
            <img src={arrow} alt="arrow" className='mt-10'/>
        </div>
  )
}

export default Header