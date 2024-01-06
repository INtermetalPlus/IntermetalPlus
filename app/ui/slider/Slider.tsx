'use client'
import './slider.scss'
import "./slick-theme.scss";
import Image from 'next/image';

import React from "react";
import Slider from "react-slick";

export default function ProductSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1100,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        adaptiveHeight:true,
        autoplay:true,
        autoplaySpeed:2300,
      };
      
  return (
    <div className='container'>
    <Slider {...settings}>
        <Image
            src={'/product1.png'}
            alt='Image of product' 
            width={300}
            height={320}/>
  
      <Image 
      src={'/product2.png'}
      alt='Image of product'
      width={300}
      height={320} />
    
      <Image src={'/product3.png'}
            alt='Image of product'
            width={300}
            height={320} />
    </Slider>
  </div>
  )
}

