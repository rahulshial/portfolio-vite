import React from 'react'
import './AboutRight.css';
import AboutCards from './components/AboutCards/AboutCards';

const AboutRight = () => {
  return (
    <div className="about__content">
      <AboutCards />
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default AboutRight