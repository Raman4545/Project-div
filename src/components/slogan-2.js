import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/slogan2.css';
import image1 from '../Images/background_images/subway.jfif';
import image2 from '../Images/pizza-bakers.png';
import image3 from '../Images/background_images/oberoi.png';
import image4 from '../Images/background_images/Itc-group.jfif';
import image5 from '../Images/background_images/fairmount.webp';
import image6 from '../Images/vardhman-group.jpg';

const Slogan2 = () => {
  const sliderSettings = {
    dots: false,
   
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
  };

  return (
    <div className='slogan2-container'>
      <h1>Our Partners in Progress..</h1>
      <div className='slogan2-sub-container'>
        <Slider {...sliderSettings}>
          <div className='div-of-logo'>
            <img className='image-logo' src={image1} alt='Company 1' />
          </div>
          <div className='div-of-logo'>
            <img className='image-logo' src={image2} alt='Company 2' />
          </div>
          {/* Add more divs for additional company images */}
          <div className='div-of-logo'>
          <img className='image-logo' src={image3} alt='Company 2' />
        </div>
        <div className='div-of-logo'>
        <img className='image-logo' src={image4} alt='Company 2' />
      </div>
      <div className='div-of-logo'>
        <img className='image-logo' src={image5} alt='Company 2' />
      </div>
      <div className='div-of-logo'>
        <img className='image-logo' src={image6} alt='Company 2' />
      </div>
        </Slider>
      </div>
      <h2 className='the-last-text'>...and our list goes on</h2>
    </div>
  );
};

export default Slogan2;
