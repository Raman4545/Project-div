import React, { useEffect } from 'react';
import '../css/services.css';

const Services = ({ id }) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.service-box');
      elements.forEach((element) => {
        const boxTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxTop < windowHeight - 150 && boxTop > -element.clientHeight) {
          element.classList.add('animate');
        } else {
          element.classList.remove('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='main-services-container ' id={id}>
    <h1 className='service-main-header'>We Excel at...</h1>
      <div className='service-box'>
        <div className='background-image '>
        <div className='image-service image1'></div>
        <div className='content'>
          <h2 className='heading-serv'>Architectural Design:</h2>
          <p className='p-serv'>Our architectural design services encompass the creation and transformation of buildings, emphasizing innovation and functionality. From Residential spaces that reflect individual lifestyles to cutting-edge Commercial structures, Industrial facilities for seamless operations, and Hospitality environments that evoke unforgettable experiences. Our expertise extends to Institutional and Healthcare spaces, ensuring designs that elevate and endure.</p>
        </div>
        </div>
        
      </div>
      <div className='service-box'>
        <div className='background-image'>
        <div className='image-service image2'></div>
        <div className='content'>
          <h2 className='heading-serv'>Engineering Design:</h2>
          <p className='p-serv'>In the realm of Engineering Design, we specialize in crafting comprehensive solutions for civil, structural, mechanical, and electrical systems within buildings and structures. Our commitment lies in the seamless integration of diverse engineering disciplines to ensure projects are not only functional but also sustainable and resilient.</p>
        </div></div>
        
      </div>
      <div className='service-box'>
        <div className='background-image '>
        <div className='image-service image3'></div>
        <div className='content'>
        <h2 className='heading-serv'>Interior Design:</h2>
        <p className='p-serv'>Interior design is an art that transforms spaces into functional and visually captivating realms. We curate environments that harmonize color, furniture, decor, and layout to create living spaces that speak to both practicality and aesthetics. Every design tells a unique story, reflecting individual tastes and lifestyles.</p>
      </div></div>
       
      </div>
      <div className='service-box'>
        <div className='background-image '>
        <div className='image-service image4'></div>
        <div className='content'>
          <h2 className='heading-serv'>Landscape Design:</h2>
          <p className='p-serv'>Our Landscape Design services redefine outdoor spaces, incorporating artistry into planting, paving, and hardscaping. We craft environments that seamlessly integrate with architectural and natural elements, creating harmonious spaces that enchant and endure.</p>
        </div></div>
        
      </div>
      <div className='service-box'>
        <div className='background-image '>
        <div className='image-service image9'></div>
        <div className='content'>
        <h2 className='heading-serv'>Sustainable Design:</h2>
        <p className='p-serv'>Sustainable Design is at the core of our commitment to creating structures that stand as testaments to efficiency and environmental responsibility. Our designs not only minimize energy consumption but also prioritize eco-friendly materials and practices, ensuring a lasting impact on both the environment and society.</p>
      </div></div>
        
      </div>
      <div className='service-box'>
        <div className='background-image '>
        <div className='image-service image6'></div>
        <div className='content'>
          <h2 className='heading-serv'>Space Planning:</h2>
          <p className='p-serv'>Space Planning is an art that transforms interiors into functional and aesthetically pleasing environments. Our approach involves meticulous arrangement of furniture, equipment, and elements within a space, creating a seamless blend of form and function.</p>
        </div></div>
       
      </div>
      <div className='service-box'>
        <div className='background-image '>
        <div className='image-service image7'></div>
        <div className='content'>
        <h2 className='heading-serv'>Site Development:</h2>
        <p className='p-serv'>Our Site Development services focus on optimizing the potential of every location. From strategic planning to meticulous execution, we create environments that not only meet but exceed expectations.</p>
      </div></div>
       
      </div>
     
      {/* Repeat for the other 7 divs */}
      <div className='service-box'>
        <div className='background-image '>
        <div className='image-service image5'></div>
        <div className='content'>
          <h2 className='heading-serv'>Structure Strengthening and Restoration:</h2>
          <p className='p-serv'>Structural Strengthening and Restoration involve the precision enhancement and revival of damaged structures. Our expertise lies in improving load-carrying capacity and restoring structures to their original conditions.</p>
        </div></div>
        
      </div>
      <div className='service-box'>
        <div className='background-image '>
        <div className='image-service image10'></div>
        <div className='content'>
          <h2 className='heading-serv'>Heritage Conservation:</h2>
          <p className='p-serv'>Heritage Conservation is our dedication to preserving cultural and historical assets. From iconic buildings to landmarks, our approach involves a meticulous blend of modern practices and preservation ethics.</p>
        </div></div>
        
      </div>
      <div className='last-text'>
      <h4 className='last-text-h4'>...and the list goes on</h4>
      </div>
    </div>
  );
};

export default Services;
