import React from 'react';
import '../css/note.css';
import Imageceo from '../Images/background_images/profile-3.jpeg'

const Note = ({id}) => {
  return (
    <div className='note-main-container' id={id}>
    <h1 className='header-note'>Note from CEO...</h1>
    <div className='content-cont-note'>
    <div className='div-1-note'>
    <img className='ceo-profile-pic' src={Imageceo}></img></div>
    <div className='div-2-note'>
    <h3 className='hello'>Hello !!</h3>
    <p>Since our inception in 1997, our architectural and engineering firm has been guided by a visionary commitment to crafting spaces that seamlessly blend aesthetics with functionality. We are fueled by a passion for embracing cultural richness and contemporary trends, ensuring originality and innovation in every project.

    </p>
    <p>
    Since our inception in 1997, our architectural and engineering firm has been guided by a visionary commitment to crafting spaces that seamlessly blend aesthetics with functionality. We are fueled by a passion for embracing cultural richness and contemporary trends, ensuring originality and innovation in every project.
    <br></br>Thank you for being part of our journey. Together, let's continue shaping spaces that leave a lasting impact.
</p>
    <h6></h6>

    
    </div>
    </div>
      
    </div>
  )
}

export default Note
