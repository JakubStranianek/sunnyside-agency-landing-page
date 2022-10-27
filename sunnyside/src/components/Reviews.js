import React from 'react'

function Reviews() {
    const data = [
        {
            photo: "images/image-emily.jpg",
            reviewText: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
            name: "Emily R.",
            position: "Marketing Director"
        },
        {
            photo: "images/image-thomas.jpg",
            reviewText: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
            name: "Thomas S.",
            position: "Chief Operating Officer"
        },
        {
            photo: "images/image-jennie.jpg",
            reviewText: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
            name: "Jennie F.",
            position: "Business Owner"
        },
    ]
  return (
    <div className='w-10/12 mr-auto ml-auto'>
        <h1 className='text-[#A7AAAD] text-base font-black pt-16 text-center'>CLIENT TESTIMONIALS</h1>

    <div className='lg:flex lg:justify-between'>
        {data.map(index => 
           <div className='flex flex-col items-center pt-16 lg:pl-3 lg:pr-3'>
                <img src={index.photo} alt={index.photo} className="rounded-full w-[72px]"/>
                <p className='text-center text-[#5B636D] text-base font-semibold leading-8 pt-8'>{index.reviewText}</p>
                <h1 className='pt-8 text-[18px] text-[#24303E] font-black'>{index.name}</h1>
                <p className='pt-2 text-[#A7AAAD]'>{index.position}</p>
           </div>    
        )}
    </div>
    </div>
  )
}

export default Reviews