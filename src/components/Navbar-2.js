import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import '../css/Navbar2.css';
import Logoimage from '../Images/background_images/kl-logo.png'

const Navbar2 = () => {
  return (
    <div className='navbar-container-pseudo '>
    <div className='nav-list-pseudo'>
      <div className='logo-pseudo'>
        <img className='Logo-image-2' src={Logoimage}></img>
      </div>
      <div className='options-list-pseudo'>
        <ul className='ul-pseudo'>
          <li className='li-pseudo'><NavLink className="NavLink" to="/home" smooth={true} duration={800}>Home</NavLink></li>
          <li className='li-pseudo' ><Link to="about-us" smooth={true} duration={800}>CEO</Link></li>
          <li className='li-pseudo'><Link to="about-company" smooth={true} duration={800}>Our Company</Link></li>
          <li className='li-pseudo'><Link to="services" smooth={true} duration={800}>Services</Link></li>
          <li className='li-pseudo'><Link to="contacts" smooth={true} duration={800}>Contacts</Link></li>
          <li className='special-list-item-pseudo'><NavLink  className='NavLink' to="/contactform" ><span className='pseudo-link-for-change'>get connected..</span></NavLink></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar2
