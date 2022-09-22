import React from 'react';
import './AboutExperience.css';
import { EXPERIENCE } from './constants';

const AboutExperience = () => {

  const experienceBar = () => {
    return EXPERIENCE.map((item) => {
      return (
        <div key={item.label}className="inner__bar">
          <div className="bar__fill" style={{width: item.value + '%'}}>
            <div className="item__label">
              {item.label}
            </div>
          </div>
        </div>
      )
    })
  }
    
  return (
    <>
      <div className="bar__container">
        {experienceBar()}
      </div>
    </>
    )
}

export default AboutExperience