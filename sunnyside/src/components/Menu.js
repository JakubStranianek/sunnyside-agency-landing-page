import React, { useState} from 'react'
import Logo from "../assets/logo.svg"
import Hamburger from 'hamburger-react'

function Menu(props) {
    const [isOpen, setOpen] = useState(false)
    
    const handleToggle = () => {
      if (props.pWidth > 768) {
        setOpen(false);
      }
    }

    window.addEventListener('resize', () => props.sWidth(window.innerWidth))
    window.addEventListener('resize', handleToggle)

  return (
    <div className='w-10/12 mr-auto ml-auto pt-8 relative'>
        <nav className='w-full flex justify-between items-center'>
            <img src={Logo} alt="logo" className='w-[123px] h-[24px]'/>
            
            <ul className={props.pWidth > 768 ? 'flex w-[400px] justify-between items-center text-white text-base' : "hidden"}>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li className='text-black pt-4 pb-[15px] pl-8 pr-8 bg-white rounded-3xl uppercase font-bold hover:text-white hover:bg-white hover:bg-opacity-30'>Contact</li>            
            </ul>
            <div className={props.pWidth < 768 ? "block" : "hidden"}>
              <Hamburger color='white' toggled={isOpen} toggle={setOpen}/>           
            </div>           
        </nav>

         {/** POPUP */}
         <div className={isOpen ? "block relative" : "hidden"}>
            <div className='absolute top-0 w-full flex flex-col items-end'>
              <div class="w-11 overflow-hidden inline-block">
                <div class=" h-16  bg-white rotate-45 transform origin-bottom-left"></div>
              </div>
                
                    <div className=' bg-white w-full'>
                    <ul className='h-[402px] flex flex-col items-center justify-center text-[#808397] text-xl'>
                    <li>About</li>
                    <li className='mt-6 mb-6'>Services</li>
                    <li className='mb-6'>Projects</li>
                    <li className='text-black pt-4 pb-[15px] pl-8 pr-8 bg-[#FBD600] rounded-3xl uppercase font-bold'>Contact</li>            
                  </ul>
                  </div>
                </div>
            </div>
    </div>
  )
}

export default Menu