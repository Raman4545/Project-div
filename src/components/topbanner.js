import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/topbanner.css';
import Image1 from '../Images/background_images/Banner-pics/pic-1.jpg';
import Image2 from '../Images/background_images/Banner-pics/pic-2.jpg';
import Image3 from '../Images/background_images/Banner-pics/pic-3.jpg';
import Image4 from '../Images/background_images/Banner-pics/pic-4.jpg';
import Image5 from '../Images/background_images/Banner-pics/pic-5.jpg'

 class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
    };
    let pics = [
      {"name":"pic_1",
        "url": Image1
      },
      {"name":"pic_2",
        "url": Image2
      },
      {"name":"pic_3",
        "url": Image3
      },
      {"name":"pic_4",
        "url": Image4
      },
      {"name":"pic_5",
        "url": Image5
      },
      
    ]
    return (
      <div className="slider-banner-container">
      <Slider {...settings}>
      {pics.map((image, index) => (
        <div key={index} style={{width: '100%', height: '700px',border:"2px solid black"}}>
          <div
            style={{
              backgroundImage: `url(${image.url})`,
              width: '100%',
              height: '110vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat:"no-repeat",
              filter: 'brightness(70%)'
              
            }} />
        </div>
      ))}
    </Slider>
    <div className="tagline">
    <h1 className="tagline-h1">Where trends meet timelessness..</h1>
    </div>
          </div>
    );
  }
}
export default SimpleSlider;