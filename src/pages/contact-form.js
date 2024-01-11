import React, { useState } from 'react';
import Navbar2 from '../components/Navbar-2';
import '../css/contact-form.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import logoimage from '../Images/background_images/yahi-daalo.jpg'

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zr3wi64', 'template_cn4ie01', form.current, 'GlEnvBPn9HHPUh7Hl')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <Navbar2 />
      <div className='form-container'>
        <div className='form-main-container'>
          <div className='left-form'>
          <img className='logo-image-form' src={logoimage}></img></div>
          <div className='right-form'>
            <div className='form-header'>
              <h2>Get  Consultation</h2>
              
            </div>
            <div className='form-input-container'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='form-group'>
                 
                  <input type='text' id='name' name='user_name' placeholder='Name'  required />
                </div>

                <div className='form-group'>
                  
                  <input type='email' id='email' name='user_email' placeholder='Email'  required />
                </div>

                <div className='form-group'>
                 
                  <input type='text' id='businessName' name='user_business' placeholder='Business Name'  />
                </div>

                <div className='form-group'>
                  
                  <input type='tel' id='phone' name='user_number' placeholder='Phone Number'   />
                </div>

                <div className='form-group'>
                 
                  <textarea  name='message'  rows='4' placeholder='Message' ></textarea>
                </div>

                <div className='form-group'>
                  <button type='submit' className='submit-contact-form-btn' value='send'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
