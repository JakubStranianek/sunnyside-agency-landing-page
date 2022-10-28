import React from 'react'
const data = [
    {
        id: 1,
        desktopPhoto:"images/desktop/image-gallery-milkbottles.jpg", 
        mobilePhoto: "images/mobile/image-gallery-milkbottles.jpg"
    },
    {
        id: 2,
        desktopPhoto: "images/desktop/image-gallery-orange.jpg",
        mobilePhoto: "images/mobile/image-gallery-orange.jpg"
    },
    {
        id: 3,
        desktopPhoto: "images/desktop/image-gallery-cone.jpg",
        mobilePhoto: "images/mobile/image-gallery-cone.jpg"
    },
    {
        id: 4,
        desktopPhoto: "images/desktop/image-gallery-sugarcubes.jpg",
        mobilePhoto: "images/mobile/image-gallery-sugar-cubes.jpg"
    },
]

function Gallery(props) {
  return (
    <div className='pt-16 lg:flex'>
        <section className='w-full flex'>
            {data.filter(idPhoto => idPhoto.id <= 2).map(index => 
                    <div className='w-1/2'><img src={props.pWidth >= 1024 ? index.desktopPhoto :index.mobilePhoto} className="w-full" alt={index.mobilePhoto}/></div>    
                    )}
        </section>

        <section className='w-full flex'>
            {data.filter(idPhoto => idPhoto.id > 2).map(index => 
                    <div className='w-1/2'><img src={props.pWidth >= 1024 ? index.desktopPhoto :index.mobilePhoto} className="w-full" alt={index.mobilePhoto}/></div>    
                    )}
        </section>
    </div>
  )
}

export default Gallery