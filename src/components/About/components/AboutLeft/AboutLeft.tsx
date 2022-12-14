import React from 'react'
import ME from '@assets/RahulShial.png';
import './AboutLeft.css';

const AboutLeft = () => {
  const aboutMeTextL1 = `I am a Front-End Developer open to new opportunities. `
  const aboutMeTextL2 = `I am not only fond of the web development work that I do, but take great pride in it, as well and bring that same work ethic and drive to work.`
  
  return (
    <div className="about__me__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt='About Me' />
        </div>
      </div>
      <span className='about__me__text'>{aboutMeTextL1}{aboutMeTextL2}</span>
    </div>
  )
}

export default AboutLeft