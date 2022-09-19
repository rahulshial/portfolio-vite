import React from 'react';
import './About.css';
import ME from '@assets/RahulShial.png';
import { GiFireworkRocket } from 'react-icons/gi';
import { MdOutlineManageAccounts, MdOutlineCarpenter } from 'react-icons/md'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Me' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiFireworkRocket className='card__icon'/>
              <h5>Software Developer</h5>
              <small>2+ Years and counting</small>
            </article>
            <article className='about__card'>
              <MdOutlineManageAccounts className='card__icon'/>
              <h5>Project Management</h5>
              <small>15+ Years</small>
            </article>
            <article className='about__card'>
              <MdOutlineCarpenter className='card__icon'/>
              <h5>Avid Wood worker</h5>
              <small>3 projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident atque fugit ipsum officiis vel aperiam vitae ducimus enim veritatis, sequi repellendus ipsam cumque. Quam consequatur perferendis facere vero est!
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section >
  );
};

export default About;