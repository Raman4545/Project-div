// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import '../css/topbanner.css';


const Carousel = ({ slides  }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000, // Adjust the speed as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust the autoplay speed as needed
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="carousel-slide"
          style={{
            backgroundImage: slide.backgroundImage,
            backgroundColor: slide.backgroundColor,
          }}
        />
      ))}
    </Slider>
  );
};

export default Carousel;
