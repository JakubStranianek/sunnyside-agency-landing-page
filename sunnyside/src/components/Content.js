import React from 'react'
import egg from "../Assets/desktop/image-transform.jpg"
import glass from "../Assets/desktop/image-stand-out.jpg"
import cherry from "../Assets/desktop/image-graphic-design.jpg"
import mobileCherry from "../Assets/mobile/image-graphic-design.jpg"
import orange from "../Assets/desktop/image-photography.jpg"
import mobileOrange from "../Assets/mobile/image-photography.jpg"

function Content(props) {
  return (
    <div>
        <div className='flex flex-col-reverse lg:flex-row'>
            <div className='w-full lg:w-1/2 flex items-center justify-center'>
                <div className='w-10/12 flex flex-col items-center lg:items-start justify-center lg:w-[445px]'>
                    <h1 className='pt-16 text-center text-[32px] text-[#24303E] font-black lg:text-left lg:text-[40px]'>Transform your brand</h1>
                    <p className='text-[#808397] text-base font-semibold text-center lg:text-left lg:font-black leading-8 pt-2'>We are a full-service creative agency specializing in 
                    helping brands grow fast. Engage your clients through
                    compelling visuals that do most of the marketing for you.</p>
                    <div className='pt-8 group'>
                        <a href='www.google.com' className='text-[#24303E] font-black text-[15px]'>LEARN MORE</a>
                        <div className='bg-[#FAD400] group-hover:bg-[#FE7766] rounded-3xl w-[120px] h-3 -mt-[10px] -ml-[6px]'></div>
                    </div>
                </div>
            </div>

            <div className='w-full lg:w-1/2'>
                <img src={egg} className="w-full" alt="egg"/>
            </div>
        </div>

        <div className='pt-12 flex flex-col lg:flex-row lg:pt-0'>
            <div className='w-full lg:w-1/2'>
                <img src={glass} className="w-full" alt="egg"/>
            </div>

            <div className='w-full lg:w-1/2 flex items-center justify-center'>
                <div className='w-10/12 flex flex-col items-center lg:items-start justify-center lg:w-[445px]'>
                    <h1 className='pt-16 text-center text-[32px] text-[#24303E] font-black lg:text-left lg:text-[40px]'>Transform your brand</h1>
                    <p className='text-[#808397] text-base font-semibold text-center lg:text-left lg:font-black leading-8 pt-2'>
                    Using a collaborative formula of designers, researchers,
photographers, videographers, and copywriters, we???ll
build and extend your brand in digital places.
                    </p>
                    <div className='pt-8 group'>
                        <a href='www.google.com' className='text-[#24303E] font-black text-[15px]'>LEARN MORE</a>
                        <div className='bg-[#FAD400] group-hover:bg-[#FE7766] rounded-3xl w-[120px] h-3 -mt-[10px] -ml-[6px]'></div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col pt-12 lg:flex-row lg:pt-0'>
            <div className='w-full lg:w-1/2 relative'>
                <img src={props.pWidth < 768 ? mobileCherry : cherry} className="w-full" alt="egg"/>
                <div className='absolute m-auto left-0 right-0 bottom-14 flex flex-col items-center'>
                    <h1 className='text-[#24554A] font-black text-[28px]'>Graphic Design</h1>
                    <p className='text-center text-[#3E7467] font-semibold text-base leading-7 pt-4'>Great design makes you memorable. We deliver <br/>
                        artwork that underscores your brand message<br/>
                         and captures potential clients??? attention.</p>
                </div>
            </div>

            <div className='w-full lg:w-1/2 relative'>
                <img src={props.pWidth < 768 ? mobileOrange : orange} className="w-full" alt="egg"/>

                <div className='absolute m-auto left-0 right-0 bottom-14 flex flex-col items-center'>
                    <h1 className='text-[#052C3B] font-black text-[28px]'>Photography</h1>
                    <p className='text-center text-[#19536C] font-semibold text-base leading-7 pt-4'>Increase your credibility by getting the most <br/>
                    stunning, high-quality photos that improve your <br/>
                    business image.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content