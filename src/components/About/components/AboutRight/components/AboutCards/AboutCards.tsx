import React from 'react';
import './AboutCards.css';
import { GiFireworkRocket } from 'react-icons/gi';
import { MdOutlineManageAccounts, MdOutlineCarpenter } from 'react-icons/md';

const AboutCards = () => {
  return (
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
  )
}

export default AboutCards