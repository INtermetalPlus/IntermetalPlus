"use client";
import "./slider.scss";
import "./slick-theme.scss";
import Image from "next/image";

import React from "react";
import Slider from "react-slick";

export default function ProductSlider() {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a key={i}>
          <Image
            src={`/product${i + 1}.png`}
            alt={"Image of product"}
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
        <Image
          src={"/product1.png"}
          alt="Image of product"
          width={1040}
          height={600}
        />

        <Image
          src={"/product2.png"}
          alt="Image of product"
          width={1040}
          height={600}
        />

        <Image
          src={"/product3.png"}
          alt="Image of product"
          width={1040}
          height={600}
        />

        <Image
          src={"/product4.png"}
          alt="Image of product"
          width={1040}
          height={600}
        />
      </Slider>
    </div>
  );
}
