import React from 'react';
import './Portfolio.css';
import { PORTFOLIO, PortfolioInterface } from './constants';

const Portfolio = () => {

  const portfolioCard = ({id, name, github, img, title, website}: PortfolioInterface) => {
    return (
      <article key={id} className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={img} alt=""></img>
        </div>
        <div>
          <h5>{title}</h5>
          <div className="portfolio__item-cta">
            {website ? <a href={website} className='btn btn-primary' target='_blank'>{name}</a> : <></>}
            {github ? <a href={github} className='btn' target="_blank">GitHub</a> : <></>}
          </div>
        </div>
      </article>
    )
  }

  return (
    <div id='portfolio'>
      <h2 className='section_title'>Portfolio</h2>
      <div className="container portfolio__container">
        {PORTFOLIO.map((project) => {
          return portfolioCard(project)
        })}
      </div>
    </div>
  );
};

export default Portfolio;