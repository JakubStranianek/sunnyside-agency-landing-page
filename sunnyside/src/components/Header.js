import React from 'react'
import arrow from "../assets/icon-arrow-down.svg"
import headerDesktop from "../assets/desktop/image-header.jpg"
import headerMobile from "../assets/mobile/image-header.jpg"

function Header() {
  return (
    <div className='relative'>
      <picture className='absolute -top-36 md:top-0 lg:-top-64'>
        <source srcSet={headerDesktop} media="(min-width: 768px)" />
       <img src={headerMobile} alt="" />
      </picture>
        
        <div className='w-full absolute top-[88px] flex flex-col items-center justify-center md:top-[108px]'>
            <h1 className='text-white text-[40px] w-[320px] font-black uppercase text-center tracking-[6px] md:w-full md:text-[56px]'>We are creatives</h1>
            <img src={arrow} alt="arrow" className='pt-12'/>
        </div>
  </div>
  )
}

export default Header