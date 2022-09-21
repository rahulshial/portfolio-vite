import React from 'react';
import './About.css';

import AboutLeft from './components/AboutLeft/AboutLeft';
import AboutRight from './components/AboutRight/AboutRight';

const About = () => {
  return (
    <section id='about'>
      <h2 className='section_title'>About</h2>
      <div className="container about__container">
        <AboutLeft />
        <AboutRight />
      </div>
      <div className="btn__container">
        {/* <a href='#contact' className='btn btn-primary'>Let's Talk</a> */}
      </div>
    </section >
  );
};

export default About;