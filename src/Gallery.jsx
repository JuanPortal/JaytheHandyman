import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/test1.jpg'
import img2 from '../assets/test2.jpg'
import img3 from '../assets/test3.jpg'

export const Gallery = () => {
  return (
    <section className='gallery'>
      <div className="section-container">
        <Carousel infiniteLoop={true} autoPlay={true} className='carousel-component'>
          <div className='gallery-images'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jay-the-handyman.appspot.com/o/test1.webp?alt=media&token=1baeaba3-82e0-429c-a318-dfb655ddffaa" alt="" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div className='gallery-images'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jay-the-handyman.appspot.com/o/test2.webp?alt=media&token=9b5e6615-d83a-4d43-aed3-33f2220f773d" alt="" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div className='gallery-images'>
            <img src="https://firebasestorage.googleapis.com/v0/b/jay-the-handyman.appspot.com/o/test3.webp?alt=media&token=18d9779c-8bd6-4ecd-a8bb-66b98f32e075" alt="" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </div>
    </section>
  )
}
