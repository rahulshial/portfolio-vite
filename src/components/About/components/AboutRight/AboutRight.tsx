import React from 'react'
import './AboutRight.css';
import AboutCards from './components/AboutCards/AboutCards';
import AboutExperience from './components/AboutExperience/AboutExperience';

const AboutRight = () => {
  return (
    <div className="about__content">
      <AboutCards />
      <AboutExperience />
    </div>
  )
}

export default AboutRight