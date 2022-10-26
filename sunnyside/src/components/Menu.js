import React, { useState } from 'react'
import Logo from "../assets/logo.svg"
import Hamburger from 'hamburger-react'

function Menu() {
    const [isOpen, setOpen] = useState(false)

  return (
    <div className='w-full bg-[#49BCF1] flex justify-center'>
        <nav className='w-11/12 flex justify-between items-center pt-8'>
            <img src={Logo} alt="logo" className='w-[123px] h-[24px]'/>
            <Hamburger color='white' toggled={isOpen} toggle={setOpen}/>
        </nav>
    </div>
  )
}

export default Menu