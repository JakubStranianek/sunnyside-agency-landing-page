import React, { useState, useEffect } from 'react'
import Logo from "../assets/logo.svg"
import Hamburger from 'hamburger-react'

function Menu() {
    const [isOpen, setOpen] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);
    const handleToggle = () => {
      if (width > 768) {
        setOpen(false);
      }
    }

    window.addEventListener('resize', () => setWidth(window.innerWidth))
    window.addEventListener('resize', handleToggle)

  return (
    <div className='w-full bg-blueOrangeMobile flex justify-center relative z-10'>
        <nav className='w-11/12 flex justify-between items-center pt-8'>
            <img src={Logo} alt="logo" className='w-[123px] h-[24px]'/>
            
            <ul className={width > 768 ? 'flex w-[400px] justify-between items-center text-white text-base' : "hidden"}>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li className='text-black pt-4 pb-[15px] pl-8 pr-8 bg-white rounded-3xl uppercase font-bold'>Contact</li>            
            </ul>
            <div className={width < 768 ? "block" : "hidden"}>
              <Hamburger color='white' toggled={isOpen} toggle={setOpen}/>           
            </div>
        </nav>
    </div>
  )
}

export default Menu