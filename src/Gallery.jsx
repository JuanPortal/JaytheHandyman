import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/test1.jpg'
import img2 from '../assets/test2.jpg'
import img3 from '../assets/test3.jpg'
import img4 from '../assets/test4.jpg'

export const Gallery = () => {
  return (
    <section className='gallery'>
      <Carousel infiniteLoop={true} autoPlay={true} className='carousel-component'>
          <div className='gallery-images'>
              <img src={img1} alt="" />
              {/* <p className="legend">Legend 1</p> */}
          </div>
          <div className='gallery-images'>
              <img src={img2} alt="" />
              {/* <p className="legend">Legend 2</p> */}
          </div>
          <div className='gallery-images'>
              <img src={img3} alt="" />
              {/* <p className="legend">Legend 3</p> */}
          </div>
      </Carousel>
    </section>
  )
}
