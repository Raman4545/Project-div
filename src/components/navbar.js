import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';
import mainLogo from '../Images/background_images/kl-logo.png';

const Navbar = ({id}) => {
  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      setScrollBackground(scrollHeight > 120);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container ${scrollBackground ? 'scroll-background' : ''}`} id={id}>
      <div className='nav-list'>
        <div className='logo'>
          <img className="nav-list-logo-pic" src={mainLogo}></img>
        </div>
        <div className='options-list'>
          <ul>
            <li><Link  to="navbar-container" smooth={true} duration={800}>Home</Link></li> 
            <li><Link to="about-company" smooth={true} duration={800}>Our Company</Link></li>
            <li><Link to="services" smooth={true} duration={800}>Services</Link></li>
            
            <li><Link to="note-main-container" smooth={true} duration={1000}>Note</Link></li>
            <li><Link to="contacts" smooth={true} duration={800}>Contacts</Link></li>

            <li className='special-list-item'><NavLink className='NavLink' to="/contactform" >Get Connected..</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
