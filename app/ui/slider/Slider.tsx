"use client";
import "./slider.scss";
import "./slick-theme.scss";
import Image from "next/image";

import React from "react";
import Slider from "react-slick";

export default function ProductSlider({img1, img2, img3,img4}:{img1:string, img2:string, img3:string, img4:string}) {
  const imageNames = [img1, img2, img3, img4];
  const settings = {
    customPaging: function (i: number) {
      return (
        <a key={i}>
          <Image
            src={`${imageNames[i]}`}
            alt={`Image of product ${i + 1}`}
            width={245.01}
            height={152.88}
          />
        </a>
      );
    },
    dots: true,
    infinite: true,
    speed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2300,
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <div className="container">
      <Slider {...settings}>
      {imageNames.map((imageName, i) => (
        <div key={i}>
          <Image
            src={`${imageName}`}
            alt={`Image of product ${i + 1}`}
            width={1040}
            height={600}
          />
        </div>
      ))}
      </Slider>
    </div>
  );
}
